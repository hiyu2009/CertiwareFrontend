import {Component} from 'angular2/core';
import { ProjectCodeService } from '../codeModel/projectCode.service';
import { ProjectListViewDataService } from './services/projectListViewData.service';
import { ProjectCodeModel } from '../codeModel/projectCode.model';
import { ProjectListViewDataModel } from './models/projectListViewData.model';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import { DeptCode } from '../../../common/models/deptCode.model';

@Component({
  selector: 'project-list',
  directives: [ROUTER_DIRECTIVES],
  styleUrls: ['app/pages/project/projectList/css/projectList.css'],
  // providers: [ProjectCodeService, ProjectListViewDataService],
  templateUrl: 'app/pages/project/projectList/projectList.html'
})
export class ProjectList {
  // codeModels:ProjectCodeModel;
  models: ProjectListViewDataModel[];
  deptCodeArr: DeptCode[];
  selectedString: String;

  deptstr:string;

  constructor(
    private codeService: ProjectCodeService,
    private dataService: ProjectListViewDataService
  ){
    //code값 server로 부터 가져옴
    codeService.getCode().subscribe(
      data => {
        console.log("Get code data start");

        // let jsonOBJ = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        // this.deptCodeArr = jsonOBJ.deptCodeModels;
        this.deptCodeArr=JSON.parse(JSON.parse(JSON.stringify(data))._body).deptCodeModels

        this.deptstr=this.deptCodeArr[0].deptName;
         console.log("-------------"+this.deptstr);

        console.log("Get code data end");
      }
    ), error => console.log(error)

    //list데이터 server로 부터 가져옴
    dataService.getListData().subscribe(
      data => {
        console.log("Get list data start");

        this.models = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        console.log("---" + this.models.length);

        console.log("Get list data end");
      }
    ), error => console.log(error)

  };

  updateSelectedValue(event): void{
    this.selectedString = event;
    console.log("selected Value: " + this.selectedString);
  }

  onSelect(model){

  }
}
