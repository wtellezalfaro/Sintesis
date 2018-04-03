//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http , HttpModule } from '@angular/http';
/*
  Generated class for the SolicitudvacacionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SolicitudvacacionService 
{
  //solicitudesvacacion:any[]=[];

  constructor(public http: Http) 
  {
    console.log('Hello SolicitudvacacionProvider Provider');
    this.getsolicitudesbypersonal();
  }

  getsolicitudesbypersonal()
  {
    let url = "http://localhost:55827/api/SolicitudVacacion?personalId=000511";
    this.http.get( url ).map( resp=>resp.json()).subscribe(data=>
                                                                {
                                                                  console.log(data);
                                                                  //this.solicitudesvacacion.push(...data.solicitudesvacacion);
                                                                })
  }

}
