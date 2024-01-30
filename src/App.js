import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {ProductComponent} from './Pages/ProductComponent';
import {ProductDetail} from './Pages/ProductDetail';
import Header from '../src/Context/Components/Header'
import Auth from './Context/Components/Auth';
import { CrudExam } from './components/CRUD/crudExam';
import CrudExamp from './components/CRUD/CrudExamp';
import CrudImp from './components/CRUD/CrudImp';
import Counter from './components/CountInc';
import Parent from './Props/Parent';
import Example from './Example';
import CounterFunc from './components/CounterFunc';
import CrudLas from './components/CRUD/CrudLas';
function App() {
  return (
   <div>
    {/* <Header/>
    <Auth/> */}
    {/* <CrudExam/> */}
    {/* <CrudExamp/> */}
    {/* <CrudImp/> */}
    {/* <Counter/> */}
    {/* <Parent/> */}
    <CrudLas/>
   </div>
  );
}

export default App;
