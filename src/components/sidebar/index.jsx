import React, { Component } from 'react';
import * as eva from 'eva-icons';
import Tear from '../common/Tear';

import './styles.scss';

class Sidebar extends Component {
  componentDidMount() {
    eva.replace({
      animation: {
        type: 'pulse',
        infinite: true
      },
      class: 'icon-sidebar',
      height: 40,
      width: 40,
      fill: 'white'
    });
  }

  render() {
    return (
      <div className="sidebar-main">
        <Tear sizeClass="icon" />
        <i data-eva="compass-outline" />
        <i data-eva="book-outline" />
        <i data-eva="file-text-outline" />
      </div>
    );
  }
}

export default Sidebar;
