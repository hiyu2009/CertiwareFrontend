System.register(['angular2/core', 'angular2/router', 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, router_1, common_1;
    var SideBar;
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
            }],
        execute: function() {
            SideBar = (function () {
                function SideBar() {
                    this.isActive = false;
                    this.showMenu = '';
                }
                SideBar.prototype.eventCalled = function () {
                    this.isActive = !this.isActive;
                };
                SideBar.prototype.addExpandClass = function (element) {
                    if (element === this.showMenu) {
                        this.showMenu = '0';
                    }
                    else {
                        this.showMenu = element;
                    }
                };
                SideBar = __decorate([
                    core_1.Component({
                        selector: 'side-bar',
                        templateUrl: 'app/shared/sideBar/sideBar.html',
                        directives: [router_1.ROUTER_DIRECTIVES, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], SideBar);
                return SideBar;
            }());
            exports_1("SideBar", SideBar);
        }
    }
});
//# sourceMappingURL=sideBar.component.js.map