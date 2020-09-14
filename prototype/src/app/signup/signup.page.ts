import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController, AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  loadData:any={nom:'',prenom:'',email:'',login:'',motdepasse:'',telephone:'',adresse:'',typeUser:''};  
  constructor(public authS:AuthService, public loadingController:LoadingController,
    public router:Router,
    private toastController: ToastController,
    private alertCtrl: AlertController,public nav:NavController) { }

  ngOnInit() {
  }

  async saveUser(){
    const loading = await this.loadingController.create({
      message:"Please wait !!!",
      duration:3000
    });
    await loading.present();
    this.loadData.typeUser='user';

    this.authS.saveUser(this.loadData).subscribe(res=>{
      console.log(res)
      loading.dismiss()
      this.router.navigate(['login']);
    },err=>{
      loading.dismiss();
      console.log(err);
    })
  }

  async presentAlert(mgs) {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      message: mgs,
      buttons: ['OK']
    });

    await alert.present();
  
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }


}
