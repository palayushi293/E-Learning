import React from 'react'
import './LinkedList.js'
import{useNavigate} from 'react-router'
import './Arrays.js'
import './Course.css'
import './Stack.js'
import './Queue.js'
export default function Course() {

  const navigate=useNavigate();

  const linked=()=>
  {
    navigate('/contact/LinkedList')
  }
  const array=()=>
  {
    
    navigate('/contact/Arrays')
  }

  const stack=()=>
    {
      
      navigate('/contact/Stack')
    }
    const queue=()=>
    {
      navigate('/contact/Queue')
    }
  return (
    <div>

      <h3>E-Learning Courses</h3>
      <h6>Interactive LIVE  & Self-Paced Course</h6>
      <br/>
<input type="text" placeholder="What you want to learn today" style={{width:"700px"}}></input>


<div className="dsa" style={{display:"flex",marginTop:"40px"}}>


<div className="card " style={{width: "18rem",marginLeft:"120px"}}>
  <img class="card-img-top" style={{height:"140px"}}src="https://imgs.search.brave.com/jBCgwYm7cUuifjh9ToH0WqF3bqLWgSCHqekiCqrLeyk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZWVrc2Zvcmdl/ZWtzLm9yZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMjA3MjEw/ODAzMDgvYXJyYXku/cG5n" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Arrays</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   <button onClick={array}>Go tO</button>
  </div>
</div>

<div class="card" style={{width: "18rem",marginLeft:"120px"}}>
  <img class="card-img-top" src="https://imgs.search.brave.com/xFm0FsGznjBcft8PNVCykW1F467KSqDSQkNNG84tAf8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuamF2YXRwb2lu/dC5jb20vZHMvaW1h/Z2VzL2RvdWJseS1s/aW5rZWQtbGlzdC5w/bmc" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">LinkedList</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   
    <button onClick={linked}>Go to</button>
  </div>
</div>

<div class="card" style={{width: "18rem",marginLeft:"120px"}}>
  <img class="card-img-top" src="https://imgs.search.brave.com/Mwj0ailtQe7J8O1WM0iCWs3eFiD7OCZHhixh-gTk4Os/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zY2Fs/ZXIuY29tL3RvcGlj/cy9pbWFnZXMvc3Rh/Y2staW4tYy53ZWJw" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Stack</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   <button onClick={stack}>Go To</button>
  </div>
</div>
</div>

<div className="dsa2" style={{display:"flex"}}>

<div class="card" style={{width: "18rem",marginLeft:"120px"}}>
  <img class="card-img-top" src="https://imgs.search.brave.com/8-4sxyA27YAqgSPOy378qx5gnOC6VwZ3dmuNlDbT_S0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZWVrc2Zvcmdl/ZWtzLm9yZy93cC1j/b250ZW50L2Nkbi11/cGxvYWRzLzIwMjIx/MjEzMTEzMzEyL1F1/ZXVlLURhdGEtU3Ry/dWN0dXJlcy5wbmc" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Queue</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button onClick={queue}>Go to</button>
  </div>
</div>


<div class="card" style={{width: "18rem",marginLeft:"120px"}}>
  <img class="card-img-top" src="https://imgs.search.brave.com/xo2QJPLpQDx1cZmUQtU7393FQo9DSmpQxF6V9QhpCoY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhla25vd2xlZGdl/YWNhZGVteS5jb20v/X2ZpbGVzL2ltYWdl/cy9CaW5hcnlfU2Vh/cmNoX1RyZWVfJUMy/JUEwLnBuZw" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Tree</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html" class="btn btn-primary">Go somewhere</a>
  </div>
</div>


<div class="card" style={{width: "18rem",marginLeft:"120px"}}>
  <img class="image" src="https://imgs.search.brave.com/F1bmieyH-gEy7dU9vnzpcydH098nsSTu9JcA9mnXaLI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dHV0b3JpYWxzcG9p/bnQuY29tL2RhdGFf/c3RydWN0dXJlc19h/bGdvcml0aG1zL2lt/YWdlcy9ncmFwaC5q/cGc" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Graph</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html" class="btn btn-primary">Go somewhere</a>
  </div>
</div>


</div>
<h3>Web Development</h3>
<div className="Web1" style={{display:"flex",marginTop:"80px"}}>


<div class="card" style={{width: "18rem",marginLeft:"120px"}}>
  <img class="image" src="https://imgs.search.brave.com/pItOYESg2wESDPUfvAeDIcEOCyohGXI8bWV6pduCtG4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jbXMt/YXNzZXRzLnR1dHNw/bHVzLmNvbS9jZG4t/Y2dpL2ltYWdlL3dp/ZHRoPTQwMC91cGxv/YWRzL3VzZXJzLzMw/L3Bvc3RzLzEwNjgz/OC9wcmV2aWV3X2lt/YWdlL2h0bWwucG5n" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">HTML</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div class="card" style={{width: "18rem",marginLeft:"120px"}}>
  <img class="image" src="https://imgs.search.brave.com/eeavOmvuXA6Q9u_tTdeSGYSHp9y54-5G6cfXKI_UXlQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vY2xvdWRpbmFy/eS1tYXJrZXRpbmcv/aW1hZ2VzL3dfMTU0/MCxoXzg0Ny9mX2F1/dG8scV9hdXRvL3Yx/NjQ5NzE4NTk0L1dl/Yl9Bc3NldHMvYmxv/Zy93b3JraW5nX3dp/dGhfY3NzXzIyMjE4/NzIwYWIvd29ya2lu/Z193aXRoX2Nzc18y/MjIxODcyMGFiLWpw/Zz9faT1BQQ.jpeg" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">CSS</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div class="card" style={{width: "18rem",marginLeft:"120px"}}>
  <img class="image" src="https://imgs.search.brave.com/Xq8vWySoG6wvDN2FKTlcuDDxEetR2wa7zHQKSt1CWv0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9qYXZhc2NyaXB0/LXByb2dyYW1taW5n/LWNvZGUtYWJzdHJh/Y3QtdGVjaG5vbG9n/eS1iYWNrZ3JvdW5k/XzI3MjMwNi0xNTUu/anBnP3NpemU9NjI2/JmV4dD1qcGc" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">JavaScript</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html" class="btn btn-primary">Go somewhere</a>
  </div>
</div>




</div>

<div className="second_row" style={{display:"flex"}}>

<div class="card" style={{width: "18rem",marginLeft:"120px"}}>
  <img class="image" src="https://imgs.search.brave.com/xxioIdf4_l7HYJ21VFgi6i1_Ro290yS11_sYxiIcG9Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZWVrc2Zvcmdl/ZWtzLm9yZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMzA4MDMx/MTQzMDkvTGVhcm5f/UmVhY3RKUy53ZWJw" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">React.js</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div class="card" style={{width: "18rem",marginLeft:"120px"}}>
  <img class="image" src="https://imgs.search.brave.com/kgdNo2TSSXjTMrNVPtiq67yJibUGjbTyrqhUW81grcU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tYWxj/b2RlZC5jb20vc3Rh/dGljLzYyYTZkOTNl/NzI0NTk0YzliMDI4/ZmMwNjFkODg3YjYx/L2YzNTgzL2FuZ3Vs/YXIrbm9kZWpzLnBu/Zw" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Node.js</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div class="card" style={{width: "18rem",marginLeft:"120px"}}>
  <img class="image" src="https://imgs.search.brave.com/f7aCHA4Uj6XkXnYX8G4xD8pKTDNBXHxJW3tQZCDBaY8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZWVrc2Zvcmdl/ZWtzLm9yZy93cC1j/b250ZW50L2Nkbi11/cGxvYWRzLzIwMjAw/MjIxMjM1NzM0L0Rq/YW5nby10dXRvcmlh/bC1sZWFybi0ucG5n" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Django</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

</div>
<h3>LIVE COURSES</h3>
<div className="Live" style={{display:"flex"}}>

<div class="card" style={{width: "18rem",marginLeft:"120px"}}>
  <img class="image" src="https://imgs.search.brave.com/kCzKSu_BxxgnVWbzaAb8Ch6PJuSKUZQGEmyOUkXXlXA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMx/NzMwODk0OS9waG90/by9mZW1hbGUtYnVz/aW5lc3Mtb3duZXIt/c21pbGVzLXdoaWxl/LWNvbmR1Y3Rpbmct/aW50ZXJ2aWV3Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1I/MHNmV1cyY3BPcHk3/ckk3VUFrcWlmamZj/YmtTSFR1NVVkLTcx/SXB4bDhNPQ" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Tech Interview</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div class="card" style={{width: "18rem",marginLeft:"120px"}}>
  <img class="image" src="https://imgs.search.brave.com/UI66VNgwUSmVNVlCZ-q94dh39D5LZ4VB9TyNCjFWI-k/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA5/MDY1MjIyNC9waG90/by9ldmFsdWF0aW9u/LXdpdGgtd29tYW4t/dXNpbmctYS1zbWFy/dHBob25lLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1odUlT/TTJyS1RHVTg1QlJQ/WDBDbXFQUjNZcndy/djk4UHlwbEtxVVdO/RTEwPQ" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Software Testing</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div class="card" style={{width: "18rem",marginLeft:"120px"}}>
  <img class="image" src="https://imgs.search.brave.com/BhIQrDsufhW9eVpNLb51b1gJk0HyWjwvjZ9UNfbRGyQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzIxLzM4LzU5/LzM2MF9GXzMyMTM4/NTk4NV9UR2E4aWIx/MUJOWGIzaTAyQmNv/RUF0M2l6QkRQeGVN/SC5qcGc" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">DEVOPS</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
<br/>
<h3>Newly Launched</h3>
<br/>

<div className="Newly" style={{display:"flex"}}>

<div class="card" style={{width: "18rem",marginLeft:"120px"}}>
  <img class="image" src="https://imgs.search.brave.com/I9hm2WmpIvtBkWvHponFzdVkiSXjCwR2bx07znuGLBs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzc2LzQwLzg0/LzM2MF9GXzE3NjQw/ODQ0MF9wczluVk1o/MUYyWEN1Qjh2c09m/RGtGcW8wWHVDMVhR/Zy5qcGc" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Cloud Computing</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html" class="btn btn-primary">Go somewhere</a>
  </div>
</div>


<div class="card" style={{width: "18rem",marginLeft:"120px"}}>
  <img class="image" src="https://imgs.search.brave.com/q4MwGOqOHwHALyW3fnXg3vqPm8RxNyWXno2CGDPRTWY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9kM2Yx/aXlmeHh6OGkxZS5j/bG91ZGZyb250Lm5l/dC9jb3Vyc2VzL2Nv/dXJzZV9pbWFnZS9j/N2IxMGZlMDQ0Yjku/cG5n" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Generative AI</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html" class="btn btn-primary">Go somewhere</a>
  </div>
</div>


<div class="card" style={{width: "18rem",marginLeft:"120px"}}>
  <img class="image" src="https://imgs.search.brave.com/Q7Uesx_Xx8nCso-IDCvuFg4Ss4PmGA_mQhVaeUduX1M/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y25ldC5jb20vYS9p/bWcvcmVzaXplL2Nj/YTcyMGM0MWU1Nzcz/YzExMjk2ZGZkZmEz/MzEzOTBkN2U5ZmEw/MDEvaHViLzIwMjQv/MDgvMDcvYTY2MmQ2/MDItMDhhYy00MDFk/LWFjMzctMjBiNmRi/Njc3OGIxL2FwcGxl/LWV2ZW50LTAxODQu/anBnP2F1dG89d2Vi/cCZmaXQ9Y3JvcCZo/ZWlnaHQ9Njc1Jndp/ZHRoPTEyMDA" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">IOS</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
</div>









   
  )
}
