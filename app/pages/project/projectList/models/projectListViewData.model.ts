/*
  프로젝트 목록 테이블 데이터 모델
*/
export class ProjectListViewDataModel {
  public projectId: number;
  public projectName: string;
  public partnerId: string;
  public partnerName: string;
  public contractAmount: number;
  public outsourcingAmount: number;
  public netAmount:number;
  public startDate: Date;
  public endDate: Date;
}
