import * as React from 'react';
import { App } from './App';

export interface IMainProps
{
  app: App;
}

export class Main extends React.Component<IMainProps, {}>
{
  public render(): JSX.Element
  {
    return (
      <>
        <h1>Hello main</h1>
      </>
    );
  }
}