import { Component } from '@angular/core';
import { NavController , ToastController, AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public toastCtrl:ToastController, public alertCtrl: AlertController) {

  }
    game() {
      
      const toast =this.toastCtrl.create( {
      message: 'Hola',
      duration: 30000,
      position: 'top'

    } );
      toast.present();

    }

    ShowAlert () {
      
      const alert = this.alertCtrl.create( {
       title: 'Usuario Ganador',
       subTitle: 'Numero Dos',
       buttons: ['ok']
 
     } );
      alert.present();
 
     }


  }


