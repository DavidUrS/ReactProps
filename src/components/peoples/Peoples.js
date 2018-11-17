import React, {Component} from 'react';

class Peoples extends Component{
    render(){
        console.log(this.props)
        const {name, lastname} = this.props;
        return(
            <div>
                <p>Name: {name}</p>
                <p>Lastname: {lastname}</p>
            </div>
        );
    }
}

export default Peoples;