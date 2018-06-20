import * as React from 'react';

interface MoneyProps {
  targetAge: number,
  currentAge: number,
  daily: number,
};

interface MoneyState {
  money: number,
};

export class Money extends React.Component<MoneyProps, MoneyState> {
  constructor(props: MoneyProps) {
    super(props);
    this.state = {
      money: this.getMoney(),
    };

    setInterval(() => {
      this.setState({
        money: this.getMoney(),
      })
    }, 1000);
    this.getMoney = this.getMoney.bind(this);
  }

  getMoney(): number {
    const remainingYear = this.props.targetAge - this.props.currentAge;
    if (!remainingYear || remainingYear < 0) {
      return 0;
    }
    const now = new Date();
    const lastDate = new Date((now.getFullYear() + remainingYear).toString());
    const secondly = (this.props.daily * 100) / (24 * 36);
    return Math.floor(((lastDate.getTime() - now.getTime()) / 1000) * secondly);
  }

  render() {
    return (
      <h1>{this.state.money.toLocaleString()} ₩</h1>
    );
  }
}
