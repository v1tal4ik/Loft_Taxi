import React ,{ Component }from 'react';
import {Redirect} from 'react-router-dom';

//Цей компонент відповідає за логірування користувача
//Повинен бути підключений redux, щоб отримати статус IsAuthorize, поля Name,SurName з store
//Якщо IsAuthorize==True , то перенаправляти на App
//Якщо ні то повинна бути показана форма входу і перевірятися чи співпадають дані з store, якщо ні то виводити повідомлення про помилку 


class Login extends Component{
    render(){
    if(false) return <Redirect to='/app' />;
        return (
        <p>Login</p>
        )
    }
}

export default Login;