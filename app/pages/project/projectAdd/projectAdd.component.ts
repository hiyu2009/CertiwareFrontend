import {Component} from 'angular2/core';
import {DatePicker} from '../../../common/component/datepicker.component';
import {Project} from '../../../common/models/project.model';

@Component({
  selector: 'project-add',
  directives: [DatePicker],
  templateUrl: 'app/pages/project/projectAdd/projectAdd.html'
})
export class ProjectAdd {
  projectModel: Project;

  constructor(){}
}
