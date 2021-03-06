import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Item } from '../../models/item';
import { Items } from '../../providers/providers';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'search.html'
})
export class SearchPage 
{
  currentItems: Item[];
  days:any[]=[];
  public UserId: string;

  constructor(public navCtrl: NavController, public items: Items, public modalCtrl: ModalController, public http:HttpClient,
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

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addItem() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item);
      }
    })
    addModal.present();
  }

  /**
   * Delete an item from the list of items.
   */
  deleteItem() {
    
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


  openItem() {
    
  }
  /**
   * Navigate to the detail page for this item.
   */
  /*openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }*/
}
