import { Injectable } from "@angular/core";
import { miHospital } from "../models/hospital";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment.development";
import { firstValueFrom } from "rxjs";

@Injectable()

export class miServiceHospitales{

    getSaludo():string{
        return "Bienvenidos a la pagina de APIs de Hospitales";
    }

    constructor(
        private _http: HttpClient
    ){}

    async getHospitalesAsync(): Promise<miHospital[]>{
        let request = "/api/Hospitales";
        let ruta = environment.apihospitales + request;
        let response = await firstValueFrom(this._http.get<miHospital[]>(ruta));
        return response;
    }

    //Insert
    async postHospitalAsync(_hospital: miHospital): Promise<any>{
        console.log("inserto");
        let request = "/api/Hospitales";
        let ruta = environment.apihospitales + request;
        let header = new HttpHeaders().set("content-type","application/json");
        let response = await firstValueFrom(this._http.post(ruta, _hospital, {headers: header}));
        console.log(response);
        return response;
    }

    //Modificar
    async putHospitalAsync(_hospital: miHospital): Promise<any>{
        let request = "/api/Hospitales";
        let ruta = environment.apihospitales + request;
        let header = new HttpHeaders().set("content-type","application/json");
        let response = await firstValueFrom(this._http.put(ruta, _hospital, {headers:header}));
        return response;
    }

    //Delete
    async deleteHospitalAsync(_id: number): Promise<any>{
        let request = "/api/Hospitales/" + _id;
        let ruta = environment.apihospitales + request;
        let response = await firstValueFrom(this._http.delete(ruta));
        return response;
    }



}