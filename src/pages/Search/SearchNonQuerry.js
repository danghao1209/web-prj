import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Button from '~/components/Button';
import { Link } from 'react-router-dom';

function SearchNonQuerry() {
    const [textSearch, setTextSearch] = useState('');
    return (
        <div className="pt-[30px] w-[80%] m-auto">
            <div className="flex justify-center items-center">
                <input
                    type="text"
                    value={textSearch}
                    className="w-full h-[40px] lg:w-[60%] px-[20px] border border-[rgb(229, 229, 229)] focus:outline-0"
                    placeholder="Bạn cần tìm gì hôm nay ?"
                    onChange={(e) => {
                        setTextSearch(e.target.value);
                    }}
                />
                <Link to={`/search?q=${textSearch}`}>
                    <Button className="bg-[#c43324] text-[#fff] h-[40px] px-[20px]" onClick={(e) => {}}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default SearchNonQuerry;
