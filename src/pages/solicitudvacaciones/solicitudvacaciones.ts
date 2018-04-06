import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
/**
 * Generated class for the SolicitudvacacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-solicitudvacaciones',
  templateUrl: 'solicitudvacaciones.html',
})
export class SolicitudvacacionesPage {


  sols:any[]=[];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public http:HttpClient) 
  {
    http.get('http://sintesismws.ttsoluciones.com/api/solicitudvacacion?personalid=000066').subscribe(
      (data) => { // Success
        this.sols = data['solicitudes'];
        console.log(data['solicitudes']);
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
