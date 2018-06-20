import * as React from 'react';

import { AutoInput, Box } from 'components';
import { Money } from 'containers';

import './App.scss';

interface AppProps {};

interface AppState {
  currentAge: number,
  targetAge: number,
  daily: number,
};

export class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    const parseResult = this.parseQuery();
    this.state = {
      currentAge: parseInt(parseResult['currentAge'] || '0'),
      targetAge: parseInt(parseResult['targetAge'] || '0'),
      daily: parseInt(parseResult['daily'] || '0'),
    };
  }

  parseQuery(): {[key: string]: string} {
    const pairs = window.location.search.substring(1).split('&');
    const obj: {[key: string]: string} = {};
    for (let i in pairs) {
      if (pairs[i] === '') {
        continue;
      }
      let pair = pairs[i].split('=');
      obj[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }
    return obj;
  }

  render() {
    return (
      <div className="app">
        <Box>
          <h1>현재 나이는?</h1>
          <AutoInput
            value={this.state.currentAge}
            onChange={(e) => {
              this.setState({
                currentAge: parseInt(e.target.value) || 0,
              });
            }}
            scale="살"
          />
        </Box>
        <Box>
          <h1>목표 나이는?</h1>
          <AutoInput
            value={this.state.targetAge}
            onChange={(e) => {
              this.setState({
                targetAge: parseInt(e.target.value) || 0,
              });
            }}
            scale="살"
          />
        </Box>
        <Box>
          <h1>하루에 사용하고 싶은 금액은?</h1>
          <AutoInput
            value={this.state.daily}
            onChange={(e) => {
              this.setState({
                daily: parseInt(e.target.value) || 0,
              });
            }}
            scale="만원"
          />
        </Box>
        <Box>
          <Money
            currentAge={this.state.currentAge}
            targetAge={this.state.targetAge}
            daily={this.state.daily}
          />
        </Box>
      </div>
    );
  }
};
