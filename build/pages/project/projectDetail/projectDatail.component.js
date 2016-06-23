System.register(['angular2/core', './service/projectDatailData.service'], function(exports_1, context_1) {
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
    var core_1, projectDatailData_service_1;
    var ProjectDetail;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (projectDatailData_service_1_1) {
                projectDatailData_service_1 = projectDatailData_service_1_1;
            }],
        execute: function() {
            ProjectDetail = (function () {
                function ProjectDetail() {
                }
                ProjectDetail = __decorate([
                    core_1.Component({
                        selector: 'project-detail',
                        providers: [projectDatailData_service_1.ProjectDetailDataService],
                        templateUrl: 'app/pages/project/ProjectDetail/ProjectDetail.html',
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProjectDetail);
                return ProjectDetail;
            }());
            exports_1("ProjectDetail", ProjectDetail);
        }
    }
});
//# sourceMappingURL=projectDatail.component.js.map