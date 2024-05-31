import React, { useState, useRef, Suspense } from 'react'
import emailjs from '@emailjs/browser'
import { Canvas } from '@react-three/fiber'
import { Fox }from '../models/Fox'
import Loader from '../components/Loader'

const Contact = () => {
  const formRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [currentAnimation, setCurrentAnimation] = useState('idle')
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({...form,  [name]: value});

  };
  const handleFocus = (e) => setCurrentAnimation('walk')
  const handleBlur = (e) => setCurrentAnimation('idle')
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('hit')
    emailjs.send(
      import.meta.env.VITE_APP_EMAIL_SERVICE_ID,
      import.meta.env.VITE_APP_EMAIL_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: 'Owen',
        from_email: form.email,
        to_email: 'kiet.tran@mekship.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAIL_PUBLIC_KEY,

    ).then((res) => {
      setIsLoading(false)
      setTimeout(() => {
        setForm({ name: '', email: '', message: '' })
        setCurrentAnimation('idle')
      }, [3000]);
     
    }).catch((err) => {
      setIsLoading(false)
      setCurrentAnimation('idle')
    })
  }
  return (
    <div className='relative flex lg:flex-row max-container'>
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get on Touch</h1>
        <form className="w-full flex flex-col gap-7 mt-14" onSubmit={handleSubmit}>
          <label className="text-black-500 font-semibold">
            Name
            <input type="text" placeholder='Join' className='input' onBlur={handleBlur} onFocus={handleFocus} onChange={handleChange} value={form.name} id='name' name='name' />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input type="email" placeholder='join@gmail.com' className='input' onBlur={handleBlur} onFocus={handleFocus} onChange={handleChange} value={form.email} name='email' />
          </label>
          <label className="text-black-500 font-semibold">
            Your Message
            <textarea type="text" rows={4} placeholder='let me know how I can help you' className='textarea' onBlur={handleBlur} onFocus={handleFocus} onChange={handleChange} value={form.message} name='message' />
          </label>

          <button type='submit' className='btn' disabled={isLoading} onBlur={handleBlur} onFocus={handleFocus}>
            {isLoading ? 'Sending...' : 'Send Message...'}
          </button>
        </form>
      </div>
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 } }
        >
          <directionalLight intensity={2.5} position={[0,0,1]} />
          <ambientLight st />
          <Suspense fallback={<Loader />}>
            <Fox currentAnimation={currentAnimation} position={[0.5,0.35,0]} rotate={[12.6,-0.6,0]} scale={[0.6,0.5,0.5]}></Fox>
          </Suspense>
        </Canvas>
      </div>
    </div>
  )
}

export default Contact