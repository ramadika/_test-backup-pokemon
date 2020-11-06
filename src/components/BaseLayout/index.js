// Dependencies
import React, { Component } from 'react'
// Internals
import NavBar from 'components/BaseLayout/NavBar'
import Footer from 'components/BaseLayout/Footer'

export default class index extends Component {
    
    render() {
        return (
            <div>
                <NavBar />
                {this.props.children} 
                <Footer />
            </div>
        )
    }
}
