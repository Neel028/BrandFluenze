import { Feature } from '@/types/common';
import { Check } from 'lucide-react'
import { FC } from 'react'


const FeatureCard: FC<Feature> = ({ title, description, features,icon }) => {
    return (
        <div className="feature-card">
            <div className="main-content p-4 lg:p-5 bg-card rounded-lg">
                <div className="icons mb-4">
                    {icon}
                </div>
                <div className="text">
                    <h3 className='text-lg lg:text-xl font-semibold text-primary mb-1'>{title}</h3>
                    <p className='text-xs featuresection_word_spacing lg:text-sm text-muted-foreground leading-[1.4]'>{description}</p>
                </div>
            </div>
            <div className="bullet-point-list p-4 lg:p-5">
                <ul className='space-y-2'>
                    {features.map((feature, index) => (
                        <li key={index} className='flex items-center gap-2 text-xs lg:text-sm xl:text-base'>
                            <span><Check className='w-5' /></span>
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default FeatureCard
