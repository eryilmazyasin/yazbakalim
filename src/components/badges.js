import React from 'react';

const badges = (props) => {

    const firstItem = props.words[0];
    
    
    return (
        <div className="col-md-12">
            { props.words.map((word, index) => {
                return (
                    <span className={"badge p-4 mr-1 mb-1 " + (index == 0 ? 'badge-success' : 'badge-dark')} key={ index }>{ word }</span>       
                )
            }) }
     </div>
    )
} 

export default badges;