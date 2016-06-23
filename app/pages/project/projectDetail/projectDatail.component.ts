import { Component } from 'angular2/core'
import { ProjectDetailDataService } from './service/projectDatailData.service';
import { ProjectDetailDataModel} from './models/projectDetailData.model';
import { ProjectCodeService } from '../codeModel/projectCode.service';
import { ProjectCodeModel } from '../codeModel/projectCode.model';

@Component({
  selector: 'project-detail',
  providers: [ProjectDetailDataService],
  templateUrl: 'app/pages/project/ProjectDetail/ProjectDetail.html',
})
export class ProjectDetail {
  private dataModel: ProjectDetailDataModel;

  // constructor(
  //   private detailDataService: ProjectDetail
  // ){
  //   if(detailDataService.reqServerData()){
  //     dataModel = detailDataService.reqServerCode();
  //   }
  // }
}
