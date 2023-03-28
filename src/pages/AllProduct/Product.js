import { useState } from 'react';
import { Link } from 'react-router-dom';
function Product({ product, path }) {
    const [isHover, setIsHover] = useState(false);
    return (
        <Link to={`../product/${product.id}`} key={product.id} className="px-[15px] flex flex-col relative">
            {isHover ? (
                <div className="flex flex-col" onMouseOut={() => setIsHover(false)}>
                    <img src={`${path}${product.thumbnail[0]}`} alt={product.title} />
                    <div className="absolute bottom-[120px] right-[20px] flex">
                        {product.color.map((color) => {
                            return <div className={`w-[15px] h-[15px] bg-[${color}] mr-[5px]`}></div>;
                        })}
                    </div>
                    <div class="absolute bottom-0 w-[calc(100%-30px)]">
                        <div className="h-[46px] px-[10px] border-[1px] border-black flex items-center justify-center ">
                            <div className="font-medium text-[13px]">Chi Tiết</div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col">
                    <img
                        src={`${path}${product.thumbnail[0]}`}
                        alt={product.title}
                        onMouseOver={() => setIsHover(true)}
                    />
                    <div className="absolute bottom-[120px] right-[20px] flex">
                        {product.color.map((color) => {
                            return <div className={`w-[15px] h-[15px] bg-[${color}] mr-[5px]`}></div>;
                        })}
                    </div>
                    <div>
                        <div className="mt-[20px] mb-[5px] text-[20px] text-ellipsis font-utm_aptima ">
                            {product.title}
                        </div>
                        <div className="text-[16px]">{product.category}</div>
                        <div className="font-medium">{product.price}.000₫</div>
                    </div>
                </div>
            )}
        </Link>
    );
}

export default Product;