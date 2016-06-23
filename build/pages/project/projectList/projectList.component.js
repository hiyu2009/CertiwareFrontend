System.register(['angular2/core', '../codeModel/projectCode.service', './services/projectListViewData.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, projectCode_service_1, projectListViewData_service_1, router_1;
    var ProjectList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (projectCode_service_1_1) {
                projectCode_service_1 = projectCode_service_1_1;
            },
            function (projectListViewData_service_1_1) {
                projectListViewData_service_1 = projectListViewData_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ProjectList = (function () {
                function ProjectList(codeService, dataService) {
                    var _this = this;
                    this.codeService = codeService;
                    this.dataService = dataService;
                    //code값 server로 부터 가져옴
                    codeService.getCode().subscribe(function (data) {
                        console.log("Get code data start");
                        // let jsonOBJ = JSON.parse(JSON.parse(JSON.stringify(data))._body);
                        // this.deptCodeArr = jsonOBJ.deptCodeModels;
                        _this.deptCodeArr = JSON.parse(JSON.parse(JSON.stringify(data))._body).deptCodeModels;
                        _this.deptstr = _this.deptCodeArr[0].deptName;
                        console.log("-------------" + _this.deptstr);
                        console.log("Get code data end");
                    }), function (error) { return console.log(error); };
                    //list데이터 server로 부터 가져옴
                    dataService.getListData().subscribe(function (data) {
                        console.log("Get list data start");
                        _this.models = JSON.parse(JSON.parse(JSON.stringify(data))._body);
                        console.log("---" + _this.models.length);
                        console.log("Get list data end");
                    }), function (error) { return console.log(error); };
                }
                ;
                ProjectList.prototype.updateSelectedValue = function (event) {
                    this.selectedString = event;
                    console.log("selected Value: " + this.selectedString);
                };
                ProjectList.prototype.onSelect = function (model) {
                };
                ProjectList = __decorate([
                    core_1.Component({
                        selector: 'project-list',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        styleUrls: ['app/pages/project/projectList/css/projectList.css'],
                        // providers: [ProjectCodeService, ProjectListViewDataService],
                        templateUrl: 'app/pages/project/projectList/projectList.html'
                    }), 
                    __metadata('design:paramtypes', [projectCode_service_1.ProjectCodeService, projectListViewData_service_1.ProjectListViewDataService])
                ], ProjectList);
                return ProjectList;
            }());
            exports_1("ProjectList", ProjectList);
        }
    }
});
//# sourceMappingURL=projectList.component.js.map