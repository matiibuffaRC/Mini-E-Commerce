// import React from 'react'
import instagramIcon from "../../icons/instagramIcon.svg";
import facebookIcon from "../../icons/facebookIcon.svg";

function FooterComponent() {
    return (
        <div className='bg-[#FF8904] w-full h-25 md:h-18.5 text-white flex flex-col md:flex-row md:justify-around justify-center items-center'>
            <div>
                <p className='text-[.8rem] text-center'>Ameghino 254 - San Francisco - Córdoba</p>
                <p className='text-[.8rem] text-center'>Salta 17 - San Francisco - Córdoba</p>
            </div>
            <div className="flex flex-row justify-center items-center p-2 gap-3">
                <a href="#" target="__blank"><img src={instagramIcon} alt="instagramIcon" className="w-5 h-5 invert"/></a>
                <a href="#" target="__blank"><img src={facebookIcon}  alt="facebookIcon" className="w-6 h-6 invert"/></a>
            </div>
        </div>
    )
}

export default FooterComponent