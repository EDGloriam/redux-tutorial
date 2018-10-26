import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';

import User from '../components/User/User'
import Page from '../components/Page/Page'

import { getPhotos } from '../store/actions/PageActions'


class App extends Component {
  render() {
    const {user, page, setYearAction} =  this.props;
    // console.log(this.props)
    return (
      <div className="app">
      <header className="App-header">
        <h1 className="App-title">Мой топ фото</h1>
      </header>
        <Page photos={ page.photos } year={ page.year } btnClicked={setYearAction} isFetching={page.isFetching} />
        <User name={ user.name } />
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
    setYearAction: year => dispatch(getPhotos(year))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
