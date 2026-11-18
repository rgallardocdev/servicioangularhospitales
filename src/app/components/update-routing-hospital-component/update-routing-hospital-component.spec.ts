import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateRoutingHospitalComponent } from './update-routing-hospital-component';

describe('UpdateRoutingHospitalComponent', () => {
  let component: UpdateRoutingHospitalComponent;
  let fixture: ComponentFixture<UpdateRoutingHospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateRoutingHospitalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateRoutingHospitalComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
