import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteRoutingHospitalComponent } from './delete-routing-hospital-component';

describe('DeleteRoutingHospitalComponent', () => {
  let component: DeleteRoutingHospitalComponent;
  let fixture: ComponentFixture<DeleteRoutingHospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteRoutingHospitalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteRoutingHospitalComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
