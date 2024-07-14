import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomePageComponet } from "./pages/home-page/home-page.component";
import { AboutPageComponent } from "./pages/about-page/about-page.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { RouterModule } from "@angular/router";
import { ContactPageComponent } from "./pages/contact-page/contact-page.component";
import { SearchBoxComponent } from './components/search-box/search-box.component';

@NgModule({
  declarations: [
    AboutPageComponent,
    HomePageComponet,
    SidebarComponent,
    ContactPageComponent,
    SearchBoxComponent
  ],
  imports: [
    CommonModule,
    RouterModule // para funcionar el router link debemos agregar esto aunque no temas es la misma instancia :V
  ],
  exports: [
    HomePageComponet,
    AboutPageComponent,
    SidebarComponent,
    ContactPageComponent,
    SearchBoxComponent
  ]
})
export class SharedModule {}
