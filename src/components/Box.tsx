import * as React from 'react';

import './Box.scss';

interface BoxProp {
  children: React.ReactNode,
};

export const Box: React.SFC<BoxProp> = ({children}) => (
  <section className="box">
    <div className="box-children-wrap">
      {children}
    </div>
  </section>
);
