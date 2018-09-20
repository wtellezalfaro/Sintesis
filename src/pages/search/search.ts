import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Item } from '../../models/item';
import { Items } from '../../providers/providers';
import { HttpClient } from '@angular/common/http';


@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'search.html'
})
export class SearchPage 
{
  currentItems: Item[];
  days:any[]=[];

  constructor(public navCtrl: NavController, public items: Items, public modalCtrl: ModalController, public http:HttpClient) 
  {
    http.get('http://sintesismws.ttsoluciones.com/Employee/GetAsistencia?personal=000066').subscribe(
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
