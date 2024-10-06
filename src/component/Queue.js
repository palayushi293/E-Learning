import React from 'react'

export default function Queue() {
  return (
    <div>


        <p>
        A Queue Data Structure is a fundamental concept in computer science used for storing and managing data in a
        <br/> specific order. It follows the principle of “First in, First out” (FIFO), where the first element added 
        <br/>
        to the queue is the first one to be removed. Queues are commonly used in various algorithms and applications for
        <br/> their simplicity and efficiency in managing data flow.
        </p>
        <img  style={{height:"200px",marginTop:"50px"}}src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230726165642/Queue-Data-structure1.png"/>
        <h4>What is Queue in Data Structures?</h4>
        <p>
        A queue is a linear data structure that follows the First-In-First-Out (FIFO) principle. 
        <br/>It operates like a line where elements are added at one end (rear) and removed from the other end (front).


        </p>
        <h3>Basic Operations of Queue Data Structure</h3>
       
< br/>
        <table style={{border:"1px solid black",marginLeft:"450px"}}>
          <tr style={{border:"1px solid black"}}>
            
            <th style={{border:"1px solid black"}}>Operations</th>
            <th style={{border:"1px solid black"}}>Purpose</th>
          </tr>
          <tr style={{border:"1px solid black"}}>
            <td style={{border:"1px solid black"}}><b>Enqueue (Insert):</b></td>
            <td style={{border:"1px solid black"}}>Adds an element to the rear of the queue.</td>
          </tr>
          <tr style={{border:"1px solid black"}}>
           <td style={{border:"1px solid black"}}> <b>Dequeue (Delete):</b></td>
           <td style={{border:"1px solid black"}}>Removes and returns the element from the front of the queue.</td>
          </tr>
          <tr style={{border:"1px solid black"}}>
            <td style={{border:"1px solid black"}}><b>Peek:</b></td>
            <td style={{border:"1px solid black"}}>Returns the element at the front of the queue without removing it.</td>
                    </tr>
                    <tr style={{border:"1px solid black"}}>
                      <td style={{border:"1px solid black"}}><b>Empty:</b></td>
                      <td style={{border:"1px solid black"}}>Checks if the queue is empty.</td>
                    </tr>
                    <tr style={{border:"1px solid black"}}>
                      <td style={{border:"1px solid black"}}><b>Full:</b></td>
                      <td style={{border:"1px solid black"}}>Checks if the queue is full.</td>
                    </tr>

        </table>
        

        <b><h3>Applications Of Queue</h3></b>
        <p>Task scheduling in operating systems
        </p>
        <p>Data transfer in network communication
        </p>
        <p>Simulation of real-world systems (e.g., waiting lines)
        </p>
        <p>
        Priority queues for event processing queues for event processing

        </p>

        <b><h4>Implementation Of Queue</h4></b>

        <pre>
          {`
          public class Queue {
  int SIZE = 5;
  int items[] = new int[SIZE];
  int front, rear;

  Queue() {
    front = -1;
    rear = -1;
  }

  // check if the queue is full
  boolean isFull() {
    if (front == 0 && rear == SIZE - 1) {
      return true;
    }
    return false;
  }

  // check if the queue is empty
  boolean isEmpty() {
    if (front == -1)
      return true;
    else
      return false;
  }

  // insert elements to the queue
  void enQueue(int element) {

    // if queue is full
    if (isFull()) {
      System.out.println("Queue is full");
    }
    else {
      if (front == -1) {
        // mark front denote first element of queue
        front = 0;
      }

      rear++;
      // insert element at the rear
      items[rear] = element;
      System.out.println("Insert " + element);
    }
  }

  // delete element from the queue
  int deQueue() {
    int element;

    // if queue is empty
    if (isEmpty()) {
      System.out.println("Queue is empty");
      return (-1);
    }
    else {
      // remove element from the front of queue
      element = items[front];

      // if the queue has only one element
      if (front >= rear) {
        front = -1;
        rear = -1;
      }
      else {
        // mark next element as the front
        front++;
      }
      System.out.println( element + " Deleted");
      return (element);
    }
  }

  // display element of the queue
  void display() {
    int i;
    if (isEmpty()) {
      System.out.println("Empty Queue");
    }
    else {
      // display the front of the queue
      System.out.println("\nFront index-> " + front);

      // display element of the queue
      System.out.println("Items -> ");
      for (i = front; i <= rear; i++)
        System.out.print(items[i] + "  ");

      // display the rear of the queue
      System.out.println("\nRear index-> " + rear);
    }
  }

  public static void main(String[] args) {

    // create an object of Queue class
    Queue q = new Queue();

    // try to delete element from the queue
    // currently queue is empty
    // so deletion is not possible
    q.deQueue();

    // insert elements to the queue
    for(int i = 1; i < 6; i ++) {
      q.enQueue(i);
    }

    // 6th element can't be added to queue because queue is full
    q.enQueue(6);

    q.display();

    // deQueue removes element entered first i.e. 1
    q.deQueue();

    // Now we have just 4 elements
    q.display();

  }
}`}
        </pre>
        <h3>Output:</h3>
        <pre>
{`
Queue is empty
Insert 1
Insert 2
Insert 3
Insert 4
Insert 5
Queue is full

Front index-> 0
Items ->
1  2  3  4  5  
Rear index-> 4
1 Deleted

Front index-> 1
Items ->
2  3  4  5
Rear index-> 4`}
        </pre>

        <h3>Implementation using Queue Interface</h3>

        <pre>
          {`
import java.util.Queue;
import java.util.LinkedList;

class Main {

  public static void main(String[] args) {
    // Creating Queue using the LinkedList class
    Queue<Integer> numbers = new LinkedList<>();

    // enqueue
    // insert element at the rear of the queue
    numbers.offer(1);
    numbers.offer(2);
    numbers.offer(3);
    System.out.println("Queue: " + numbers);

    // dequeue
    // delete element from the front of the queue
    int removedNumber = numbers.poll();
    System.out.println("Removed Element: " + removedNumber);

    System.out.println("Queue after deletion: " + numbers);
    }
}`}
        </pre>
        <h4>Output</h4>
        <pre>
          {
            `
Queue: [1, 2, 3]
Removed Element: 1
Queue after deletion: [2, 3]
`
          }
        </pre>
       
       
    </div>
  )
}
