import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {
  sols:any[]=[];
  
  constructor(public navCtrl: NavController, public http:Http) { 
    console.log('hola');
    //http.get('http://localhost:55827/api/SolicitudVacacion?personalId=000511').subscribe( (data) => {console.log(data); this.sols.push(...data.solicitudes)},(error) => {console.error(error)} )
    this.http.get('http://localhost:55827/api/SolicitudVacacion?personalId=000511').map( resp=>resp.json())
                      .subscribe(data=>{console.log(data);
                                        this.sols.push(...data.solicitudes);
                                        })


    console.log('hola2');
    //console.log(this.sols);
  }

  login() {
    //this.navCtrl.push('LoginPage');
  }

  signup() {
    this.navCtrl.push('SignupPage');
  }
}
