import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  data: any;
  User = {
    user: "",
    password: "",
  }
  field: string;
  constructor(public toastController: ToastController, public router: Router) { }

  ngOnInit() {
  }

  ingresar() {
    console.log(this.User)
    if (this.validateModel(this.User)) {
      this.presentToast('top', 'Bienvenido ' + this.User.user);
      let navigationextras: NavigationExtras = {
        state: {
          User: this.User
        }

      }
      this.router.navigate(['/home'], navigationextras);
    } else {
      this.presentToast('bottom', 'Falta: ' + this.field, 5000)
    }
  }

  validateModel(model:any){
    for(var[key, value] of Object.entries(model)){
      if (value==""){
        this.field=key
        return false;
      }
    }
    return true;
  }














  async presentToast(position: 'top' | 'middle' | 'bottom',
    message: string,
    duration?: number) {
    const toast = await this.toastController.create({
      message: message,
      duration: duration ? duration : 2500,
      position: position,
    });

    await toast.present();

  }

}
