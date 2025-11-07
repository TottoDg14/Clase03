import OurProducts from "../components/OurProducts"
import ProductsOnOffer from "../components/ProductsOnOffer"
import Service from "../components/Service"
import Carousel from "../components/home/Carousel"

const Home = () => {
  return (
    <>
        <Carousel/>
        <Service/>
        <ProductsOnOffer/>
        <OurProducts/>
    </>
  )
}

export default Home