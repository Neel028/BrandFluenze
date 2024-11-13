"use client";

import Container from '@/components/common/Container'
import Image from 'next/image'
import Link from 'next/link';
import { FC } from 'react'

interface FooterProps {

}

const Footer: FC<FooterProps> = ({ }) => {
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 20,
                behavior: 'smooth',
            });
        }
    }
    return (
        <div className="mb-2.5">
            <Container>
                <footer className='py-8 px-6 sm:px-8 md:py-12 md:px-12 bg-theme-gradiant rounded-[28px] z-10 relative overflow-hidden'>
                    <div className="">
                        <div className="logo-part mb-6">
                           <Link href={"/"}>
                           <Image src={"/assets/images/logo-sm.png"} alt='website-logo' width={50} height={61} className='max-w-[25px] w-full' />
                           </Link>
                        </div>
                        <div className="flex lg:items-start lg:justify-between max-lg:flex-col-reverse gap-10">
                            <div className="">
                                <div className="mb-5">
                                    <div className="menu-part">
                                        <Link href={""} className='text-base font-medium text-white mb-3 inline-block'>Download Now</Link>
                                        <ul className='flex items-center gap-6 lg:gap-10'>
                                            <li>
                                                <button onClick={() => scrollToSection("features-section")} className='text-sm sm:text-base font-medium text-white bg-none' >Benefit</button>
                                            </li>
                                            <li>
                                                <button onClick={() => scrollToSection("how-it-works")} className='text-sm sm:text-base font-medium text-white bg-none' >How it Works</button>
                                            </li>
                                            <li>
                                                <button onClick={() => scrollToSection("help")} className='text-sm sm:text-base font-medium text-white bg-none' >Help</button>
                                            </li>
                                            <li>
                                                <button onClick={() => scrollToSection("contact")} className='text-sm sm:text-base font-medium text-white bg-none' >Contact</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <h4 className='text-sm font-medium text-white bg-none'>© 2024 Brandfluenze. All rights reserved</h4>
                            </div>
                            <div className="download-action">
                                <h3 className='text-base font-medium text-white mb-2'>Get the app</h3>
                                <div className="action-part flex items-center gap-4">
                                    <Link href={""} >
                                        <Image src={"/assets/images/play-store.svg"} alt='play-store-logo' width={135} height={40} className='max-w-[130px]' />
                                    </Link>
                                    <Link href={""} >
                                        <Image src={"/assets/images/app-store.svg"} alt='play-store-logo' width={135} height={40} className='max-w-[130px]' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </Container>
        </div>
    )
}

export default Footer