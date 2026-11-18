import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { miHospital } from '../../models/hospital';
import { miServiceHospitales } from '../../services/service.hospitales';

@Component({
  selector: 'app-insert-hospital-component',
  standalone: false,
  styleUrl: './insert-hospital-component.css',
  templateUrl: './insert-hospital-component.html',
})
export class InsertHospitalComponent {

  @ViewChild("cajaid") _cajaid!: ElementRef;
  @ViewChild("cajanombre") _cajanombre!: ElementRef;
  @ViewChild("cajadireccion") _cajadireccion!: ElementRef
  @ViewChild("cajatelefono") _cajatelefono!: ElementRef;
  @ViewChild("cajacamas") _cajacamas!: ElementRef;

  mensajeProceso!: string;
  _Hospital!: miHospital;

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: miServiceHospitales
  ) { }

  async insertarHospital(): Promise<void>{
    console.log("insertamos");
    let _id = parseInt(this._cajaid.nativeElement.value);
    let _nombre = this._cajanombre.nativeElement.value;
    let _direccion = this._cajadireccion.nativeElement.value;
    let _telefono = this._cajatelefono.nativeElement.value;
    let _camas = parseInt(this._cajacamas.nativeElement.value);
    this._Hospital = new miHospital(_id, _nombre, _direccion, _telefono, _camas);
    let response = await this._service.postHospitalAsync(this._Hospital);
    this.mensajeProceso = "Hospital creado";
    this._cdr.detectChanges();
  }
  
}
