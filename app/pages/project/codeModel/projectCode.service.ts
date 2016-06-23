import { Injectable } from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import { ProjectCodeModel } from './projectCode.model';

//프로젝트 목록보기시 조회시 선택하는 부서의 데이터를 관리
@Injectable()
export class ProjectCodeService {
  private codeModel: ProjectCodeModel;

  constructor(private http: Http) {}

  getCode() {
    // let url="http://localhost:8080/project/selectCode";
    // return this.http.get(url);

    let url="http://localhost:8080/project/selectCode";
    let header = new Headers ({'Content-Type' : 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});

    return this.http.post(url, null, {headers: header});
  }

}
