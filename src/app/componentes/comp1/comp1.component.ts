import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss'],
})
export class Comp1Component  implements OnInit {
data:any;
card:any[]=[
  {id:1,titulo:"Gatita 3 meses",descripcion:"Gatita de 3 meses muy cariñosa, juguetona y sabe hacer en arenero",vacunas:"Vacunas al día y desparacitada",Img:"../../../assets/img/toffy.jpg"},
  {id:1,titulo:"Gatita 2 meses",descripcion:"Gatita de 2 meses muy cariñosa, dormilona y sabe hacer en arenero",vacunas:"1 de 3 vacunas y desparacitada", Img:"../../../assets/img/ñuki.jpg"},
  {id:1,titulo:"Gatito de 1 mes",descripcion:"Gatito de 2 meses muy jugueton, un poco timido y sabe hacer en arenero",vacunas:"0 de 3 vacunas y desparacitado",Img:"../../../assets/img/ratoncito.jpg"},
]

  constructor() { }

  ngOnInit() {}

}
