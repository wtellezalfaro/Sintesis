import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
/**
 * Generated class for the AsistenciadependientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-asistenciadependientes',
  templateUrl: 'asistenciadependientes.html',
})
export class AsistenciadependientesPage {
  dependientes:any[]=[];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public http:HttpClient) 
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
    console.log('ionViewDidLoad AsistenciadependientesPage');
  }

  itemSelected(item)
  {
    this.navCtrl.push('ItemDetailPage', {
      item: item.codigo
    });
  }

}
