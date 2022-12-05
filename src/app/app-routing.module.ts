import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './compos/contact/contact.component';
import { GaugeChartComponent } from './compos/ngx-charts/gauge-chart/gauge-chart.component';
import { LinearGaugeComponent } from './compos/ngx-charts/linear-gauge/linear-gauge.component';
import { PieChartComponent } from './compos/ngx-charts/pie-chart/pie-chart.component';

const routes: Routes = [
  {path: "Contact", component: ContactComponent},
  {path: "lgc", component: LinearGaugeComponent},
  {path: "gch", component: GaugeChartComponent},
  {path: "pch", component: PieChartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
