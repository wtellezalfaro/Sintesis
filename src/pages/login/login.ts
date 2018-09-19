import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { MembershipProvider } from '../../providers/membership/membership';
import { MainPage } from '../pages';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public UserName: string;
  public Password: string;
  public loginErrorString: string;

  constructor(public navCtrl: NavController,
              public membership: MembershipProvider,
              public toastCtrl: ToastController,
              public translateService: TranslateService) 
    {
      this.membership.VerifyStorage().then(isStorage=>
        {
          if(isStorage)
          {
            this.navCtrl.push(MainPage);
          }
        })
    }

  // Attempt to login in through our User service
  doLogin() 
  {
    this.membership.VerifyUser(this.UserName, this.Password).then(isUser =>
      {
        if(isUser)
        {
          this.navCtrl.push(MainPage);
        }
        else
        {
          this.loginErrorString='Credenciales no válidas';
        }
      })
  }
    /*this.user.login(this.account).subscribe((resp) => {
      this.navCtrl.push(MainPage);
    }, (err) => {
      this.navCtrl.push(MainPage);
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: this.loginErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }*/
}
