import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { CanDeactivateGuard } from 'src/app/can-deactivate.guard';
import { NavItemOneDTO, NavBarState } from '../nav-item.model';
import { navToItemOne } from '../state/nav-bar-page.actions';

@Component({
  selector: 'app-nav-item-one',
  templateUrl: './nav-item-one.component.html',
  styleUrls: ['./nav-item-one.component.css']
})
export class NavItemOneComponent implements OnInit, CanDeactivateGuard {
  navItemOneForm: FormGroup;
  navItemOneDTO: NavItemOneDTO;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<{ data: NavBarState }>) {
    store.pipe(select('data')).subscribe(value => {
      this.navItemOneDTO = value.navItemOneDTO;
    });
  }

  ngOnInit(): void {
    this.navItemOneForm = this.formBuilder.group({
      firstName: [this.navItemOneDTO.firstName, Validators.required],
      lastName: [this.navItemOneDTO.lastName, Validators.required]
    });
  }

  canDeactivate(): boolean {
    if (this.navItemOneForm.invalid) {
      alert('Correct validation errors to move to the other nav items');
      return false;
    }
    this.store.dispatch(navToItemOne({ navItemOne: this.navItemOneForm.value }));
    return true;
  }

}
