import { Component } from 'react';

import { Card } from './Card/Card';

export class App extends Component {
  state = {
    isBtnClick: false,
  };
  onBtnClick = () => {
    this.setState(prevState => {
      return { isBtnClick: !prevState.isBtnClick };
    });
  };
  render() {
    const { isBtnClick } = this.state;
    return <Card onBtnClick={this.onBtnClick} isClicked={isBtnClick} />;
  }
}
