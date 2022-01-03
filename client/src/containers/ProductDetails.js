import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productsActions";
import Navbar from '../Navbar';
import '../App.css'
const ProductDetails = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const { image, title,description1, title2, description2, title3, description3, title4, description4, createdAt } = product;
  const dispatch = useDispatch();
  const fetchProductDetail = async (iid) => {
    const response = await axios
      .get(`${process.env.REACT_APP_LINK}${iid}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (<>
      <Navbar />
      <div className="det-grids">

      <div className="det-grid">
        <div className="det-img"><img src={image} alt={title} /></div>
        <div className="det-title">
        <h2>{title}</h2></div>
        <p>{description1}</p>
        <div className="det-title">
        <h2>{title2}</h2>
        <p>{description2}</p>
        </div>
        <div className="det-title">
        <h2>{title3}</h2></div>
        <p>{description3}</p>
        <div className="det-title">
        <h2>{title4}</h2>
        <p>{description4}</p>
        </div>
        <p>Created At- {createdAt}</p>
        </div>
        <div className="det-grid1">
        <h2>Explore</h2>
        <div className="det-grid11">
<div><a href='http://localhost:3000/product/1'><button>Bitcoin</button></a></div>
<div><a href='http://localhost:3000/product/2'><button>Mining</button></a></div>
<div><a href='http://localhost:3000/product/3'><button>Blockchain Security</button></a></div>
<div><a href='http://localhost:3000/product/4'><button>NFT Gaming</button></a></div>
<div><a href='http://localhost:3000/product/5'><button>Smart Contracts</button></a></div>
<div><a href='http://localhost:3000/product/6'><button>NFT</button></a></div>
<div><a href='http://localhost:3000/product/7'><button>DeFi</button></a></div>
</div>
        </div>
        </div>

        </>
      )}
    </div>
  );
};

export default ProductDetails;