import {
    AiFillGithub, 
    AiFillLinkedin,
} from "react-icons/ai";

import {
    GoLocation,
} from "react-icons/go";

import {
    MdEmail,
} from "react-icons/md";

const Footer = () => {
    return (
        <footer className="flex flex-col justify-between items-center bg-purple-500 h-72 mt-20 pt-8 pb-4">
            <div className="flex flex-row ">
                <div className="flex flex-col w-1/2 mt-10 pl-72">
                    <div className="flex flex-row items-center justify-start text-white">
                        <GoLocation 
                            size={`1.5em`}
                        />
                        <p className="text-lg ml-6 text-white">Denpasar, Bali</p>
                    </div>
                    <div className="flex flex-row items-center justify-start text-white mt-4">
                        <MdEmail 
                            size={`1.5em`}
                        />
                        <p className="text-lg ml-6 text-white">dwnym99@mail.ugm.ac.id</p>
                    </div>
                </div>
                <div className="flex flex-col w-1/2 ">
                    <div className="text-white">
                        <h1 className="nunito font-bold text-xl">Tentang Website Ini</h1>
                    </div>
                    <div className="mt-4 text-white">
                        <p className="roboto text-lg mr-44">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia vel quis fuga harum pariatur! Animi tempora minima doloremque. Animi illum eos beatae autem vero quia repellat omnis commodi sit neque?</p>
                    </div>
                    <div className="flex flex-row mt-4">
                        <div className="mr-2">
                            <AiFillGithub 
                                size={`2em`}
                            />
                        </div>
                        <div className="ml-2">
                            <AiFillLinkedin 
                                size={`2em`}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <div> develop with 🖤 by Dharma Triyasa </div>
            </div>
        </footer>
    );
}
 
export default Footer;