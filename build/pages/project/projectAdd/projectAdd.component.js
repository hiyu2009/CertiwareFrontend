System.register(['angular2/core', '../../../common/components/ng2-datepicker'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, ng2_datepicker_1;
    var ProjectAdd;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng2_datepicker_1_1) {
                ng2_datepicker_1 = ng2_datepicker_1_1;
            }],
        execute: function() {
            ProjectAdd = (function () {
                function ProjectAdd() {
                }
                ProjectAdd = __decorate([
                    core_1.Component({
                        selector: 'project-add',
                        directives: [ng2_datepicker_1.DatePicker],
                        templateUrl: 'app/pages/project/projectAdd/projectAdd.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProjectAdd);
                return ProjectAdd;
            }());
            exports_1("ProjectAdd", ProjectAdd);
        }
    }
});
//# sourceMappingURL=projectAdd.component.js.map