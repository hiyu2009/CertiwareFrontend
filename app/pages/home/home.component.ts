import {Component} from 'angular2/core';
import {ProjectAdd} from '../project/projectAdd/projectAdd.component';
// import {SidePanel} from './side-panel.component';

@Component({
  selector: 'home',
  directives: [ProjectAdd],
  templateUrl: 'app/pages/home/home.html'
})
export class HomeComponent {
  constructor(){}
}
