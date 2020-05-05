import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavItemOneComponent } from './nav-bar/nav-item-one/nav-item-one.component';
import { NavItemThreeComponent } from './nav-bar/nav-item-three/nav-item-three.component';
import { NavItemTwoComponent } from './nav-bar/nav-item-two/nav-item-two.component';
import { StoreModule } from '@ngrx/store';
import { navBarReducer } from './nav-bar/state/nav-bar.reducer';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavItemOneComponent,
    NavItemTwoComponent,
    NavItemThreeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot({data: navBarReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
