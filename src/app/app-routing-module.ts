import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { InsertHospitalComponent } from './components/insert-hospital-component/insert-hospital-component';
import { DeleteRoutingHospitalComponent } from './components/delete-routing-hospital-component/delete-routing-hospital-component';
import { UpdateRoutingHospitalComponent } from './components/update-routing-hospital-component/update-routing-hospital-component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"inserthospital", component: InsertHospitalComponent},
  {path:"deletehospital/:id", component: DeleteRoutingHospitalComponent},
  {path:"updatehospital/:id", component: UpdateRoutingHospitalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
