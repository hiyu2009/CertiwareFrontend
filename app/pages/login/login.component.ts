import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {Router} from 'angular2/router';
import {LoginService} from './services/login.service'
import {User} from '../../common/models/userlogin.model';

@Component({
  selector: 'login',
  templateUrl: 'app/pages/login/login.html'
})
export class Login {
  private model = {'userId':'', 'password':''};
  private user:User;
  // private currentUserName;
// ','deptCode':'','rankCode':'','roleCode':'','token':'
  constructor (
    private loginService: LoginService,
    private router: Router) {}

  onSubmit() {
    this.loginService.sendCredentials(this.model).subscribe(
      data => {
        this.user=JSON.parse(JSON.parse(JSON.stringify(data))._body);
        localStorage.setItem("token", this.user.token);
        localStorage.setItem("userId", this.user.userId );
        localStorage.setItem("userName", this.user.userName);
        localStorage.setItem("deptCode", this.user.deptCode);
        localStorage.setItem("rankCode", this.user.rankCode);
        localStorage.setItem("roleCode", this.user.roleCode);

      }
    )
  }
}
