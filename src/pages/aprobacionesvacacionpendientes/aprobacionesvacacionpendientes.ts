import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
/**
 * Generated class for the AprobacionesvacacionpendientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aprobacionesvacacionpendientes',
  templateUrl: 'aprobacionesvacacionpendientes.html',
})
export class AprobacionesvacacionpendientesPage {
  sols:any[]=[];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public http:HttpClient) 
  {
    http.get('http://sintesismws.ttsoluciones.com/api/GetVacacionesPendientesAprobacion?personalid=000066').subscribe(
      (data) => { // Success
        this.sols = data['vacacionespendientes'];
        console.log(data['vacacionespendientes']);
        /*this.sols.push(...data['solicitudes']);*/
      },
      (error) =>{
        console.error(error);
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AprobacionesvacacionpendientesPage');
  }

}
