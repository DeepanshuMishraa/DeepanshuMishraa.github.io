import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4'>About</p>
        </div>
        <p className='text-xl mt-20'>
        Passionate about coding and driven by a love for technology, I'm Deepanshu Mishra—a proficient developer with expertise in React.js, CSS, HTML, and Python. Dedicated to creating impactful solutions, I am currently exploring the realm of backend development and mastering Rust. Join me on this exciting journey of continuous learning and innovation.
        </p>
        <br/>
        <p className='text-xl py-4'>Since childhood, my fascination with tech and computers has fueled my passion for coding. Always envisioning myself solving complex algorithms, I've dreamt of contributing to groundbreaking advancements—perhaps even taking us to space. I thrive on turning imaginative ideas into reality, making an indelible mark on the world of technology.</p>
      </div>
    </div>
  )
}

export default About
