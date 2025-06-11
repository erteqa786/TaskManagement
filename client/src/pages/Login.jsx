import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Button, Loading, Textbox } from "../components";
import { useLoginMutation } from "../redux/slices/api/authApiSlice";
import { setCredentials } from "../redux/slices/authSlice";
import { Dialog } from "@headlessui/react";
import { useEffect, useState } from "react";



  const Login = () => {
  const { user } = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const handleLogin = async (data) => {
    try {
      const res = await login(data).unwrap();

      dispatch(setCredentials(res));
      navigate("/");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
  const [isAlertOpen, setIsAlertOpen] = useState(true);

  useEffect(() => {
    user && navigate("/dashboard");
  }, [user]);
        
      
  return (
    <div className='w-full min-h-screen flex items-center justify-center flex-col lg:flex-row animated-bg relative overflow-hidden'>
   {/* 💖 Floating Hearts  */}
  <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
    {[...Array(15)].map((_, i) => (
      <div
        key={i}
        className="floating-heart"
        style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${6 + Math.random() * 5}s`,
        }}
      ></div>
    ))}
  </div>

        <div className='w-full flex flex-col items-center justify-center gap-5 px-4 py-10'>
            {/*left side*/}
         <div className='h-full w-full lg:w-2/3 flex flex-col items-center justify-center'>
         <div className='w-full md:max-w-lg 2xl:max-w-3xl flex flex-col items-center justify-center gap-3 md:gap-y-10 2xl:-mt-20'>
         <span className='flex gap-1 py-1 px-3 border rounded-full text-sm md:text-base dark:border-pink-700 dark:text-pink-900 border-pink-800 text-pink-950'>
              Manage all your task in one place!
            </span>
            <h1 className="text-center text-4xl md:text-6xl 2xl:text-5xl font-extrabold tracking-wide bg-gradient-to-r from-pink-900 via-fuchsia-500 to-purple-800 bg-clip-text text-transparent animate-bounce-slow drop-shadow-[0_2px_6px_rgba(240,46,170,0.6)]">
                ✨Task Manager✨
            </h1>
            <div className='cell'>
              
              
        </div>
        <div className='star rotate-in-up-left'></div>
         </div>
       
        </div>
         {/* down side*/}
         <div className='w-full md:w-1/3 p-4 md:p-1 flex flex-col justify-center items-center'>
         <form onSubmit={handleSubmit(handleLogin)}
         className='form-container w-full md:w-[400px] flex flex-col gap-y-5 bg-pink-300 shadow-amber-50 dark:bg-white px-10 py-14 relative z-10 rounded-xl'
         >
          <span></span>
            <div className=''>
                <p className='text-pink-800 text-3xl font-bold text-center'>Welcomeee!!</p>
                <p className='text-center text-base text-pink-800 '>Keep all your credentials safe.🤫</p>
            </div>
            <div className='flex flex-col gap-y-5'>
                <Textbox
                placeholder='email@example.com'
                type='email'
                name='email'
                label='Email Address'
                className='w-full rounded-full'
                register={register('email',{
                    required: "Email Address is Required",

                })}
                error={errors.email? errors.email.message:""}

                />
               <Textbox
                placeholder='password'
                type='password'
                name='password'
                label='Password'
                className='w-full rounded-full'
                register={register("password", {
                  required: "Password is required!",
                })}
                error={errors.password ? errors.password?.message : ""}
              />
              <span></span>
            </div>
            
              {isLoading ? (
              <Loading />
            ) : (
              <Button
                type='submit'
                label='Log in'
                className='w-full h-10 bg-blue-700 text-white rounded-full'
              />
            )}
            <span></span>
            
         </form>
        

         </div>
          {isAlertOpen && (
  <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-md">
    <div className="bg-white dark:bg-slate-900 border border-gray-300 dark:border-gray-700 text-black dark:text-white p-4 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold mb-2">🧪 Demo Credentials</h2>
      <p className="text-sm mb-4">
        Use the following credentials to test the Task Manager:
        <br />
        <strong>Email:</strong> dave@gmail.com
        <br />
        <strong>Password:</strong> 12345
      </p>
      <div className="flex justify-end gap-2">
        <button
          onClick={() => setIsAlertOpen(false)}
          className="px-4 py-1 text-sm rounded-full bg-blue-600 text-white hover:bg-blue-700"
        >
          Got it!
        </button>
        <button
          onClick={() => setIsAlertOpen(false)}
          className="px-4 py-1 text-sm rounded-full bg-gray-300 dark:bg-gray-700 text-black dark:text-white hover:bg-gray-400 dark:hover:bg-gray-600"
        >
          Nevermind!
        </button>
      </div>
    </div>
  </div>
)}


        </div>
     
    </div>
  ) 
}

export default Login
