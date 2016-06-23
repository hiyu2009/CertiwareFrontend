import { Injectable, Inject } from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import { ProjectListViewDataModel } from '../models/projectListViewData.model';

//프로젝트 목록보기시
@Injectable()
export class ProjectListViewDataService {
  private models: ProjectListViewDataModel[];

  constructor(
    private http: Http
  ) {}

  getListData() {
    // let url="http://localhost:8080/project/selectList";
    // return this.http.get(url);

    let url="http://localhost:8080/project/selectList";
    let header = new Headers ({'Content-Type' : 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token")});

    return this.http.post(url, null, {headers: header});

  }
}
