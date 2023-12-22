'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { AiOutlineFileImage } from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useSession } from 'next-auth/react'

const CreatePost = () => {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [category, setCategory] = useState("Nature")
    const [photo, setPhoto] = useState('')

    const { data: session, status } = useSession()
    const router = useRouter()
    if (status === 'loading') {
        return <p className='text-center'>Loading...</p>
    }

    if (status === 'unauthenticated') {
        return <p className='text-center'>
            Access Denied
        </p>
    }
  return (
    <section className='px-4 py-8'>
        <div className='mx-auto max-w-screen-xl'>
            <form
            className='flex flex-col'
            >

            </form>
        </div>
    </section>
  )
}

export default CreatePost