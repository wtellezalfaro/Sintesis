import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';


@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  itemNav: any;  
  days:any[]=[];

  constructor(public navCtrl: NavController, navParams: NavParams, public http:HttpClient) 
  {
    this.itemNav = navParams.get('item');

    http.get('http://sintesismws.ttsoluciones.com/Employee/GetAsistencia?personal='+this.itemNav).subscribe(
      (data) => { // Success
        this.days = data['asistencia'];
        console.log(data['asistencia']);
        /*this.sols.push(...data['solicitudes']);*/
      },
      (error) =>{
        console.error(error);
      }
    );


  }

  getColor(tipo:string)
  {
    if(tipo=='FaltaInjustificada')
      return 'red';
    
    if(tipo=='Retraso')
      return 'orange';
    
    if(tipo=='SinNovedad')
      return 'green';

    if(tipo=='Vacacion')
      return 'cyan';
  }

}
