import { Link } from 'react-router-dom';

function Product() {
    return (
        <div className="mt-[105px] pt-[30px]">
            <div className="px-[50px]">
                {/* container trên */}
                <div className="mx-[-15px] pb-[10px]">
                    {/* phần trái */}
                    <div className="px-[15px] w-[16.66666667%] text-[1.07143em]">
                        <Link>
                            <div>TOP</div>
                        </Link>
                        <Link>
                            <div>BOTTOM</div>
                        </Link>
                        <Link>
                            <div>ACCESSORY</div>
                        </Link>
                    </div>

                    {/* Phần phải */}
                    <div></div>
                </div>

                {/* container dưới */}
                <div className="mt-[20px] mb-[10px] px-[-15px] "></div>
            </div>
        </div>
    );
}

export default Product;
