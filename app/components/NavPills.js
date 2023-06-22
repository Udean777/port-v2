import { useState } from 'react';
import 'animate.css';

const NavPills = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className='flex justify-center py-10 font-sans animate__animated animate__fadeIn'>
        <div className='w-80 md:w-98 lg:w-100'>
            <div className='py-10'>
            <h1 className='font-bold border-l-4 border-blue-500 text-3xl'>SKILLS</h1>
            </div>
      <ul className="flex ">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className="-mb-px mr-1 "
          >
            <a
              href={`#${tab.id}`}
              onClick={() => handleTabClick(tab.id)}
              className={`inline-block py-2 px-4 ${
                activeTab === tab.id
                  ? 'text-white bg-blue-500 rounded-3xl font-semibold'
                  : 'text-gray-900 dark:text-slate-200 font-normal'
              }`}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>

      <div>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            id={tab.id}
            className={`py-10 ${
              activeTab === tab.id ? '' : 'hidden'
            }`}
          >
            {tab.content}
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default NavPills;
