import React from 'react'
import Style from './home.module.css'
import aaaa from "../../../public/aaaa.jpg"

function page() {
  return (
    <>
    
    <div className="navbar">

  <ul className={Style.list}>

  <li className={Style.mainitem}><li  className={Style.item}><a className={Style.mainlink} href="/home">Rusiru.</a></li></li>
  <li  className={Style.item}><a href="#news">Contact</a></li>
  <li  className={Style.item}><a href="#news">About</a></li>
  <li  className={Style.item}><a href="#news">Projects</a></li>
  <li  className={Style.item}><a href="#contact">Certificates</a></li>
  <li  className={Style.item}><a href="#about">Home</a></li>

  </ul>
GIT 
    </div>
    
<div className={Style.profile}>

    <div className={Style.name}>
        <h1 className={Style.head}>Hello</h1>
        <h1 className={Style.head}>I'm Rusiru</h1>
        <h1 className={Style.subheding}>I'm Undergraduate Software Engineer</h1>
    </div>

    <div className={Style.img}>
        <img  className={Style.myimg} src={aaaa.src} alt='aaa.jpg'/>
    </div>

</div>




    </>
  )
}

export default page