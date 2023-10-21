import React, { FC } from 'react';
import QrCodeIcon from '../../assets/images/qr-code.png';
import './Banner.scss';
import { IBanner } from '../../types/types';
import { Link } from 'react-router-dom';

const Banner:FC<IBanner> = ({isVisible}) => {
  return (
    <div className={isVisible ? 'banner': 'hidden'} id='banner'>
      <p className='banner__title'> Исполните мечту своей семьи! Подарите им тур-пакет!</p>
      <div className='banner__qr-code-wrapper'>
        <img className='banner__qr-code'src={QrCodeIcon} alt='qrcode'/>
      </div>
      <p className='banner__description'>Нажмите QR-код или нажмите OK</p>
      <Link to='/add-number' className='banner__button'>ok</Link>
    </div>
  );
};
export default Banner;
