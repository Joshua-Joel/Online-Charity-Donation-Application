import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundraiserSignupComponent } from './funderaiser.component';

describe('FunderaiserComponent', () => {
  let component: FundraiserSignupComponent;
  let fixture: ComponentFixture<FundraiserSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundraiserSignupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FundraiserSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
