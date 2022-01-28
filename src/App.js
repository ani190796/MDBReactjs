import React, { useEffect } from 'react';
import { MDBDataTable } from 'mdbreact'
import {  useState } from "react";
import axios from "axios";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

function App() {

  const [content, setContent] = useState([]);


    const fetchTrending = async()=>{
        try {
            const  data  = await axios.get(`https://jsonplaceholder.typicode.com/users`) 
            //  console.log(data)
             setContent(data.data);
        } catch (error) {
             console.error(error)
        }
    }

        useEffect(()=>{
            fetchTrending();
        },[])

       console.log(content,'content');
  const setProducts = () => {
    const data = {
        columns: [
            {
                label: 'ID',
                field: 'id',
                sort: 'asc'
            },
            {
                label: 'Name',
                field: 'name',
                sort: 'asc'
            },
            {
              label: 'Email',
              field: 'email',
              sort: 'asc'
            },
           
        ],
        rows: []
    }
          content.forEach(product => {
            data.rows.push({
                id: product.id,
                name: product.name,
                email:product.email
            })
        })

        return data;
  }


  return (
        <>
               <div className="col-12 col-md-10">
                    <>
                        <h1 className="my-5">All Products</h1>

                            <MDBDataTable
                                data={setProducts()}
                                className="px-3"
                                bordered
                                striped
                                hover
                            />

                    </>
                </div> 
        </>
  );
}

export default App;



