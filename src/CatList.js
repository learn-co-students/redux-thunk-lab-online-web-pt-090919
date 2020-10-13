import React from 'react';
export const CatList = (props) =>{ 
    debugger
    return( 
        
    <div><ul>{props.cats.map(cat=> <li><img src ={cat.url} /></li> )}</ul></div>
    )

}