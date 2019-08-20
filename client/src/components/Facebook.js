import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import axios from "axios"

export default class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userID: '',
    name: '',
    email: '',
    picture: ''
  };

  componentDidUpdate() {
    console.log("this is firing")
    const user = {
      name: this.state.name,
      facebookID: this.state.userID
    }
    
      axios.post("/api/user/", { user }).then(res => {
        console.log(res.data);
      })
    
  }

  responseFacebook = response => {
    console.log(response);

    if (response.status === "unknown") return;
    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    });
    console.log(this.state);
    const user = {
      name: this.state.name,
      facebookID: this.state.userID
    }
    
      axios.post("/api/user/", { user }).then(res => {
        console.log(res.data);
      })

  };

  componentClicked = () => console.log('clicked');

  render() {
    let fbContent;

    if (this.state.isLoggedIn) {
      fbContent = (
        <div
          style={{
            width: '400px',
            margin: 'auto',
            background: '#f4f4f4',
            padding: '20px'
          }}
        >
          <img src={this.state.picture} alt={this.state.name} />
          <h2>Welcome {this.state.name}</h2>
          Email: {this.state.email}
        </div>
      );
    } else {
      fbContent = (
        <FacebookLogin
          appId="744296316002023"
          autoLoad={false}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }
    return <div>{fbContent}</div>;
  }
}
