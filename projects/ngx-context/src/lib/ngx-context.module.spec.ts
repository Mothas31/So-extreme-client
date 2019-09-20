import { NgxContextModule } from './ngx-context.module';

describe('NgxContextModule', () => {
  let ngxContextModule: NgxContextModule;

  beforeEach(() => {
    ngxContextModule = new NgxContextModule();
  });

  it('should create an instance', () => {
    expect(ngxContextModule).toBeTruthy();
  });
});
