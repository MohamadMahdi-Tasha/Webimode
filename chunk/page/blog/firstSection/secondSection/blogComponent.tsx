// Importing part
import Link from "next/link";
import {ReactNode} from "react";
import Image from 'next/image';
import IconComponent from "@/chunk/iconComponent";

// Defining type of props
interface propsType {
    genre: string;
    img: string;
    date: Date;
    title: string;
    children: string;
    link: string;    
    isBig?: boolean;
}

// Creating and exporting blog component of second section in blog page as default
export default function BlogComponent({children, date, genre, link, title, isBig = false, img}:propsType):ReactNode {
    // Conditional rendering
    return (
        <Link href={link} data-isbig={isBig} className="xl:data-[isbig='true']:col-span-1 lg:data-[isbig='true']:col-span-2 data-[isbig='true']:cols-span-1 xl:data-[isbig='true']:row-span-2 block group">
            <article data-isbig={isBig} className="data-[isbig='false']:flex xl:data-[isbig='false']:flex-row flex-col xl:data-[isbig='false']:gap-[20px] data-[isbig='false']:justify-start">
                <Image data-isbig={isBig} src={img} alt={title} width={1000} height={1000} className="data-[isbig='false']:w-[50%] data-[isbig='true']:mb-[16px] data-[isbig='true']:w-full data-[isbig='true']:h-[289px] rounded-[40px] object-cover" />
                <div data-isbig={isBig} className="xl:data-[isbig='false']:w-[50%] data-[isbig='false']:w-full overflow-hidden">
                    <div className="flex items-center gap-[16px] mb-[9px]">
                        <span className="text-[13px] block truncate font-normal text-lightGrey max-w-[10ch]">{genre}</span>
                        <div className="bg-lightGrey h-[16px] w-[1px] rounded-[20px]" />
                        <div className="flex text-lightGrey gap-[12px]">
                            <IconComponent size={16} name="clock" />
                            <span className="text-[13px] font-normal text-current max-w-[10ch] block truncate">{date.toLocaleDateString('fa-ir')}</span>
                        </div>
                    </div>
                    <span className="block truncate text-dark text-[24px] font-normal mb-[8px]">{title}</span>
                    <p className="text-[15px] text-lightGrey font-normal leading-[28px] line-clamp-3 mb-[32px]">{children}</p>
                    <button data-isbig={isBig} className="data-[isbig='false']:w-auto data-[isbig='true']:w-full transition-all duration-500 group-hover:bg-lighterGrey group-hover:text-lightGrey px-[40px] py-[12px] flex items-center data-[isbig='false']:justify-between data-[isbig='true']:justify-center gap-[12px] text-lightGrey rounded-[14px] text-[16px] font-normal border-[1.5px] border-lightGrey">
                        مشاهده مقاله
                        <IconComponent size={16} name="chevron-left" />
                    </button>
                </div>
            </article>
        </Link>
    );
}