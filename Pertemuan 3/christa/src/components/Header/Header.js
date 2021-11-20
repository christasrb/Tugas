import React, { Component } from 'react'
import "../../css/bootstrap.min.css";

function output() {
    return <h2 className='text-primary'>Sistem Informasi E-Biz</h2>
}
export class Header extends Component {
    render() {
        return (
            <div>{output()}</div>
        )
    }
}

export default Header
