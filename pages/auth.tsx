import Input from "@/components/input";
import { useCallback, useState } from "react";

const Auth = () =>{
const [email , setEmail] = useState('');
const [name , setName] = useState('');
const [password , setPassword] = useState('');

const [variant , setvariant] = useState('login');

const toggleVariant = useCallback(()=>{
    setvariant((currentvariant) => currentvariant === 'login'? 'register': 'login')

},[])
    return(
        <div className="relative h-full w-full bg-[url('/images/backposter.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="bg-black w-full h-full lg:bg-opacity-50">
                <nav className="px-12 py-5">
                    <img src="/images/logo.png" alt="logo" className="h-12"/>
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <h1 className="text-white text-4xl mb-8 font-semibold">
                            {variant === 'login' ? 'sign in' : 'register'}
                        </h1>
                        <div className="flex flex-col gap-4">
                            {variant === 'register' && (
                                <Input 
                                    label="Username"
                                    onChange={(e:any)=>{setName(e.target.value)}}
                                    id="name"
                                    value={name}
                                /> 
                            )}
                            <Input 
                                label="Email"
                                onChange={(e:any)=>{setEmail(e.target.value)}}
                                id="email"
                                type="email"
                                value={email}
                            />
                            <Input 
                                label="Password"
                                onChange={(e:any)=>{setPassword(e.target.value)}}
                                id="password"
                                type="password"
                                value={password}
                            />
                        </div>
                        <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
                            {variant === 'login' ? 'Login' : 'sign up'}
                        </button>
                        <p className="text-neutral-500 mt-12">
                            {variant === 'login' ? 'First time using NetFlix?' : 'Already have an account'}
                            <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer">
                                {variant === 'login' ? 'Create an Account' : 'login'}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth;