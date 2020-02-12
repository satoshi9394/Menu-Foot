import React from 'react'


const Product = (props) =>{
    return(
    <div>
        <div className="row">
            <div className="col s12">
                <div className="card teal darken-1">
                    <div className="card-content white-text">
                        <h5>{props.info.id}.- {props.info.name}</h5>
                        <p>{props.info.description}</p>
                        <p className="right-align">Precion: $ {props.info.price}</p>
                    </div>
                </div>
            </div>
        </div>        
    </div>
    );
}

export default Product;