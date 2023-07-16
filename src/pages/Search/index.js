import axios from 'axios';
import _ from 'lodash';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import SearchNonQuerry from './SearchNonQuerry';
import SearchWithQuery from './SearchWithQuery';
import { pathApi } from '~/asset/path';

function SearchPage() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('q');
    const [data, setData] = useState();

    useEffect(() => {
        try {
            (async () => {
                const result = await axios.post(`${pathApi}/product/search`, {
                    valueSearch: query,
                });

                setData(result.data.data);
            })();
        } catch (error) {
            console.log(error);
        }
    }, [query]);
    return (
        <h1 className="lg:mt-[105px]">
            {query ? (
                <div>
                    <SearchWithQuery dataRender={data} />
                </div>
            ) : (
                <div className="pt-[20px]">
                    <div className="mb-[20px] text-[22px] tracking-[2px] uppercase flex justify-center items-center text-center">
                        NHẬP TỪ KHÓA ĐỂ TÌM KIẾM SẢN PHẨM
                    </div>
                    <SearchNonQuerry />
                </div>
            )}
        </h1>
    );
}

export default SearchPage;
