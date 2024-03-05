import { Outlet } from 'react-router-dom';

function App() {
  return (
    <Outlet />
  );
}

export default App;

// const basepage = document.querySelector('.basepage');

//   basepage.addEventListener('wheel', (e)=> {
//       e.preventDefault();
//       basepage.scrollLeft += e.deltaY;
//   })
