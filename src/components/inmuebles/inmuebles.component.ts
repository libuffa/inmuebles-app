import { Component, OnInit, Input } from '@angular/core'
import Inmueble from '../../domain/inmueble'
import { InmueblesService } from '../../services/inmuebles.service'
import { Router } from '@angular/router'
import { Http } from '@angular/http';

@Component({
  selector: 'app-inmuebles',
  templateUrl: './inmuebles.component.html',
  styleUrls: ['./inmuebles.component.css'],
  providers: [InmueblesService]
})
export class InmueblesComponent implements OnInit {

  inmuebles: Array<Inmueble>
  access_token: string

  /*constructor() {
    this.inmuebles = [
      new Inmueble("1", "Casa Mar del Plata", 1650000, 1, true),
      new Inmueble("2", "Casa Pinamar", 2650000, 1, false)
    ]
  }*/

  constructor(private inmueblesService: InmueblesService, private router: Router) { }

  ngOnInit(): void {

    this.router.routeReuseStrategy.shouldReuseRoute = () => false

    this.access_token = this.inmueblesService.getAuthorize()

    const inmueble = new Inmueble("1", "Casa Mar del Plata - Por favor, NO OFERTAR", 1650000, 1, true)
    this.inmueblesService.postInmueble(this.access_token, inmueble)

  }

}
