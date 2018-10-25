import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';

import User from '../components/User/User'
import Page from '../components/Page/Page'

import { setYear } from '../store/actions/PageActions'


class App extends Component {
  render() {
    const {user, page, setYearAction} =  this.props;
    // console.log(this.props)
    return (
      <div className="App">
      <header className="App-header">
        <h1 className="App-title">Мой топ фото</h1>
      </header>
        <User name={ user.name } />
        <Page photos={ page.photos } year={ page.year } btnClicked={setYearAction} />
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

const mapDispatchToProps = dispatch => {
  return {
    setYearAction: year => dispatch(setYear(year))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
