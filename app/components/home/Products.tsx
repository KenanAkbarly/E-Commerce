import { products } from '@/utils/Products'
import React from 'react'
import PageContainer from '../containers/PageContainer';
import Heading from '../general/Heading'
import ProductCard from './ProductCard'
interface Product{
    id: string;
    name: string;
    description: string;
    price: number;
    brand: string;
    category: string;
    inStock: boolean;
    image: string;
    reviews: {
      id: string;
      userId: string;
      productId: string;
      rating: number;
      comment: string;
      createdDate: string;
      user: {
        
    };
    }[];
}
const Products:React.FC<Product> = () => {
  return (
    <PageContainer>
    <div>
        <Heading text='Bütün məhsullar' center={false}/>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-10'>

        {
            products.map(product=>(
                <ProductCard key={product.id} product={product}/>
            ))
        }
        </div>
    </div>
    </PageContainer>
  )
}

export default Products