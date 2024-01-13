import Link from 'next/link';

const ForgetPassword = () => {
  return (
    <div className="h-screen flex justify-center items-center px-5 text-sm">
      <div className="max-w-[500px] w-full md:bg-light-container dark:md:bg-dark-container p-5 px-10 rounded-lg py-12">
        <h1 className="text-center text-2xl font-semibold mb-8">Forget Password</h1>
        <p className="my-5">* Enter the email address assosicated with your account and we'll send you link to reset your password.</p>

        {/*start email */}
        <div className="flex gap-5 w-full p-3 my-3 rounded-lg bg-light-container md:bg-light-background dark:bg-dark-in-container dark:md:bg-dark-in-background">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
          </svg>
          <input type="email" placeholder="Email" className="w-full rounded-lg focus:outline-none bg-light-container md:bg-light-background dark:bg-dark-in-container dark:md:bg-dark-in-background" />
        </div>
        {/*end email */}

        <button className="w-full bg-primary text-center py-3 mt-3 rounded-lg font-semibold">Send Request</button>

        <div className="my-5 text-center flex flex-col gap-3">
          <span>
            Do not have an account?
            <Link href={'/register'} className="text-primary underline font-semibold ml-1">
              Register
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
