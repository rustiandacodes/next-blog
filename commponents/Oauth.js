import Image from 'next/image';
import google from '../assets/google.png';
import github from '../assets/github.png';
const Oauth = () => {
  return (
    <>
      <div className="cursor-pointer flex gap-3 justify-center items-center w-full p-3 my-3 rounded-lg bg-light-container md:bg-light-background dark:bg-dark-in-container dark:md:bg-dark-in-background">
        <Image src={google} width={18} />
        <p>Login with Google</p>
      </div>
      <div className="cursor-pointer flex gap-3 justify-center items-center w-full p-3 my-3 rounded-lg bg-light-container md:bg-light-background dark:bg-dark-in-container dark:md:bg-dark-in-background">
        <Image src={github} width={18} />
        <p>Login with Github</p>
      </div>
    </>
  );
};

export default Oauth;
