import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers/providers';

import { HttpBackend } from '@angular/common/http/src/backend';


@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage 
{
  currentItems: Item[];
  sols:any[]=[];

  constructor(public navCtrl: NavController, public items: Items, public modalCtrl: ModalController) 
  {
    /*this.http.get('http://localhost:55827/api/SolicitudVacacion?personalId=000511').map( resp=>resp.json())
                      .subscribe(data=>{console.log(data);
                                        this.sols.push(...data.solicitudes);
                                        })
                                        console.log(this.sols);*/
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
