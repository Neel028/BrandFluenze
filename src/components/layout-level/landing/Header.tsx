"use client";

import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { Drawer } from 'vaul'
import ResponsiveMenuDrawer from './ResponsiveMenuDrawer';

interface HeaderProps {

}

const Header: FC<HeaderProps> = ({ }) => {
    return (
        <Drawer.Root direction="right">
            <header className='py-4 px-6 sm:px-8 md:py-6 md:px-12'>
                <div className="flex items-center justify-between">
                    <div className="logo-part">
                        <Image src={"/assets/images/Logo-lg.svg"} alt='website-logo' width={2212} height={359} className='max-w-[150px]' />
                    </div>
                    <div className="menu-part ms-[146px] max-xl:hidden">
                        <ul className='flex items-center gap-10'>
                            <li>
                                <Link className='text-base font-medium text-white' href={"/benefit"}>Benefit</Link>
                            </li>
                            <li>
                                <Link className='text-base font-medium text-white' href={"/works"}>How it Works</Link>
                            </li>
                            <li>
                                <Link className='text-base font-medium text-white' href={"/faq"}>Faqs</Link>
                            </li>
                            <li>
                                <Link className='text-base font-medium text-white' href={"/company"}>Company</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="action-part flex items-center gap-4 max-xl:hidden">
                        <Link href={""} >
                            <Image src={"/assets/images/play-store.svg"} alt='play-store-logo' width={135} height={40} className='max-w-[130px]' />
                        </Link>
                        <Link href={""} >
                            <Image src={"/assets/images/app-store.svg"} alt='play-store-logo' width={135} height={40} className='max-w-[130px]' />
                        </Link>
                    </div>
                    <Drawer.Trigger asChild>
                        <Button variant="ghost" className="max-xl:flex hidden !p-0" size="icon">
                            <Menu className="!w-7 !h-7 text-white flex-shrink-0" />
                        </Button>
                    </Drawer.Trigger>
                </div>
            </header>
            <ResponsiveMenuDrawer/>
        </Drawer.Root>
    )
}

export default Header