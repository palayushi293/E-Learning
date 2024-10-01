import React from 'react'
import {useParams} from 'react-router-dom'
export default function LinkedList() {
    const {fname}=useParams();
  return (
    <div>
        <h1>{fname}</h1>
        <h1>LinkedList</h1>

        <p>A linear data structure used to store the elements in contiguous locations is called a Linked List in Java. It has addresses and pointers that are used to link the elements, and each element in the linked list consists of two parts, namely the data part and the address part. The data part is the value of the element, and the address part consists of the pointers and addresses that are used to link the elements. Each element in the list is called a node.

The syntax to define a Linked list in Java is as follows:

LinkedList  linkedlistname = new LinkedList;

where data_type is the data type of the elements to be stored in the linked list,

linkedlistname is the name of the .linked list.

The usage of a linked list allows dynamic insertion and deletion of elements into the linked list. Because of this feature, linked lists are preferred over arrays.</p>


<p>A linear data structure used to store the elements in contiguous locations is called a Linked List in Java. It has addresses and pointers that are used to link the elements, and each element in the linked list consists of two parts, namely the data part and the address part. The data part is the value of the element, and the address part consists of the pointers and addresses that are used to link the elements. Each element in the list is called a node.

The syntax to define a Linked list in Java is as follows:

LinkedList linkedlistname = new LinkedList();

where data_type is the data type of the elements to be stored in the linked list,

linkedlistname is the name of the .linked list.

The usage of a linked list allows dynamic insertion and deletion of elements into the linked list. Because of this feature, linked lists are preferred over arrays.</p>

<h2>Working Of Linked List in Java Is As Follows:</h2>
<br/>


A linked list in Java is a dynamic data structure whose size increases as you add the elements and decreases as you remove the elements from the list.
<br/>
 The elements in the linked list are stored in containers.
 <br/>
The list holds the link to the first container.
<br/>
All the containers have a link to the next container in the list.
<br/>
 Whenever you add an element to the list using add() operation, a new container is created, and this container is linked to the other containers in the list.


<h3>
There Are Various Types of Linked List. They Are:
</h3>
<br/>
Singular Linked List
<br/>
Doubly Linked List
<br/>
Circular Linked List

<div className="singly" style={{marginLeft:"20px",width:"150px",backgroundColor:"black",color:"white"}}></div>

<h3>Singly Linked List</h3>
<br/>
<img src="https://imgs.search.brave.com/f5g9TxfrlxMzLu6Wkg9ov_0gdnDrkW4PiM0cFXbof5Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZGF0YWNhbXAu/Y29tL2ltYWdlL3Vw/bG9hZC92MTcwOTE0/MjA5NS9pbWFnZV80/NjA5MDFjZTg5LnBu/Zw"></img>
<br/>
<p>The type of linked list consisting of a sequence of nodes where each node consists of data and a 
    <br/>link to the next node, that can be traversed from the first node of 
   the list (also called as head)<br/> to the last node of the list (also called as Tail)  and is unidirectional is called Singly Linked list. </p>

   <br/>
   <p>The above figure demonstrates a singly linked list.</p>
   <br/>
   <p>Each element in the list is called a node.</p>
   <br/>
   <p>
   A node is made of two parts, namely data and pointer.
   </p>
   <br/>
   <p>
   Data is the data stored in the   and the pointer is the next node in the list.
   </p>
   <br/>
   <p>
   The first node in the list is referred to as the head of the list.
   </p>
   <br/>
   <p>
   The last node in the list is the tail, and it points to NULL.
   </p>
   <br/>
   <p>The syntax to define a node in a singular linked list is as follows:

</p>

<br/>

<pre>
    {`
public class SinglyLinkedList 

{    

       class Node

{    

               int data;    

               Node next;                

               public Node(int data) 

{    

                           this.data = data;    

                           this.next = null;    

               }    

       }    

}`}
</pre>

<h4>Example:</h4>
<p>Java program to demonstrate the creation of a singly Linked list in Java and<br/>
 insertion of elements into the list and then display the elements of the list as the output on the screen:</p>

 <pre>
    {`
    c class SinglyLinkedList 

{    

    //defining a node in singly linked list  

    class Node

    {    

        int data;    

        Node next;                

        public Node(int data) 

        {    

            this.data = data;    

            this.next = null;    

        }    

    }         

    //defining the head and tail of a singly linked list   

    public Node head = null;    

    public Node tail = null;          

    //defining insert() function to add a node to the list   

    public void insert(int data) 

    {    

        //Creating a new node   

        Node newNode = new Node(data);               

        //checking of the list is empty   

        if(head == null) 

        {    

//if the given list is empty, making the two nodes head and tail to point to the newly created node newNode    

            head = newNode;    

            tail = newNode;    

        }    

        else 

        {    

//otherwise the newNode will be added after tail so that the next pointer of tail points to    the newNode   

            tail.next = newNode;    

            tail = newNode;    

        }    

    }          

    //defining displaylist() function to display the data in the list  

    public void displaylist() 

    {    

        //Pointing the head to the node called current    

        Node current = head;               

        if(head == null)

        {    

            System.out.println("The given list is empty");    

            return;    

        }    

        System.out.println("The data in the given list are: ");    

        while(current != null) 

        {    

            //printing each data in the list and next pointer pointing to the next node   

            System.out.print(current.data + " ");    

            current = current.next;    

        }    

        System.out.println();    

    }            

    public static void main(String[] args)

    {    

        //creating a new list    

        SinglyLinkedList newList = new SinglyLinkedList();                

        //Adding data to the list by calling the insert function  

        newList.insert(10);    

        newList.insert(30);   

        newList.insert(50); 

        newList.insert(70); 

        newList.insert(100);             

        //Displaying the data in the list by calling displaylist() function    

        newList.displaylist();    

    }    

}    `}
 </pre>

 <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/LinkedListInJava_2.png"></img>


<div className="Doubly">
<h2>Doubly Linked List</h2>

<img  style={{width:"450px" ,height:"180px"}}src="https://www.simplilearn.com/ice9/free_resources_article_thumb/LinkedListInJava_3.png"></img>

<pre>This type of a linked list consists of a sequence of nodes where each node consists of data 
    <br/>and two pointers, namely the previous pointer pointing to the previous node and the subsequent
    <br/> pointer that points to the next node that is part of the list. This can be traversed from the
    <br/> first node of the list to the last node of the list and vice versa, and this is called Doubly Linked list.</pre>
    <br/>
   <p> The above figure demonstrates a doubly linked list.</p>
    <br/>
    <p>
    Data is the data stored in the node and each node consists of two pointers namely the
    <br/> previous pointer and the next pointer.
    </p>
    <br/>
   <p> The previous pointer  as the name suggests to the previous node that is part of the list.</p>
  <p>The pointer after the current one, points to the next node on the list.
  </p>
  <hr/>
  <h4>Example</h4>
  <pre>
    
    {`
    public class DoublyLinkedList

{  

    class Node

    {  

        int data;  

        Node previous;  

        Node next;    

        public Node(int data)

        {  

            this.data = data;  

        }  

    }

}  

`}
  </pre>
  <h4>Example:</h4>
  <pre>Java program to demonstrate the creation of a doubly Linked list in Java and insertion of<br/> elements into the list
   and then display the elements of the list as the output on the screen:

</pre>
<br/>
<pre>
    {`
    public class DoublyLinkedList 

{    

    //defining a node in a doubly linked list 

    class Node

    {  

        int data;  

        Node previous;  

        Node next;   

        public Node(int data)

        {  

            this.data = data;  

        }  

    }   

    //defining the head and tail of the doubly linked list and assigning it to Null

    Node head, tail = null;   

    //defining insert() function to insert the data into the list  

    public void insert(int data)

    {  

        //creating a new node called newNode  

        Node newNode = new Node(data);   

        //checking if the given list is empty 

        if(head == null) 

        {  

            //if the lists empty, making both head and tail of the list to point to the newNode  

            head = tail = newNode;  

            //the previous pointer of head will point to null  

            head.previous = null;  

            //the next pointer of tail will point to the null 

            tail.next = null;  

        }  

        else 

        {  

            //otherwise the next pointer of tail will point to the newNode  

            tail.next = newNode;  

            //the previous pointer of the newNode will point to the tail  

            newNode.previous = tail;  

            //and the newNode is made the tail of the list  

            tail = newNode;  

//and the next pointer of tail is made to point to null indicating it is the last node of the list  

            tail.next = null;  

        }  

    }  

  

    //defining displaylist() function to display the data in the list  

    public void displaylist() 

    {  

        //defining a node called current and assigning the head of the list to it 

        Node current = head; 

        //checking if the head/list is empty

        if(head == null) 

        {  

            System.out.println("The given list is empty");  

            return;  

        }  

        //otherwise printing each element in the list

        System.out.println("The data in the doubly linked list are: ");  

        while(current != null) 

        {  

            //printing each data in the list and next pointer pointing to the next node 

            System.out.print(current.data + " ");  

            current = current.next;  

        }  

    } 

    public static void main(String[] args)

    {  

        //defining a new doubly linked list

        DoublyLinkedList newList = new DoublyLinkedList();  

        //inserting data into the list by calling insert() function

        newList.insert(10);  

        newList.insert(30);  

        newList.insert(50);  

        newList.insert(70);  

        newList.insert(100);   

        //displaying the data in the list by calling displaylist() function

        newList.displaylist();  

    }  

}  

`}
</pre>
<img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/LinkedListInJava_4.png"></img>

    
</div>

<div className="circular">

    <h2>Circular Linked List</h2>
    <img  style={{height:"180px",width:"500px"}}src="https://www.simplilearn.com/ice9/free_resources_article_thumb/LinkedListInJava_5.png"></img>
    <pre>
    It is the type of linked list consisting of a sequence of nodes where each node consists of<br/>
    data and a link to the next node and the last node in the list (also called as tail) that points<br/>
    to the first node in the list (also called as head) is called as Circular Linked List.
    </pre>
    <h3>Example : Syntax</h3>
    <pre>
        {`
        public class CircularLinkedList 

{  

    public class Node

    {  

        int data;  

        Node next;  

        public Node(int data)

        {  

            this.data = data;  

        }  

    } 

} 
        //defining the head and tail of the circular linked list and assigning it to Null

    public Node head = null;  

    public Node tail = null;  

    //defining insert() function to insert the data into the list  

    public void insert(int data)

    {  

        //creating a new node called newNode 

        Node newNode = new Node(data);  

        //checking if the given list is empty   

        if(head == null) 

        {  

//If list is empty, making both the head and tail point to the newNode and the next pointer of newNode to head  

            head = newNode;  

            tail = newNode;  

            newNode.next = head;  

        }  

        else 

        {  

            //otherwise the next pointer of the tail is made the newNode

            tail.next = newNode;  

            //and the newNode is made the tail of the list  

            tail = newNode;  

//and the next pointer of the tail is made to point to the head of the list as it is a circular linked list

            tail.next = head;  

        }  

    }   

    //defining displaylist() function to display the data in the list  

    public void displaylist() 

    {  

        //defining a node called current and assigning the head of the list to it 

        Node current = head; 

        //checking if the head/list is empty

        if(head == null)

        {  

            System.out.println("The given list is empty");  

        }  

        else 

        {  

            //otherwise printing each element in the list

            System.out.println("The data in the circular linked list are: ");  

             do{  

                 //printing each data in the list and next pointer pointing to the next node   

                System.out.print(" "+ current.data);  

                current = current.next;  

            }

            while(current != head);  

            System.out.println();  

        }  

    }   

    public static void main(String[] args) 

    {  

         //defining a new circular linked list

        CircularLinkedList newList = new CircularLinkedList();  

        //inserting data into the list by calling insert() function

        newList.insert(10);  

        newList.insert(30);  

        newList.insert(50);  

        newList.insert(70);

        newList.insert(100);

        //displaying the data in the list by calling displaylist() function

        newList.displaylist();  

    }  

}  



`}
    </pre>
    <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/LinkedListInJava_6.png"></img>
    <h3>Various operations in Linked List</h3>
<br/>
    <h5>1. Insertion Element to the list</h5>
</div>
    </div>
  )
}
