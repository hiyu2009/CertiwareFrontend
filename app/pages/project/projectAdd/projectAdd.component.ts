import {Component} from 'angular2/core';
import {Project} from '../../../common/models/project.model';
import {DatePicker} from '../../../common/components/ng2-datepicker';

@Component({
  selector: 'project-add',
  directives: [DatePicker],
  templateUrl: 'app/pages/project/projectAdd/projectAdd.html'
})
export class ProjectAdd {
  dtae:string;


  projectModel: Project;

  constructor(){}
}
