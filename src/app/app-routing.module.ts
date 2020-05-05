import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from './can-deactivate.guard';
import { NavItemOneComponent } from './nav-bar/nav-item-one/nav-item-one.component';
import { NavItemThreeComponent } from './nav-bar/nav-item-three/nav-item-three.component';
import { NavItemTwoComponent } from './nav-bar/nav-item-two/nav-item-two.component';


const routes: Routes = [
  { path: 'nav-item-one', component: NavItemOneComponent, canDeactivate: [CanDeactivateGuard] },
  { path: 'nav-item-two', component: NavItemTwoComponent, canDeactivate: [CanDeactivateGuard] },
  { path: 'nav-item-three', component: NavItemThreeComponent, canDeactivate: [CanDeactivateGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
