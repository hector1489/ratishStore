import MainGallery from "../../components/MainGallery/MainGallery"
import './Products.css'


const Products = () => {

  return (
    <div className="products-view-container">
      <div className="products-view-gallery">
        <h3 className="bg-base-300 text-center">Productos <span className="text-success font-bold">:</span></h3>
        <MainGallery />
      </div>

    </div>

  )
}

export default Products