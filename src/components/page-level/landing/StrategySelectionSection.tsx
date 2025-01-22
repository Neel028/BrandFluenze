import Container from '@/components/common/Container'
import Image from 'next/image'
import { FC } from 'react'

interface StrategySelectionSectionProps {

}

const StrategySelectionSection: FC<StrategySelectionSectionProps> = ({ }) => {
    return (
        <section id='how-it-works'>
            <Container>
                <div className="content-part bg-background-light rounded-[28px] relative overflow-hidden z-10">
                    <div className="fancy-shapes  max-md:hidden">
                        <div className="circle absolute -z-[1] -left-[190px] -bottom-[375px] w-[600px] h-[600px] border-[70px] border-[#F3F5F7] rounded-full">
                        </div>
                    </div>
                    <div className="hero-section-text-content items-center py-8 md:py-14 px-6 sm:px-8 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="text-content max-lg:text-center max-w-[95%]">
                            <h1 className='StrategySelectionSection_max_width text-4xl sm:text-5xl xl:text-6xl 2xl:text-6xl font-bold !leading-[1.2] text-primary font-jakarta mb-2'>
                                <span className='text-muted'>Get everything <br/>
                                that</span> a Brand needs
                                to shine
                            </h1>
                            <p className='text-xs xs:text-sm sm:text-base font-medium text-muted'>Craft strategies that truly engage your audience.</p>
                        </div>
                        <div className="img-content flex justify-center">
                            <Image src={"/assets/images/strategy-section-image.png"} alt='strategy-section-img' width={1322} height={772} className='max-lg:max-w-[500px] w-full'/>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default StrategySelectionSection