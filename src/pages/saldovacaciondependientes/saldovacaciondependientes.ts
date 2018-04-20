import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the SaldovacaciondependientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-saldovacaciondependientes',
  templateUrl: 'saldovacaciondependientes.html',
})
export class SaldovacaciondependientesPage {
  dependientes:any[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient) 
  {
    http.get('http://sintesismws.ttsoluciones.com/Employee/GetSaldoDependientes?personal=000066').subscribe(
      (data) => { // Success
        this.dependientes = data['saldodependientes'];
        console.log(data['saldodependientes']);
        
      },
      (error) =>{
        console.error(error);
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SaldovacaciondependientesPage');
  }

}
