import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from '../Navbar';
import "../index.css"

const ProductComponent = () => {
  <Navbar />

  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { iid, title, image, category } = product;
    return (<>
      <div className="four wide column" key={iid}>

        <Link to={`/product/${iid}`}>
      
          <div className="carrds">
          <div className="carrds-img"><img src={image} alt={title} /></div>
          <div className="carrds-title"><h2>{title}</h2></div>
          <div className="carrds-cat">{category}</div>
                    </div>
          
        </Link>
      </div>
      </>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;