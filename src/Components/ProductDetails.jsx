import { useState,useEffect } from "react"
import { useParams } from "react-router-dom";

export default function ProductDetails() {

    const [product,setProduct] = useState({});//the type is object becasue it will return only one object containing the details
    const {productId}= useParams();

    const getProduct = async () =>
    {
        const response = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${productId}`);
        const data =await response.json();
        setProduct(data.recipe);
    }
   

    useEffect( ()=>{
        getProduct();
    },[]);

  return (
    <div>
        <h2>{product.title}</h2>
    </div>
  )
}
