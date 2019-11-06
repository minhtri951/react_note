
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
