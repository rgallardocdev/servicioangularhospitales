import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { miHospital } from '../../models/hospital';
import { ActivatedRoute, Params } from '@angular/router';
import { miServiceHospitales } from '../../services/service.hospitales';

@Component({
  selector: 'app-update-routing-hospital-component',
  standalone: false,
  styleUrl: './update-routing-hospital-component.css',
  templateUrl: './update-routing-hospital-component.html',
})
export class UpdateRoutingHospitalComponent implements OnInit {

  @ViewChild("cajaid") _cajaid!: ElementRef;
  @ViewChild("cajanombre") _cajanombre!: ElementRef;
  @ViewChild("cajadireccion") _cajadireccion!: ElementRef
  @ViewChild("cajatelefono") _cajatelefono!: ElementRef;
  @ViewChild("cajacamas") _cajacamas!: ElementRef;

  mensajeProceso!: string;
  _hospital!: miHospital;

  mensajeProcesoRouting!: string;
  mensajeProcesoModificar!: string;

  _idHospital!: number;

  constructor(
    private _cdr: ChangeDetectorRef,
    private _active: ActivatedRoute,
    private _service: miServiceHospitales
  ){}

  async ngOnInit(): Promise<void> {
    this._active.params.subscribe(async (params: Params) => {
      let _id = params['id'];
      this._idHospital = _id;
      this.mensajeProcesoRouting = "Hospital. recibido: " + _id;
      this._cdr.detectChanges();
    })    
  }

  async modificarRoutingHospital(): Promise<void>{
    console.log("entrando");
    let _nombre = this._cajanombre.nativeElement.value;
    let _direccion = this._cajadireccion.nativeElement.value;
    let _telefono = this._cajatelefono.nativeElement.value;
    let _camas = parseInt(this._cajacamas.nativeElement.value);    
    let _hospital = new miHospital(this._idHospital,_nombre,_direccion, _telefono, _camas);
    let response = await this._service.putHospitalAsync(_hospital);
    this.mensajeProcesoModificar = "Hospital. modificado: " + this._idHospital;
    this._cdr.detectChanges();
  }


  
}
