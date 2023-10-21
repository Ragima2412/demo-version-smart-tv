import React, { useState } from 'react';
import './Sidebar.scss';

const Sidebar = () => {
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [phoneNumber, setPhoneNumber] = useState<string>('1234567898');

    const showPhoneNumber = (number: string) => {
        
      return <></>
    }

    return (        
        <div className='sidebar'>
            {
                isSubmitted 
                ? <h1>Заявка принят</h1>
                : <form className='sidebar__form form'> 
                    <h3 className='form__header'> Введите ваш номер мобильного телефона</h3>
                    <div className='form__show-number'></div>
                    <p className='form__information'>И с вами свяжется наш менеджер для дальнейшей консультации</p>
                    <div className='form__dial-code'>
                        {showPhoneNumber(phoneNumber)}
                    </div>
                    <div className='form__checkbox-wrapper'>
                        <input className='form__checkbox' type='checkbox'/>
                        <label className='form__label'>Согласие на обработку персональных данных</label>
                    </div> 
                   <button className='form__submit-btn'>Подтвердить номер</button>
                </form>
            }           
        </div>
    )
};
export default Sidebar;