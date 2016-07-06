import React, {Component} from 'react';

export default class Header extends Component {
  render() {
    return <div className='page-header'>
      <div className='branding'>{this.props.text}</div>
      { this.props.children }
    </div>;
  }
}
