import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartenershipComponent } from './partenership.component';

describe('PartenershipComponent', () => {
  let component: PartenershipComponent;
  let fixture: ComponentFixture<PartenershipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartenershipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartenershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
