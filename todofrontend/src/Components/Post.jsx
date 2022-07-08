import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios';
const Post = () => {

  const [data, setdata] = useState([])



  useEffect(() => {
    async function getdata() {
      try {
        const crud = await axios.get("https://reactdjangotodo.herokuapp.com/api/crud/")
        setdata(crud.data)
      } catch (error) {
        console.log(error)
      }
    }
    getdata()
  }, [])



  function deletepost(id)
  {
    alert('this file is delete')
    fetch(`https://reactdjangotodo.herokuapp.com/api/crud/${id}`,{
      method:'DELETE'
    }).then((result)=>{
      result.json().then((resp)=>{
        console.warn(resp)
      })
    })
  }

  return (
    <>
     <div>
     <table class="table">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">NAME</th>
      <th scope="col">BOOK_NAME</th>
      <th scope="col">DESCRIPTION</th>
      <th scope="col">BUTTON</th>
    </tr>
  </thead>
  {
    data.map((val,key)=>{
      return (
      <tbody>
      <tr>
        <th scope="row">{val.id}</th>
        <td>{val.Name}</td>
        <td>{val.Book_Name}</td>
        <td>{val.Description}</td>
        <td>
        <NavLink to={`/${val.id}/`} className='btn btn-success'>
            Edit
        </NavLink>
        </td>
        <td><button onClick={()=>deletepost(val.id)} className='btn btn-danger'>Delete</button></td>
      </tr>
    </tbody>
      )
    })
  }
</table>
     </div>
    </>
  )
}

export  default Post
