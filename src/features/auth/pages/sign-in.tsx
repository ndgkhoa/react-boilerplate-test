import { Helmet } from 'react-helmet-async';

import viagsLogoFull from '/viags-logo-full.png';
import bgAuth1 from '/bg-auth-1.png';
import { LoginForm } from '~/features/auth/components/login-form';

const SignIn = () => {
  return (
    <>
      <Helmet>
        <title>Đăng nhập</title>
      </Helmet>
      <div className="grid h-screen w-full place-items-center before:absolute before:top-0 before:right-0 before:left-0 before:-z-10 before:h-3/4 before:bg-[#4193a8] before:content-[''] after:absolute after:right-0 after:bottom-0 after:left-0 after:-z-10 after:h-1/4 after:bg-[#e8f4f4] after:content-['']">
        <div className="grid h-4/5 w-4/5 grid-cols-1 rounded-3xl bg-white lg:grid-cols-2">
          <div className="p-4 pt-8">
            <div className="flex h-12 justify-center">
              <img src={viagsLogoFull} alt="Viags Logo Full" className="h-full" />
            </div>
            <h1 className="mt-8 mb-12 text-center text-2xl">Vite React Boilerplate</h1>
            <div className="mx-auto max-w-lg">
              <LoginForm />
            </div>
          </div>
          <div className="hidden lg:block">
            <img src={bgAuth1} className="h-full w-full rounded-r-3xl object-cover" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
