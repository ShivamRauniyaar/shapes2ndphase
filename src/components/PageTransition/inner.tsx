'use client'

import React from 'react'
import { motion } from 'framer-motion';
import { opacity, expand } from './animations';

interface InnerProps {
    backgroundColor: string;
}

export default function Inner({  backgroundColor }: InnerProps) {
    const anim = (variants: any, custom: number | null = null) => {
        return {
            initial: "initial",
            animate: "enter",
            exit: "exit",
            custom,
            variants
        }
    }

    const nbOfColumns = 1
    return (
        <div className='page stairs' style={{backgroundColor}}>
        <motion.div {...anim(opacity)} className='transition-background'/>
        <div className='transition-container'>
            {
                [...Array(nbOfColumns)].map( (_, i) => {
                    return (
                        <motion.div key={i} {...anim(expand, nbOfColumns - i)}/>
                    ) 
                })
            }
        </div>
        
    </div>
    )
}

