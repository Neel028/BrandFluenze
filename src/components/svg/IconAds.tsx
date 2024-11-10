import { SVGProps } from 'react'

const IconAdd = ({ width = 32, height = 32, ...props }: SVGProps<SVGSVGElement>) => {
    return (
        <svg width={width} height={height} {...props} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 1H30.3333L26.3333 9H1L5 1Z" fill="#FF9500" />
            <path d="M5 11.6667H30.3333L26.3333 19.6667H1L5 11.6667Z" fill="#F86F3A" />
            <path d="M5 22.3333H30.3333L26.3333 30.3333H1L5 22.3333Z" fill="#FFCC00" />
        </svg>
    )
}

export default IconAdd