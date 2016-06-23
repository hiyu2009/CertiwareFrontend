import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {CORE_DIRECTIVES} from 'angular2/common';
import {LoginService} from '../../login/services/login.service';

@Component({
  selector: 'nav-bar',
  templateUrl: 'app/pages/shared/navBar/navBar.html',
  directives: [ROUTER_DIRECTIVES,CORE_DIRECTIVES]

})
export class NavBar {
  constructor (private loginService:   LoginService) {

  }

  onClick() {
    if (this.loginService.checkLogin()) {
      this.loginService.logout();
    }
  }
}
