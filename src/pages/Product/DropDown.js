import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function DropDown({ content = {} }) {
    const [isShow, setIsShow] = useState(false);
    return (
        <div>
            <div className="flex items-center py-[5px] pr-[25px] justify-between">
                <Link to={content.link} className="hover:text-red-600">
                    {content.title}
                </Link>
                <div onClick={() => (isShow ? setIsShow(false) : setIsShow(true))}>
                    <FontAwesomeIcon icon={isShow ? faMinus : faPlus} className="px-[5px] hover:text-red-600" />
                </div>
            </div>

            <div className={`${isShow ? '' : 'hidden'} flex flex-col`}>
                {content.children.map((child, index) => {
                    return (
                        <Link to={child.link} key={index++} className="px-[10px] py-[5px] hover:text-red-600">
                            {child.title}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default DropDown;
