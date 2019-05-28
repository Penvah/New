import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SecondComponent } from './second/second.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [{path:"",component:LoginComponent},{path:"Menu",component:MenuComponent, children:[{path:"Home", component:HomeComponent},{path:"About",component:AboutComponent}, {path:"Contact",component:ContactComponent}]}]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
