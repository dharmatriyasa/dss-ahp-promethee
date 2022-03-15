import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Carousel from "../../components/Carousel";


const Landing = () => {
    return (
        <div>
            <Navbar />
            <div>
                <div className="flex flex-row bg-white-primary pt-14">
                    <div className="flex flex-col pr-6 justify-center pl-56 w-6/12">
                        <div className="nunito font-bold text-3xl my-4 mr-20">
                            <h1 className="text-purple-dark">
                                Sistem Pendukung Keputusan Penentuan Prioritas Penerima Bantuan Langsung Tunai Pendidikan
                            </h1>
                        </div>
                        <div className="roboto text-md my-4 mr-4">
                            <p className="text-purple-900">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolore quibusdam incidunt quas, sequi explicabo alias enim laboriosam minima dicta?
                            </p>
                        </div>
                        <div className="my-4">
                            <button className="bg-purple-500 px-5 py-3 text-white">
                                Lebih Lanjut
                            </button>
                        </div>
                    </div>
                    <div className="px-6 w-6/12">
                        <img src="/images/siswa.png" alt="Siswa" />
                    </div>
                </div>
            </div>
            <div className="mt-8">
                <Carousel />
            </div>
            <Footer />
        </div>
    );
}
 
export default Landing;