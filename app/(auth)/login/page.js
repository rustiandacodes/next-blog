import Oauth from '@/components/Oauth';
import Link from 'next/link';

const Login = () => {
  return (
    <div className="h-screen flex justify-center items-center px-5 text-sm">
      <div className="max-w-[500px] w-full md:bg-light-container dark:md:bg-dark-container p-5 px-10 rounded-lg py-12">
        <h1 className="text-center text-2xl font-semibold mb-8">✨Blink Media</h1>

        {/*start email */}
        <div className="flex gap-5 w-full p-3 my-3 rounded-lg bg-light-container md:bg-light-background dark:bg-dark-in-container dark:md:bg-dark-in-background">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
          </svg>
          <input type="email" placeholder="Email" className="w-full rounded-lg focus:outline-none bg-light-container md:bg-light-background dark:bg-dark-in-container dark:md:bg-dark-in-background" />
        </div>
        {/*end email */}

        {/*start password */}
        <div className="flex items-center gap-5 w-full p-3 my-3 rounded-lg bg-light-container md:bg-light-background dark:bg-dark-in-container dark:md:bg-dark-in-background">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>
          <input type="password" placeholder="Password" className="w-full rounded-lg focus:outline-none bg-light-container md:bg-light-background dark:bg-dark-in-container dark:md:bg-dark-in-background" />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="opacity-50 w-7 h-7">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33"
            />
          </svg>
        </div>
        {/*end password*/}

        <button className="w-full bg-primary text-center py-3 mt-3 rounded-lg font-semibold">Login</button>

        <div className="flex gap-3 my-8 items-center">
          <span className="h-[1px] w-full dark:bg-dark-text bg-light-text"></span>
          <p>or</p>
          <span className="h-[1px] w-full dark:bg-dark-text bg-light-text"></span>
        </div>

        <Oauth />

        <div className="my-5 text-center flex flex-col gap-3">
          <span>
            Do not have an account?
            <Link href={'/register'} className="text-primary underline font-semibold ml-1">
              Register
            </Link>
          </span>
          <Link href={'/forget-password'} className="text-primary font-semibold underline">
            Forget Password
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
