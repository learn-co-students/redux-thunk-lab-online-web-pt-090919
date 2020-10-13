import React from 'react'

const CatList = props => {
return (
    <div>
       {props.catPics.map(catPic => 
       <div>
           <img 
           alt='I AM A CAT'
           key={catPic.id} 
           src={catPic.url}/>
        </div>)}
    </div>
  );
}

export default CatList;
