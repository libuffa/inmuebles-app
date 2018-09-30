import { Component, OnInit, Input } from '@angular/core'
import Inmueble from '../../domain/inmueble'

@Component({
  selector: 'app-inmuebles',
  templateUrl: './inmuebles.component.html',
  styleUrls: ['./inmuebles.component.css']
})
export class InmueblesComponent implements OnInit {

  @Input() inmueble: Inmueble

  ngOnInit() {
  }

}
