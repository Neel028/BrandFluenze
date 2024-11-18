import Container from '@/components/common/Container'
import Image from 'next/image'
import { FC } from 'react'

interface BenefitSectionProps {

}

const BenefitSection: FC<BenefitSectionProps> = ({ }) => {
    return (
        <section>
            <Container>
                <div className="content-part bg-background-light rounded-[28px] relative overflow-hidden z-10">
                    <div className="fancy-shapes max-md:hidden">
                        <div className="circle absolute -z-[1] -left-[191px] -top-[260px] w-[600px] h-[600px] border-[70px] border-[#F3F5F7] rounded-full">
                        </div>
                    </div>
                    <div className="hero-section-text-content items-center  py-8 md:py-14 px-6 sm:px-8 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="text-content max-lg:text-center">
                            <h1 className='text-4xl sm:text-5xl xl:text-6xl 2xl:text-6xl font-bold !leading-[1.2] text-primary font-jakarta mb-2'>
                            Save 40+ hours <span className='text-muted'> on 
                            every research</span>
                            </h1>
                            <p className='text-xs xs:text-sm sm:text-base font-medium text-primary'>Research department job done in 5 min.</p>
                        </div>
                        <div className="img-content flex justify-center lg:justify-end">
                            <Image src={"/assets/images/benifit-section-img.png"} alt='strategy-section-img'  width={568} height={564} className='max-w-[340px] w-full'/>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default BenefitSection