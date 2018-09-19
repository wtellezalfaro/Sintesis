import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Platform } from 'ionic-angular';
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
  public UserId: string;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, 
              public http:HttpClient,
              public storage:Storage,
              private platform:Platform ) 
  {
    if(this.platform.is('cordova'))
    {
      this.storage.get('userId').then(val=>
        {
          if(val)
          {
            this.UserId=val;
          }
          else
          {
            this.UserId='0';
          }
        })
    }
    else
    {
      this.UserId='000066';
    }

    http.get('http://sintesismws.ttsoluciones.com/Employee/GetSaldoDependientes?personal='+this.UserId).subscribe(
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
