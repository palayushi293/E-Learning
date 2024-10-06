import React from 'react'
import { useNavigate } from 'react-router-dom'
import './GraphTest.js'
export default function Graph() {

  const navigate=useNavigate();

  const Gtest=()=>
  {
    navigate('/contact/Graph/Test');
  }
  return (


    <div>
        <h2>What Is a Graph?</h2>
        <button  onClick={Gtest} style={{borderRadius:"4px",backgroundColor:"blue",color:"white",border:"1 px =white",marginLeft:"850px",height:"40px",width:"120px"}}>TEST</button>
        <p>
        A graph is an abstract data type (ADT) which consists of a set of objects that are 
        ,<br/>connected to each other via links. The interconnected objects are represented by points
        <br/> termed as <b>vertices</b>, and the links that connect the vertices are called <b>edges</b>.
        </p>
        <br/>
        <p>
        Formally, a graph is a pair of sets (V, E), where V is the set of vertices and E is the set of edges,
        <br/>
         connecting the pairs of vertices. Take a look at the following graph −
        </p>

        <img src="https://www.tutorialspoint.com/data_structures_algorithms/images/graph_basics.jpg"/>
        <p>
        In the above graph,
        <br/>
        {`V = {a, b, c, d, e}`}
        <br/>
        {`E = {ab, ac, bd, cd, de}`}
        </p>

        <h2><b>Graph Data Structure</b></h2>

        <p>
        Mathematical graphs can be represented in data structure. We can represent a graph using an 
        <br/>
        array of vertices and a two-dimensional array of edges. Before we 
        <br/>
        proceed further, let's familiarize ourselves with some important terms −
        </p>

        <div className="terms" style={{backgroundColor:"grey",color:"white"}}>
<p>
            <b>Vertex −</b>
            Each node of the graph is represented as a vertex. In the
            <br/>
            following example, the labeled circle represents vertices. Thus, A to G
            <br/>
            are vertices. We can represent them using an array as shown in the
            <br/>
            following image. Here A can be identified by index 0. B can be identified
            <br/>
            using index 1 and so on.


            </p>

            <p>
                <b>Edge − </b>
                Edge represents a path between two vertices or a line between
                <br/>
                two vertices. In the following example, the lines from A to B, B to C, and
                <br/>
                so on represents edges. We can use a two-dimensional array to
                <br/>
                represent an array as shown in the following image. Here AB can be
                <br/>
                represented as 1 at row 0, column 1, BC as 1 at row 1, column 2 and so
                <br/>
                on, keeping other combinations as 0.


            </p>

            <p>
                <b>
                Adjacency −
                </b>
                Two node or vertices are adjacent if they are connected to<br/>
                each other through an edge. In the following example, B is adjacent to
                <br/>
                A, C is adjacent to B, and so on.


                </p>

                <p>
                    <b>Path-</b>
                    Path represents a sequence of edges between the two vertices.
                    <br/>
                    In the following example, ABCD represents a path from A to D.
                </p>
</div>
                <img src="https://www.tutorialspoint.com/data_structures_algorithms/images/graph.jpg"/>

       <img src="https://www.baeldung.com/wp-content/uploads/2018/11/graph1.jpg"/>
       <p>
        Here we’ve defined a simple graph with five vertices and six edges. The circles are vertices representing people and
        <br/>
        the lines connecting two vertices are edges representing friends on an online portal.

<br/>
There are a few variations of this simple graph depending on the properties of the edges. Let’s briefly go through
<br/>
them in the next sections
<br/>
However, we’ll only focus on the simple graph presented here for the Java examples in this tutorial.
       </p>

       <h3><u>Directed Graph</u></h3>
       <p>
        The graph we’ve defined so far has edges without any direction. If these <b>edges feature a direction in </b>them, the
        <br/>
        resulting graph is known as a directed graph.
        <br/>
        An example of this can be representing who sent the friend request in a friendship on the online portal:
       </p>
       <img src="https://www.baeldung.com/wp-content/uploads/2018/11/graph2.jpg"/>
       <p>Here we can see that the edges have a fixed direction. The edges can be bidirectional as well.</p>
    </div>
  )
}
