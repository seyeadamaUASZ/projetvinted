import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LoadingController, ToastController, AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loadData={login:'',motdepasse:''} 
  constructor(public authS:AuthService, public loadingController:LoadingController,
    public router:Router,
    private toastController: ToastController,
    private alertCtrl: AlertController,public nav:NavController) { }

  ngOnInit() {
  }

  async login(){
    const loading = await this.loadingController.create({
      message:"Please wait !!!",
      duration:3000
    });
    await loading.present()
    this.authS.login(this.loadData).subscribe(
      res=>{
        console.log(res)
        loading.dismiss()
        this.router.navigate(['menu']);
      },err=>{
        loading.dismiss();
         console.log(err);
      }
    )
  }

  gotoSign(){
    this.nav.navigateRoot("signup");
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
