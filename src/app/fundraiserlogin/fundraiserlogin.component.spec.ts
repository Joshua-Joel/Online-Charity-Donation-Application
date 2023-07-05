import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundraiserloginComponent } from './fundraiserlogin.component';

describe('FundraiserloginComponent', () => {
  let component: FundraiserloginComponent;
  let fixture: ComponentFixture<FundraiserloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundraiserloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FundraiserloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
