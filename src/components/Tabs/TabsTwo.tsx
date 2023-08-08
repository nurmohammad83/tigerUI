import React, { useState, ReactNode } from 'react';

type TabProps = {
  icon?:string;
  label: string;
  children: ReactNode;
};

type TabsProps = {
  children: ReactNode;
};

const TabsTwo = ({ children }: TabsProps) => {
  const [activeTab, setActiveTab] = useState((children as React.ReactElement<TabProps>[])[0].props.label);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, newActiveTab: string) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="flex border-b border-gray-300">
        {React.Children.map(children, (child) => {
          const { label , icon} = (child as React.ReactElement<TabProps>).props;
          return (
            <button
              key={label}
              className={`${activeTab === label ? 'border-b-2 border-purple-500' : ''} flex-1 text-gray-700 font-medium py-2`}
              onClick={(e) => handleClick(e, label)}
            >
              <span className='mr-3'>{icon}</span>
              {label}
            </button>
          );
        })}
      </div>
      <div className="py-4">
        {React.Children.map(children, (child) => {
          const { label, children: tabChildren } = (child as React.ReactElement<TabProps>).props;
          return (
            activeTab === label && (
              <div key={label}>{tabChildren}</div>
            )
          );
        })}
      </div>
    </div>
  );
};

const Tab = ({ children }: TabProps) => {
  return (
    <div className="hidden" >
      {children}
    </div>
  );
};

export { TabsTwo, Tab };






// Use case in TabsTwo

// const App = () => {
//   return (
//     <div>
//       <TabsHo>
//         <Tab label="Tab 15" icon="☰">
//           <div className="py-4">
//             <h2 className="text-lg font-medium mb-2">Tab 1 Content</h2>
//             <p className="text-gray-700">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae
//               quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis
//               harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!
//               Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius
//               earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia
//               aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas
//               aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium
//               molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
//               recusandae alias error harum maxime adipisci amet laborum.
//             </p>
//           </div>
//         </Tab>
//         <Tab label="Tab 2">
//           <div className="py-4">
//             <h2 className="text-lg font-medium mb-2">Tab 2 Content</h2>
//             <p className="text-gray-700">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae
//               quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis
//               harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!
//               Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius
//               earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia
//               aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas
//               aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium
//               molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
//               recusandae alias error harum maxime adipisci amet laborum.
//             </p>
//           </div>
//         </Tab>
//         <Tab label="Tab 3">
//           <div className="py-4">
//             <h2 className="text-lg font-medium mb-2">Tab 3 Content</h2>
//             <p className="text-gray-700">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae
//               quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis
//               harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!
//               Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius
//               earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia
//               aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas
//               aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium
//               molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
//               recusandae alias error harum maxime adipisci amet laborum.
//             </p>
//           </div>
//         </Tab>
//       </TabsHo>
//     </div>
//   );
// };

// export default App;