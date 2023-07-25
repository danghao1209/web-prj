import { useState } from 'react';
import { Link } from 'react-router-dom';
function Product({ product, path }) {
    const [isHover, setIsHover] = useState(false);
    return (
        <Link to={`../product/${product?._id}`} key={product?._id} className="px-[15px] flex flex-col relative">
            {isHover ? (
                <div className="flex flex-col" onMouseOut={() => setIsHover(false)}>
                    <img src={`${product?.thumbnail[1]?.url}`} alt={product?.title} />
                    <div className="absolute lg:bottom-[120px] lg:right-[20px] flex">
                        {product.data.map((color) => {
                            return <div className={`w-[15px] h-[15px] bg-[${color?.color}] mr-[5px]`}></div>;
                        })}
                    </div>
                    <div className="absolute bottom-0 w-[calc(100%-30px)]">
                        <div className="h-[46px] px-[10px] border-[1px] border-black flex items-center justify-center ">
                            <div className="font-medium text-[13px]">Chi Tiết</div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col">
                    <img
                        src={`${product?.thumbnail[0]?.url}`}
                        alt={product?.title}
                        onMouseOver={() => setIsHover(true)}
                    />
                    <div className="absolute bottom-[95px] lg:bottom-[120px] right-[20px] flex">
                        {product?.data?.map((color) => {
                            console.log(color.color);
                            return <div className={`w-[15px] h-[15px] bg-[${color?.color}] mr-[5px]`}></div>;
                        })}
                    </div>
                    <div>
                        <div className="mt-[20px] mb-[5px] text-[14px] lg:text-[20px] text-ellipsis font-utm_aptima truncate">
                            {product?.title}
                        </div>
                        <div className="text-[12px] lg:text-[16px]">{product.category.toUpperCase()}</div>
                        <div className="text-[12px] lg:text-[16px] font-medium">{product.price}.000₫</div>
                    </div>
                </div>
            )}
        </Link>
    );
}

export default Product;
