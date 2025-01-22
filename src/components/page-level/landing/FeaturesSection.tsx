import Container from '@/components/common/Container'
import { Check } from 'lucide-react'
import { FC } from 'react'
import FeatureCard from './FeatureCard'
import { featuresData } from '@/static-data'
import { Feature } from '@/types/common'

interface FeaturesSectionProps {

}

const FeaturesSection: FC<FeaturesSectionProps> = ({ }) => {
    return (
        <section id='features-section'>
            <Container>
                <div className="content-part bg-background-light rounded-[28px] relative overflow-hidden z-10">
                    <div className="fancy-shapes">
                        <div className="circle absolute max-sm:hidden -z-[1] -left-[400px] -top-[200px] w-[600px] h-[600px] border-[70px] border-[#F3F5F7] rounded-full">
                        </div>
                        <div className="circle absolute max-sm:hidden -z-[1] -right-[300px] top-1/2 -translate-y-1/2 w-[600px] h-[600px] border-[70px] border-[#F3F5F7] rounded-full">
                        </div>
                    </div>
                    <div className="hero-section-text-content py-8 md:py-14 px-6 sm:px-8 md:px-12">
                        <div className="lg:max-w-[80%] mx-auto flex items-center justify-center flex-col gap-6 mb-10">
                            <div className="bg-wrapper bg-badge-gradiant-dark w-fit mx-auto p-1 rounded-full">
                                <div className="badge bg-white rounded-lg  px-3 py-1 text-xs flex items-center gap-2">
                                    <span className='w-2 h-2 rounded-full bg-primary inline-block flex-shrink-0'></span>
                                    <h5>Everything that Brand Needs</h5>
                                </div>
                            </div>
                            <div className="info text-center -mt-4">
                                <h1 className='featuresection_max_width_span text-4xl sm:text-5xl xl:text-6xl 2xl:text-6xl font-bold !leading-[1.2] text-primary font-jakarta mb-2'>
                                    <span className='text-muted'>Tech</span> + Marketing <span className='text-muted'>= Business
                                        On Super </span> Steroids
                                </h1>
                                <p className='text-xs xs:text-sm sm:text-base font-medium leading-[1.4] text-primary lg:max-w-[80%] xl:max-w-[60%] mx-auto'>Elevate your brand with our expert solutions in influencer marketing, digital advertising, and content creation.</p>
                            </div>
                        </div>
                        <div className="features-card-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4">
                            {featuresData.map((feature:Feature, index:number) => (
                                <FeatureCard
                                    key={index}
                                    icon={feature.icon}
                                    title={feature.title}
                                    description={feature.description}
                                    features={feature.features}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default FeaturesSection