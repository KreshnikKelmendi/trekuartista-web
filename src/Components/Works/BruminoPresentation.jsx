import React from 'react'
import bruminoLogo from "../Assets/brumino/logo-01.png"
import BruminoSocialMedia from './BruminoSocialMedia'
import br1 from "../Assets/brumino/mdb-01.png"
import br2 from "../Assets/brumino/mdb-02.png"
import br3 from "../Assets/brumino/mdb-03.png"


const BruminoPresentation = () => {
    return (
        <>
            <div className='w-full'>
                <img src={bruminoLogo} alt='Brumino Logo' className='w-40 h-40 lg:w-60 lg:h-60 object-contain mx-auto' />

                <div>
                    <p className='text-white text-2xl lg:text-6xl text-center font-custom4'>Social Media Theme</p>
                </div>
                <div className='lg:mt-16'>
                    <BruminoSocialMedia />
                </div>

                <div className=' lg:mt-20'>
                    <div className=''>
                        <p className='text-white text-2xl lg:text-6xl text-center font-custom4'>Photoshooting Moodboard</p>
                    </div>
                    <img src={br1} alt='' className='' />
                    <img src={br2} alt='' className='' />
                    <img src={br3} alt='' className='' />
                </div>
            </div>
        </>
    )
}

export default BruminoPresentation