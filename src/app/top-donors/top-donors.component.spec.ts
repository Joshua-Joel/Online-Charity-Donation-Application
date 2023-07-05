import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDonorsComponent } from './top-donors.component';

describe('TopDonorsComponent', () => {
  let component: TopDonorsComponent;
  let fixture: ComponentFixture<TopDonorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopDonorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopDonorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
