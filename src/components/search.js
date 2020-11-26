import React from 'react';

const search = (props) => {
    return (
        <div className="col col-md-6">
            <h5>{props.title}</h5>
            <form onSubmit={ props.formSubmit }>

            <input type="text" className="form-control" onChange={ props.inputHandle } value={ props.value } />
            </form>
            
        </div>        
    )
}

export default search;