/*
 * Copyright 2016-2017 Hewlett Packard Enterprise Development Company, L.P.
 * Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License.
 */

define([
    'underscore',
    'moment',
    'find/idol/app/page/search/snapshots/snapshot-detail',
    'i18n!find/nls/bundle',
    'i18n!find/idol/nls/snapshots'
], function(_, moment, snapshotDetail, i18n, snapshotsI18n) {
    'use strict';

    function runProcessAttributes(input) {
        // Only pick the target attributes to reflect how processAttributes is called in the DataPanelView
        return snapshotDetail.processAttributes(_.pick(input, snapshotDetail.targetAttributes));
    }

    describe('Snapshot detail panel', function() {
        it('returns the formatted date created and the result count', function() {
            const output = runProcessAttributes({
                dateCreated: moment(1455026659454),
                resultCount: 25
            });

            expect(output).toHaveLength(2);
            expect(output[0].title).toBe(snapshotsI18n['detail.dateCreated']);
            expect(output[0].content).toContain('2016/02/09');
            expect(output[1].title).toBe(snapshotsI18n['detail.resultCount']);
            expect(output[1].content).toEqual(25);
        });

        it('leaves out the result count when the result count is not present in the attributes', function() {
            const output = runProcessAttributes({
                dateCreated: moment(1455026659454)
            });

            expect(output[1]).toBe(undefined);
        });

        it('returns 0 when the result count is 0', function() {
            const output = runProcessAttributes({
                dateCreated: moment(1455026659454),
                resultCount: 0
            });

            expect(output[1].title).toBe(snapshotsI18n['detail.resultCount']);
            expect(output[1].content).toEqual(0);
        });
    });
});
