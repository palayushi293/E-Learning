import React from 'react'
import certificat from './e_lear_cer.png'
import {useState} from 'react'
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
export default function Certificate() {

  const[loader, setLoader]=useState(false);
  const downloadPDF=()=>
  {
    const capture=document.querySelector('.actual');
    setLoader(true);
    html2canvas(capture).then((canva)=>
    {
      const imgData=canva.toDataURL('img/png');
      const doc=new jspdf('p','mm','a4');
      const componentWidth=
      "500px";
      const componentHeight=doc.internal.pageSize.getHeight();
      doc.addImage(imgData,'PNG',0,0,componentWidth,componentHeight);
      setLoader(false);
      doc.save('E-Learning.pdf')
    })
  }
  return (
    <div>
<div className="actual" sttyle={{marginTop:"50px"}}>
  
  <img style={{height:"500px",width:"400px",marginTop:"50px"}}src={certificat}></img>
 
</div>
<button className="button"  style={{backgroundColor:"blue",color:"white",borderRadius:"5px",marginTop:"20px",width:"200px",height:"30px",border:"1px solid white"}}
onClick={downloadPDF} 
disabled={!(loader==false)}>

  {loader?(
    <span>Downloading</span>
  ):(
    <span>Download</span>
  )}
</button>

    </div>
  )
}
