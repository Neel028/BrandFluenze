"use client";

import Container from '@/components/common/Container'
import Header from '@/components/layout-level/landing/Header'
import WaitListModal from '@/components/modal/WaitListModal'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { FC, useState } from 'react'

interface HeroSectionProps {

}

const HeroSection: FC<HeroSectionProps> = ({ }) => {
    const [openWaitListModal,setOpenWaitListModal] = useState<boolean>(false)
    return (
        <>
            <section>
                <Container>
                    <div className="content-part bg-theme-gradiant rounded-[28px] z-10 relative overflow-hidden">
                        <div className="fancy-shapes">
                            <div className="circle absolute -z-[1] -left-[200px] sm:-left-[400px] -bottom-[200px] w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] border-[48px] sm:border-[70px] border-[#F3F5F7]/15 rounded-full">
                            </div>
                            <div className="circle absolute -z-[1] -right-[200px] top-1/2 max-sm:-translate-y-1/2 sm:-top-[200px] w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] border-[48px] sm:border-[70px] border-[#F3F5F7]/15 rounded-full">
                            </div>
                        </div>
                        <div className="header-part">
                            <Header />
                        </div>
                        <div className="hero-section-text-content pb-8 md:pb-14 py-4 px-6 sm:px-8 md:px-12">
                            <div className="lg:max-w-[80%] mx-auto flex items-center justify-center flex-col gap-6">
                                <div className="bg-wrapper bg-badge-gradiant w-fit mx-auto p-1 rounded-full">
                                    <div className="badge bg-white rounded-lg  px-3 py-1 text-xs flex items-center gap-2">
                                        <span className='w-2 h-2 rounded-full bg-theme inline-block flex-shrink-0'></span>
                                        <h5 className='text-theme font-bold'>Everything that Brand Needs</h5>
                                    </div>
                                </div>
                                <div className="info text-center -mt-4">
                                    <h1 className='text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-bold !leading-[1.2] text-white font-jakarta mb-2'>Connect Your <br /> Brand With Top <span className='font-instrument font-normal italic'>Creator’s</span>  </h1>
                                    <p className='text-sm max_width_p xs:text-sm sm:text-base font-medium text-white max-md:hidden block'>Unleash India's Unstoppable 5M+ Creator Force. Skip the middlemen, collaborate directly with top influencers, and Top Talents to watch your ROI explode up to 10X. Ready to turn influence into empire?</p>
                                    <p className='text-xs xs:text-sm sm:text-base font-medium text-white max-md:block hidden'>Unleash India's Unstoppable 5M+ Creator Force.  Ready to turn influence into empire?</p>
                                </div>
                                <div className="action">
                                    <div className="grid grid-cols-1 min-[480px]:flex items-center gap-2 mb-4">
                                        <Button variant={"outline"}>Book a Discovery Call</Button>
                                        <Button onClick={()=>setOpenWaitListModal(true)}>Join the waitlist</Button>
                                    </div>
                                    <div className="flex items-center gap-2 justify-center">
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
                                        <h4 className='text-xs xs:text-sm font-medium text-white max-w-[200px] text-center'>Join Blake,Zack,Nick &
                                            2156 others on the waitlist.</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <WaitListModal  close={()=>setOpenWaitListModal(false)} open={openWaitListModal}/>
        </>
    )
}

export default HeroSection