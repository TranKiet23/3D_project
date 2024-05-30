import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [isLoading, setIsLoading] = useState(false)
  const handleChange = (e) => {
    setForm({ [e.target.name]: e.target.value })
    e.preventDefault()

  }
  const handleFocus = (evt) => {
  }
  const handleBlur = (evt) => {
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
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
      import.meta.env.VITE_APP_EMAIL_PUBLIC_ID,

    ).then((res) => {
      console.log(22222);
      setIsLoading(false)
      setForm({ name: '', email: '', message: '' })
    }).catch((err)=> {
      console.log("🚀 ~ ).then ~ err:", err)
      setIsLoading(false)
    })
  }
    return (
      <div className='relative flex lg:flex-row max-container'>
        <div className="flex-1 min-w-[50%] flex flex-col">
          <h1 className="head-text">Get on Touch</h1>
          <form className="w-full flex flex-col gap-7 mt-14"  onSubmit={handleSubmit}>
            <label className="text-black-500 font-semibold">
              Name
              <input type="text" placeholder='Join' className='input' onBlur={handleBlur} onFocus={handleFocus} onChange={handleChange} value={form.name} />
            </label>
            <label className="text-black-500 font-semibold">
              Email
              <input type="text" placeholder='join@gmail.com' className='input' onBlur={handleBlur} onFocus={handleFocus} onChange={handleChange} value={form.email} />
            </label>
            <label className="text-black-500 font-semibold">
              Your Message
              <textarea type="text" rows={4} placeholder='let me know how I can help you' className='textarea' onBlur={handleBlur} onFocus={handleFocus} onChange={(e) => { handleChange(e, 'message') }} value={form.message} />
            </label>

            <button type='submit' className='btn' disabled={isLoading} onBlur={handleBlur} onFocus={handleFocus}>
              {isLoading ? 'Sending...' : 'Send Message...'}
            </button>
          </form>
        </div>
      </div>
    )
  }

  export default Contact