import SidebarItem from "../SidebarItem";
import {RiAccountCircleLine} from 'react-icons/ri';

const Sidebar = () => {

    const listSidebarItems = [
        'Konfigurasi Kriteria',
        'Perhitungan Kriteria',
        'Konfigurasi Alternatif',
        'Perhitungan Alternatif',
        'Hasil Rekomendasi',
        'Riwayat',
    ]

    return (
        <div className="flex flex-col bg-purple-500 h-screen px-6 py-3 w-60">
            <div className="flex flex-row items-center mb-8">
                <div className="mr-2">
                    <RiAccountCircleLine 
                        size={`5rem`}
                        color="white"
                    />
                </div>
                <div className="ml-2">
                    <h1 className="text-white text-xl font-bold">Nama Instansi</h1>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-col mb-8">
                    <h1 className="text-white">Main Menu</h1>
                    <div className="border-t-2 border-t-white"></div>
                </div>
                <div className="flex flex-col">
                    {listSidebarItems.map((listSidebarItem, index) => {
                        return(
                            <SidebarItem 
                                title={listSidebarItem}
                                key={index} 
                            />
                        );
                    })}
                </div>
            </div>
            <div className="mt-40">
                <SidebarItem 
                    title={`Logout`}
                />
            </div>
        </div>
    );
}
 
export default Sidebar;