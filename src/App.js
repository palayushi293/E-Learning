import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';//for routing
import Nav from './component/Nav.js'
import About from './component/About.js'
import Contact from './component/Contact.js'
import Course from './component/Course.js'
import LinkedList from './component/LinkedList.js'
import Home from './component/Home.js'
import Stack from './component/Stack.js'
import Arrays from './component/Arrays.js'
import Queue from './component/Queue.js'

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
         
          <Route path="/contact/" element={<Course/>}/>
          <Route path="/contact/LinkedList" element={<LinkedList />} />
          <Route path="/contact/Arrays" element ={<Arrays/>}/>
          <Route path="/contact/Stack" element ={<Stack/>}/>
          <Route path="/contact/Queue" element={<Queue/>}/>

          {/*bus yee wala path Nav.js ke to se match hone chaiye hai bikul same to same*/}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
