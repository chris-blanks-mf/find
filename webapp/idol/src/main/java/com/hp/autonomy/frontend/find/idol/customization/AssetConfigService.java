/*
 * Copyright 2017 Hewlett Packard Enterprise Development Company, L.P.
 * Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License.
 */

package com.hp.autonomy.frontend.find.idol.customization;

import com.hp.autonomy.frontend.configuration.validation.ValidationService;
import com.hp.autonomy.frontend.find.core.configuration.CustomizationConfigService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AssetConfigService extends CustomizationConfigService<AssetConfig> {
    @Autowired
    protected AssetConfigService(final ValidationService<AssetConfig> validationService) {
        super(
            "assets.json",
            "defaultAssetsConfigFile.json",
            AssetConfig.class,
            AssetConfig.builder().build()
        );

        setValidationService(validationService);
    }
}
