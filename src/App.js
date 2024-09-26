import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';//for routing
import Nav from './component/Nav.js'
import About from './component/About.js'
import Contact from './component/Contact.js'
import Course from './component/Course.js'
import Home from './component/Home.js'
function App() {
  return (
    <div className="App">




<Router>
        <Nav  
          home="Home"
          about="About"
          course="Course"
          contact="Contact"/>
        <Routes>
          <Route path="/" element={<Home />} />


          <Route path="/about" element={<About />} />
          <Route path="/course" element={<Contact
/>} />
         
          <Route path="/contact" element={<Course/>}/>

          {/*bus yee wala path Nav.js ke to se match hone chaiye hai bikul same to same*/}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
