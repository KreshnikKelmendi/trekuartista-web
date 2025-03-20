import React from 'react'
import InvitationYsabel from './InvitationYsabel'
import Ftesa from './Ftesa'
import AfterFtesa from './AfterFtesa'
import Colors from './Colors'
import SocialMediaYsabel from './SocialMediaYsabel'
import GridSocialMediaYsabel from './GridSocialMediaYsabel'

const YsabelPresentation = () => {
    return (
        <>
            <div className='text-center font-custom text-white py-6'>
                <p className='text-4xl lg:text-6xl tracking-[1px]'>YSABEL</p>
            </div>
            <div>
                <InvitationYsabel />
            </div>
            <div className=''>
                <Ftesa />
            </div>
            <div className=''>
                <AfterFtesa />
            </div>
            <div className=''>
                <Colors />
            </div>

            <div className=''>
                <SocialMediaYsabel />
            </div>

            <div className=''>
                <GridSocialMediaYsabel />
            </div>
        </>
    )
}

export default YsabelPresentation