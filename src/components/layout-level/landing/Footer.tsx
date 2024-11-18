"use client";

import Container from '@/components/common/Container'
import IconFacebook from '@/components/svg/IconFacebook';
import IconInsta from '@/components/svg/IconInsta';
import IconLinkedin from '@/components/svg/IconLinkedin';
import IconTwitter from '@/components/svg/IconTwitter';
import IconYoutube from '@/components/svg/IconYoutube';
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
                    <div className="fancy-shapes max-md:hidden">
                        <div className="circle absolute -z-[1] -right-[191px] -top-[260px] w-[600px] h-[600px] border-[70px] border-[#000000]/5 rounded-full">
                        </div>
                        <div className="circle absolute -z-[1] -left-[360px] -bottom-[500px] w-[600px] h-[600px] border-[70px] border-[#000000]/5 rounded-full">
                        </div>
                    </div>
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
                                <div className="mb-6">
                                    <div className="menu-part">
                                        <ul className='flex items-center gap-6'>
                                            <li>
                                                <Link href={""} className=''><IconFacebook className='w-5 h-5'/></Link>
                                            </li>
                                            <li>
                                                <Link href={""} className=''><IconTwitter className='w-5 h-5'/></Link>
                                            </li>
                                            <li>
                                                <Link href={""} className=''><IconInsta className='w-5 h-5'/></Link>
                                            </li>
                                            <li>
                                                <Link href={""} className=''><IconLinkedin className='w-5 h-5'/></Link>
                                            </li>
                                            <li>
                                                <Link href={""} className=''><IconYoutube  className='w-5 mt-1 h-5'/></Link>
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