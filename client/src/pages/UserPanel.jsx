import React from 'react';
import { useNavigate } from 'react-router-dom';
import UserSideBar from '../components/UserSideBar';

function UserPanel() {
  const navigate = useNavigate();


  return (
    <div className='p-5 pl-80'>
      <h1 className='font-sans font-semibold mt-10 pr-20 text-center w-full'>Hoşgeldiniz</h1>
      <UserSideBar />

        <div className='px-20 pl-30 pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-2xl items-center'>

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-end px-4 pt-4">
            </div>
            <div className="flex flex-col items-center pb-10">
            <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://images.pexels.com/photos/3862372/pexels-photo-3862372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Bonnie image"/>
           
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Tasarım ekle</h5>
              <span className="text-sm text-gray-500 dark:text-gray-500">------------</span>
              <span className="text-sm text-center text-gray-500 dark:text-gray-400">Sitenizin tasarımı buradan olusturabilirsiniz</span>
              <div className="flex items-center mt-4 space-x-2">
              <a href="/business-add" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Tasarım oluştur</a>
            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Tasarımı görüntüle</a>
              </div>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-end px-4 pt-4">
            </div>
            <div className="flex flex-col items-center pb-10">
            <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Bonnie image"/>
           
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">İşletme Ekle</h5>
              <span className="text-sm text-gray-500 dark:text-gray-500">------------</span>
              <span className="text-sm text-center text-gray-500 dark:text-gray-400">Sistemimize işletmenizi ekleyerek görünür kılın.</span>
              <div className="flex items-center mt-4 space-x-2">
              <a href="/add-restaurant" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">İşletme Ekle</a>
            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">İşletmeyi Görüntüle</a>
              </div>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-end px-4 pt-4">
            </div>
            <div className="flex flex-col items-center pb-10">
            <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://images.pexels.com/photos/4255387/pexels-photo-4255387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Bonnie image"/>
           
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Menü ekle</h5>

              <span className="text-sm text-gray-500 dark:text-gray-500">------------</span>
              <span className="text-sm text-center text-gray-500 dark:text-gray-400">Mekanınızın menünüsünü ekleyin.</span>
              <div className="flex items-center mt-4 space-x-2">
              <a href="/menu-page" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Menü ekle</a>
            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Menüyü Görüntüle</a>
              </div>
            </div>
          </div>
        </div>
      </div>
 
  );
}

export default UserPanel;

