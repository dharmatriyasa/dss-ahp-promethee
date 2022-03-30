import SidebarItem from "../SidebarItem";
import {RiAccountCircleLine} from 'react-icons/ri';
import { Logout } from "../../services/auth";
import { useNavigate } from "react-router-dom";


const Sidebar = () => {

    const navigate = useNavigate();

    const listSidebarItems = [
        {
            title: 'Konfigurasi Kriteria',
            url: '/konfigurasi-kriteria'
        },
        {
            title: 'Perhitungan Kriteria',
            url: '/perhitungan-kriteria-ahp'
        },
        {
            title: 'Konfigurasi Alternatif',
            url: '/konfigurasi-alternatif'
        },
        {
            title: 'Perhitungan Alternatif',
            url: '/perhitungan-promethee'
        },
        {
            title: 'Hasil Rekomendasi',
            url: '/hasil-rekomendasi'
        },
        {
            title: 'Riwayat',
            url: '/riwayat'
        },
    ]

    const onLogoutClick = () => {
        Logout().then(() => {
            navigate('/', {
                replace: true,
            })
        })
        .catch(console.log);
    }

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
                    <ul>
                    {listSidebarItems.map((listSidebarItem, index) => {
                        return(
                            <SidebarItem 
                                title={listSidebarItem.title}
                                url={listSidebarItem.url}
                                key={index} 
                            />
                        );
                    })}
                    </ul>
                </div>
            </div>
            <div className="mt-40">
                <ul>
                <SidebarItem 
                    title={`Logout`}
                    url={`/logout`}
                    onClickFunction={onLogoutClick}
                />

                </ul>
            </div>
        </div>
    );
}
 
export default Sidebar;