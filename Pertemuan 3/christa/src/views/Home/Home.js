import React from 'react';
import "../../css/bootstrap.min.css";
import Header from '../../components/Header/Header';
export default class Home extends React.Component{

render () {
    return(
        <div className = 'container text-center'>
            <Header/>
        </div>
    )
}
    
}