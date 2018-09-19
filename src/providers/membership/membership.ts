import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/*
  Generated class for the MembershipProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MembershipProvider {

  public user:any[]=[];
  public userId:number;
  public UserName:string;
  public Password:string;

  constructor(public http: HttpClient,
              private platform:Platform,
              public storage:Storage) 
  {
    console.log('Hello MembershipProvider Provider');
  }

  VerifyStorage()
  {
    return new Promise((resolve,reject) =>
    {
      if(this.platform.is('cordova'))
      {
        this.storage.get('username').then(val=>
        {
          if(val)
          {
            this.UserName=val;
          }
          else
          {
            resolve(false)
          }
        });

        this.storage.get('password').then(val=>
        {
            if(val)
            {
              this.Password=val;
            }
            else
            {
              resolve(false)
            }
        });
        
        this.VerifyUser(this.UserName, this.Password).then(isUser =>
          {
            if(isUser)
            {
              resolve(true);
            }
            else
            {
              resolve(false);
            }
          })

      }
      else
      {
        resolve(false);
      }
    });
  }

  VerifyUser(username:string, password:string)
  {
    return new Promise((resolve,reject) =>
    {

      this.http.get('http://sintesismws.ttsoluciones.com/api/Employee?username='+username+'&password='+password).subscribe(
      (data) => { // Success
        //console.log(data['user']);  
        if(data!=null)
        {
          this.user=data['employee'];
          console.log(this.user);
          this.userId=data['employee'].codigo;
          this.SaveCredentials(username,password);
          resolve(true);   
        }
        else
        {
          resolve(false);   
        }
      },
      (error) =>{
        console.error(error);
        resolve(false);
      }
    );

    });
  }

  SaveCredentials(username:string, password:string)
  {
    if(this.platform.is('cordova'))
    {
      this.storage.set('username',username);
      this.storage.set('password',password);
      this.storage.set('userId',this.userId.toString());
    }
  }

}
