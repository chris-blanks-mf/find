package com.autonomy.abc.find;

import com.autonomy.abc.config.FindTestBase;
import com.autonomy.abc.config.TestConfig;
import com.autonomy.abc.framework.KnownBug;
import com.autonomy.abc.framework.RelatedTo;
import com.autonomy.abc.selenium.control.Window;
import com.autonomy.abc.selenium.element.DocumentViewer;
import com.autonomy.abc.selenium.find.FindResultsPage;
import com.autonomy.abc.selenium.find.FindSearchResult;
import com.autonomy.abc.selenium.find.FindService;
import com.autonomy.abc.selenium.find.SimilarDocumentsView;
import com.autonomy.abc.selenium.hsod.HSODApplication;
import com.autonomy.abc.selenium.promotions.HSODPromotionService;
import com.autonomy.abc.selenium.promotions.Promotion;
import com.autonomy.abc.selenium.promotions.SpotlightPromotion;
import com.autonomy.abc.selenium.search.IndexFilter;
import com.autonomy.abc.selenium.search.ParametricFilter;
import com.autonomy.abc.selenium.search.SearchQuery;
import com.autonomy.abc.selenium.util.PageUtil;
import com.autonomy.abc.selenium.util.Waits;
import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import static com.autonomy.abc.framework.ABCAssert.verifyThat;
import static com.autonomy.abc.matchers.ElementMatchers.containsText;
import static org.hamcrest.Matchers.*;
import static org.junit.Assume.assumeThat;

@RelatedTo("CSA-2090")
public class SimilarDocumentsITCase extends FindTestBase {
    private FindResultsPage results;
    private FindService findService;
    private SimilarDocumentsView similarDocuments;

    public SimilarDocumentsITCase(TestConfig config) {
        super(config);
    }

    @Before
    public void setUp(){
        results = getElementFactory().getResultsPage();
        findService = getApplication().findService();
    }

    @Test
    public void testSimilarDocumentsShowUp() throws InterruptedException {
        findService.search(new SearchQuery("Doe"));

        for (int i = 1; i <= 5; i++) {
            String title = results.getResult(i).getTitleString();
            similarDocuments = findService.goToSimilarDocuments(i);

            verifyThat(getDriver().getCurrentUrl(), containsString("suggest"));
            verifyThat(similarDocuments.getTitle(), equalToIgnoringCase("Similar results to document with title \"" + title + "\""));
            verifyThat(similarDocuments.getTotalResults(), greaterThan(0));
            verifyThat(similarDocuments.getResults(1), not(empty()));

            similarDocuments.backButton().click();
        }
    }

    @Test
    @KnownBug("CSA-3678")
    public void testTitle(){
        findService.search(new SearchQuery("Bill Murray").withFilter(new ParametricFilter("Source Connector","SimpsonsArchive")));

        for(int i = 1; i <= 5; i++){
            similarDocuments = findService.goToSimilarDocuments(i);
            String title = similarDocuments.getTitle();

            verifyThat(title.charAt(40), not('\"'));

            similarDocuments.backButton().click();
        }
    }

    @Test
    public void testPreviewSeed() throws InterruptedException {
        findService.search(new SearchQuery("bart").withFilter(new IndexFilter("simpsonsarchive")));

        for (int i = 1; i <= 5; i++) {
            similarDocuments = findService.goToSimilarDocuments(i);
            WebElement seedLink  = similarDocuments.seedLink();
            String seedTitle = seedLink.getText();
            Window firstWindow = getWindow();

            Window secondWindow = openSeed(seedLink);

            verifyThat("opened in new tab", secondWindow, not(firstWindow));
            verifyThat(getDriver().getTitle(), containsString(seedTitle));
            verifyThat("not using viewserver", getDriver().getCurrentUrl(), not(containsString("viewDocument")));
            //TODO check if 500

            if (secondWindow != null) {
                secondWindow.close();
            }
            firstWindow.activate();
            similarDocuments.backButton().click();
        }
    }

    private Window openSeed(WebElement seedLink) {
        final int windowCount = getMainSession().countWindows();
        final Window currentWindow = getWindow();

        seedLink.click();
        new WebDriverWait(getDriver(), 5)
                .withMessage("opening seed document")
                .until(new ExpectedCondition<Boolean>() {
                    @Override
                    public Boolean apply(WebDriver input) {
                        return getMainSession().countWindows() == windowCount + 1;
                    }
                });

        Window secondWindow = null;
        for (Window openWindow : getMainSession()) {
            if (!openWindow.equals(currentWindow)) {
                openWindow.activate();
                secondWindow = openWindow;
            }
        }
        return secondWindow;
    }

    @Test
    @KnownBug("CCUK-3676")
    public void testPublicIndexesSimilarDocs(){
        findService.search(new SearchQuery("Hammer").withFilter(IndexFilter.PUBLIC));

        for(int i = 1; i <= 5; i++){
            verifySimilarDocsNotEmpty(i);
        }
    }

    @Test
    @KnownBug("CCUK-3542")
    public void testPromotedDocuments(){
        Window findWindow = getWindow();

        HSODApplication searchApp = new HSODApplication();
        Window searchWindow = launchInNewWindow(searchApp);
        searchWindow.activate();

        String trigger = "Riga";
        new HSODPromotionService(searchApp).setUpPromotion(new SpotlightPromotion(Promotion.SpotlightType.HOTWIRE, trigger), "Have Mercy", 3);

        findWindow.activate();
        results = findService.search(new SearchQuery(trigger));

        for(int i = 0; i <= results.promotions().size(); i++){
            verifySimilarDocsNotEmpty(i);
        }
    }

    @Test
    public void testSimilarDocumentsFromSimilarDocuments(){
        findService.search("Self Defence Family");

        similarDocuments = findService.goToSimilarDocuments(1);
        assumeThat(similarDocuments.getResults().size(), not(0));

        for(int i = 0; i < 5; i++) {
            //Generate a random number between 1 and 5
            int number = (int) (Math.random() * 5 + 1);

            FindSearchResult doc = similarDocuments.getResult(number);
        String docTitle = doc.getTitleString();

        doc.similarDocuments().click();
        Waits.loadOrFadeWait();
            similarDocuments = getElementFactory().getSimilarDocumentsView();

            verifyThat(similarDocuments.seedLink(), containsText(docTitle));
        }
        //TODO what is meant to happen when clicking back
    }

    private void verifySimilarDocsNotEmpty(int i) {
        similarDocuments = findService.goToSimilarDocuments(i);
        verifyThat(similarDocuments.resultsContainer().getText(), not(isEmptyOrNullString()));
        similarDocuments.backButton().click();
    }

    @Test  @Ignore("HOW IS SCROLLING SO DIFFICULT I DON'T UNDERSTAND")
    public void testInfiniteScroll(){
        results = findService.search("Heaven is Earth");

        similarDocuments = findService.goToSimilarDocuments(1);
        assumeThat(similarDocuments.getResults().size(), is(30));

        for(int i = 1; i <= 5; i++) {
            verifyThat(similarDocuments.getVisibleResultsCount(), is(30 * i));
            PageUtil.scrollToBottom(getDriver());
            results.waitForSearchLoadIndicatorToDisappear(FindResultsPage.Container.MIDDLE);
        }
    }
}
