import React from 'react';

export default class Content extends React.Component {
    render(){
        return(
            <div className="bottom">
                <h3 className="mt-4">Présentation du TP</h3> 
                <p>
                    L’objectif du TP est de mettre en place “l’enveloppe” 
                    d’une application Web avec un serveur Node/Express léger, 
                    et un framework JS côté client. Pour l’UE le client sera 
                    développé avec React, mais la “stack” que nous allons voir 
                    dans ce TP serait peu ou prou la même pour Angular ou Vue.
                </p> 
                <p>Nous avons fait :</p> 
                <ul>
                    <li>La mise en place d’un serveur Node/Express basique</li>
                    <li>L’automatisation d’un build</li>
                    <li>Comment configurer Babel pour la transpiler du code ES6 et des composants JSX en JavaScript interprétable par n’importe quel navigateur</li>
                    <li>Créer un projet React</li>
                    <li>Créer deux composants React basiques</li>
                    <li>Gérer le bundling avec Webpack</li>
                    <li>Utiliser un linter pour vérifier votre code</li>
                    <li>Assembler et servir le contenu</li>
                    <li>Déployer sur Heroku</li>
                </ul>
            </div>
        );
    }
}
