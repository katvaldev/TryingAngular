import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddAbuelitoComponent } from './components/add-abuelito/add-abuelito.component';
import { EditAbuelitoComponent } from './components/edit-abuelito/edit-abuelito.component';
import { AbuelitoManagerComponent } from './components/abuelito-manager/abuelito-manager.component';
import { ShowAbuelitoComponent } from './components/show-abuelito/show-abuelito.component';
import { ListAbuelitosComponent } from './components/list-abuelitos/list-abuelitos.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ContactoComponent } from './components/contacto/contacto.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, AddAbuelitoComponent, EditAbuelitoComponent, AbuelitoManagerComponent, ShowAbuelitoComponent, ListAbuelitosComponent, PageNotFoundComponent, HomeComponent, FooterComponent, NosotrosComponent, ContactoComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
