import React,{useState,useEffect} from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import axios from "axios"
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import {Helmet} from 'react-helmet';
import "./HomeCon.scss"


const HomeCon = () => {

const [data,setData]=useState([])
const [dummy,setDummy]= useState(false)
const [searchValue,setSearchValue]= useState("")

useEffect(()=>{
    axios.get("http://localhost:7777/products/").then((res)=>[
        setData(res.data)
    ])
},[searchValue==="",dummy])

const handleSearch = (e)=>{
    const value = e.target.value.toLowerCase()
    setSearchValue(value)
    const filteredData = data.filter((item)=>
    item.name.toLowerCase().includes(value))
    setData(filteredData)
}

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
}
  return (
    <div className="content">
        <Helmet>  
            <title>Home</title>  
        </Helmet>
        <div className="content__slider">
        <Slider {...settings}>
          <div className='content__slider__item item-1'>
            <p>WE ARE</p>
            <p>BUSINESS THEME CREATOR</p>
            <p>At vero eos et accusamus iusto odio dignissimos ducmus qui blanditiis praesentium voluptatum deleniti</p>
            <button>SEE OUR PROJECT</button>
          </div>
          <div className='content__slider__item item-2'>
            <p>WE ARE</p>
            <p>BUSINESS THEME CREATOR</p>
            <p>At vero eos et accusamus iusto odio dignissimos ducmus qui blanditiis praesentium voluptatum deleniti</p>
            <button>SEE OUR PROJECT</button>
          </div>
          <div className='content__slider__item item-3'>
            <p>WE ARE</p>
            <p>BUSINESS THEME CREATOR</p>
            <p>At vero eos et accusamus iusto odio dignissimos ducmus qui blanditiis praesentium voluptatum deleniti</p>
            <button>SEE OUR PROJECT</button>
          </div>
        </Slider>
        </div>
        <div className="content__filter">
            <input onChange={handleSearch} type="text"  placeholder='Search by name'/>
            <button onClick={()=>{
                setData([...data.sort((a,b)=>b.price-a.price)])
            }}>Sort by price</button>
        </div>
        <div className="content__vitrine">
            {data.map((item,index)=>{
                return(
                    <div key={index} className="content__vitrine__item">
                        <div className="content__vitrine__item__logo">
                            <RocketLaunchIcon/>
                        </div>
                        <div className="content__vitrine__item__info">
                            <p className="content__vitrine__item__info__title">
                                {item.name}
                            </p>
                            <p className="content__vitrine__item__info__price">
                                {item.price}
                            </p>
                        </div>
                        <div className="content__vitrine__item__desc">
                            <p>Lorem Ipsum is a simply dummy texts of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                        </div>
                        <div className="content__vitrine__item__btns">
                            <button>Details</button>
                            <button onClick={()=>{
                                axios.delete(`http://localhost:7777/products/${item._id}`).then(()=>{
                                    setDummy(true)
                                })
                            }}>Delete</button>
                        </div>
                    </div>
                )
            })}
        </div>
        <div className="content__projects">
            <div className="content__projects__top">
                <p className="content__projects__top__logo">OUR AWESOME PROJECTS</p>
                <div className="content__projects__top__line">
                    <div className="content__projects__top__line--line"></div>
                </div>
                <div className="content__projects__top__desc">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
                </div>
                <ul className="content__projects__top__items">
                    <li>ALL</li>
                    <li>WEB DESIGN</li>
                    <li>PHOTOGRAPHY</li>
                    <li>WEB DEVELOPMENT</li>
                    <li>ONLINE MARKETING</li>
                    <li>DIGITAL MEDIA</li>
                </ul>
            </div>
            <div className="content__projects__bottom">
                <div className="content__projects__bottom__item">
                    <div className="content__projects__bottom__item__inner">
                        <div className="content__projects__bottom__item__inner__frame">
                            <p>WEB DEWELOPMENT</p>
                            <p>Business / Service / Product / Template</p>
                        </div>
                    </div>
                </div>
                <div className="content__projects__bottom__item">
                    <div className="content__projects__bottom__item__inner">
                        <div className="content__projects__bottom__item__inner__frame">
                            <p>WEB DEWELOPMENT</p>
                            <p>Business / Service / Product / Template</p>
                        </div>
                    </div>
                </div>
                <div className="content__projects__bottom__item">
                    <div className="content__projects__bottom__item__inner">
                        <div className="content__projects__bottom__item__inner__frame">
                            <p>WEB DEWELOPMENT</p>
                            <p>Business / Service / Product / Template</p>
                        </div>
                    </div>
                </div>
                <div className="content__projects__bottom__item">
                    <div className="content__projects__bottom__item__inner">
                        <div className="content__projects__bottom__item__inner__frame">
                            <p>WEB DEWELOPMENT</p>
                            <p>Business / Service / Product / Template</p>
                        </div>
                    </div>
                </div>
                <div className="content__projects__bottom__item">
                    <div className="content__projects__bottom__item__inner">
                        <div className="content__projects__bottom__item__inner__frame">
                            <p>WEB DEWELOPMENT</p>
                            <p>Business / Service / Product / Template</p>
                        </div>
                    </div>
                </div>
                <div className="content__projects__bottom__item">
                    <div className="content__projects__bottom__item__inner">
                        <div className="content__projects__bottom__item__inner__frame">
                            <p>WEB DEWELOPMENT</p>
                            <p>Business / Service / Product / Template</p>
                        </div>
                    </div>
                </div>
                <div className="content__projects__bottom__item">
                    <div className="content__projects__bottom__item__inner">
                        <div className="content__projects__bottom__item__inner__frame">
                            <p>WEB DEWELOPMENT</p>
                            <p>Business / Service / Product / Template</p>
                        </div>
                    </div>
                </div>
                <div className="content__projects__bottom__item">
                    <div className="content__projects__bottom__item__inner">
                        <div className="content__projects__bottom__item__inner__frame">
                            <p>WEB DEWELOPMENT</p>
                            <p>Business / Service / Product / Template</p>
                        </div>
                    </div>
                </div>
                <div className="content__projects__bottom__item">
                    <div className="content__projects__bottom__item__inner">
                        <div className="content__projects__bottom__item__inner__frame">
                            <p>WEB DEWELOPMENT</p>
                            <p>Business / Service / Product / Template</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeCon
