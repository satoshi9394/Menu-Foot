import React from 'react'
import BtnAdd from './BtnAdd'


const Product = (props) =>{
    return(
        <div className="col s5">
            <div className="card teal darken-1">
                <div className="card-image">
                    <img src={props.info.img} alt=""/>
                </div>
                <div className="card-content white-text">
                    <h5>{props.info.id}.- {props.info.name}</h5>
                    <p>{props.info.description}</p>
                    <p className="right-align">Precion: $ {props.info.price}</p>
                    <BtnAdd/>
                </div>
            </div>     
        </div> 
    );
}

export default Product;