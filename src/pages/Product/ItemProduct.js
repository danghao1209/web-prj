function ItemProduct({ data, path, indexColor = 0 }) {
    return (
        <div className=" flex justify-between ">
            <div className="mr-[30px] sticky top-0">
                {data
                    ? data.data[indexColor].images.map((item) => {
                          return (
                              <div className="w-[90px] mb-[15px]">
                                  <img src={`${path}${item}`} alt={''} />
                              </div>
                          );
                      })
                    : ''}
            </div>

            <div className="">
                {data
                    ? data.data[indexColor].images.map((item) => {
                          return (
                              <div className="w-[calc(100% - 120px)] mb-[15px]">
                                  <img src={`${path}${item}`} alt={''} />
                              </div>
                          );
                      })
                    : ''}
            </div>
        </div>
    );
}

export default ItemProduct;
