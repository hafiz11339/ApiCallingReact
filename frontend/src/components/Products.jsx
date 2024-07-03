import React,{useState,useEffect} from 'react'
import axios from 'axios'



const Products = () => {
    const [products,setProducts] = useState([])
    const [error,setError] = useState(false)
    useEffect(()=>{
        (
            async ()=>{
                try {
                    setError(false)
                    const prodData = await axios.get('/api/products')
                    console.log(prodData.data)
                    setProducts(prodData.data)
                } catch (error) {
                    setError(true);

                }
            }
        )()
    },[])
    if (error){
        return <h1>Something Went Wrong</h1>
    }
    return (
      <>
      <h1>API Calling!!!</h1>
      <h2>Our total length =  {products.length}</h2>
      </>
  )
}

export default Products
