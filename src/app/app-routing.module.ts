import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AreaChartComponent } from './area-chart/area-chart.component';
import { GaugesComponent } from './gauges/gauges.component';
import { TableComponent } from './table/table.component';
import { ContactsComponent } from './contacts/contacts.component';


const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'area-chart',component:AreaChartComponent},
  {path:'gauges',component:GaugesComponent},
  {path:'table',component:TableComponent},
  {path:'contacts',component:ContactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
