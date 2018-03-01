import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import Payments from './Payments'

class Header extends Component {
  renderContent() {
    const data = this.props.auth == null ? null : this.props.auth.data.length;

    switch(data) {
      case null:
        return;

      case 0:
        return <li><a href="/auth/google"> Login With Google </a></li>

      default:
        return [
          <div>
          <li key="1"><Payments /></li>
          <li key="2"><a href="/api/logout">Logout</a></li>
          </div>
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className="new-wrapper">
          <Link to={ this.props.auth ? '/surveys' : '/' } className="left brand-logo">Emaily</Link>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}


const mapStateToProps = ({auth}) =>  {
  return { auth };
}

export default connect(mapStateToProps)(Header);
