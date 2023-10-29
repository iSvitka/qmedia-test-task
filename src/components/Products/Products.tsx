import React from 'react';

import styles from './Products.module.scss';
import { IProduct } from './Products.typings';
import { Product } from './-Item/Product';

export const Products = () => {
    const [products, setProducts] = React.useState<IProduct[]>()

    React.useEffect(() => {
        const fetchProducts = async () => {
            const fetchedProducts: IProduct[] = await require('../../data/products.json');
            setProducts(fetchedProducts)
        }

        fetchProducts()
    }, [])

    return (
        <section className={styles.Products}>
            <div className={styles.ProductsTitleWrapper}>
                <h1 className={styles.ProductsTitle}>
                    Результат
                </h1>
                <p className={styles.ProductsText}>Мы подобрали для вас наиболее подходящие средства</p>
            </div>
            {products ? 
                <div className={styles.ProductsContentWrapper}>
                    {products.map(product => (
                        <Product {...product} key={`product_${product.id}`}/> ))
                    }
                </div> :
                <div className={styles.ProductsLoading}>Loading...</div>
            }
        </section>
    )
}