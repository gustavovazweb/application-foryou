//TEACHERITEM COMPONENT
//REACT IMPORTING
import React from 'react';

//ICON IMPORTING
import  whatsappIcon from '../../assets/images/icons/whatsapp.svg';

//CSS IMPORTING
import './styles.css';

//API IMPORTING
import api from '../../services/api';

//TEACHER INTERFACE EXPORTING
export interface Teacher{
    id: number;
    avatar: string; 
    bio: string;
    cost: number;             
    name: string;
    subject: string;
    whatsapp: string;
}

//TEACHER ITEM PROPERTIES INTERFACE
interface TeacherItemProps{
    teacher: Teacher;
}

//TEACHERITEM CONSTANT
const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {

    //API CONNECTION
    function createNewConnection(){
        api.post('connections', {
            user_id: teacher.id,
        })
    }

    return(
    //TEACHER INFORMATION
    <article className="teacher-item">
                    <header>
                        <img src={teacher.avatar} alt={teacher.name} />
                        <div>
                            <strong>{teacher.name}</strong>
                            <span>{teacher.subject}</span>
                        </div>
                    </header>
                    <p>{teacher.bio}</p>
                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ {teacher.cost}</strong>
                        </p>
                        <a onClick={createNewConnection} href={`https://wa.me/${teacher.whatsapp}`}>
                            <img src={whatsappIcon} alt="Whatsapp" />
                            Entrar em contato
                        </a>
                    </footer>
               </article>
               );
}

//TEACHERITEM EXPORTING
export default TeacherItem;