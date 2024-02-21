import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfoiloComponent } from './portfoilo/portfoilo.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:"" , redirectTo:"home",pathMatch:"full"},
  {path:"home", component:HomeComponent,title:"Home"},
  {path:"about", component:AboutComponent,title:"About"},
  {path:"portfoilo", component:PortfoiloComponent,title:"Portfoilo"},
  {path:"contact", component:ContactComponent,title:"Contact"},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
