//ABOUT INDEX PAGE
//IMPORTING REACT FROM REACT
import React from 'react';

//IMPORTING LINK FROM REACT ROUTER DOM
import { Link } from 'react-router-dom';

//PAGEHEADER IMPORTING
import PageHeader from '../../components/PageHeader';

//ICONS IMPORTING
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';

//ABOUT FUNCTION
function About(){
    return(
        <div id="page-teacher-form" className="container">
           <PageHeader 
                title="Quem somos"
                description="Somos uma plataforma online que conecta estudantes de todo o brasil a professores de idiomas."
            />
            <main>
                <fieldset>
                    <h2>Nossa missão</h2>
                    <p>Conectar professores e alunos de forma prática e objetiva visando sempre a qualidade e o aprendizado de linguas estrangeiras.</p>
                    <br />
                    <h2>Nossa visão</h2>
                    <p>Proporcionar excelência de resultados, segurança e domínio dos idiomas sendo sempre um referencial de ensino no mercado.</p>
                    <br />
                    <h2>Nossos valores</h2>
                    <p>Ensinar com entusiasmo atuando com criatividade e despertando paixão pelas línguas.</p>
                    <br />
                    <h4>Acredita em nós e quer fazer a diferença aprendendo ou ensinando idiomas? Então cai dentro e vem com a gente!</h4>
                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Estudar" />
                        Aprender
                    </Link>                
                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="Dar aulas" />
                        Ensinar
                    </Link>
                </div>
                </fieldset>
            </main>
        </div>
    );
}

//EXPORTING ABOUT FUNCTION
export default About;