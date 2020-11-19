//PAGEHEADER COMPONENT
//REACT IMPORTING
import React from 'react';

//LINK IMPORTING
import { Link } from 'react-router-dom';

//ICONS IMPORTING
import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

//CSS IMPORTING
import './styles.css';

//PAGEHEADER PROPERTIES INTERFACE
interface PageHeaderProps{
    title: string;
    description?: string;
}

//PAGEHEADER CONSTANT
const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return(
        //PAGEHEADER
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar" />
                </Link>
                <img src={logoImg} alt="Proffy" />
            </div>
            <div className="header-content">
                <strong>{props.title}</strong>
                {props.description && <p>{props.description}</p>}
                {props.children}
            </div>
        </header>
    );
}

//PAGEHEADER EXPORTING
export default PageHeader;