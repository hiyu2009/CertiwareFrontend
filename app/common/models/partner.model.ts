import {BussinessCode} from './bussinessCode.model';
import {PartnerCode} from './partnerCode.model';

export class Partner{
  public partnerId: number;
  public partnerName: string;
  public partnerType: PartnerCode;
  public bussinessNumber: number;
  public bussinessType: BussinessCode;
  public createDate: Date;
}
