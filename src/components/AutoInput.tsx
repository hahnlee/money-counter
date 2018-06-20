import * as React from 'react';

import './AutoInput.scss';

interface AutoInputProp {
  value: number,
  scale: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
};

interface AutoInputState {};

export
class AutoInput extends React.Component<AutoInputProp, AutoInputState> {
  constructor(prop: AutoInputProp) {
    super(prop);
    this.getWidth = this.getWidth.bind(this);
  }

  getWidth(): string {
    const htmlElement = document.createElement('span');
    htmlElement.className = 'hide-input';
    const hideElement = document.body.appendChild(htmlElement);
    hideElement.textContent = this.props.value.toString();
    const width = `${hideElement.offsetWidth + 16}px`;
    hideElement.remove();
    return width;
  }

  render() {
    return (
      <div className="input-wrap">
        <input
          type="number"
          style={{
            width: this.getWidth(),
          }}
          value={this.props.value}
          onChange={this.props.onChange}
        />
        <label>{this.props.scale}</label>
      </div>
    );
  }
}
