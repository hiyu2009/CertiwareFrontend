import { DeptCode } from '../../../common/models/deptCode.model';
import { PartnerCode }  from '../../../common/models/partnerCode.model';
import { BussinessCode } from '../../../common/models/bussinessCode.model';
import { RatingCode } from '../../../common/models/ratingCode.model';

//프로젝트 조회 선택 목록(부서) 코드 모델
export class ProjectCodeModel {
    public deptCodeModels: DeptCode[];
    public partnerCodeModels: PartnerCode[];
    public businessCodeModels: BussinessCode[];
    public ratingCodeModels: RatingCode[];
}
