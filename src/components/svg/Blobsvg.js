import React from 'react';

export const SvgBlob = () => {
    return (
        <div style={{

            zIndex: 0,
            position: "absolute",
            top: -311,
            right: -257,
            width: 1049,
            transform: "rotate(248deg)"
        }}>
            <svg width='100%' height='100%' viewBox='0 0 1000 1000'
                 xmlns='http://www.w3.org/2000/svg'>
                <defs>
                    <filter id='grain' x='-50vw' y='-50vh' width='100vw' height='100vh'>

                        <feFlood floodColor='#ffffff' result='neutral-gray'/>
                        <feTurbulence in='neutral-gray' type='fractalNoise' baseFrequency='2.5' numOctaves='100'
                                      stitchTiles='stitch' result='noise'/>
                        <feColorMatrix in='noise' type='saturate' values='0' result='destaturatedNoise'/>
                        <feComponentTransfer in='desaturatedNoise' result='theNoise'>
                            <feFuncA type='table' tableValues='0 0 0.5 0'/>
                        </feComponentTransfer>
                        <feBlend in='SourceGraphic' in2='theNoise' mode='soft-light' result='noisy-image'/>

                    </filter>

                    <clipPath id='shape'>
                        <path fill='currentColor'
                              d='M809,577.5Q685,655,628,777.5Q571,900,444,858.5Q317,817,319,691Q321,565,270.5,481.5Q220,398,302,348.5Q384,299,466.5,259Q549,219,588,306Q627,393,780,446.5Q933,500,809,577.5Z'/>
                    </clipPath>

                </defs>
                <g filter='url(#grain)' clipPath='url(#shape)'>
                    <path fill='#ffc022'
                          d='M809,577.5Q685,655,628,777.5Q571,900,444,858.5Q317,817,319,691Q321,565,270.5,481.5Q220,398,302,348.5Q384,299,466.5,259Q549,219,588,306Q627,393,780,446.5Q933,500,809,577.5Z'/>
                </g>
            </svg>
        </div>
    );
}
