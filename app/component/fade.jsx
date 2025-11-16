"use client";
import{easeInOut, motion} from "framer-motion";

export default function Fade({children, className}){
    return(
        <motion.div
        className={className}
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration: 0.7, ease: easeInOut}}
        viewport={{once:false, amount:0.2}}
        >
        {children}
        </motion.div>
    );
}