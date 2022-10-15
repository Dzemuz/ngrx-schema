"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const schematics_2 = require("@angular-devkit/schematics");
const core_1 = require("@angular-devkit/core");
const strings_1 = require("@angular-devkit/core/src/utils/strings");
const stringUtils = { classify: strings_1.classify, dasherize: strings_1.dasherize, camelize: strings_1.camelize, underscore: strings_1.underscore };
function filterTemplates() {
    // if (!options.service) {
    //   return filter(path => !path.match(/\.service\.ts$/) && !path.match(/-item\.ts$/) && !path.match(/\.bak$/));
    // }
    return (0, schematics_2.filter)(path => !path.match(/\.bak$/));
}
function default_1(options) {
    // TODO: Validate options and throw SchematicsException if validation fails
    options.path = options.path ? (0, core_1.normalize)(options.path) : options.path;
    const templateSource = (0, schematics_2.apply)((0, schematics_2.url)('./files'), [
        filterTemplates(),
        (0, schematics_2.template)(Object.assign(Object.assign({}, stringUtils), options)),
        // move('src/app/my-schema')
    ]);
    return (0, schematics_1.chain)([
        (0, schematics_2.branchAndMerge)((0, schematics_1.chain)([
            (0, schematics_1.mergeWith)(templateSource)
        ])),
    ]);
}
exports.default = default_1;
//# sourceMappingURL=index.js.map