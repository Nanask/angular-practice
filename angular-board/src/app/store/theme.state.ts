import { Injectable } from '@angular/core';
import { Action, State, StateContext, Store } from '@ngxs/store';
import { SetTheme } from './theme.action';

export enum ThemeEnum {
  LIGHT = 'light',
  DARK = 'dark',
}

@State<string>({
  name: 'theme',
  defaults: null,
})
@Injectable()
export class ThemeState {
  constructor(private store: Store) {}

  @Action(SetTheme)
  setTheme(context: StateContext<string>) {
    const theme = localStorage.getItem('theme');

    if (!theme) {
      localStorage.setItem('theme', ThemeEnum.LIGHT);
      context.setState(ThemeEnum.LIGHT);
    } else {
      context.setState(theme);
    }
  }
}
