import { Component } from '@angular/core';
import { data } from './data';

@Component({
  selector: 'app-gauge-chart',
  templateUrl: './gauge-chart.component.html',
  styleUrls: ['./gauge-chart.component.scss']
})
export class GaugeChartComponent {
  data: any = data
  legend: boolean = true
  legendPosition: any = 'right';

  colorScheme : any = 'vivid'
}
