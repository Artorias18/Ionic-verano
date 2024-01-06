import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data:any;
  constructor(private activateRoute : ActivatedRoute,
    private router:Router,public alertController: AlertController) {
      this.activateRoute.queryParams.subscribe(params =>{
        if (this.router.getCurrentNavigation()?.extras.state){
          this.data=this.router.getCurrentNavigation()?.extras.state?.["User"];
          console.log(this.data)
        }else{
          this.router.navigate(["/login"]);
        }
      })
    }




  segmentChanged($event:any){
    console.log($event)
    let direccion=$event.detail.value
    this.router.navigate(["home/"+direccion])

  }
}
