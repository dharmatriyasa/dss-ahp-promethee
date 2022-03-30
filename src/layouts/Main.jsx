import NavbarHome from "../components/NavbarHome";
import NextButton from "../components/NextButton";
import Sidebar from "../components/Sidebar";


const MainLayout = ({children}) => {
    return (  
        <div className="flex flex-row w-screen bg-slate-100">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <NavbarHome 
                    title={`Konfigurasi Kriteria`}
                />
                {children}
                {/* <div className="flex justify-end mr-44 mb-8">
                    <NextButton 
                        title={`Next`}
                        url={`/`}
                    />
                </div> */}
            </div>
        </div>
    );
}
 
export default MainLayout;