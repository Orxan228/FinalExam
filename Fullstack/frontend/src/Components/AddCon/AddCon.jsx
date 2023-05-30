import React from 'react'
import "./AddCon.scss"
import {Helmet} from 'react-helmet';
import * as Yup from "yup"
// import {useFormik} from "formik"
import { Formik, Form, Field } from 'formik';
import axios from 'axios';


// const validationSchema = yup.object({
//   name:yup
//   .string("Name must be a string")
//   .required("Name is required"),
//   price:yup
//   .number("Price must be a number")
//   .required("Price is required"),
// })

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  price: Yup.number()
    .min(1, 'Too less')
    .max(9999, 'Too much')
    .required('Required'),
});

const AddCon = () => {


  return(
    <Formik
    initialValues={{
         name: '',
         price: '',
       }}
    
    validationSchema={SignupSchema}
    onSubmit={values=> {
      axios.post(`http://localhost:7777/products/`, values).then((res)=>{
        console.log(res.data);
      })

    }}
  >
    
{({ errors, touched }) => (
         <Form>
            <Helmet>  
                  <title>Add</title>  
            </Helmet>
           <Field name="name" />
           {errors.name && touched.name ? (
             <div>{errors.name}</div>
           ) : null}
           <Field name="price" />
           {errors.price && touched.price ? (
             <div>{errors.price}</div>
           ) : null}
           <button type="submit">Submit</button>
         </Form>
       )}
  </Formik>
    )


  // const formik = useFormik({
  //   initialValues:{
  //     name:"",
  //     price:""
  //   },
  //   validationSchema:validationSchema,
  //   onsubmit:()=>{
  //     alert(JSON.stringify(values,null,2))
  //   }
  // })

  // return (
  //   <div className="add">
  //     <Helmet>  
  //           <title>Add</title>  
  //     </Helmet>
  //     <div className="add__inner">
  //       <p>Add an Item:</p>
  //       <div className="add__inner__form">
  //         <form action="" onSubmit={formik.handleSubmit}>
  //           <input 
  //           type="text" 
  //           placeholder='Enter the name'
  //           id='name'
  //           value={formik.values.name}
  //           />
  //           <input 
  //           type="number" 
  //           placeholder='Enter the price'
  //           id='price'
  //           value={formik.values.price}
  //           />
  //           <button onClick={(e)=>{
  //             e.target.preventDefault()
  //           }}>Add the item</button>
  //         </form>
  //       </div>
  //     </div>
  //   </div>
  // )
}

export default AddCon
