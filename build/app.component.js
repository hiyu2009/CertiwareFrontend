System.register(['angular2/core', 'angular2/router', 'angular2/http', './pages/shared/navBar/navBar.component', './pages/shared/sideBar/sideBar.component', './pages/project/projectAdd/projectAdd.component', './pages/login/login.component', './pages/home/home.component', './pages/project/projectList/projectList.component', './pages/login/services/login.service', './pages/project/codeModel/projectCode.service', './pages/project/projectList/services/projectListViewData.service'], function(exports_1, context_1) {
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
    var core_1, router_1, router_2, http_1, navBar_component_1, sideBar_component_1, projectAdd_component_1, login_component_1, home_component_1, projectList_component_1, login_service_1, projectCode_service_1, projectListViewData_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (navBar_component_1_1) {
                navBar_component_1 = navBar_component_1_1;
            },
            function (sideBar_component_1_1) {
                sideBar_component_1 = sideBar_component_1_1;
            },
            function (projectAdd_component_1_1) {
                projectAdd_component_1 = projectAdd_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (projectList_component_1_1) {
                projectList_component_1 = projectList_component_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (projectCode_service_1_1) {
                projectCode_service_1 = projectCode_service_1_1;
            },
            function (projectListViewData_service_1_1) {
                projectListViewData_service_1 = projectListViewData_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [navBar_component_1.NavBar, sideBar_component_1.SideBar, home_component_1.HomeComponent, router_1.ROUTER_DIRECTIVES, projectAdd_component_1.ProjectAdd],
                        providers: [router_2.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, login_service_1.LoginService, projectListViewData_service_1.ProjectListViewDataService, projectCode_service_1.ProjectCodeService],
                        template: "\n      <nav-bar></nav-bar>\n      <side-bar></side-bar>\n      <router-outlet></router-outlet>\n      "
                    }),
                    router_1.RouteConfig([
                        { path: '/home', name: 'Home', component: home_component_1.HomeComponent, useAsDefault: true },
                        { path: '/login', name: 'Login', component: login_component_1.Login },
                        { path: '/project/list', name: 'PjtList', component: projectList_component_1.ProjectList },
                        { path: '/project/add', name: 'PjtAdd', component: projectAdd_component_1.ProjectAdd }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map