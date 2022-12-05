import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './compos/shared/navbar/navbar.component';
import { ContactComponent } from './compos/contact/contact.component';
import { LinearGaugeComponent } from './compos/ngx-charts/linear-gauge/linear-gauge.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { GaugeChartComponent } from './compos/ngx-charts/gauge-chart/gauge-chart.component';
import { PieChartComponent } from './compos/ngx-charts/pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactComponent,
    LinearGaugeComponent,
    GaugeChartComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
