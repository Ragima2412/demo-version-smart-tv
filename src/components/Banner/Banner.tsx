import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import QRCode from '../QRCode/QRCode';
import { IBanner } from '../../types/types';
import './Banner.scss';

const Banner:FC<IBanner> = ({isVisible}) => {
  const navigate = useNavigate();
  const onClick = (e) => {
    e.preventDefault();
    navigate("/add-number");
  };

  return (
    <div className={isVisible ? 'banner': 'hidden'} id='banner'>
      <p className='banner__title'> Исполните мечту своей семьи! Подарите им тур-пакет!</p>
      <QRCode styles={{weight: '126px', height: '126px'}}/>
      <p className='banner__description'>Сканируйте QR-код или нажмите OK</p>
      <button  className='banner__button button' onClick={(e) => onClick(e)}>ok</button>
    </div>
  );
};
export default Banner;
