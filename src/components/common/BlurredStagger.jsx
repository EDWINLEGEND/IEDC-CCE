import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * BlurredStagger - Animates text with a per-character blur fade-in.
 *
 * Props:
 *  text        — The string to animate
 *  className   — CSS class applied to the wrapping motion element
 *  triggerOnce — If true (default), animation plays once on mount/scroll-in
 *  scrollBased — If true, animation triggers when element enters viewport
 *  stagger     — Delay between each character (default 0.015s)
 *  duration    — Duration per character animation (default 0.4s)
 *  delay       — Overall delay before animation starts (default 0)
 */
const BlurredStagger = ({
    text = '',
    className = '',
    triggerOnce = true,
    scrollBased = false,
    stagger = 0.015,
    duration = 0.4,
    delay = 0,
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: triggerOnce, margin: '-10% 0px' });

    const shouldAnimate = scrollBased ? isInView : true;

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: stagger,
                delayChildren: delay,
            },
        },
    };

    const letterVariant = {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 4,
        },
        show: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
        },
    };

    return (
        <motion.span
            ref={ref}
            className={className}
            variants={container}
            initial="hidden"
            animate={shouldAnimate ? 'show' : 'hidden'}
            style={{ display: 'inline' }}
        >
            {text.split('').map((char, index) => (
                <motion.span
                    key={index}
                    variants={letterVariant}
                    transition={{ duration, ease: 'easeOut' }}
                    style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </motion.span>
            ))}
        </motion.span>
    );
};

export default BlurredStagger;
