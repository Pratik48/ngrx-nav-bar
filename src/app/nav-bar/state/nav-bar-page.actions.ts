import { createAction, props } from '@ngrx/store';
import { NavItemOneDTO } from '../nav-item.model';

export const navToItemOne = createAction('[Nav Bar Page] Nav to Item One', props<{ navItemOne: NavItemOneDTO }>());
export const navToItemTwo = createAction('[Nav Bar Page] Nav to Item Two');
export const navToItemThree = createAction('[Nav Bar Page] Nav to Item Three');
