import React from 'react'
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineTwitter, AiOutlineYoutube } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-6xl'>
        <hr className='w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0' />
        <div className='mx-auto p-4 flex flex-col text-center text-neutral-500 md:flex-row md:justify-between'>
            <div className='text-neutral-500 dark:text-neutral-100'>&copy; 2024 Alex Esaki</div>
            <div className='flex flex-row items-center justify-center space-x-2 mb-1'>
                <a href="https://github.com/alex-codeur" rel="noreferrer" target='_blank'>
                    <AiOutlineGithub
                        className='hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100'
                        size={30}
                    />
                </a>
                <a href="https://github.com/alex-codeur" rel="noreferrer" target='_blank'>
                    <AiOutlineTwitter
                        className='hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100'
                        size={30}
                    />
                </a>
                <a href="https://github.com/alex-codeur" rel="noreferrer" target='_blank'>
                    <AiOutlineLinkedin
                        className='hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100'
                        size={30}
                    />
                </a>
                <a href="https://github.com/alex-codeur" rel="noreferrer" target='_blank'>
                    <AiOutlineYoutube
                        className='hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100'
                        size={30}
                    />
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer