import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuComponent } from './components/menu-component/menu-component';
import { HomeComponent } from './components/home-component/home-component';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { miServiceHospitales } from './services/service.hospitales';
import { InsertHospitalComponent } from './components/insert-hospital-component/insert-hospital-component';
import { DeleteRoutingHospitalComponent } from './components/delete-routing-hospital-component/delete-routing-hospital-component';
import { UpdateRoutingHospitalComponent } from './components/update-routing-hospital-component/update-routing-hospital-component';

@NgModule({
  declarations: [
    App,
    MenuComponent,
    HomeComponent,
    InsertHospitalComponent,
    DeleteRoutingHospitalComponent,
    UpdateRoutingHospitalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient(), miServiceHospitales],
  bootstrap: [App],
})
export class AppModule {}
