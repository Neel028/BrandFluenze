"use client";

import Container from '@/components/common/Container'
import WaitListModal from '@/components/modal/WaitListModal'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { FC, useState } from 'react'

interface ContactSectionProps {

}

const ContactSection: FC<ContactSectionProps> = ({ }) => {
    const [openWaitListModal, setOpenWaitListModal] = useState<boolean>(false)

    return (
        <>
            <section id='company'>
                <Container>
                    <div className="content-part bg-theme-gradiant rounded-[28px] z-10 relative overflow-hidden">
                        <div className="fancy-shapes  max-md:hidden">
                            <div className="circle absolute -z-[1] -left-[200px] -bottom-[300px] w-[600px] h-[600px] border-[70px] border-[#F3F5F7]/5 rounded-full">
                            </div>
                        </div>
                        <div className="hero-section-text-content py-8 md:py-14 px-6 sm:px-8 md:px-12 grid grid-cols-1 lg:grid-cols-2">
                            <div className="flex items-start flex-col gap-6">
                                <div className="info -mt-4">
                                    <h1 className='text-4xl sm:text-5xl xl:text-6xl 2xl:text-6xl font-bold !leading-[1.2] text-white font-jakarta mb-2'>Ready to take your
                                        brand to the next
                                        level? </h1>
                                </div>
                                <div className="action w-full">
                                    <div className="grid grid-cols-1 min-[480px]:flex items-center gap-2  mb-4">
                                        <Button variant={"outline"}>Book a Discovery Call</Button>
                                        <Button onClick={()=>setOpenWaitListModal(true)}>Join the waitlist</Button>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="-space-x-2 flex">
                                            <Avatar className='border-2 w-12 h-12 border-[#F5F5F585]'>
                                                <AvatarImage src="/assets/images/user-1.png" alt="@shadcn" />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                            <Avatar className='border-2 w-12 h-12 border-[#F5F5F585]'>
                                                <AvatarImage src="/assets/images/user-2.png" alt="@shadcn" />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                            <Avatar className='border-2 w-12 h-12 border-[#F5F5F585]'>
                                                <AvatarImage src="/assets/images/user-3.png" alt="@shadcn" />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                        </div>
                                        <h4 className='text-sm font-medium text-white max-w-[200px] text-center'>Join Blake,Zack,Nick &
                                            2156 others on the waitlist.</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <WaitListModal close={() => setOpenWaitListModal(false)} open={openWaitListModal} />
        </>
    )
}

export default ContactSection