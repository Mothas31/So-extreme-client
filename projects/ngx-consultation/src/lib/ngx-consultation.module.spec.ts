import { NgxConsultationModule } from './ngx-consultation.module';

describe('NgxConsultationModule', () => {
  let ngxConsultationModule: NgxConsultationModule;

  beforeEach(() => {
    ngxConsultationModule = new NgxConsultationModule();
  });

  it('should create an instance', () => {
    expect(ngxConsultationModule).toBeTruthy();
  });
});
