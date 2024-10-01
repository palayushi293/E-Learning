import  React from 'react'
import {useParams} from 'react-router-dom'

export default function Arrays() {

    const {fname}=useParams();
  return (
    <div>
<h1>{fname}</h1>
        <u><h3>Arrays</h3></u>
        <br/>
        <pre>
        Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value.
<br/>
To declare an array, define the variable type with square brackets:
        </pre>

      <h4>  String[] cars;</h4>
      <p>We have now declared a variable that holds an array of strings. To insert values to it,<br/>
       you can place the values in a comma-separated list, inside curly braces:
       </p>
       <p style={{color:"red"}}>
        {`String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
      `} 
      </p>

      <h3>
        Access the Elements of an Array
      </h3>
      <h5>Example:</h5>
      <pre style={{color:"blue"}}>
        {`
      String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
     
System.out.println(cars[0]);

// Outputs Volvo
`}

      </pre>
      <h6 style={{color:"red"}}><b>Note : Arrays indexes start with 0:[0] is the first element .[1] is the second element etc.</b></h6>
      
<hr/>
<h2>
    Change an Array Element 
</h2>
<p>To change the specific element refer to the index number</p>
<h4>Example:</h4>
<p style={{color:"blue"}}>cars[0] = "Opel";</p>
<h4>Example:</h4>
<pre style={{color:"blue"}}>
    {`

    String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
cars[0] = "Opel";
System.out.println(cars[0]);
// Now outputs Opel instead of Volvo
    `}
</pre>

<div className="length">
    <h2>Array Length</h2> 
    <p>
    To find out how many elements an array has, use the length property:
    </p>
    

    <h4>Example</h4>
    <pre style={{color:"blue"}}>
        {`
     String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
System.out.println(cars.length);
// Outputs 4
   `}
    </pre>
     </div>

        
    </div>
  )
}
