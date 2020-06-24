import React, { Component } from 'react'

export default class CatList extends Component {
    render() {
        return (
            <div>
                <ul>
                {this.props.catPics.map(pic =>{
                    return(
                    <img key={pic.id} src={pic.url} alt={pic.source_url} />
                    )
                })}
                </ul>
            </div>
        )
    }
}
