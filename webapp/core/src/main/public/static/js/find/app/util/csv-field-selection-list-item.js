/*
 * Copyright 2016-2017 Hewlett Packard Enterprise Development Company, L.P.
 * Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License.
 */

define([
    'js-whatever/js/list-item-view',
    'underscore',
    'text!find/templates/app/util/csv-field-selection-list-item.html',
    'i18n!find/nls/bundle',
    'iCheck'
], function(ListItemView, _, template, i18n) {
    'use strict';

    return ListItemView.extend({
        template: _.template(template),

        initialize: function(options) {
            ListItemView.prototype.initialize.call(this, _.defaults({
                template: this.template,
                templateOptions: {
                    fieldDataId: options.model.id,
                    fieldPrintedLabel: i18n['search.document.' + options.model.id] || options.model.get('displayName')
                }
            }, options));
        },

        render: function() {
            ListItemView.prototype.render.apply(this);

            this.$el.iCheck({checkboxClass: 'icheckbox-hp'});
            this.updateSelected();
        },

        updateSelected: function() {
            this.$el.iCheck(this.model.get('selected') ? 'check' : 'uncheck');
        }
    });
});
