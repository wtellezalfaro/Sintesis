import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';


@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  item: any;  
  sols:any[]=[];

  constructor(public navCtrl: NavController, navParams: NavParams, public http:HttpClient) 
  {
    this.item = navParams.get('item');

    http.get('http://sintesismws.ttsoluciones.com/Employee/GetAsistencia?personal='+this.item).subscribe(
      (data) => { // Success
        this.sols = data['asistencia'];
        console.log(data['asistencia']);
        /*this.sols.push(...data['solicitudes']);*/
      },
      (error) =>{
        console.error(error);
      }
    );


  }

}
