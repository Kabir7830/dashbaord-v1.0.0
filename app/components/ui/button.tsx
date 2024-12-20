import * as React from 'react'
import {cva, type VariantProps} from 'class-variance-authority'
import { cn } from '@/app/lib/utils'


const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
    {
        variants:{
            variants:{
                default:"bg-white hover:bg-white/80",
                secondary:"bg-dark text-white hover:bg-dark/80",
                primary:"bg-[#4ea292] text-white hover:bg-[#4ea292]/80",
                outline: "border border-white hover:bg-white/20 hover:text-white/100 text-white"
            },
            size:{
                default:"h-10 py2 px-4",
                sm:"h-9 px-3 rounded-md",
                lg:"h-11 px-8 rounded-md",
            },
        },
        defaultVariants:{
            variants:"default",
            size:"default",
        },
    }
)


export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants>{}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({className,variants,size,...props},ref)=>{
        // return (<button className={cn(buttonVariants({variants,size,className}))} ref={ref} {...props} />)
        return (<button className={cn(buttonVariants({variants,size,className}))} ref={ref} {...props} />)
    }
)

Button.displayName = "Button"

export {Button, buttonVariants}