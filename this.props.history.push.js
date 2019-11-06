
import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'

class Home extends Component {
    onLoggout = () => {

        // way to switch route when onclick, direcly more than Link to
        // not reload page as Link to
        
        this.props.history.push("/login")
        this.props.history.push("/login1")
        this.props.history.push("/login2")
        // or
        this.setTimeout(() => {
            this.props.history.push("/login")

        }, 1000);
        // another
        window.location.href = "http://stackoverflow.com";
        window.location.replace('http://www.example.com')
        window.location.assign('http://www.example.com')
        window.location.href = 'http://www.example.com'
        document.location.href = '/path'


    }
    render() {
        return (
            <div className="App">

                <div>Home page !</div><br/>
                <button onClick={this.onLoggout}>LOGOUT</button>            

            </div>
        );
    }
}
export default Home
