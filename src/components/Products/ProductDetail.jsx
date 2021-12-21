import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "./ProductDetail.css";
import "swiper/swiper-bundle.min.css";
import 'swiper/swiper.min.css'

import SwiperCore, {
  Navigation
} from 'swiper';
import useProduct from "../../utils/hooks/useProduct.js";

SwiperCore.use([Navigation]);

function ProductDetail(props) { 
  let product = useProduct(props.id);
  return (
    <>
    <React.Fragment>
      {product.isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Swiper navigation={true} className="mySwiper">
            {product.data.results[0].data.images.map((obj, index) => (
              <SwiperSlide key={index}>
                <img alt="" src={obj.image.url} />
              </SwiperSlide>
            ))}
          </Swiper>
          <ul>
            <li>
              <strong>Name:</strong>&nbsp;<span>{product.data.results[0].data.name}</span>
            </li>
            <li>
              <strong>Price:</strong>&nbsp;<span>${product.data.results[0].data.price}</span>
            </li>
            <li>
              <strong>SKU:</strong>&nbsp;<span>{product.data.results[0].data.sku}</span>
            </li>
            <li>
              <strong>Category:</strong>&nbsp;<span>{product.data.results[0].data.category.slug}</span>
            </li>
            <li>
              <strong>Labels:</strong>&nbsp;<span>{product.data.results[0].tags.join(", ")}</span>
            </li>
            <li>
              <strong>Description:</strong>&nbsp;<span>{product.data.results[0].data.description[0].text}</span>
            </li>
          </ul>
        </div>
      )}
    </React.Fragment>
    </>
  );
}

export default ProductDetail;
