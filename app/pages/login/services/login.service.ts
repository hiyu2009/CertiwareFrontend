import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoginService {
  token: string;

  constructor (private http:Http) {}

  sendCredentials(model) {
    let tokenUrl = 'http://localhost:8080/main/login';
    let headers1 = new Headers({'Content-type': 'application/json'});

    return this.http.post(tokenUrl, JSON.stringify(model), {headers: headers1});
  }

  sendToken(token) {
    let userUrl = 'http://localhost:8080/user/users';
    let headers2 = new Headers({'Authorization': 'Bearer '+token});

    return this.http.get(userUrl, {headers: headers2});
  }

  checkLogin() {
    if (localStorage.getItem("userId")!="" && localStorage.getItem("token")!="") {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.setItem("token", "");
    localStorage.setItem("userId", "" );
    localStorage.setItem("userName", "" );
    localStorage.setItem("deptCode", "" );
    localStorage.setItem("rankCode", "" );
    localStorage.setItem("roleCode", "" );

    alert("You just logged out.");
  }
}
