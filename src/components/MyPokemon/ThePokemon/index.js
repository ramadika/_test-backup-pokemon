import React, { Component } from 'react'

export class index extends Component {
    render() {
        const { thePoke } = this.props;
        return (
            <div>
                {thePoke.map(poke => 
                <div>
                    <span className="badge badge-light m-2">{poke.nickname}</span>
                    <span className="badge badge-info m-1">{poke.name}</span>
                    <button className="btn btn-danger btn-sm m-2 ml-5">Delete</button>
                </div>
                )}
            </div>
        )
    }
}

export default index
