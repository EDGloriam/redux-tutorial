import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Page extends Component{
    onBtnClick = e => {
        const year = +e.currentTarget.innerText;
        this.props.btnClicked(year);
    }

    render(){
        const { year, photos } = this.props

        return (
        <div>
            <button onClick={this.onBtnClick}>2018</button>
            <button onClick={this.onBtnClick}>2017</button>
            <button onClick={this.onBtnClick}>2016</button>
            <button onClick={this.onBtnClick}>2015</button>
            <button onClick={this.onBtnClick}>2014</button>
            <p>
                У тебя {photos.length} фото за {year} год
            </p>
        </div>
        )
    }
}

Page.propTypes ={
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
    btnClicked: PropTypes.func.isRequired
}