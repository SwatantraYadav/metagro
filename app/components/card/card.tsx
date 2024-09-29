import React from 'react';
import Image from 'next/image';
import styles from './Card.module.css';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, altText }) => {
  return (
    <div className={`${styles.card} card`}>
      <div className="card-image">
        <Image
          src={imageUrl}
          alt={altText}
          width={300}
          height={200}
          layout="responsive"
        />
      </div>
      <div className={`${styles['card-content']} card-content`}>
        <h2 className={`${styles['card-title']} card-title`}>{title}</h2>
        <p className={`${styles['card-description']} card-description`}>{description}</p>
      </div>
  </div>
  );
};

export default Card;
