import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { miServiceHospitales } from '../../services/service.hospitales';

@Component({
  selector: 'app-delete-routing-hospital-component',
  standalone: false,
  styleUrl: './delete-routing-hospital-component.css',
  templateUrl: './delete-routing-hospital-component.html',
})
export class DeleteRoutingHospitalComponent implements OnInit {

  mensajeProcesoRouting!: string;

  _idHospital!:number;

  constructor(
    private _active: ActivatedRoute,
    private _cdr: ChangeDetectorRef,
    private _service: miServiceHospitales
  ){}

  async ngOnInit(): Promise<void> {
    this._active.params.subscribe(async (params: Params) => {
      let _id = params['id'];
      this._idHospital = _id;
      this.mensajeProcesoRouting = "Hospital recibido: " + _id;
      this._cdr.detectChanges();
    })
  }

  async borrarRoutingHospital(): Promise<void>{
      let response = await this._service.deleteHospitalAsync(this._idHospital);
      this.mensajeProcesoRouting = "Hospital Borrado Routing";
      this._cdr.detectChanges();
  }

}
