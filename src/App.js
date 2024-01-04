import './App.module.css';
import Navbar from './components/NavBar';
import Section1 from './components/section1';
import Section2 from './components/section2';
import Section3 from './components/section3';
import Footer from './components/footer'
import {useEffect, useState} from 'react'



function App() {
  
  const [mode,setMode] = useState('sombre')

  useEffect(()=>{
    document.querySelector('.btn-mode').addEventListener('click',()=>{

      if(mode === 'sombre' ){
        document.querySelector('.nav-bar').classList.add('NavSombre')
        document.querySelectorAll('.clair').forEach(item => item.classList.add('section_sombre'))
        document.querySelectorAll('.change-txt').forEach(item => item.classList.add('black-txt'))
        document.querySelectorAll('.change-bg-color').forEach(item => item.classList.add('bg-color'))
        document.querySelector('body').classList.add('body_sombre')
        document.getElementById('icon-clair').style.display='none'
        document.getElementById('icon-sombre').style.display='block'
        setMode('clair')
      }else{

        
        document.querySelector('.nav-bar').classList.remove('NavSombre')
        document.querySelectorAll('.clair').forEach(item => item.classList.remove('section_sombre'))
        document.querySelectorAll('.change-txt').forEach(item => item.classList.remove('black-txt'))
        document.querySelectorAll('.change-bg-color').forEach(item => item.classList.remove('bg-color'))
        document.querySelector('body').classList.remove('body_sombre')
        document.getElementById('icon-clair').style.display='block'
        document.getElementById('icon-sombre').style.display='none'
        setMode('sombre')
      }
     })
  })

 


  return (
    <div className="App">
      <Navbar></Navbar>
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </div>
  );
}

export default App;
