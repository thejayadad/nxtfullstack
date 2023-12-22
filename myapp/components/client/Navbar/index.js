'use client'
import Logo from '@/components/Logo/Logo'
import React from 'react'
import AuthLink from './AuthLink'

const Navbar = () => {
  return (
    <header className='px-4 py-8'>
        <nav className='flex justify-between mx-auto max-w-screen-xl'>
            <Logo />
            <AuthLink />
        </nav>
    </header>
  )
}

export default Navbar