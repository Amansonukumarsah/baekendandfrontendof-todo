import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
// import { useParams } from 'react-router-dom'
export const Edit = () => {
    const [updata,setupdate]=useState("")
    const [name,setname]=useState("")
    const [book,setbook]=useState("")
    const [des,setdes]=useState("")

    // const history=useHistory()
    const {id}=useParams();
    

    useEffect(() => {
        const getdata=async()=> {
          try {
            const {data} = await axios.get(`https://reactdjangotodo.herokuapp.com/api/crud/${id}/`)
            setupdate(data)
          } catch (error) {
            console.log(error)
          }
        }
        getdata()
      }, [])

    
    const update=async()=>{
        alert("Your Post Sucessfully Updated")
        let formField = new FormData()
        formField.append('Name',name)
        formField.append('Book_Name',book)
        formField.append('Description',des)

        await axios({
            method:'PUT',
            url:`https://reactdjangotodo.herokuapp.com/api/crud/${id}/`,
            data:formField
        }).then((response)=>{
            console.log(response.data)
        })
    }

    return (
        <>
            <div>
                <div className='bg-danger text-center my-3'>
                    <h2>UPDATE YOUR POST</h2>
                </div>
                <div className="container-fluid bg-success">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className='my-4'>
                            <form action="" >
                                    <label htmlFor="" >
                                        Name:-<input type="text"
                                        placeholder={updata.Name}
                                        id='name'
                                        name='name'
                                        value={name}
                                        onChange={(e)=>setname(e.target.value)} 
                                        />
                                    </label>
                                    <br />
                                    <br />
                                    <label htmlFor="">
                                        Book_Name:-<input type="text"
                                         placeholder={updata.Book_Name}
                                         id='book_name'
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
                                         placeholder={updata.Description}
                                         id='des' 
                                         value={des}
                                         onChange={(e)=>setdes(e.target.value)}  
                                        />
                                        
                                    </label>
                                    <br />
                                    <br />
                                    <div className='d-flex'>
                                        <button onClick={update} className='btn btn-primary'>Update</button>
                                        <NavLink className='btn btn-danger mx-5' to='/post'>Cancel</NavLink>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
