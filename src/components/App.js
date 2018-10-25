import React, { Component } from 'react' 
import { connect } from 'react-redux'
import User from './User' 
import Page from './Page'
import setYear from '../actions/PageActions'

class App extends Component {
  render() {
    const { user, page, setYearAction} = this.props
    console.log(user);
    console.log('*****************');
    console.log(page);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Мой топ фото</h1>
        </header>
        <User name={user.name} />
        <Page photos={page.photos} year={page.year} setYear={setYearAction} />
      </div>
    )
  }
}

//мы хотим отрезать от нашего общего пирога (Store) только те кусочки (редьюсеры), которые нам нужны и подписываемся на изменение этих данных
const mapStateToProps = store => {
  return {
    user: store.user,
    page: store.page,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setYearAction: year => dispatch(setYear(year)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
