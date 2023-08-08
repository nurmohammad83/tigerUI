import React, { useState } from 'react';

// Define the type for the tab content
type TabContent = {
  label: string;
  icon?:string
  content: JSX.Element;
};

interface TabProps {
  tabs: TabContent[];
  defaultActiveTab?: number;
  mode?:'horizontal'|'vertical'
}

const Tabs: React.FC<TabProps> = ({ tabs, defaultActiveTab = 0,mode='horizontal' }) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className={`${mode === 'vertical' && 'flex w-full gap-x-5'}`}>
      <div className={`flex  items-center border-gray-200 ${mode === 'horizontal' ?' justify-center border-b ':' w-44 flex-col border-r' }`}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={ `inline-block ${mode === 'vertical' && 
          'w-44'} py-4 text-center px-6 ${
              activeTab === index ? `${mode === 'horizontal' ? 'border-b-2' : 'border-r-2 '} font-semibold border-indigo-500` : 'text-gray-500'
            }`}
            onClick={() => handleTabClick(index)}
          >
           <span className='mr-2'> {tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>
      <div className="py-4 flex gap-4"> {tabs[activeTab].content}</div>
    </div>
  );
};

export default Tabs;




// Tabs use case 
// import Tabs from "./components/Tabs/Tabs"

// const App = () => {
//   const tabs = [
//     {
//       label: 'Tab 1',
//       icon: '☰',
//       content: <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam deleniti, voluptatem libero praesentium atque consequatur ut eius quam in odio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat possimus assumenda voluptate, architecto, quo sit sunt adipisci sint ducimus fugiat rem, impedit labore recusandae nemo! Doloremque aspernatur mollitia velit molestias voluptate! Quod, culpa.</div>,
//     },
//     {
//       label: 'Tab 2',
//       icon: '☰',
//       content: <div>Content for Tab 2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas reprehenderit alias culpa quo voluptatem reiciendis unde aliquam consequatur. Placeat commodi, corporis velit saepe officiis eos sint, dignissimos quaerat consequatur ut tenetur, nobis modi.</div>,
//     },
//   ];

//   return (
//     <div className="m-32 flex justify-center items-center">
//       <Tabs defaultActiveTab={0} mode="horizontal" tabs={tabs}/>
//     </div>
//   )
// }
// export default App