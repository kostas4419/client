import React, { useContext, useState } from "react";
import { Context } from "..";
import { observer } from "mobx-react-lite";

const LoginForm = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const {store} = useContext(Context)
    return (
        <div className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-indigo-500 to-blue-500">
	        <div className="-mt-32 flex flex-col bg-white p-5 rounded-xl lg:rounded-3xl shadow-2xl border border-gray-500 h-auto lg:min-w-[300px] sm:min-w-10/12">
                <div className="relative text-indigo-700 mb-6 font-bold text-4xl w-full text-center logo">
                    <h3>CRM Leads</h3>
                </div>
                <div className="relative text-gray-500 focus-within:text-gray-900 mb-5">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                        <svg viewBox="0 -960 960 960" xmlns="http://www.w3.org/2000/svg" className="fill-gray-600 w-6 h-6">
                        <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/>
                        </svg>
                    </div>    
                    <input 
                        className="block w-full h-11 pr-5 pl-12 py-2.5 text-base font-normal shadow-sm text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
                        onChange={e => setLogin(e.target.value)}
                        type="text"
                        placeholder="Логин"
                    />
                </div>
                <div className="relative text-gray-500 focus-within:text-gray-900 mb-5">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                        <svg viewBox="0 -960 960 960" xmlns="http://www.w3.org/2000/svg" className="fill-gray-600 w-6 h-6">
                            <path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z"/>
                        </svg>
                    </div>
                    <input 
                        className="block w-full h-11 pr-5 pl-12 py-2.5 text-base font-normal shadow-sm text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                        placeholder="Пароль"
                    />
                </div>
                <button 
                    className="w-full h-12 bg-indigo-600 hover:bg-indigo-900 transition-all duration-700 rounded-full shadow-xs text-white text-base font-semibold leading-6"
                    onClick={() => store.login(login, password)}>Вход</button>
            </div>
        </div>
    );
};

export default observer(LoginForm);