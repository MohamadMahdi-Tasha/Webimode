// forcing nextJS to render this component as client side component
'use client';

// Importin part
import {ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";
import Link from "next/link";
import Image from 'next/image';
import RandomImage from '@/public/img/blog/img-random.png';

// Defining type of props
interface propsType {
    icon: 'design'|'window'|'poll'|'pencil-paintbrush'|'mobile'|'slack'|'lang'|'ai';
    iconGradiant: 'blue'|'purple'|'green'|'orange'|'deep-green'|'dark-blue'|'pink'|'reversed-pink';
    img: string;
    title: string;
    children: string;
}

// Creating and exporting service items as default
export default function ServiceItemComponent({children, icon, img, title, iconGradiant}:propsType):ReactNode {
    // Returning JSX
    return (
        <div className="lg:h-[528px] h-[555px] lg:rounded-r-[40px] rounded-r-[20px] transition-all ease-in-out duration-1000 lg:rounded-l-[40px] rounded-l-[20px] lg:hover:rounded-l-[0px] overflow-hidden relative group">
            <div className={'lg:absolute relative top-0 left-0 w-full transition-all ease-in-out duration-1000 z-[-1] group-hover-skew'}>
                <div className="h-full w-full scale-110 rounded-[40px] bg-black/50 absolute top-0 left-0 z-[2]" />
                <Image className="w-full scale-110 rounded-[40px] object-cover lg:h-full h-[555px]" src={img} alt={title} width={1000} height={528} />
            </div>
            <div className={'transition-all ease-in-out duration-1000 h-full w-full absolute top-0 left-0 lg:p-[44px] p-[20px] flex items-end justify-start origin-right group-hover-skew-small-scale'}>
                <div className="lg:w-[75%] w-full">
                    <div 
                        data-gradiant={iconGradiant} 
                        className="bg-gradient-to-br w-[56px] h-[56px] aspect-auto flex justify-center items-center mb-[12px] rounded-[12px] text-white data-[gradiant='blue']:from-lightTheme data-[gradiant='blue']:to-themeBlue data-[gradiant='green']:from-frogGreen data-[gradiant='green']:to-theme data-[gradiant='purple']:from-themePurple data-[gradiant='purple']:to-themeBlue data-[gradiant='orange']:from-lightOrange data-[gradiant='orange']:to-orange data-[gradiant='deep-green']:from-darkFrogGreen data-[gradiant='deep-green']:to-frogGreen data-[gradiant='pink']:from-pink data-[gradiant='pink']:to-themePurple data-[gradiant='reversed-pink']:from-themePurple data-[gradiant='reversed-pink']:to-pink data-[gradiant='dark-blue']:from-themeBlue data-[gradiant='dark-blue']:to-lightTheme lg:mx-0 mx-auto"
                    >
                        <IconComponent name={icon} size={32} />
                    </div>
                    <span className="block truncate text-white text-[24px] font-semibold mb-[4px] lg:text-start text-center">{title}</span>
                    <p className="text-white text-[16px] font-normal line-clamp-2 lg:text-start text-center">{children}</p>
                    <div className={'flex lg:flex-row flex-col mt-[40px] lg:w-auto w-full lg:flex-wrap gap-[12px]'}>
                        <Link href={'/contact-us'} className={'btn-primary-white lg:w-auto w-full'}>
                            ثبت سفارش
                            <IconComponent name='chevron-left' size={16} />
                        </Link>
                        <Link href={'/work-samples'} className={'btn-secondary-white lg:w-auto w-full'}>
                            نمونه کار های ما
                            <IconComponent name={'chevron-left'} size={16} />
                        </Link>
                    </div>
                </div>
            </div>
            <Image
                alt="نمونه کار"
                src={RandomImage.src}
                width={1000}
                height={1000}
                className="absolute w-[50%] top-0 left-0 h-full origin-left object-cover rounded-[20px] opacity-0 transition-all ease-in-out duration-1000 group-hover-inner-img lg:group-hover:opacity-100"
            />
        </div>
    );
}
