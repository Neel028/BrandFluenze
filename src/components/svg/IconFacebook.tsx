import { SVGProps } from 'react'

const IconFacebook= ({ width = 24, height = 24, ...props }: SVGProps<SVGSVGElement>) => {
    return (
        <svg width={width} height={height} {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.4973 24V13.0525H17.3569L17.9347 8.786H13.4972V6.06204C13.4972 4.8268 13.8574 3.98505 15.718 3.98505L18.0909 3.98399V0.168096C17.6805 0.116195 16.2718 0 14.6332 0C11.2118 0 8.86949 1.98823 8.86949 5.63963V8.786H5V13.0525H8.86949V23.9999H13.4973V24Z" fill="white"/>
        </svg>
    )
}

export default IconFacebook