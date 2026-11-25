
import React from 'react';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

/*
https://lightswind.com/components/fall-beam-background
*/

const FallBeamBackground = ({
    className = '',
    lineCount = 20,
    displayText,
    beamColorClass = 'cyan-400',
}) => {

    const containerRef = useRef(null);

    const getColorValue = (colorClass) => {
        switch (colorClass) {
            case 'green-400':
                return 'rgba(74, 222, 128, 0.8)';
            case 'cyan-400':
                return 'rgba(34, 211, 238, 0.8)';
            case 'blue-400':
                return 'rgba(96, 165, 250, 0.8)';
            case 'red-400':
                return 'rgba(248, 113, 113, 0.8)';
            case 'indigo-400':
                return 'rgba(129, 140, 248, 0.8)';
            default:
                return 'rgba(34, 211, 238, 0.8)';
        }
    };

    const glowColor = getColorValue(beamColorClass);

    const dynamicStyles = `

        .animated-background {
            opacity: 1;
            overflow: hidden;
            inset: 0;
            z-index: 0;
            background-color: transparent;
            position: absolute;
        }

        .fall-beam-line {
            position: absolute;
            width: 1px;
            height: 100%;
            z-index: 10;
        }

        .fall-beam-line::after {
            content: "";
            position: absolute;
            left: 0;
            width: 100%;
            height: 80px;
            background: linear-gradient(
                to bottom,
                rgba(255, 255, 255, 0),
                var(--beam-glow-color)
            );
            animation: fall var(--ani-duration) var(--ani-delay) linear infinite;
        }

        @keyframes fall {
            0% {
                top: -100px;
            }
            100% {
                top: 100%;
            }
        }
    `;

    const [beams, setBeams] = React.useState([]);

    useEffect(() => {
        const newBeams = Array.from(
            { length: lineCount },
            (_, i) => ({
                id: i,
                left: `${(i + 1) * (100 / lineCount) + Math.random() * 5 - 5}%`,
                duration: `${8 + Math.random() * 10}s`,
                delay: `${-Math.random() * 10}s`,
            })
        );

        setBeams(newBeams);
    }, [lineCount, beamColorClass]);

    return (
        <>
            <style>{dynamicStyles}</style>

            <motion.div
                ref={containerRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 2,
                    ease: 'easeOut'
                }}
                className={`animated-background `}
            >

                {beams.map(beam => (
                    <div
                        key={beam.id}
                        className="fall-beam-line"
                        style={{
                            left: beam.left,
                            '--ani-duration': beam.duration,
                            '--ani-delay': beam.delay,
                            '--beam-glow-color': glowColor,
                        }}
                    />
                ))}

                {displayText && (
                    <h1 className="relative z-20 grid place-content-center h-full font-sans text-4xl sm:text-5xl lg:text-7xl font-bold text-white p-4 text-center">

                        {displayText}

                        <div
                            className="absolute inset-0 z-30 pointer-events-none"
                            style={{
                                background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.95) 100%)'
                            }}
                        />

                    </h1>
                )}

            </motion.div>
        </>
    );
};

export default FallBeamBackground;
