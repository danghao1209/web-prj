import SliderProPhone from './SliderProPhone';

function ItemProduct({ data, path, indexColor = 0 }) {
    return (
        <div>
            <div className="hidden lg:flex justify-between ">
                <div className="mr-[30px] sticky top-0">
                    {data
                        ? data?.data[indexColor]?.images?.map((item) => {
                              return (
                                  <div className="w-[90px] mb-[15px]">
                                      <img src={`${item?.url}`} alt={''} />
                                  </div>
                              );
                          })
                        : ''}
                </div>

                <div className="">
                    {data
                        ? data?.data[indexColor]?.images?.map((item) => {
                              return (
                                  <div className="w-[calc(100% - 120px)] mb-[15px]">
                                      <img src={`${item?.url}`} alt={''} />
                                  </div>
                              );
                          })
                        : ''}
                </div>
            </div>
            <div className="mb-[70px] lg:mb-[0px] lg:hidden">
                <SliderProPhone images={data?.data[indexColor]?.images} path={path} />
            </div>
        </div>
    );
}

export default ItemProduct;
