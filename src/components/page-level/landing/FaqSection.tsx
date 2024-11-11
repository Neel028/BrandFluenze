import Container from '@/components/common/Container'
import { FC } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { accordionData } from '@/static-data'
import { Faq } from '@/types/common'

interface FaqSectionProps {

}

const FaqSection: FC<FaqSectionProps> = ({ }) => {
    return (
        <section id='faq'>
            <Container>
                <div className="content-part bg-background-light rounded-[28px] relative overflow-hidden z-10">
                    <div className="fancy-shapes">
                        <div className="circle absolute -z-[1] -left-[100px] -top-[250px] w-[600px] h-[600px] border-[70px] border-[#F3F5F7] rounded-full">
                        </div>
                    </div>
                    <div className="hero-section-text-content py-8 md:py-14 px-6 sm:px-8 md:px-12  grid grid-cols-1 lg:grid-cols-12 gap-4">
                        <div className="text-content lg:col-span-4 max-lg:text-center">
                            <h1 className='text-4xl sm:text-5xl xl:text-6xl 2xl:text-6xl font-bold !leading-[1.2] text-primary font-jakarta mb-2'>
                                FAQs
                            </h1>
                            <p className='text-xs xs:text-sm sm:text-base font-medium text-primary'>Still have Questions in your mind ?</p>
                        </div>
                        <div className="img-content lg:col-span-8">
                            <Accordion type="single" collapsible className="w-full space-y-2 lg:space-y-4">
                                {accordionData.map((item: Faq) => (
                                    <AccordionItem key={item.id} value={item.id}>
                                        <AccordionTrigger className="text-sm sm:text-base font-semibold text-primary">
                                            {item.question}
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <p className="text-xs sm:text-sm text-[#6F6C90] leading-[1.6] font-dmsans">
                                                {item.answer}
                                            </p>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default FaqSection