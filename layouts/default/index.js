import React from 'react';
import './global.scss';
import { firePageView } from 'lib/gtag';

class DefaultLayout extends React.Component {
  componentDidMount() {
    firePageView(window.location.pathname);
  }

  render() {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
}

export default DefaultLayout;
