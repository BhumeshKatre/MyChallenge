import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Task1UserCards from './pages/Task1_userCards';
import Task2RoutingSetup from './pages/Task2_RoutingSetup';
import Home from './pages/Home';
import Task3ApiFetch from './pages/Task3_ApiFetch';
import Task4ThemeToggle from './pages/Task4_Theme_Toggle';
import Task5FormHandling from './pages/Task5_Form_Handling';
import Task6CrudTodoApp from './pages/Task6_Crud_Todo_App';


const App = ()=>{
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/task1' element={<Task1UserCards />} />
        <Route path='/task2' element={<Task2RoutingSetup />} />
        <Route path='/task3' element={ <Task3ApiFetch />} />
        <Route path='/task4' element={<Task4ThemeToggle />} />
        <Route path='/task5' element={<Task5FormHandling />} />
        <Route path='/task6' element={<Task6CrudTodoApp />} />
        <Route path='*' element={<h1>Page Not Found</h1>
        } />
      </Routes>
    </>
)
}

export default App