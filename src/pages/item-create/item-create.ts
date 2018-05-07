import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera } from '@ionic-native/camera';
import { IonicPage, NavController, ViewController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { SolicitudVacacion } from '../../models/solicitudvacacion'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-item-create',
  templateUrl: 'item-create.html'
})
export class ItemCreatePage {
  solicitud: SolicitudVacacion;
  desde:string="";
  hasta:string="";
  dias:number=0;

  constructor(public navCtrl: NavController, 
              public viewCtrl: ViewController, 
              formBuilder: FormBuilder, 
              public alertCtrl: AlertController, 
              public http:HttpClient,
               ) {

                
  }

  /**
   * The user cancelled, so we dismiss without sending data back.
   */
  cancel() {
    this.viewCtrl.dismiss();
  }

  /**
   * The user is done and wants to create the item, so return it
   * back to the presenter.
   */
  done() {
    /*if (!this.form.valid) { return; }
    this.viewCtrl.dismiss(this.form.value);*/
    /*const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })}*/

      const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
 
    

    //let body = JSON.stringify('hola2');

  
    this.solicitud = new SolicitudVacacion('000066',
                                        0,
                                        '05/08/2018',
                                        '05/08/2018',
                                        '05/08/2018',
                                        1,
                                        false,
                                        false,
                                        true,
                                        1,
                                        null,
                                        null,
                                        0,
                                        '',
                                        '',
                                        'Vacacion',
                                          0);
    //this.solicitud.SolicitudFecha='05/05/2018';                                      
    
    let body = JSON.stringify( this.solicitud );           
                                           
     
    this.http.post('http://sintesismws.ttsoluciones.com/api/SolicitudVacacion', body, httpOptions).subscribe(data=>console.log(data), (err)=> console.error("Failed! " + err) );
                                              
     

    /*let alert = this.alertCtrl.create({
      title: 'Low battery',
      subTitle: 'hola',
      buttons: ['Dismiss']
    });
    alert.present();*/
  }

}


