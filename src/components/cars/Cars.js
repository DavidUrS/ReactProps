import React, {Component} from 'react';

class Cars extends Component{
    render(){
        console.log(this.props)
        return(
            <div className='Cars'>
                <p>Marca: {this.props.modelo}</p>
                <p>Modelo: {this.props.marca}</p>
            </div>
        )
    }
}

export default Cars;