import React from 'react';
import {
  ThemeMappingType,
  ThemeStyleType,
} from 'eva/packages/types';
import {
  ApplicationProvider,
  ThemeType,
} from '@kitten/theme';
import { withNavigation } from './navigation';
import * as Screens from './ui/screen';
import {
  mapping,
  style,
} from 'eva/packages/mapping-kitten/eva';
import { theme } from 'eva/packages/theme/eva';

interface State {
  mapping: ThemeMappingType;
  styles: ThemeStyleType;
  theme: ThemeType;
}

export default class App extends React.Component<any, State> {

  public state: State = {
    mapping: mapping,
    styles: style,
    theme: theme,
  };

  public render(): React.ReactNode {
    const { CheckBoxScreen: RootScreen, ...screens } = Screens;
    const Router: React.ComponentClass = withNavigation(RootScreen, screens);

    return (
      <ApplicationProvider
        styles={this.state.styles}
        theme={this.state.theme}
        mapping={this.state.mapping}>
        <Router/>
      </ApplicationProvider>
    );
  }
}

