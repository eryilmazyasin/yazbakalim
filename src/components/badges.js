import React from 'react';

const badges = (props) => {
    
    return (
        <div className="col-md-12">
            {
                props.badges.map((item, index) => {
                    return (
                        <span className={"font-bold badge p-4 mr-1 mb-1 shadow " + (index == 0 ? 'badge-success' : 'badge-dark')}
                        key={ index }
                        style={{backgroundColor: item.backgroundColor, color: item.color}}
                        >{ item.colorName }</span>       
                    )
                })
            }
     </div>
    )
} 

export default badges;