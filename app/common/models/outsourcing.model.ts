import {Project} from './project.model';
import {Partner} from './partner.model';
import {OutsourcingCode} from './OutsourcingCode.model';
import {RatingCode} from './ratingCode.model';

export class Outsourcing{
  public project: Project;
  public partner: Partner;
  public outsourcingCode: OutsourcingCode;
  public outsourcingAmount: number;
  public ratingCode: RatingCode;
  public product: string;
  public startDate: Date;
  public endDate: Date;

}
