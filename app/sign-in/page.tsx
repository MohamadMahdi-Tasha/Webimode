// Improrting part
import {ReactNode} from 'react';
import Link from 'next/link';
import IconComponent from '@/chunk/iconComponent';
import InputComponent from '@/chunk/inputComponent';

// Creating and exporting sign in page as default
export default function SignInPage():ReactNode {
  // Returning JSX 
  return (
    <section>
      <div className="container px-[20px] pb-[20px] lg:pt-[250px] pt-[200px]">
        <div className="sign">ثبت نام</div>
        <div>
          <div>
            <header>
              <h1>
                <span>به راحتی ثبت نام کن</span>
                و به خانواده وبیمود ملحق شو !
              </h1>
              <p className="paragraph">به راحتی در وب سایت وبیمود ثبت نام کنید و از نمونه کار های ما دیدن کنید و اگر ایده ای دارین برای ما مطرح کنید تا به واقعیت بپیوندد .</p>
            </header>
            <main>
              <Link href='#'>
                <iconComponent size={24} name="google" />
                ثبت نام با حساب گوگل
              </Link>
              <div>
                <div />
                <span>یا</span>
                <div />
              </div>
              <form action="#">
                <InputComponent placeHolder="نام و نام خانوادگی ...." inputType="text" icon="person" />
                <InputComponent placeHolder="شماره تلفن ...." inputType="tell" icon="telephone" />
                <InputComponent placeHolder="شماره شرکت ( اختیاری )" inputType="tell" icon="caller" />
                <InputComponent placeHolder="ایمیل ...." inputType="mail" icon="mail" />
                <InputComponent placeHolder="رمز عبور ...." inputType="password" />
                <InputComponent placeHolder="تکرار رمز عبور ...." inputType="password" />
              </form>
            </main>
          </div>
          <div>
          </div>
        </div> 
      </div>
    </section>
  );
}