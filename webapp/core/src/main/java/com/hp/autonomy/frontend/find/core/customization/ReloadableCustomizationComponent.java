/*
 * Copyright 2017 Hewlett Packard Enterprise Development Company, L.P.
 * Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License.
 */

package com.hp.autonomy.frontend.find.core.customization;

/**
 * This interface is used for bulk customizations and config reloading by the Spring container.
 */
public interface ReloadableCustomizationComponent {
    void reload() throws Exception;
}
