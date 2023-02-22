import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';

function MenuHeader() {
    const [isShow, setIsShow] = useState(false);
    return (
        <div>
            <Tippy
                interactive
                visible
                placement="bottom-top"
                render={(attrs) => (
                    <div
                        tabIndex="-1"
                        {...attrs}
                        className="w-[250px] h-[62px] p-[10px] border border-solid border-gray-200 flex"
                    ></div>
                )}
                onClickOutside={() => {
                    setIsShow(false);
                }}
            ></Tippy>
        </div>
    );
}

export default MenuHeader;
