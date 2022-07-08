import React from 'react'
import axios from 'axios';
import { useState} from 'react';
const Home = () => {
    const [name,setname]=useState("")
    const [book,setbook]=useState("")
    const [des,setdes]=useState("")


    // const [data,setdata]=useState({
    //     name:'',
    //     book_name:'',
    //     des:''
    // })

    // const change=(e)=>{
    //     const arr={...data}
    //     arr[e.target.id]=e.target.value
    //     setdata(arr)
    // }
    // console.log(name)
    // console.log(book)

    const post=async()=>{
        alert("Your Post Successfully Posted")
        let formField = new FormData()
        formField.append('Name',name)
        formField.append('Book_Name',book)
        formField.append('Description',des)

        await axios({
            method:'POST',
            url:'https://reactdjangotodo.herokuapp.com/api/crud/',
            data:formField
        }).then((response)=>{
            console.log(response.data)
        })
    }

    return (
        <>
            <div className=''>
                <div className='bg-danger text-center my-3'>
                    <h2>PUBLISH YOUR BOOK </h2>
                </div>
                <div className="container-fluid bg-success">
                    <div className="row">
                        <div className="col-12 text-center my-4">
                            <div className=''>
                                <form action="" >
                                    <label htmlFor="">
                                        Name:-<input type="text"
                                        // id='name'
                                        name='name'
                                        value={name}
                                        onChange={(e)=>setname(e.target.value)} 
                                        />
                                    </label>
                                    <br />
                                    <br />
                                    <label htmlFor="">
                                        Book_Name:-<input type="text"
                                        //  id='book_name'
                                         name='book'
                                         value={book}
                                         onChange={(e)=>setbook(e.target.value)}  
                                        />
                                    </label>
                                    <br />
                                    <br />
                                    <label htmlFor="">
                                        Descritption:-<textarea  cols="30" rows="10"
                                         name='des'
                                        //  id='des' 
                                         value={des}
                                         onChange={(e)=>setdes(e.target.value)}  
                                        />
                                        
                                    </label>
                                    <br />
                                    <br />
                                    <button onClick={post} className='btn btn-primary'>POST</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home