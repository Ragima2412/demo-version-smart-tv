import React, { useState } from 'react';
import './Sidebar.scss';
import { validatePhoneNumber } from '../../helper/validationNumber';

const Sidebar = () => {
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [phoneNumber, setPhoneNumber] = useState<string>('1234567898');
    const [isError, setIsError] = useState<boolean>(false);

    const showPhoneNumber = (number: string) => <>'1234 5678 98'</>
   
    console.log(validatePhoneNumber('(123)-458-78-88'))
    return (        
        <div className='sidebar'>
            {
                isSubmitted
                ? <div className='sidebar__submit-info submit-info'>
                    <h1 className='submit-info__title'>Заявка принята</h1>
                    <p className='submit-info__notice'>Держите телефон под рукой.</p>
                    <p className='submit-info__notice'>Скоро с Вами свяжется наш менеджер.</p>                         
                </div>
                : <form className='sidebar__form form'> 
                    <h3 className='form__header'> Введите ваш номер мобильного телефона</h3>
                    <div className='form__dialed-number'>{showPhoneNumber(phoneNumber)} </div>
                    <p className='form__information'>И с вами свяжется наш менеджер для дальнейшей консультации</p>
                    <div className='form__dial-code'>
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