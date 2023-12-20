// Importing part
import {ReactNode} from "react";
import DashboardPageTemplate from "@/component/dashboard/dashboardPageTemplate";
import EditInfoInputComponent from '@/chunk/page/dashboard/editInfoInputComponent';
import Link from "next/link";
import IconComponent from "@/chunk/iconComponent";

// Creating and exporting profile dashboard page as default
export default function DashboardProfilePage():ReactNode {
    // Returning JSX
    return (
        <DashboardPageTemplate>
            <form action="#" className="grid lg:grid-cols-4 gap-[23px]">
                <EditInfoInputComponent id="name-input" label="نام و نام خانوادگی :" placeHolder="احسان امانیان" type="text" />
                <EditInfoInputComponent id="tel-input" label="شماره تلفن :" placeHolder="09216542162" type="tel" />
                <EditInfoInputComponent id="email-input" label="ایمیل :" placeHolder="dasnasldj@yahoo.com" type="email" />
                <EditInfoInputComponent id="meli-code-input" label="کد ملی :" placeHolder="09216542162" type="text" />
                <EditInfoInputComponent id="password-input" label="رمز عبور :" placeHolder="XXXXXXXXX" type="passowrd" />
                <div className="lg:col-span-3 col-span-1 flex items-end justify-end gap-[16px]">
                    <Link href='/' className="btn-secondary-alert lg:w-auto w-[50%]">
                        <IconComponent name="circle-x" size={16} />
                        انصراف تغییرات
                    </Link>
                    <button className="btn-dark lg:w-auto w-[50%]">
                        <IconComponent name="penicl-circle" size={16} />
                        تغیر اطلاعات
                    </button>
                </div>
            </form>
        </DashboardPageTemplate>
    );
}