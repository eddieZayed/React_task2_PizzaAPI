import React, {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'

export default function Home() {

  const [products,setProducts] = useState([]);
  const getProducts = async()=>{
    const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
    const data = await response.json();
    //console.log(data.recipes);//make sure from the fetched data
    setProducts(data.recipes); 
  }

  useEffect( ()=>{
    getProducts();
  },[]);

  return (
    <div className="text-white text-center py-3">
        <div className="container">
            <div className="row">
              {products.map(product=>
                <div className="col-lg-4">
                  <div className="card">
                   <div className="card-body">
                    <h2>{product.title}</h2>
                    <img src={product.image_url} className="card-img-top img-fluid" style={{ObjectFit:'contain'}}/>
                  </div>
                  <div className="card-footer">
                  <Link className='btn btn-outline-info' to={`/product/${product.recipe_id}`}>Details</Link>
                </div>
                </div>
                </div>
              )}
            </div>
        </div>
    </div>
  )
}
