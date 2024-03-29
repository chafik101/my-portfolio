import { useEffect, useState } from 'react'
import  './css-file/section2.css'

import Projects  from './porjects'


const Section2=()=>{

  

    const [find_key,setfind_project] = useState('all')
      



    
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
        <section className='section3'>
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