// write your CatList component here
import React, { Component } from 'react';

class CatList extends Component {
     renderAllCatPics = () => {
          return this.props.catPics.map(catPic => {
               return (
                    <img key={catPic.id} src={catPic.url} alt={catPic.id}/>
               )
          })
     }
     render() {
          return (
               <React.Fragment>
                    { this.renderAllCatPics() }
               </React.Fragment>
          );
     }
}

export default CatList;