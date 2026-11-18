import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InsertHospitalComponent } from './insert-hospital-component';

describe('InsertHospitalComponent', () => {
  let component: InsertHospitalComponent;
  let fixture: ComponentFixture<InsertHospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsertHospitalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InsertHospitalComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
