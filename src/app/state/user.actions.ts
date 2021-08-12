import { createAction, props } from '@ngrx/store';

import { User } from '../models/user.model';

export const login = createAction(
  '[Login] Login',
  props<{ username: string; password: string }>(),
);

export const loginSuccess = createAction(
  '[API] Login Success',
  props<{ user: User }>(),
);

export const loginFailed = createAction('[API] Login Failed');

export const logout = createAction('[Dashboard] Logout');

export const setUser = createAction(
  '[Dashboard] Set User',
  props<{ user: User }>(),
);
