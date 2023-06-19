import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome'
import TimeComp from './components/TimeComp';
import FactorialComp from './components/FactorialComp';
import EmpListComp from './components/EmpListComp';
import EmployeeComp from './components/EmployeeComp';
import MessageComp from './components/MessageComp';
import Compstate from './components/Compstate';
import CompStyling from './components/CompStyling';
import LoginComp from './components/LoginComp';
import ParaStyleComp from './components/ParaStyleComp';
import ImgComp from './components/ImgComp';
import EmpForm from './components/EmpForm';
import RestAPIComp from './components/RestAPIComp';
import GetEmpComp from './components/GetEmpComp';
import { Link, Route, Routes } from 'react-router-dom';
import EmpPost from './components/EmpPost';
import EmpEmailUpdate from './components/EmpEmailUpdate';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {/* <Welcome/>
        <TimeComp/> */}
        {/* <FactorialComp no="5"/> */}
        {/* <EmpListComp arr={["Tom","Jerry","Sinchan","Henry","Oggy"]}/> */}
        {/* <EmployeeComp arr={[
        {"empid":1,"ename":"Tom","sal":2000},
        {"empid":2,"ename":"Jack","sal":4000},
        {"empid":3,"ename":"John","sal":7000},
        {"empid":4,"ename":"Kate","sal":9000},
        {"empid":5,"ename":"Allen","sal":5000}]}/> */}
        {/* <CompStyling/>
        <LoginComp/> */}
        {/* <ParaStyleComp/> */}
        {/* <ImgComp/> */}
        {/* <EmpForm/> */}
        {/* </header> */}
        {/* <Link to= "/GetEmpComp">Home</Link>
       
        <Link to= "/LoginComp">Login</Link>
      
        <Link to= "/ImgComp">Image</Link>
        
     
        <Routes>
        <Route path="/GetEmpComp" element={<GetEmpComp/>}/>

        
        <Route path="/LoginComp" element={<LoginComp/>}/>

        <Route path="/ImgComp" element={<ImgComp/>}/>
        </Routes> */}

      
      
      
      {/* <GetEmpComp/> */}
     {/* <EmpPost/> */}
     <EmpEmailUpdate/>
    </div>
  );
}

export default App;
