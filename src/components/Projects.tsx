// import Image from 'next/image';
import Heading from './Heading';
import Card from './Card';
import React from 'react'
import '../app/styles/project.css'

const data=[
 { 
  id:0,
  title:"Dynamic resume Bulider",
  desc:"Hackthone milestone",       
  img:   "/photo2.jpg",
  tags:["html","node", "css","typescript"]
},
{
  id:1,
  title:"shareable Resume Bulider",
  desc:"Hackthone milstone 3",
  img :"/photo3.jpg",
  tags:["html","nodejs","css","typescript"]
},
{
  id:3,
  title:"static cartive Resume",
  desc:"Hackthone milstone 2",
  img :"/photo5.jpg",
  tags:["html","nodejs","css","typescript"]
},
{
  id:4,
  title:"currency converter",
  desc:"this app made by html,css typescprit ",
  img :"/photo6.jpg",
  tags:["html","nodejs","css","typescript"]
},
{
  id:5,
  title:"A resume bulider ",
  desc:"this app made by html,css typescprit ",
  img :"/photo7.jpg",
  tags:["html","nodejs","css","typescript"]
  }
]



const Projects = () => {
  return (
    <div id='projects' className=' project-container'>
   <Heading title='My projects' />
   <div className='project-grid-x1' >
    {data.map((el) => (<Card
    key={el.id}
    title={el.title}
    desc={el.desc}
    img={el.img}
    tags={el.tags}
    
    />))}
     </div>   
    </div>
  
  )
}

export default Projects
