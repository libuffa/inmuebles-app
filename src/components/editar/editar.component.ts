import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { InmueblesService } from '../../services/inmuebles.service'
import { StubInmueblesService } from '../../services/inmuebles.service'
import Inmueble from '../../domain/inmueble'

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
  providers: [InmueblesService]
})
export class EditarComponent implements OnInit {

  inmueble$: Inmueble
  access_token: string

  constructor(private inmueblesService: StubInmueblesService, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.inmueble$ = this.inmueblesService.getInmuebleById(params['id'])
    })
    // Truco para que refresque la pantalla 
    this.router.routeReuseStrategy.shouldReuseRoute = () => false
  }

  ngOnInit() { }

  navegarAHome() {
    this.router.navigate(['/inmuebles'])
  }

  actualizarInmueble() {
    const ACCESS_TOKEN = this.inmueblesService.getAuthorize()
    this.inmueblesService.actualizarInmueble(ACCESS_TOKEN, this.inmueble$)
    this.navegarAHome()
  }

}
