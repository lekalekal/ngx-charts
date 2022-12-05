import { Component } from '@angular/core';
import { data } from './data';

@Component({
  selector: 'app-linear-gauge',
  templateUrl: './linear-gauge.component.html',
  styleUrls: ['./linear-gauge.component.scss']
})
export class LinearGaugeComponent {
  data: any = data
  single: any
  colorScheme : any = 'cool'
  min: number = 0
  max: number = 100
  value : number = 50
  previousValue : number = 100
  units: string = 'Alertes'
}
