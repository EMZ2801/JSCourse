import { FC } from "react";
import {useForm} from "react-hook-form";
import '../style/style.css';

interface SignUpFormData {
    login: string;
    password: string;
    returnPassword: string;
}

export const Registr: FC = () => {

    const {
        handleSubmit,  /* метод- чтобы данные из формы куда-то отправлялись дальше */
        register,  /* привязываем input с полями интерфейса */
        formState: {},   /*  */
        setError     /* ошибки валидации */
    } = useForm<SignUpFormData>({    
        mode: 'onBlur',   /* способ извещения об ошибке (последовтально после завершения предыдущего действия) */
    });
 
    const onSubmit = (data:SignUpFormData) => {

    }

    
    return (
        <div className="container">
            <div className="wrapper">
                <h1> Sign Up </h1>
                <div className="container_avatar">         </div>
                <form className="form" onSubmit={handleSubmit (onSubmit)}> {/*  повесили событие onSubmit и с помощью метода handleSubmit говорим, что данные будут отправляться из формы будут отправляться в функцию onSubmit  */}
                    <label htmlFor="login"> Login </label>
                    <input type='text' className="input" placeholder="login" id='login' />

                    <label htmlFor="password"> Password </label>
                    <input type='password' className="input" placeholder="password" id='password' />

                    <label htmlFor="repeatpassword"> Repeat password </label>
                    <input type='repeatpassword' className="input" placeholder="repeatpassword" id='repeatpassword' />

                    <button>Submit</button>

                </form>

            </div>
        </div>
    )
}





