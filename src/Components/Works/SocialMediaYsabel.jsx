import React from 'react'
import telefoni from "../Assets/testYsabel/Telefoni-01.png"

const SocialMediaYsabel = () => {
    return (
        <>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-x-16 mt-20 lg:mt-24 p-0 lg:p-12 ">
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-3">SOCIAL MEDIA</h1>
                <div className="max-w-3xl text-white text-sm lg:text-lg leading-relaxed font-custom4">
                    <p className="mb-4">
                        Mediat sociale janë një hapësirë ku eleganca dhe energjia bashkohen.
                        Fillimisht, tregojmë logon dhe shpërndajmë imazhe të renderave të restorantit për të krijuar
                        kureshtje dhe interes tek ndjekësit. Me imazhe të jashtëzakonshme dhe mesazhe të fuqishme,
                        Ysabel ofron një përvojë të veçantë dhe të paharrueshme për audiencën.
                    </p>
                    <p>
                        Angazhimi është natyral dhe organik, duke krijuar një komunitet të pasionuar që bashkëpunon dhe zhvillohet çdo ditë.

                    </p>
                </div>

            </div>

            <div className='my-8 lg:px-44'>
                <img src={telefoni} alt='' className='object-contain' />
            </div>
        </>
    )
}

export default SocialMediaYsabel