import './css-file/projects.css'
import React, { useEffect, useState } from "react";
import img_project from './imges/Cacti & Succulents Store Web site Concept.jpg'
import img_XO from './imges/tic-tac-to.png'

function Projects({find_key}){

   


    const [name_p ,setname_p] = useState(3)
    

    const Project = [
        {title:'Tic-Tac-To Game', description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium veritatis aliquam ", img:`${img_XO}`,link:'url',key:["all","js","html&css"]},
        {title:'Projer Html&Css', description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium veritatis aliquam ", img:`${img_project}`,link:'url',key:["all","html&css","node"]},
        {title:'Projer Js', description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium veritatis aliquam ", img:`${img_project}`,link:'url',key:["all","js","html&css","node"]},
        {title:'Projer Pyton', description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium veritatis aliquam ", img:`${img_project}`,link:'url',key:["all","js","php"]},
        {title:'Projer Php', description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium veritatis aliquam ", img:`${img_project}`,link:'url',key:["all","js","html&css","node"]}

    ]

    const Project_filter = Project.filter(item => item.key.includes(find_key) )
    


    const Project_res =Project_filter.map((item,index)=>(
        <div key={index} className='card'>
            <img src={item.img} className='image_card' />
            <h4 className='title_card'> {item.title}</h4>
            <p className='para_card'>{item.description}</p>
            <a className='link_card' hearf={item.link}><svg xmlns="http://www.w3.org/2000/svg" width="47" height="25" viewBox="0 0 47 25" fill="none">
  <path d="M35.2082 6.84615L37.3255 4.59312C39.3219 2.46896 42.5587 2.46896 44.5552 4.59312C46.5516 6.7173 46.5516 10.1612 44.5552 12.2854L42.4378 14.5384" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M38.0999 19.1538L35.9825 21.4069C33.9861 23.531 30.7493 23.531 28.7529 21.4069C26.7565 19.2827 26.7565 15.8387 28.7529 13.7145L30.8703 11.4615" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M39.546 9.92303L36.6541 13" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M33.7623 16.0769L34.4852 15.3077" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.75742 0C3.46777 0 0 5.72914 0 12.8169C0 18.4825 2.22192 23.2783 5.30431 24.9757C5.68969 25.1033 5.83085 24.6999 5.83085 24.3606C5.83085 24.0634 5.81814 23.045 5.81814 21.9838C3.66022 22.7478 3.21085 20.4559 3.21085 20.4559C2.86406 18.9705 2.35022 18.5887 2.35022 18.5887C1.64393 17.8036 2.40167 17.8036 2.40167 17.8036C3.18513 17.8885 3.59623 19.1192 3.59623 19.1192C4.28965 21.0713 5.40704 20.5197 5.85657 20.1801C5.92072 19.3525 6.12635 18.7796 6.34469 18.4614C4.62358 18.1642 2.81277 17.0609 2.81277 12.1377C2.81277 10.7372 3.12082 9.59137 3.60893 8.70022C3.53192 8.382 3.26214 7.06612 3.6861 5.30493C3.6861 5.30493 4.3411 4.96534 5.81799 6.62055C6.45029 6.33999 7.10238 6.19727 7.75742 6.19607C8.41242 6.19607 9.08012 6.34477 9.6967 6.62055C11.1737 4.96534 11.8287 5.30493 11.8287 5.30493C12.2527 7.06612 11.9828 8.382 11.9058 8.70022C12.4067 9.59137 12.7021 10.7372 12.7021 12.1377C12.7021 17.0609 10.8913 18.1429 9.15729 18.4614C9.43994 18.8645 9.68384 19.6283 9.68384 20.8379C9.68384 22.5567 9.67113 23.9361 9.67113 24.3603C9.67113 24.6999 9.81245 25.1033 10.1977 24.9759C13.2801 23.278 15.502 18.4825 15.502 12.8169C15.5147 5.72914 12.0342 0 7.75742 0Z" fill="white"/>
</svg></a>
        </div>
    ))
    return(
        <div className='container_card' >{Project_res} </div>
    )
}

export default Projects