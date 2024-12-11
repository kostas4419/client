import React, { useContext } from 'react'
import { Route, Routes, Link } from "react-router-dom";
import Leads from '../admin/Leads'
import Landings from '../admin/Landings'
import Groups from '../admin/Groups'
import Offers from '../admin/Offers'
import { Context } from "..";


export default function Navigation() {
    
    const {store} = useContext(Context)

    return (
        <div>
            <header className="flex items-center justify-between bg-gray-900 px-3 font-medium drop-shadow-md">
                <h5 className="logo-text"><Link className="p-1 text-2xl font-logo text-blue-400 hover:text-white transition-all duration-300" to="/">CRM Leads</Link></h5>
                <nav className="flex items-center">
                    <ul className="inline-flex items-center">
                        
                        <li className="mr-2">
                            <Link className="px-2 py-1 text-gray-200 hover:text-white rounded-md hover:bg-gray-700" to="./leads">Лиды</Link>
                        </li>

                        <li className="relative items-center mr-2">
                            <button className='group header-btn'>
                                <span className='text-gray-200 hover:text-white'>Источники</span> 

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="ml-1 w-6 h-6 fill-gray-400 hover:fill-white">
                                    <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
                                </svg>

                                <ul className="header-ul w-32">
                                    <li className='header-li'><Link className='header-link' to="./landings">Лендинги</Link></li>
                                    <li className='header-li'><Link className='header-link' to="./groups">Группы</Link></li>
                                </ul>
                            </button>
                        </li>
                        <li className="relative mr-2">
                            <button className='group header-btn'>
                                <span className='text-gray-200 hover:text-white'>Служебная информация</span>
                                
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="ml-1 w-6 h-6 fill-gray-400 hover:fill-white">
                                    <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
                                </svg>

                                <ul className="header-ul w-56">
                                    <li className='header-li'><Link className='header-link' to="./offers">Офферы</Link></li>
                                    <li className='header-li'><a className='header-link' href="./clients">Клиенты</a></li>
                                    <li className='header-li'><a className='header-link' href="./status">Статусы лидов</a></li>
                                    <li className='header-li'><a className='header-link' href="./verticals">Вертикали</a></li>
                                    <li className='header-li'><a className='header-link' href="./city">Города</a></li>
                                </ul>
                            </button>
                        </li>
                        <li className="relative mr-2">
                            <button className='header-btn group'>
                                <span className='text-gray-200 hover:text-white'>Финансы</span> 
                                
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="ml-1 w-6 h-6 fill-gray-400 hover:fill-white">
                                    <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
                                </svg>

                                <ul className="header-ul w-52">
                                    <li className='header-li'><a className='header-link' href="./finances">Баланс пользователей</a></li>
                                </ul>
                            </button>
                        </li>
                        <li className="relative mr-2">
                            <button className='header-btn group'><span className='text-gray-200 hover:text-white'>Администрирование</span> 
                                
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="ml-1 w-6 h-6 fill-gray-400 hover:fill-white">
                                    <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
                                </svg>

                                <ul className="header-ul w-48">
                                    <li className='header-li'><a className='header-link' href="./users">Пользователи</a></li>
                                    <li className='header-li'><a className='header-link' href="./callcenter">Колл-центры</a></li>
                                    <li className='header-li'><a className='header-link' href="./team">Команды</a></li>
                                    <li className='header-li'><a className='header-link' href="./base">Базы</a></li>
                                    <li className='header-li'><a className='header-link' href="./history">История версий</a></li>
                                </ul>
                            </button>
                        </li>
                        <button className='p-3' onClick={() => store.logout()}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="w-6 h-6 fill-gray-200 hover:fill-blue-400 duration-150">
                                <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/>
                            </svg>
                        </button>
                    </ul>
                </nav>
            </header>
            <Routes>
                <Route exact path="/leads" element={<Leads/>}/>
            </Routes>
            <Routes>
                <Route exact path="/landings" element={<Landings/>}/>
            </Routes>
            <Routes>
                <Route exact path="/groups" element={<Groups/>}/>
            </Routes>
            <Routes>
                <Route exact path="/offers" element={<Offers/>}/>
            </Routes>
        </div>
    );
}
