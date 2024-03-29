// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {Dispatch, ReactNode, useState} from "react";
import IconComponent from '@/chunk/iconComponent';
import Image from "next/image";
import BgImage from '@/public/img/home/fifthSection/img-bg-overlay.png';
import SliderComponent from "@/chunk/page/home/fifthSection/slider/sliderComponent";
import TitleOnSliderComponent from "@/chunk/page/home/fifthSection/titleOnSliderComponent";
import ParagraphOnSliderComponent from "@/chunk/page/home/fifthSection/paragraphOnSliderComponent";

// Creating and exorting fifth section component as default
export default function FifthSectionComponent():ReactNode {
    // Defining state of component
    const [activeStep, setActiveStep]:[number, Dispatch<any>] = useState(4);

    // Returning JSX
    return (
        <section className="bg-theme relative lg:h-[717px] h-[488px] overflow-hidden">
            <Image src={BgImage.src} width={1140} height={717} alt="عکس بکگراند" className="opacity-50 w-full h-full object-cover absolute top-0 left-0 z-[1] pointer-events-none" />
            <div className="lg:block hidden w-full h-full absolute top-0 left-0 bg-gradient-to-b via-dark/10 from-transparent to-dark/80 z-[3] pointer-events-none" />
            <div className="container px-[20px] lg:py-[48px] py-[32px] z-[2] relative">
                <header className="flex flex-col items-center justify-center lg:mb-[56px] mb-[40px]">
                    <div className="sign-white">چرا وبیمود</div>
                    <h4 className={'relative lg:text-[48px] text-[20px] text-center text-white'}>
                        <span className={'inline-block font-normal'}>چرا باید</span>
                        <span className={'inline-block relative mx-[1ch] font-bold'}>
                            وبیمود
                            <span className={'text-white absolute left-full bottom-full lg:flex hidden flex-col w-[30px]'}>
                                <span className={'self-center'}><IconComponent name={'star'} size={14} /></span>
                                <span className={'self-end'}><IconComponent name={'star'} size={14} /></span>
                                <span className={'self-start'}><IconComponent name={'star'} size={18} /></span>
                            </span>
                        </span>
                        <span className={'inline-block font-normal'}>را انتخاب کنید ?</span>
                    </h4>
                </header>
                <main className="flex flex-col items-center justify-center">
                    <TitleOnSliderComponent activeStep={activeStep}  />
                    <ParagraphOnSliderComponent activeStep={activeStep}  />
                    <SliderComponent 
                        activeStep={activeStep}
                        setActiveStep={setActiveStep} 
                    />
                </main>
            </div>
        </section>
    );
}