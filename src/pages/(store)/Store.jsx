import Service from '../../components/Service'
import ProductsOnOffer from '../../components/ProductsOnOffer'
import ProductBanner from '../../components/ProductBanner'
import SidePanel from '../../components/store/SidePanel'
import MainPanel from '../../components/store/MainPanel'

const Store = () => {
  return (
    <>
      <Service/>
      <ProductsOnOffer/>
      <div className="container-fluid shop py-5">
        <div className="container py-5">
          <div className="row g-4">
            <SidePanel/>

            <MainPanel/>
          </div>
        </div>
      </div>
      <ProductBanner/>
    </>
  )
}

export default Store