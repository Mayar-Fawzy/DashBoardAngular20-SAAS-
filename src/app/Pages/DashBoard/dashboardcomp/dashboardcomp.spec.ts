import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboardcomp } from './dashboardcomp';

describe('Dashboardcomp', () => {
  let component: Dashboardcomp;
  let fixture: ComponentFixture<Dashboardcomp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dashboardcomp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dashboardcomp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
