/*
 * Copyright 2014-2015 Hewlett-Packard Development Company, L.P.
 * Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License.
 */
define([
    'js-whatever/js/substitution'
], function(substitution) {
    return substitution({
        'about.app.version': 'Version',
        'about.copyright': "Find © Copyright 2014-2015 Hewlett-Packard Development Company, L.P.",
        'about.foss': 'FOSS Acknowledgements',
        'about.lib.name': 'Library Name',
        'about.lib.version': 'Version',
        'about.lib.licence': 'License',
        'about.search': 'Search',
        'about.tagLine': 'Handcrafted in Cambridge.',
        'about.versionString': '{0} commit {1}',
        'app.about': 'About',
        'app.cancel': 'Cancel',
        'app.from': 'From',
        'app.loading': 'Loading...',
        'app.logout': 'Logout',
        'app.name': "Find",
        'app.ok': 'OK',
        'app.roles': 'Roles',
        'app.seeMore': 'See More',
        'app.seeLess': 'See Less',
        'app.search': 'Search',
        'app.searchPlaceholder': 'What do you want to find?',
        'app.settings': 'Settings',
        'app.until': 'Until',
        'app.user': 'User',
        'app.users': 'Users',
        'app.feature.search': 'Search',
        'app.feature.promotions': 'Promotions',
        'datepicker.language': 'en',
        'error.well.text': 'An error has occurred',
        'footer.click-to-hide': 'Collapse footer',
        'footer.click-to-show': 'Show more\u2026',
        'login.defaultLogin': 'Details for the default login can be found in your config.json file',
        'login.error.auth': 'Please check your username and password.',
        'login.error.connection': 'There was an error authenticating with your Community server. Please check your Community server is available.',
        'login.error.nonadmin': 'This user does not have admin permissions.',
        'login.important': 'Important',
        'login.infoDefaultLogin': 'This contains a default username (displayed below) and password.',
        'login.infoPasswordCopyPaste': 'You can copy and paste the password into the field below.',
        'login.infoSearchConfig': 'Using your favorite text editor, search config.json for "defaultLogin", in the "login" section.',
        'login.moreInfo': 'More',
        'login.newCredentials': 'Login with new credentials',
        'login.login': 'Login',
        'login.title': 'Login to {0}',
        'old.browser.title': 'Browser not supported',
        'old.browser.unsupported': 'It looks like your browser is not supported by this app. Some functionality may not work.',
        'placeholder.hostname': 'hostname',
        'placeholder.ip': 'IP',
        'placeholder.port': 'port',
        'search.alsoSearchingFor': 'Also searching for',
        'search.databases': 'Databases',
        'search.dates': 'Dates',
        'search.dates.timeInterval.custom': 'Custom',
        'search.dates.timeInterval.week': 'Last Week',
        'search.dates.timeInterval.month': 'Last Month',
        'search.dates.timeInterval.year': 'Last Year',
        'search.document.authors': 'Authors',
        'search.document.categories': 'Categories',
        'search.document.contentType': 'Content Type',
        'search.document.date': 'Date',
        'search.document.dateCreated': 'Date Created',
        'search.document.dateModified': 'Date Modified',
        'search.document.domain': 'Domain',
        'search.document.index': 'Index',
        'search.document.openInNewTab': 'Open in New Tab',
        'search.document.reference': 'Reference',
        'search.document.staticContent': 'Static Content',
        'search.document.url': 'URL',
        'search.document.weight': 'Weight',
        'search.error.results' : 'An error occurred retrieving results',
        'search.error.promotions' : 'An error occurred retrieving promotions',
        'search.error.relatedConcepts' : 'An error occurred retrieving related concepts',
        'search.error.parametric' : 'An error occurred retrieving additional filters',
        'search.filters': 'Filters',
        'search.indexes': 'Indexes',
        'search.indexes.all': 'All',
        'search.indexes.publicIndexes': 'Public Indexes',
        'search.indexes.privateIndexes': 'Private Indexes',
        'search.indexes.empty': 'Waiting for Indexes...',
        'search.noResults': 'No results found',
        'search.noMoreResults': 'No more results found',
        'search.preview': 'Preview',
        'search.relatedConcepts': 'Related Concepts',
        'search.relatedConcepts.topResults.error': 'An error occurred fetching top results',
        'search.relatedConcepts.topResults.none': 'No top results found',
        'search.relatedConcepts.notLoading': 'The list of indexes has not yet been retrieved',
        'search.relatedConcepts.none': 'There are no related concepts',
        'search.results': 'results',
        'search.results.pagination.of': 'of',
        'search.results.pagination.showing': 'Showing',
        'search.results.pagination.to': 'to',
        'search.resultsSort': 'Sort',
        'search.resultsSort.date': 'by date',
        'search.resultsSort.relevance': 'by relevance',
        'search.resultsView.list': 'List',
        'search.resultsView.topic-map': 'Topic Map',
        'search.resultsView.map': 'Map',
        'search.savedSearchControl.save': 'Save',
        'search.savedSearchControl.saveSearch': 'Save Search',
        'search.savedSearchControl.nameSearch': 'Name your search',
        'search.savedSearchControl.cancelSave': 'Cancel',
        'search.topicMap.clustering': 'Clustering Mode',
        'search.topicMap.occurrences': 'Occurrences of phrase',
        'search.topicMap.documents': 'Documents with phrase',
        'search.topicMap.relevance': 'Relevance',
        'search.topicMap.topics': 'Number of topics',
        'search.savedSearchControl.title': 'Save Search',
        'search.savedSearchControl.savedSearch': 'Name your search',
        'search.savedSearches': 'Saved searches',
        'search.savedSearches.noSavedSearches': 'There are no saved searches',
        'search.seeAllDocuments': 'See all documents',
        'search.selected': 'Selected',
        'search.similarDocuments': 'Similar documents',
        'search.similarDocuments.error': 'An error occurred fetching similar documents',
        'search.similarDocuments.none': 'No similar documents found',
        'search.spellCheck.showingResults': 'Showing results for',
        'search.spellCheck.searchFor': 'Search for',
        'settings.cancel': 'Cancel',
        'settings.cancel.message': 'All unsaved changes will be lost.',
        'settings.cancel.title': 'Revert settings?',
        'settings.close': 'Close',
        'settings.unload.confirm': 'You have unsaved settings!',
        'settings.adminUser': 'Admin User',
        'settings.adminUser.description': 'Configure the admin username and password for Find.',
        'settings.community.description': "Community handles authentication for Find. We recommend using a dedicated Community server for Find and not using it for any other parts of your IDOL installation.  Your Community server will need an Agentstore server for data storage.",
        'settings.community.login.type': 'Login Type',
        'settings.community.login.fetchTypes': 'Test connection to retrieve available login types.',
        'settings.community.login.invalidType': 'You must test connection and choose a valid login type.',
        'settings.community.serverName': 'community',
        'settings.community.title': 'Community',
        'settings.database': 'Database',
        'settings.databaseCheckbox': 'Use username for database name',
        'settings.description': "This page is for editing the Find config file.  The config file location is stored in the Java system property {0}.  The current location is {1}.",
        'settings.iod.apiKey': 'API key',
        'settings.iod.application': 'Application',
        'settings.iod.domain': 'Domain',
        'settings.locale.title': 'Locale',
        'settings.locale.default': 'Default locale',
        'settings.password': 'Password',
        'settings.password.description': 'Password will be stored encrypted',
        'settings.password.redacted': '(redacted)',
        'settings.postgres.description': "PostgreSQL is an open-source SQL database server used by Find for structured data storage.",
        'settings.postgres.flywayMigrationFromEmpty': 'When you save your changes, your database will be initialised for Find.',
        'settings.postgres.flywayMigrationUpgrade': 'When you save your changes, your database will be upgraded for the current of Find.',
        'settings.postgres.title': "Find PostgreSQL database",
        'settings.requiredFields': 'required fields',
        'settings.restoreChanges': 'Revert Changes',
        'settings.retry': 'Retry Save',
        'settings.save': 'Save Changes',
        'settings.save.confirm': 'Are you sure you want to save this configuration?',
        'settings.save.confirm.title': 'Confirm Save',
        'settings.save.saving': 'Saving configuration. Please wait...',
        'settings.save.retypePassword': '(you may need to re-type your password)',
        'settings.save.success': 'Success!',
        'settings.save.success.message': 'Configuration has been saved.',
        'settings.save.errorThrown': 'Threw exception: ',
        'settings.save.failure': 'Error!',
        'settings.save.failure.validation.message': 'Validation error in',
        'settings.save.failure.and': 'and',
        'settings.save.failure.text': 'Would you like to retry?',
        'settings.save.unknown': 'Server returned error: ',
        'settings.test': 'Test Connection',
        'settings.test.ok': 'Connection ok',
        'settings.test.databaseBlank': 'Database must not be blank!',
        'settings.test.failed': 'Connection failed',
        'settings.test.failed.password': 'Connection failed (you may need to re-type your password)',
        'settings.test.hostBlank': 'Host name must not be blank!',
        'settings.test.passwordBlank': 'Password must not be blank!',
        'settings.test.usernameBlank': 'Username must not be blank!',
        'settings.username': 'Username',
        'users.username': 'Username',
        'users.password': 'Password',
        'users.admin': 'Admin',
        'users.noUsers': 'No users retrieved from Community.',
        'users.refresh': 'Refresh',
        'users.none': 'There are currently no admin users',
        'users.title': 'User Management',
        'users.useradmin': 'UserAdmin',
        'users.button.create': 'Create',
        'users.button.createUser': 'Create User',
        'users.button.cancel': 'Close',
        'users.create': 'Create New Users',
        'users.delete': 'Delete',
        'users.delete.text': 'Are you sure?',
        'users.delete.confirm': 'Confirm',
        'users.delete.cancel': 'Cancel',
        'users.info.done': 'Done!',
        'users.info.createdMessage': 'User {0} successfully created.',
        'users.info.deletedMessage': 'User {0} successfully deleted.',
        'users.info.error': 'Error!',
        'users.info.creationFailedMessage': 'New user profile creation failed.',
        'users.username.blank': 'Username must not be blank',
        'users.username.duplicate': 'User exists!',
        'users.username.password.match.error': 'Password confirmation failed.',
        'users.password.confirm': 'Confirm Password',
        'users.password.error': 'Password must not be blank',
        'users.select.level': 'Select User Level:',
        'users.serverError': 'Server returned error.',
        'users.tagline': 'Make sure you have a user with the UserAdmin role.  You can create additional users at any time after initial setup, as long as you have a UserAdmin account.',
        'users.admin.role.add': 'Create role',
        'users.admin.role.add.title': 'Admin Role required',
        'users.admin.role.add.description': 'This community server does not have an admin role; would you like to create one?',
        'wizard.last': 'Logout',
        'wizard.next': 'Next',
        'wizard.prev': 'Prev',
        'wizard.step.settings': 'Settings',
        'wizard.step.users': 'Users',
        'wizard.step.welcome': 'Welcome',
        'wizard.welcome': "Welcome to the Find configuration wizard",
        'wizard.welcome.helper': "This wizard will help you set up Find in two quick steps:",
        'wizard.welcome.step1': 'On the Settings page, configure your connection settings, then click Save',
        'wizard.welcome.step2': "On the Users page, create initial user accounts, then click Logout",
        'wizard.welcome.finish': 'After you complete the configuration wizard, you can start using Find'
    });
});
