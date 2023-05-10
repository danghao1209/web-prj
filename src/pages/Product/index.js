import DropDown from './DropDown';
import ItemProduct from './ItemProduct';
import InfoProduct from './InfoProduct';
import IfLikeSlick from './IfLikeSlick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons';

function Product() {
    const contents = [
        {
            title: 'TOP',
            link: '/top',
            children: [
                { title: 'T-Shirt', link: '/t-shirt' },
                { title: 'Shirt & Polo', link: '/shirt&polo' },
                { title: 'Hoodie & Sweatshirt', link: '/hoodie&sweatshirt' },
                { title: 'Jacket', link: '/jacket' },
            ],
        },
        {
            title: 'BOTTOM',
            link: '/bottom',
            children: [
                { title: 'Pants', link: '/pants' },
                { title: 'Shorts', link: '/shorts' },
            ],
        },
        {
            title: 'ACCESSORY',
            link: '/accessory',
            children: [
                { title: 'Bag & Backpack', link: '/bag&backpack' },
                { title: 'Hat', link: '/hat' },
                { title: 'Others', link: '/others' },
            ],
        },
    ];
    const data = [
        {
            src: [
                'https://bizweb.dktcdn.net/100/414/728/products/11-4b11dc9b-58f7-451e-bf48-4f97045e8248.jpg?v=1679300454887',
                'https://bizweb.dktcdn.net/100/414/728/products/e372b872-6055-43d3-b472-0b9d45a6c744.jpg?v=1679300454887',
            ],
            alt: 'brown',
        },
        {
            src: [
                'https://bizweb.dktcdn.net/100/414/728/products/11-4b11dc9b-58f7-451e-bf48-4f97045e8248.jpg?v=1679300454887',
                'https://bizweb.dktcdn.net/100/414/728/products/e372b872-6055-43d3-b472-0b9d45a6c744.jpg?v=1679300454887',
            ],
            alt: 'red',
        },
    ];
    return (
        <div className="mt-[105px] pt-[50px] w-full px-[50px]">
            <div className="px-[50px] flex pb-[10px]">
                {/* container trên */}
                <div className="mx-[-15px] pb-[10px] flex w-[18%]">
                    <div className="px-[15px] text-[1.07143em] sticky top-0 w-[100%]">
                        {contents.map((content, index) => {
                            return <DropDown key={index++} content={content} />;
                        })}
                    </div>
                </div>

                <div className="w-[82%] flex px-[15px]">
                    <div className="w-[67%] px-[15px]">
                        <ItemProduct data={data} />
                    </div>
                    <div className="px-[-15px] w-[33%]">
                        <InfoProduct data={data} />
                    </div>
                </div>
            </div>
            {/* container dưới */}
            {/* phần có thể b cũng thích */}
            <div className="mt-[20px] mx-[-15px] mb-[10px]">
                <div className="mb-[50px] flex text-center justify-center items-center">
                    <div className="uppercase text-[26px] text-[#1c1c1c] leading-[28px] tracking-[2.4px] relative before:absolute before:w-[50px] before:left-[50%] before:bottom-[-15px] before:h-[2px] before:bg-[#000] before:ml-[-25px]">
                        Có thể bạn cũng thích
                    </div>
                </div>
                <div>
                    <IfLikeSlick />
                </div>
            </div>
            {/* hotline */}
            <div className="py-[23px] bg-[#F3F3F3] rounded-[5px]">
                <div className="flex items-center ml-[10px]">
                    <FontAwesomeIcon icon={faPhoneSquare} className="text-[30px] mr-[5px]" />
                    <div className="uppercase flex">
                        Hotline đặt hàng: <div className="text-[#FF0000]">09047 08362</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
