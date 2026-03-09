import { IgrCarousel, IgrCarouselSlide } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

type CaruselComponentProps = {
    images: string[];
}

function CaruselComponent({images}: CaruselComponentProps) {
    return (
        <div className='w-80 md:w-[90%] h-75 md:h-100 lg:h-120  overflow-hidden border border-[#aaa]'>
            <IgrCarousel hideNavigation={true}  interval={5000} disablePauseOnInteraction={true}>
                {
                    images.map((image, indice) => {
                        return(
                            <IgrCarouselSlide key={indice}>
                                <img src={image} alt="" className='h-full w-full object-cover object-center'/>
                            </IgrCarouselSlide>
                        )
                    })
                }
            </IgrCarousel>
        </div>
    )
}

export default CaruselComponent