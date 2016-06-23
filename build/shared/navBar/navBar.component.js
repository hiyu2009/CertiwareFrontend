System.register(['angular2/core', 'angular2/router', 'angular2/common', '../../pages/login/services/login.service'], function(exports_1, context_1) {
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
    var core_1, router_1, common_1, login_service_1;
    var NavBar;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            }],
        execute: function() {
            NavBar = (function () {
                function NavBar(loginService) {
                    this.loginService = loginService;
                }
                NavBar.prototype.onClick = function () {
                    if (this.loginService.checkLogin()) {
                        this.loginService.logout();
                    }
                };
                NavBar = __decorate([
                    core_1.Component({
                        selector: 'nav-bar',
                        templateUrl: 'app/shared/navBar/navBar.html',
                        directives: [router_1.ROUTER_DIRECTIVES, common_1.CORE_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [login_service_1.LoginService])
                ], NavBar);
                return NavBar;
            }());
            exports_1("NavBar", NavBar);
        }
    }
});
// import {Component} from 'angular2/core';
//
// @Component({
//   selector: 'project-add',
//   templateUrl: 'app/pages/project/projectAdd/projectAdd.html'
// })
// export class ProjectAdd {
//   constructor(){}
// }
// import {Component, ViewEncapsulation} from '@angular/core';
// import { ROUTER_DIRECTIVES } from '@angular/router';
// import {CORE_DIRECTIVES} from '@angular/common';
// import {DROPDOWN_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
//
// @Component({
//     moduleId: module.id,
//     selector: 'top-nav',
//     templateUrl: 'topnav.html',
//     encapsulation: ViewEncapsulation.None,
//     directives: [DROPDOWN_DIRECTIVES, CORE_DIRECTIVES, ROUTER_DIRECTIVES]
// })
//
// export class TopNavComponent {}
//# sourceMappingURL=navBar.component.js.map