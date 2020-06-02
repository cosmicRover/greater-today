
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
//import '~antd/dist/antd.css';
import './App.css';
import { Drawer, Button } from 'antd';

const DrawerPage = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

//   return (
//     <div>
//         <Button type="primary" onClick={showDrawer}>
//         Open
//         </Button>
//         <Drawer
//             title="Basic Drawer"  
//             placement="right"
//             closable={false}
//             onClose={onClose}
//             visible={visible}
//         >
//             <p>Some contents...</p>
//             <p>Some contents...</p>
//             <p>Some contents...</p>
//         </Drawer>
//     </div>

  );
};

ReactDOM.render(<DrawerPage />, document.getElementById('container'));