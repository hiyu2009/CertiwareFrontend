import {DeptCode} from './deptCode.model';
import {Partner} from './partner.model';

export class Project{
  public projectId: number;
  public projectNamr: string;
  public deptCode: DeptCode;
  public partnerId: Partner;
  public startDate: Date;
  public endDate: Date;
  public contractAmount: number;
  public supplyAmount: number;
  public vtaAmount: number;
  public outsourcing_aomut: number;
  public netAmount: number;
  public remarks: string;
}
