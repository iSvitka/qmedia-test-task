import React from 'react';
import { IProductProps } from './Product.typings';

import style from './Product.module.scss';
import { IconHeart } from '../../IconHeart/IconHeart';

export const Product = (props: IProductProps) => {
    const { image, oldPrice, price, title } = props;

    
    const [imageSrc, setImageSrc] = React.useState('');

    React.useLayoutEffect(() => {
        const fetchImage = async () => {
            const fetchedImage = await require(`../../../assets/images/products/${image}`)
            setImageSrc(fetchedImage)
        }

        fetchImage()
    })

    return (
        <div className={style.Product}>
            <div className={style.ProductImageWrapper}>
                <img className={style.ProductImage} src={imageSrc} alt="product" />
                <div className={style.ProductLikeButton}>
                    <IconHeart />
                </div>
            </div>
            <div className={style.ProductDescription}>
                <h4 className={style.ProductTitle}>{title}</h4>
                <div className={style.ProductPriceWrapper}>
                    {oldPrice &&
                        <span className={style.ProductPriceOld}>{oldPrice}</span>
                    }
                    <span className={style.ProductPrice}>{`${price} руб.`}</span>
                </div>
            </div>
        </div>
    )
}