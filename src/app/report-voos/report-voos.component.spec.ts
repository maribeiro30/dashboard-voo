import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportVoosComponent } from './report-voos.component';

describe('ReportVoosComponent', () => {
  let component: ReportVoosComponent;
  let fixture: ComponentFixture<ReportVoosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportVoosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportVoosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
