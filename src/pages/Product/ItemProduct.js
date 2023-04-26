function ItemProduct({ data = [] }) {
    return (
        <div className=" flex justify-between ">
            <div className="mr-[30px] sticky top-0">
                {data[0].src.map((item) => {
                    return (
                        <div className="w-[90px] mb-[15px]">
                            <img src={item} alt={data[0].alt} />
                        </div>
                    );
                })}
            </div>

            <div className="">
                {data[0].src.map((item) => {
                    return (
                        <div className="w-[calc(100% - 120px)] mb-[15px]">
                            <img src={item} alt={data[0].alt} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ItemProduct;
