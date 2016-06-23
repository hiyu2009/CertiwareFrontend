import {Project} from './project.model';
import {RatingCode} from './ratingCode.model';
import {Partner} from './partner.model';

export class Manpower{
  public project: Project;
  public manpowerName: string;
  public partner: Partner;
  public rating: RatingCode;
  public sellingAmount: number;
  public outsourcingAmount: number;
  public startDate: Date;
  public endDateL: Date;
  public reMarks: string;
}
