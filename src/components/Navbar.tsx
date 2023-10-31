import React from 'react'
import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'
import { buttonVariants } from './ui/button'
import {LoginLink} from "@kinde-oss/kinde-auth-nextjs/server"

const Navbar = () => {
  return (
    <nav className='sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-grey-200 bg-white/75 backdrop-blur-lg transition-all'>
        <MaxWidthWrapper>
            <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
                <Link href='/' className='flex z-40 font-semibold'>
                    <span>quill.</span>
                </Link>

                {/* Todo: add mobile navbar */}
                <div className='hidden items-center space-x-4 sm:flex'>
                    <>
                        <Link className={buttonVariants({
                            variant: "ghost",
                            size: 'sm'
                        })} href='/pricing'>Pricing</Link>
                        <LoginLink className={buttonVariants({
                            variant: "ghost",
                            size: 'sm'
                        })}>Sign in</LoginLink>
                    </>
                </div>
            </div>
        </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar