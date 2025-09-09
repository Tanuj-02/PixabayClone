import React, { useEffect, useState } from 'react'


const Sports = () => {
    const [homearea, setHomearea] = useState([])
    useEffect(() => {
      const fetchapi = async () => {
        const apidata = await fetch(`https://pixabay.com/api/?key=52203957-d0ea96e65933bafba9334099c&category=sports&per_page=200`)
        const api = await apidata.json()
        console.log(api.hits)
        setHomearea(api.hits)
    }
    fetchapi()
    }, [])
    
  return (
    <div className=''>
    <div className='flex flex-wrap gap-4 p-4 items-center justify-center pt-20'>
    {
        homearea.map((data) => 
        <div key={data.id} >
            <img src={data.largeImageURL} alt="" className='w-96 border-2 border-lime-600 rounded-3xl transition-transform duration-300 ease-in-out transform hover:scale-110'/>
        </div>
        )
    }
    </div>
    </div>
  )
}

export default Sports

