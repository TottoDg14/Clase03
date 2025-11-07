import Service from '../../components/Service'
import ProductsOnOffer from '../../components/ProductsOnOffer'
import ProductBanner from '../../components/ProductBanner'
import { useLocation } from 'react-router-dom';

const Product = () => {
  return (
    <>
      <Service/>
      <ProductsOnOffer/>
      <div className='container-fluid vh-100 w-100'>
      </div>
      <ProductBanner/>
    </>
  )
}

export default Product