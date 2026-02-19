import React from 'react';

function MapsComponent() {
    return (
        <div className='flex flex-col md:flex-row gap-4'>
            <div className='bg-[#FF8904] p-4 pb-6'>
                <h3 className='pb-4 text-[1.2rem]'>Casa Buffa inter</h3>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d300.8901843233815!2d-62.068066519513955!3d-31.43660557693538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95cad7fb9307a149%3A0x8e8464fc835a5cc!2sSalta%2017%2C%20San%20Francisco%2C%20C%C3%B3rdoba!5e0!3m2!1sen!2sar!4v1771527389197!5m2!1sen!2sar" 
                    width="300" 
                    height="200" 
                    style={{ border: 0 }}
                    allowfullscreen
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                />
            </div>
            <div className='bg-[#FF8904] p-4 pb-6'>
                <h3 className='pb-4 text-[1.2rem]'>Casa Buffa Ameghino</h3>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d506.0663168452099!2d-62.09564340832988!3d-31.430796021581482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95cad7fb9307a149%3A0x8e8464fc835a5cc!2sSalta%2017!5e0!3m2!1sen!2sar!4v1771527502171!5m2!1sen!2sar" 
                    width="300" 
                    height="200" 
                    style={{ border: 0 }} 
                    allowfullscreen 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade" 
                />
            </div>
        </div>

    )
}

export default MapsComponent