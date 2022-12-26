import { Component } from 'react';

import { Card } from './Card/Card';

export class App extends Component {
  state = {
    isBtnClick: false,
  };

  componentDidMount() {
    const isBtnClick = localStorage.getItem('isBtnClick') === 'true';
    this.setState({ isBtnClick });
  }

  componentDidUpdate(_, prevState) {
    if (prevState.isBtnClick !== this.setState.isBtnClick) {
      localStorage.setItem('isBtnClick', this.state.isBtnClick);
    }
  }

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
