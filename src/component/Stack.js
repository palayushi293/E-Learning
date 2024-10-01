import React from 'react'
import {useParams} from 'react-router-dom'


export default function Stack() {

    const {fname}=useParams();
  return (
    <div>

<h1>{fname}</h1>
<h1>JAVA STACK</h1>

<div className="starting" style={{marginTop:"50px"}}>
<p>
Stack is a linear data structure that is used to store the collection of objects.
<br/> It is based on Last-In-First-Out (LIFO). Java collection framework provides many interfaces and <br/>
classes to store the collection of objects. 
<br/>One of them is the Stack class that provides different operations such as push, pop, search, etc.
</p>

<br/>
<p>
In this section, we will discuss the Java Stack class, its methods, and implement the stack data structure in a Java program. But before moving to the 
<br/>
Java Stack class have a quick view of how the stack works.
<br/>
<br/>
<p>
The stack data structure has the two most important operations that are push and pop. The push operation inserts an element into the stack and pop operation removes an <br/>
element from the top of the stack. Let's see how they work on stack.
</p>

<div className="image1"> 
  <img src="https://d2jdgazzki9vjm.cloudfront.net/core/images/java-stack.png"></img>
</div>
<p>Let's push 20, 13, 89, 90, 11, 45, 18, respectively into the stack.</p>

</p>
<img src="https://d2jdgazzki9vjm.cloudfront.net/core/images/java-stack2.png"></img>
<p>Let's remove (pop) 18, 45, and 11 from the stack.

</p>
<img src="https://d2jdgazzki9vjm.cloudfront.net/core/images/java-stack3.png"></img>
<p><b>Empty Stack:</b>If the stack has no element is known as an empty stack. When the stack is empty the value of the top variable is -1.</p>
<img src="https://d2jdgazzki9vjm.cloudfront.net/core/images/java-stack4.png"></img>
<p>When we push an element into the stack the top is <b>increased by 1</b>. In the following figure,</p>
<p>*Push 12, top=0</p>
<p>*Push 6, top=1
</p>
<p>*Push 9, top=2
</p>

<img src="https://d2jdgazzki9vjm.cloudfront.net/core/images/java-stack5.png"></img>
<p>
The following table shows the different values of the top.
</p>

<table style={{border:"1px solid black",marginLeft:"600px"}}>
  <tr style={{border:"1px solid black"}}>
    <th  style={{border:"1px solid black"}}>Top value</th>
    <th  style={{border:"1px solid black"}}>Meaning</th>
   
  </tr>
  <tr style={{border:"1px solid black"}}>
    <td  style={{border:"1px solid black"}}>-1</td>
   <td  style={{border:"1px solid black"}}>It shows the stack is empty</td>
  </tr>
  <tr style={{border:"1px solid black"}}>
   <td  style={{border:"1px solid black"}}>0</td>
    <td  style={{border:"1px solid black"}}>The stack has only an element</td>
    </tr>
    <tr style={{border:"1px solid black"}}>
      <td  style={{border:"1px solid black"}}>N-1</td>
    <td  style={{border:"1px solid black"}}>The stack is full</td>
    </tr>
    <tr style={{border:"1px solid black"}}>
      <td  style={{border:"1px solid black"}}>N</td>
    
    <td  style={{border:"1px solid black"}}>The stack is overflow</td>
    </tr>
  
</table>
<br/>
<h2>JAVA STACK CLASS</h2>
<br/>
<pre>
In Java, Stack is a class that falls under the Collection framework that extends the Vector class. It also
<br/>
implements interfaces List, Collection, Iterable, Cloneable, Serializable. It represents the LIFO stack of objects.
<br/>
Before using the Stack class, we must import the java.util package. The stack class arranged in the Collections
<br/>
framework hierarchy, as shown below.


</pre>
<img src="https://d2jdgazzki9vjm.cloudfront.net/core/images/java-stack8.png"></img>
<h4>Creating a Stack</h4>
<pre>
Stack stk = new Stack();  

</pre>
<h3>
  Methods of the Stack Class
</h3>
<br/>
<table style={{border:"1px solid black",marginLeft:"500px"}}>
  <tr style={{border:"1px solid black"}}>
    <th style={{border:"1px solid black"}}>Method</th>
    <th style={{border:"1px solid black"}}>Modifier and Type</th>
    <th style={{border:"1px solid black"}}> Method Description</th>
  </tr>
  <tr style={{border:"1px solid black"}}> 
    <td style={{border:"1px solid black"}}>empty()</td>
    <td style={{border:"1px solid black"}}>boolean</td>
    <td style={{border:"1px solid black"}}>The method checks the stack is empty or not</td>
  </tr>
  <tr style={{border:"1px solid black"}}>
    <td style={{border:"1px solid black"}}>push(E item)</td>
    <td style={{border:"1px solid black"}}>E</td>
    <td style={{border:"1px solid black"}}>The method pushes (insert) an element onto <br/>the top of the stack</td>
  </tr>
  <tr style={{border:"1px solid black"}}>
    <td style={{border:"1px solid black"}}>pop()</td>
    <td style={{border:"1px solid black"}}>E</td>
    <td style={{border:"1px solid black"}}>The method removes an element <br/> 
    from the top of the stack <br/>
    and return the same element as the <br/>
    value of that function
    </td>
  </tr>
  <tr style={{border:"1px solid black"}}>
    <td style={{border:"1px solid black"}}>peek()</td>
    <td style={{border:"1px solid black"}}>E</td>
    <td style={{border:"1px solid black"}}>The method looks at the top element 
      <br/>
      of the stack without removing it.
    </td>
  </tr>
</table>
<br/>
<h3>StackEmptyMethodExample.java

</h3>
<br/>
<pre>
  {`
  import java.util.Stack;  
public class StackEmptyMethodExample  
{  
public static void main(String[] args)   
{  
//creating an instance of Stack class  
Stack<Integer> stk= new Stack<>();  
// checking stack is empty or not  
boolean result = stk.empty();  
System.out.println("Is the stack empty? " + result);  
// pushing elements into stack  
stk.push(78);  
stk.push(113);  
stk.push(90);  
stk.push(120);  
//prints elements of the stack  
System.out.println("Elements in Stack: " + stk);  
result = stk.empty();  
System.out.println("Is the stack empty? " + result);  
}  
}  

  
  `}
</pre>

</div>


    </div>
  )
}
