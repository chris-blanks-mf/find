/*
 * Copyright 2015 Hewlett-Packard Development Company, L.P.
 * Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License.
 */

package com.hp.autonomy.frontend.find.core.metrics;

import com.hp.autonomy.frontend.find.core.test.AbstractFindIT;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;

import static com.hp.autonomy.frontend.find.core.metrics.MetricsController.*;
import static org.hamcrest.Matchers.is;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.authentication;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

public abstract class MetricsControllerIT extends AbstractFindIT {
    @Value("${endpoints.metrics.path}")
    private String metricsPath;

    @Test
    public void addMetric() throws Exception {
        final String metricName = "metricName";
        final int metricValue = 12;
        mockMvc.perform(post(PUBLIC_METRICS_PATH + ADD_METRIC_PATH)
                .param(METRIC_NAME_PARAM, metricName)
                .param(METRIC_VALUE_PARAM, String.valueOf(metricValue))
                .with(authentication(userAuth())))
                .andExpect(status().isNoContent());
        mockMvc.perform(get(metricsPath)
                .accept(MediaType.APPLICATION_JSON_UTF8)
                .with(authentication(adminAuth())))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(jsonPath("$.['" + "timer" + WEB_METRIC_PREFIX + metricName + ".count" +  "']", is(1)))
                .andExpect(jsonPath("$.['" + "timer" + WEB_METRIC_PREFIX + metricName + ".snapshot.max" +  "']", is(metricValue)))
                .andExpect(jsonPath("$.['" + "timer" + WEB_METRIC_PREFIX + metricName + ".snapshot.min" +  "']", is(metricValue)))
                .andExpect(jsonPath("$.['" + "timer" + WEB_METRIC_PREFIX + metricName + ".snapshot.mean" +  "']", is(metricValue)));
    }
}
