import React,{useEffect} from 'react'

export default function About() {

 useEffect=(()=>
{
  document.title="about"
})
  return (
    <div style={{backgroundColor:"#36454F"}}>


      <div className="form" style={{backgroundColor:"black",color:"white",width:"450px",marginLeft:"500px",marginTop:"40px",border:"7px solid green",height:"1200px"}}>

        <b><h3>Contact us about E-Learning </h3></b>
        <hr></hr>
        <form>

        <p>E-Learning Academy, makes it easier to administer students and track their progress in real-time. </p>



<p>The system personalizes the educational journey, helping students focus on areas needing improvement.</p>



<p>Pick between our different features:
  <br/>

- Teacher administration tool
<br/>

- Coding challenges with instant feedback
<br/>

- Labs with collaboration and hosting
<br/>

- Courses, exams & graded certificates
<br/>



Contact us about W3Schools Classrooms plans, or team bulk subscription inquiries. </p>
<hr/>
<div className="inner">
  <img src="https://imgs.search.brave.com/tOVXp7hP9hwCC167DK8EFJfu_qYzjmfuWBqnqpN6bFw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC81OC82MC9p/bWFnZS1vZi1hLWJ1/c2luZXNzbWFuLXN0/dWRlbnQtZmluYW5j/aWFsLXJlcG9ydHMt/dmVjdG9yLTMwMDU4/NjAuanBn"></img>
</div>
<br></br>
<h6>
  Enter your name
</h6>

<input type="text" required style={{borderRadius:"10px",width:"290px"}}></input>
<h6>
  Enter your work email
</h6>
<input type="email" required style={{borderRadius:"10px",width:"290px"}}></input>
<h6>
  Select your role
</h6>
<form>
        <input type="checkbox" id="apple" name="fruit" value="apple"/>
        <label for="apple">Admin</label><br/>

        <input type="checkbox" id="banana" name="fruit" value="banana"/>
        <label for="banana">Teacher</label><br/>

        <input type="checkbox" id="cherry" name="fruit" value="cherry"/>
        <label for="cherry">Teacher Assistant</label><br/>

        
    </form>

    <h6>
      Type the name of yor organization
    </h6>
    <input type="text" style={{borderRadius:"10px",width:"290px"}}></input>
    <br/>
    <h6>
      Please explain how you teach coding today
    </h6>
    <input type="text" style={{borderRadius:"10px",width:"290px"}}>
    </input>
    <h6>
      Do you use E-Learning today? And , how can we help?
    </h6>
    <input type="text" style={{borderRadius:"10px",width:"290px"}}></input>
    <br/>


    By sending this form you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
   <br/>
   <br/>
    <button  style={{width:"150px",borderRadius:"10px",backgroundColor:"#ff5733",color:"white",border:"2px solid white"
}}>Send</button>
</form>
      </div>
      
    </div>
  )
}
