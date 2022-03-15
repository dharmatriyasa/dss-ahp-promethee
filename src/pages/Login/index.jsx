import { useRef } from "react";
import { SignIn } from "../../services/auth";


const Login = () => {

    const email = useRef(null);
    const password = useRef(null);

    const onSubmitLogin = async(e) => {
        e.preventDefault();
        console.log(email.current.value, password.current.value);

        try {
            await SignIn(email.current.value, password.current.value);
            console.log('Login Success!');
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="flex justify-center items-center h-screen">
            <div className="border border-purple-500 p-5 rounded-lg">
                <div className="flex justify-center my-8">
                    <h1 className="nunito text-2xl font-bold">Selamat Datang!</h1>
                </div>
                <div className="roboto">
                    <form onSubmit={onSubmitLogin}>
                        <div className="flex flex-col my-5 mx-3">
                            <label htmlFor="email">
                                Email
                            </label>
                            <input
                                ref={email} 
                                id="email"
                                type="text" 
                                placeholder="Tuliskan email disini..."
                                className="py-3  mt-1 bg-gray-300 w-96 px-2 rounded-md outline-none focus:outline-purple-400 focus:bg-white"
                            />
                        </div>
                        <div className="flex flex-col my-5 mx-3">
                            <label htmlFor="password">
                                Password
                            </label>
                            <input 
                                ref={password}
                                id="password"
                                type="password" 
                                placeholder="Tuliskan email disini..."
                                className="py-3  mt-1 bg-gray-300 w-96 px-2 rounded-md focus:outline-purple-400 focus:bg-white"
                            />
                        </div>
                        <div className="flex justify-center roboto my-6">
                            <button 
                                className="bg-purple-500 px-10 py-2 text-white"
                                type="submit"
                            >
                                    Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default Login;