import React from 'react'
import "./AddCon.scss"
import {Helmet} from 'react-helmet';
import * as yup from "yup"
import {useFormik} from "formik"


const validationSchema = yup.object({
  name:yup
  .string("Name must be a string")
  .required("Name is required"),
  price:yup
  .number("Price must be a number")
  .required("Price is required"),
})

const AddCon = () => {

  const formik = {
    initialValues:{
      name:"",
      price:""
    },
    validationSchema:validationSchema,
    onsubmit:()=>{
      alert(JSON.stringify(values,null,2))
      
    }
  }

  return (
    <div className="add">
      <Helmet>  
            <title>Add</title>  
      </Helmet>
      <div className="add__inner">
        <p>Add an Item:</p>
        <div className="add__inner__form">
          <form action="">
            <input 
            type="text" 
            placeholder='Enter the name'
            />
            <input 
            type="number" 
            placeholder='Enter the price'
            />
            <button>Add the item</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddCon
