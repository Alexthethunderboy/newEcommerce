import React, { useEffect, useState } from 'react'
import { FaCartArrowDown, FaHeart } from 'react-icons/fa';
import { MoonLoader } from 'react-spinners';

const Api = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  let api = `https://api.escuelajs.co/api/v1/categories?limit=6`;

  const getApi = async () => {
    try {
      const response = await fetch(api)
      const dataa = await response.json()
      setData(dataa) 
      setLoading(false)
    } catch(error) {
      setError(`Oops something is wrong!`)
    }
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div className='m-[5rem] text-center '>
        <div>
        <h3 className='text-[#c19a6b] text-sm'>BROWSE OUR ITEMS</h3>
        <h1 className='text-2xl font-bold'>IDEAL FOR YOUR HOME</h1>
        </div>
      <div className='m-[0 auto]'>
        <h2>{error}</h2>
        {loading && <MoonLoader/>}
      </div>
        <div className='md:grid grid-cols-3 gap-20 my-5'>
           {data.map((products) => (
            <div className='mb-20 md:mb-0'>
              <img src={products.image} alt="" />
              <div className='flex justify-between my-3'>
                <h3 className='text-lg'>Item 1</h3>
                <h3 className='text-[#EB0101] text-sm'>$99.99</h3>
              </div>
              <div className='flex justify-between'>
                <button className="flex justify-center items-center gap-2 bg-[#c19a6b] text-white py-1 px-4 text-center"><span className='text-white border-white '><FaCartArrowDown/></span> Add to Cart</button>
                <button className="flex justify-center items-center gap-2 text-[#c19a6b] border border-[#C19A6B] py-1 px-4 text-center"><span><FaHeart/></span> Save Item</button>
              </div>
            </div>
           ))} 
        </div>
    </div>
  )
}

export default Api