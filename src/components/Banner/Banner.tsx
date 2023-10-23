import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import QRCode from '../QRCode/QRCode';
import { IBanner } from '../../types/types';
import './Banner.scss';

const Banner:FC<IBanner> = ({isVisible}) => {
  return (
    <div className={isVisible ? 'banner': 'hidden'} id='banner'>
      <p className='banner__title'> Исполните мечту своей семьи! Подарите им тур-пакет!</p>
      <QRCode styles={{weight: '126px', height: '126px'}}/>
      <p className='banner__description'>Сканируйте QR-код или нажмите OK</p>
      <Link to='/add-number' className='banner__button button'>ok</Link>
    </div>
  );
};
export default Banner;
