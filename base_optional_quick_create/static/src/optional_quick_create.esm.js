/** @odoo-module **/

import {Many2OneField} from "@web/views/fields/many2one/many2one_field";
import {patch} from "@web/core/utils/patch";
import {session} from "@web/session";

const avoidQuickCreateModels = session.avoid_quick_create_models || [];

patch(Many2OneField.prototype, {
    get Many2XAutocompleteProps() {
        const props = super.Many2XAutocompleteProps;
        if (avoidQuickCreateModels.includes(this.relation)) {
            props.quickCreate = null;
        }
        return props;
    },
});
