import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { TopWidgetsComponent } from './top-widgets/top-widgets.component';
import { AreaChartComponent } from './area-chart/area-chart.component';
import { GaugesComponent } from './gauges/gauges.component';
import { TableComponent } from './table/table.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HighchartsChartModule } from 'highcharts-angular';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    DashboardComponent,
    TopWidgetsComponent,
    AreaChartComponent,
    GaugesComponent,
    TableComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    HighchartsChartModule,
    MatTableModule,
    MatPaginatorModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
