import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

import {NavBar} from './pages/shared/navBar/navBar.component';
import {SideBar} from './pages/shared/sideBar/sideBar.component';
import {ProjectAdd} from './pages/project/projectAdd/projectAdd.component'
import {Login} from './pages/login/login.component';
import {HomeComponent} from './pages/home/home.component';
import {ProjectList} from './pages/project/projectList/projectList.component';

import {LoginService} from './pages/login/services/login.service';
import {ProjectCodeService} from './pages/project/codeModel/projectCode.service';
import {ProjectListViewDataService} from './pages/project/projectList/services/projectListViewData.service';

@Component({
    selector: 'my-app',
    directives: [NavBar,SideBar,HomeComponent,ROUTER_DIRECTIVES,ProjectAdd],
    providers:[ROUTER_PROVIDERS, HTTP_PROVIDERS,LoginService, ProjectListViewDataService, ProjectCodeService],
    template:`
      <nav-bar></nav-bar>
      <side-bar></side-bar>
      <router-outlet></router-outlet>
      테스트테스트
})

@RouteConfig([
  {path:'/home', name: 'Home', component: HomeComponent,useAsDefault: true},
  {path:'/login', name:'Login', component: Login},
  {path:'/project/list', name:'PjtList', component: ProjectList},
  {path:'/project/add', name:'PjtAdd', component: ProjectAdd}

])

export class AppComponent { }
