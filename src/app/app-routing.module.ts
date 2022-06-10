import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AbuelitoManagerComponent } from "./components/abuelito-manager/abuelito-manager.component";
import { AddAbuelitoComponent } from "./components/add-abuelito/add-abuelito.component";
import { EditAbuelitoComponent } from "./components/edit-abuelito/edit-abuelito.component";
import { HomeComponent } from "./components/home/home.component";
import { ListAbuelitosComponent } from "./components/list-abuelitos/list-abuelitos.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { ShowAbuelitoComponent } from "./components/show-abuelito/show-abuelito.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "abuelitos", component: ListAbuelitosComponent },
  { path: "abuelitos/admin", component: AbuelitoManagerComponent },
  { path: "abuelito/add", component: AddAbuelitoComponent },
  { path: "abuelito/:abueId", component: ShowAbuelitoComponent },
  { path: "abuelito/edit/:abueId", component: EditAbuelitoComponent },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
