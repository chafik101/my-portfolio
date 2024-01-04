import { useEffect, useState } from 'react'
import  './css-file/section2.css'

import Projects  from './porjects'


const Section2=()=>{

  

    const [find_key,setfind_project] = useState('all')
      

    useEffect(()=>{
        
        const container = document.querySelector('.container-section2')
        const btn = document.querySelectorAll('.btn')

        window.addEventListener('scroll',()=>{
             const starF = setInterval(s,400)
             let i = 0;
             function s(){
                if(window.scrollY >= container.offsetTop-150 ){
                  btn[i++].classList.add('btn_animate')
                }else  {
                    btn[i++].classList.remove('btn_animate') 
            }
                i===btn.length? clearInterval(starF):i=i
                
             }
        })
    })


    
    const handelClick=(e)=>{
        setfind_project(e.target.id)
        document.querySelector('.active')?.classList.remove('active')
        e.target.classList.add('active')
        
    }   
    

    const language = [
        {title:"All Project",value:'all'},
        {title:"JavaScript",value:'js'},
        {title:'React',value:'react'},
        {title:"php",value:'php'},
        {title:'Node &Express',value:'node'}
    ]

    return(
        <section>
            <div className='container-section2 clair' >
                <div className='list-filter'>
                    <ul className='ul-list-filter'>
                        {language.map((item,index)=>(
                           
                            index===0?<li className='btn li-list-filter active ' id={item.value} onClick={handelClick} >{item.title}</li>:<li className='btn li-list-filter ' id={item.value} onClick={handelClick} >{item.title}</li>
                        ))}
                        
                    </ul>
                </div>
                
                <Projects find_key={find_key} />
                
            </div>

        </section>
    )
}

export default Section2