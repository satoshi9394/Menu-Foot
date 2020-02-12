import React from 'react'



const ShoppingCard = (props) =>{

    const allProducts = props.items.length
    let mensaje;

    if(allProducts>0){
        mensaje=<p>Tienes un total de: {allProducts}</p>
    }else{
        mensaje =<p>Usted no tiene productos selecionados</p>
    }

    return(
    <div>
        <div className="row">
            <div className="col s12">
                <div className="card teal darken-1">
                    <div className="card-content white-text">
                        <h6>Carrito</h6>
                        {mensaje}
                    </div>
                </div>
            </div>
        </div>        
    </div>
    );
}

export default ShoppingCard;