import React from 'react'
import { useEffect, useState } from 'react';
import Body from './Body';
import Card from './Card';



function Api_fetch() {
    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const resData = await response.json()
        setData(resData)
        console.log(resData)
    }
    useEffect(() => {
        fetchData();
    }, [])
    const [data, setData] = useState([])

    return (
        <div className='flex flex-wrap'>
            {
                data.map((item, index) => {
                    index = index + 1;
                    if (index < 10) {
                        return (
                            <Card key={item.id} title={item.title} />
                        )
                    }
                })
            }
        </div>
    )
}

export default Api_fetch
