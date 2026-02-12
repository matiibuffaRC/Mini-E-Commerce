import { IgrCarousel, IgrCarouselSlide } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import panificacion from "../../assets/imgs/Panificacion.jpg"
import casaBuffa from "../../assets/imgs/casaBuffaLogo.png"


function CaruselComponent() {
    return (
    <div className='w-full rounded-2xl overflow-hidden border border-gray-300'>
        <IgrCarousel hideNavigation={true} hideIndicators={true} interval={5000} disablePauseOnInteraction={true}>
            <IgrCarouselSlide>
                <img src={panificacion} alt="" className='h-full w-full object-cover object-center'/>
            </IgrCarouselSlide>

            <IgrCarouselSlide>
                <img src={casaBuffa} alt="" className='h-full w-full object-cover object-center'/>
            </IgrCarouselSlide>

            <IgrCarouselSlide>
                <img src={panificacion} alt="" className='h-full w-full object-cover object-center'/>
            </IgrCarouselSlide>
        </IgrCarousel>
    </div>
    )
}

export default CaruselComponent