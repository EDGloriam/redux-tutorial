import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';


class App extends Component {
  render() {
    const {user, page} =  this.props;

    return (
      <div className="App">
      <header className="App-header">
        <h1 className="App-title">Мой топ фото</h1>
      </header>
      <p>Hi, { user.name}</p>
      <p>You have { page.photos.length } during { page.year } year</p>
    </div>
    );
  }
}

const mapStateToProps = store =>{
  return {
    user: store.user,
    page: store.page
  }
}

export default connect(mapStateToProps)(App);
