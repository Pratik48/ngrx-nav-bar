import { Action, createReducer, on } from '@ngrx/store';
import { NavBarState, NavItemOneDTO } from '../nav-item.model';
import * as NavBarPageActions from './nav-bar-page.actions';

const initialState: NavBarState = {
    navItemOneDTO: new NavItemOneDTO(),
    navItemTwoDTO: null,
    navItemThreeDTO: null
};

const reducer = createReducer(
    initialState,
    on(NavBarPageActions.navToItemOne, (state, {navItemOne}) => ({...state, navItemOneDTO: navItemOne})),
    on(NavBarPageActions.navToItemTwo, state => ({...state})),
    on(NavBarPageActions.navToItemThree, state => ({...state}))
)

export function navBarReducer(state: NavBarState | undefined, action: Action) {
    console.log(state);
    console.log(action);
    return reducer(state, action);
}
