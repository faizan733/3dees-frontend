// import React from 'react';
// import {
//   Home,
//   Layout,
//   ClipboardList,
//   Users,
//   Settings,
//   HelpCircle,
// } from 'lucide-react';
// import logo from '../../assets/png/logo.png'; // ✅ Step 1

// const Sidebar = () => {
//   const menuItems = [
//     { icon: <Home size={24} />, label: 'Home' },
//     { icon: <Layout size={24} />, label: 'Menu 01' },
//     { icon: <ClipboardList size={24} />, label: 'Menu 02' },
//     { icon: <Users size={24} />, label: 'Menu 03' },
//     { icon: <Settings size={24} />, label: 'Menu 04' },
//     { icon: <HelpCircle size={24} />, label: 'Help' },
//   ];

//   return (
//     <aside className="bg-black text-white w-60 min-h-screen py-10 px-6 border-r border-gray-800">
//       {/* ✅ Logo Image */}
//       <div className="mb-16">
//         <img src={logo} alt="3DISBRC2.0 Logo" className="h-10 w-auto object-contain" />
//       </div>

//       {/* ✅ Menu Items */}
//       <nav className="flex flex-col space-y-10">
//         {menuItems.map((item, i) => (
//           <div
//             key={i}
//             className={`flex items-center gap-4 text-lg font-medium ${
//               i === 0 ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
//             } transition-all duration-300 cursor-pointer`}
//           >
//             {item.icon}
//             <span>{item.label}</span>
//           </div>
//         ))}
//       </nav>
//     </aside>
//   );
// };

// export default Sidebar;






import React from 'react';
import {
  Home,
  Layout,
  ClipboardList,
  Users,
  Settings,
  HelpCircle,
} from 'lucide-react';
import logo from '../../assets/png/logo.png';
import { useNavigate } from 'react-router-dom'; // 👈 Import useNavigate

const Sidebar = () => {
  const navigate = useNavigate('./components'); // 👈 Initialize

  // ✅ Menu items with path
  const menuItems = [
    { icon: <Home size={24} />, label: 'Home', path: '/' },
    { icon: <Layout size={24} />, label: 'Menu 01', path: '/menu01' },
    { icon: <ClipboardList size={24} />, label: 'Menu 02', path: '/menu02' },
    { icon: <Users size={24} />, label: 'Menu 03', path: '/menu03' },
    { icon: <Settings size={24} />, label: 'Menu 04', path: '/menu04' },
    { icon: <HelpCircle size={24} />, label: 'Help', path: '/help' },
  ];

  return (
    <aside className="bg-black text-white w-60 min-h-screen py-10 px-6 border-r border-gray-800">
      {/* ✅ Logo with Home Redirect */}
      <div className="mb-16 cursor-pointer" onClick={() => navigate('/')}>
        <img
          src={logo}
          alt="3DISBRC2.0 Logo"
          className="h-10 w-auto object-contain"
        />
      </div>

      {/* ✅ Menu Items */}
      <nav className="flex flex-col space-y-10">
        {menuItems.map((item, i) => (
          <div
            key={i}
            onClick={() => navigate(item.path)} // 👈 Navigate on click
            className={`flex items-center gap-4 text-lg font-medium ${
              i === 0 ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
            } transition-all duration-300 cursor-pointer`}
          >
            {item.icon}
            <span>{item.label}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;

