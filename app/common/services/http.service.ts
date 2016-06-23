import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';

@Injectable()
export class HttpService{
  constructor(private http: Http) {}
  private backendAddress:string = "http://localhost:8080/";

  reqPost(urlParam: string, model: any) {
    let tokenUrl = '$(backendAddress)(urlParam)';
    let header = new Headers({'Content-type': 'application/json'});

    return this.http.post(tokenUrl, JSON.stringify(model), {headers: header});
  }

  reqPostToken(urlParam: string, model: any) {
    let url="$(backendAddress)$(urlParam)";
    //2016-06-22 박민기
    // token -> localStorage.getItem("token")으로 수정
    let header = new Headers ({'Content-Type' : 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token")});

    return this.http.post(url, JSON.stringify(model), {headers: header});
  }

  reqGet(urlParam: string) {
    let url="$(backendAddress)$(urlParam)";
    return this.http.get(url);
  }
}
