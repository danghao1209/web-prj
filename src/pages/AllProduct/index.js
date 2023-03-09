import { useState } from 'react';
function ProductPage() {
    const [isHover, setIsHover] = useState(false);

    const data = [
        {
            products: [
                {
                    id: 121,
                    title: 'CLOWNZ BASIC SWEAT PANTS',
                    description: 'An apple mobile which is nothing like apple',
                    price: 399,
                    discountPercentage: 12.96,
                    rating: 4.69,
                    stock: 94,
                    brand: '',
                    category: 'PANTS & JEANS',
                    color: ['#111827', '#111827'],
                    thumbnail: [
                        'https://bizweb.dktcdn.net/thumb/large/100/414/728/products/quan-dai2.jpg?v=1672820890000',
                        'https://bizweb.dktcdn.net/thumb/large/100/414/728/products/quan-dai2.jpg?v=1672820890000',
                    ],
                    images: [
                        'https://bizweb.dktcdn.net/thumb/large/100/414/728/products/quan-dai2.jpg?v=1672820890000',
                    ],
                },
                {
                    id: 122,
                    title: 'CLOWNZ BASIC SWEAT PANTS',
                    description: 'An apple mobile which is nothing like apple',
                    price: 399,
                    discountPercentage: 12.96,
                    rating: 4.69,
                    stock: 94,
                    brand: '',
                    category: 'PANTS & JEANS',
                    color: ['#111827', '#111827'],
                    thumbnail: [
                        'https://bizweb.dktcdn.net/thumb/large/100/414/728/products/quan-dai2.jpg?v=1672820890000',
                        'https://bizweb.dktcdn.net/thumb/large/100/414/728/products/quan-dai2.jpg?v=1672820890000',
                    ],
                    images: [
                        'https://bizweb.dktcdn.net/thumb/large/100/414/728/products/quan-dai2.jpg?v=1672820890000',
                    ],
                },
                {
                    id: 123,
                    title: 'CLOWNZ BASIC SWEAT PANTS',
                    description: 'An apple mobile which is nothing like apple',
                    price: 399,
                    discountPercentage: 12.96,
                    rating: 4.69,
                    stock: 94,
                    brand: '',
                    category: 'PANTS & JEANS',
                    color: ['#67e8f9', '#111827'],
                    thumbnail: [
                        'https://bizweb.dktcdn.net/thumb/large/100/414/728/products/quan-dai2.jpg?v=1672820890000',
                        'https://bizweb.dktcdn.net/thumb/large/100/414/728/products/quan-dai2.jpg?v=1672820890000',
                    ],
                    images: [
                        'https://bizweb.dktcdn.net/thumb/large/100/414/728/products/quan-dai2.jpg?v=1672820890000',
                    ],
                },
            ],

            total: 3,
            skip: 0,
            limit: 30,
        },
    ];

    return (
        <div>
            <div className="grid grid-cols-4 gap-y-[50px] px-[50px]  mt-[105px]">
                {data[0].products.map((product) => {
                    return (
                        <div key={product.id} className="px-[15px] flex flex-col relative">
                            {isHover ? (
                                <div className="flex flex-col" onMouseOut={() => setIsHover(false)}>
                                    <img src={product.thumbnail[0]} alt={product.title} />
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
                                        src={product.thumbnail[1]}
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
                        </div>
                    );
                })}

                <div className="px-[15px] flex flex-col relative">
                    {false ? (
                        <div className="flex flex-col">
                            <div className="">
                                <img
                                    src="https://bizweb.dktcdn.net/thumb/large/100/414/728/products/quan-dai2.jpg?v=1672820890000"
                                    alt=""
                                />
                                <div className="w-[15px] h-[15px] bg-[#111827]"></div>
                            </div>

                            <div class="absolute bottom-0 w-[calc(100%-30px)]">
                                <div className="h-[46px] px-[10px] border-[1px] border-black flex items-center justify-center ">
                                    <div className="font-medium text-[13px]">Chi Tiết</div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col relative">
                            <img
                                src="https://bizweb.dktcdn.net/thumb/large/100/414/728/products/quan-dai2.jpg?v=1672820890000"
                                alt=""
                            />
                            <div className="absolute bottom-[120px] right-[10px] flex">
                                <div className="w-[15px] h-[15px] bg-[#111827] mr-[5px]"></div>
                                <div className="w-[15px] h-[15px] bg-[#111827] mr-[5px]"></div>
                            </div>
                            <div>
                                <div className="mt-[20px] mb-[5px] text-[20px] text-ellipsis font-utm_aptima ">
                                    CLOWNZ BASIC SWEAT PANTS
                                </div>
                                <div className="text-[16px]">PANTS & JEANS</div>
                                <div className="font-medium">399.000₫</div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
