import React from 'react';
import Image from 'next/image';
import styles from './Card.module.css';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
  subDescription: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, altText, subDescription }) => {
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
        <p className="text-sm text-gray-500 mt-2">{subDescription}</p>
      </div>
  </div>
  );
};

export default Card;
