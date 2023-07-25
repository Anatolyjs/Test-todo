import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import './App.scss';
import { Body } from './modules/body/Body';
import { Header } from './modules/header/Header';

import { getTodosFromLocalStorage } from './redux/mainSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodosFromLocalStorage());
  }, []);

  return (
    <div className="App">
       <Header /> 
       <Body /> 
    </div>
  );
}

export default App;
