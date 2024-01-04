import './css-file/Navbar.css';
import { useEffect } from 'react';


function Navbar(){

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
          if(window.scrollY >= 50){
            document.querySelector('.nav-bar').classList.add('fixed')
          }else document.querySelector('.nav-bar').classList.remove('fixed')
        })
      })
      
    return(
        <div className="nav-bar">
            <ul className="nav-bar-list-links">
                <li className="nav-bar-link">HOME</li>
                <li className="nav-bar-link">PROJECT</li>
                <li className="nav-bar-link">CONTACT</li>
            </ul>
            <div className='btn-mode'>
            <svg id='icon-clair' xmlns="http://www.w3.org/2000/svg" width="41" height="39" viewBox="0 0 41 39" fill="none">
            <ellipse cx="20.5" cy="19.5" rx="6.83333" ry="6.5" fill="white"/>
            <path d="M20.5 8.125V4.875" stroke="white" stroke-width="2" stroke-linecap="round"/>
            <path d="M20.5 34.125V30.875" stroke="white" stroke-width="2" stroke-linecap="round"/>
            <path d="M28.9559 11.4562L31.3718 9.15808" stroke="white" stroke-width="2" stroke-linecap="round"/>
            <path d="M9.62824 29.8422L12.0442 27.5441" stroke="white" stroke-width="2" stroke-linecap="round"/>
            <path d="M32.4583 19.5L35.875 19.5" stroke="white" stroke-width="2" stroke-linecap="round"/>
            <path d="M5.12496 19.5L8.54163 19.5" stroke="white" stroke-width="2" stroke-linecap="round"/>
            <path d="M28.9559 27.5438L31.3718 29.8419" stroke="white" stroke-width="2" stroke-linecap="round"/>
            <path d="M9.62824 9.15784L12.0442 11.4559" stroke="white" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <svg id='icon-sombre' xmlns="http://www.w3.org/2000/svg" width="41" height="39" viewBox="0 0 41 39" fill="none">
  <path d="M19.859 8.14106C20.0712 8.1304 20.2849 8.125 20.4999 8.125C27.1043 8.125 32.4582 13.2178 32.4582 19.5C32.4582 25.7822 27.1043 30.875 20.4999 30.875C18.2332 30.875 16.1137 30.2751 14.3075 29.2331C20.6139 28.9163 25.6249 23.9518 25.6249 17.8741C25.6249 13.7481 23.3154 10.1351 19.859 8.14106Z" fill="#222222"/>
  <path d="M5.4 10.2L5.4 10.2C5.50137 10.5041 5.55206 10.6562 5.60276 10.7225C5.80288 10.9843 6.19712 10.9843 6.39724 10.7225C6.44794 10.6562 6.49863 10.5041 6.6 10.2L6.6 10.2C6.68177 9.95468 6.72266 9.83201 6.77555 9.72099C6.97291 9.30672 7.30672 8.97291 7.72099 8.77555C7.83201 8.72266 7.95468 8.68177 8.2 8.6L8.2 8.6C8.50412 8.49863 8.65618 8.44794 8.7225 8.39724C8.98431 8.19712 8.98431 7.80288 8.7225 7.60276C8.65618 7.55206 8.50412 7.50137 8.2 7.4L8.2 7.4C7.95468 7.31822 7.83201 7.27734 7.72099 7.22445C7.30672 7.02709 6.97291 6.69329 6.77555 6.27901C6.72266 6.16799 6.68177 6.04532 6.6 5.8C6.49863 5.49588 6.44794 5.34382 6.39724 5.2775C6.19712 5.01569 5.80288 5.01569 5.60276 5.2775C5.55206 5.34382 5.50137 5.49588 5.4 5.8C5.31823 6.04532 5.27734 6.16799 5.22445 6.27901C5.02709 6.69329 4.69329 7.02709 4.27901 7.22445C4.16799 7.27734 4.04532 7.31823 3.8 7.4C3.49588 7.50137 3.34382 7.55206 3.2775 7.60276C3.01569 7.80288 3.01569 8.19712 3.2775 8.39724C3.34382 8.44794 3.49588 8.49863 3.8 8.6C4.04532 8.68177 4.16799 8.72266 4.27901 8.77555C4.69329 8.97291 5.02709 9.30672 5.22445 9.72099C5.27734 9.83201 5.31822 9.95468 5.4 10.2Z" fill="#222222"/>
</svg>
            </div>
        </div>
    )
}

export default Navbar;