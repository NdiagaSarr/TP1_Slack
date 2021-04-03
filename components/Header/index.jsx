import React from 'react';
import LOGO from '../../logo/logo.png';

export default class Header extends React.Component {
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
                <div className="container">
                    <h2>TIW IGA - TP1 Mise en place Stack</h2>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"><img src={LOGO} alt="logo" /></span>
                    </button>
                </div>    
            </nav>
            
            );
        }
    }