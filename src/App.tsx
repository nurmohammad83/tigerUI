import Tabs from "./components/Tabs/Tabs"

const App = () => {
  const tabs = [
    {
      label: 'Tab 1',
      icon: '☰',
      content: <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam deleniti, voluptatem libero praesentium atque consequatur ut eius quam in odio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat possimus assumenda voluptate, architecto, quo sit sunt adipisci sint ducimus fugiat rem, impedit labore recusandae nemo! Doloremque aspernatur mollitia velit molestias voluptate! Quod, culpa.</div>,
    },
    {
      label: 'Tab 2',
      icon: '☰',
      content: <div>Content for Tab 2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolores in voluptate similique, quos perferendis eum sapiente, voluptatem, minima aliquam temporibus? Architecto.</div>,
    },
  ];

  return (
    <div className="m-32 flex justify-center items-center">
      <Tabs defaultActiveTab={0} mode="horizontal" tabs={tabs}/>
    </div>
  )
}
export default App