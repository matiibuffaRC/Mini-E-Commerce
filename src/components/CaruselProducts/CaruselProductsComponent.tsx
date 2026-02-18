import { IgrCarousel, IgrCarouselSlide } from "igniteui-react";
import type { Product } from "../../assets/data/Products.ts";

type CaruselProductsComponentProps = {
    products: Product[];
};

function CaruselProductsComponent({ products }: CaruselProductsComponentProps) {
    return (
        <div className="w-full flex flex-row justify-center items-center p-3 bg-black">
            <IgrCarousel hideIndicators={true} className="bg-transparent">
                {products.map(product => (
                    <IgrCarouselSlide key={product.id} className="flex flex-row justify-center items-center bg-transparent">
                        <div className="product-container max-w-70 md:max-w-40  p-5 flex flex-col justify-center items-center bg-[#eee]">

                            <div className="w-40 h-40 md:w-30 md:h-30 flex flex-col justify-center items-center">
                                <img
                                    src={product.img}
                                    alt={product.productName}
                                    className="w-full h-full object-cover transition-transform duration-100 ease-in hover:scale-105"
                                />
                            </div>

                            <div className="text-black p-1">
                                <h3 className="text-[1.1rem] md:text-[.9rem] py-1">
                                    {product.productName}
                                </h3>

                            </div>

                        </div>
                    </IgrCarouselSlide>
                ))}
            </IgrCarousel>
        </div>
    );
}

export default CaruselProductsComponent;
