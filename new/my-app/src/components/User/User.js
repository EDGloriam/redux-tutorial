import React, {Component} from 'react'
import PropTypes from 'prop-types'
import FacebookLogin from 'react-facebook-login'

export default class User extends Component {
    state = {
        isLoggedIn: false,
        userId: '',
        name: '',
        picture: ''
    }
    responseFacebook = response => {
        this.setState({
            isLoggedIn: true,
            userId: response.userID,
            name: response.name,
            picture: response.picture.data.url
        })
    }
    componentClicked = () => console.log('cklicked');

    render(){
        let fbContent;
        // const { name } = this.props

        if (this.state.isLoggedIn){
            fbContent = (<div>
                <img src={this.state.picture} alt='Avatar'/>
                <p>Привет,<br /> {this.state.name}!</p>
                </div>            
            );
        } else {
            fbContent = <FacebookLogin
            appId="2335375206479800"
            autoLoad={true}
            fields="name,email,picture"
            onClick={this.componentClicked}
            callback={this.responseFacebook} />
        }

        return (
        <div className="ib user">
            {fbContent}
        </div>
        )
    }
}

User.propTypes ={
    name: PropTypes.string.isRequired
}