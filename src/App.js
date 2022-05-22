import './App.css';
import React,{useState} from 'react'
import Navbar from './component/Nav';
import News from './component/News';
import { Routes,Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'


function App() {
  const[progress,setprogress]=useState(0)
  // state={
  //   progress:0
  // }
  const setProgress=(progress)=>{
    setprogress(progress)
  }
  const pageSize=15
    return (
      <div>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
      />
        <Routes>
        <Route exact path="/general" element = {<News changeProgress={setProgress}key="general" pageSize={pageSize} country="in" category="general"/>} ></Route>
        <Route exact path="/bussiness" element = {<News changeProgress={setProgress}key="bussiness" pageSize={pageSize} country="in" category="bussiness"/>} ></Route>
        <Route exact path="/entertentment" element = {<News changeProgress={setProgress}key="entertentment" pageSize={pageSize} country="in" category="entertentment"/>} ></Route>
        <Route exact path="/health" element = {<News changeProgress={setProgress}key="health" pageSize={pageSize} country="in" category="health"/>} ></Route>
        <Route exact path="/science" element = {<News changeProgress={setProgress}key="science" pageSize={pageSize} country="in" category="science"/>} ></Route>
        <Route exact path="/sports" element = {<News changeProgress={setProgress}key="sports" pageSize={pageSize} country="in" category="sports"/>} ></Route>
        <Route exact path="/technology" element = {<News changeProgress={setProgress}key="technology" pageSize={pageSize} country="in" category="technology"/>} ></Route>
        </Routes>
      </div>
    )
}
export default App
