import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera } from '@ionic-native/camera';
import { IonicPage, NavController, ViewController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { SolicitudVacacion } from '../../models/solicitudvacacion'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { Platform } from 'ionic-angular';

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
  days:any[]=[];
  public UserId: string;

  constructor(public navCtrl: NavController, 
              public viewCtrl: ViewController, 
              formBuilder: FormBuilder, 
              public alertCtrl: AlertController, 
              public http:HttpClient,
              public storage:Storage,
              private platform:Platform   )               
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

    http.get('http://sintesismws.ttsoluciones.com/Employee/GetAsistencia?personal='+this.UserId).subscribe(
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
 
  /**
   * The user cancelled, so we dismiss without sending data back.
   */
  cancel() {
    this.viewCtrl.dismiss();
  }

  
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

  
    /*this.solicitud = new SolicitudVacacion('000066',
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
                                     
    */
    let body = JSON.stringify( this.days );           
                                           
     
    this.http.post('http://sintesismws.ttsoluciones.com/api/SolicitudVacacion', body, httpOptions).subscribe(data=>this.showSuccesAlert(data), (err)=> console.error("Failed! " + err) );
         
        
    //console.log(body);
     

    /*let alert = this.alertCtrl.create({
      title: 'Low battery',
      subTitle: 'hola',
      buttons: ['Dismiss']
    });
    alert.present();*/
  }

  showSuccesAlert(data:any) {
    const alert = this.alertCtrl.create({
      title: 'Solicitud Registrada!',
      subTitle: 'La prospección fue registrada Exitosamente!'+data,
      buttons: ['OK']
    });
    alert.present();
  }

}


