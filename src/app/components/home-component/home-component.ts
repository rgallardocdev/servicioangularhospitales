import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { miServiceHospitales } from '../../services/service.hospitales';
import { miHospital } from '../../models/hospital';

@Component({
  selector: 'app-home-component',
  standalone: false,
  styleUrl: './home-component.css',
  templateUrl: './home-component.html',
})
export class HomeComponent implements OnInit {

  mensajeSaludo!: string;

  arrayHospitales: miHospital[];

  constructor(
    private _service: miServiceHospitales,
    private _cdr: ChangeDetectorRef
  ){
    this.arrayHospitales = [];
  }

  async ngOnInit(): Promise<void>{
    this.mensajeSaludo = this._service.getSaludo();
    this.arrayHospitales = await this._service.getHospitalesAsync();
    this._cdr.detectChanges();
  }
}
