import { Project } from '../../../../common/models/project.model';
import { Outsourcing } from '../../../../common/models/outsourcing.model';

export class ProjectDetailDataModel {
  public projectModel: Project;
  public outsourcingModel: Outsourcing[];
}
