import React, { useEffect, useState } from "react";
const Main_Com=()=>{
    const [selectedColor,setSelectedColor]=useState('#DB0F0F');
    const [colors,setColors]=useState([])
    function hexToRgbA(hex,index){
        var c;
        if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
            c= hex.substring(1).split('');
            if(c.length== 3){
                c= [c[0], c[0], c[1], c[1], c[2], c[2]];
            }
            c= '0x'+c.join('');
            const rgba={r:(c>>16)&255 ,g:(c>>8)&255 ,b: c&255,a:index ,str:'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+`,${index})`}
            return rgba;
        }
        throw new Error('Bad Hex');
    }
    useEffect (()=>{
        setColors([...Array(4)].map((item,index)=>{
            return hexToRgbA(selectedColor,index/4+0.1).str
        }))
    },[selectedColor])
  
    return ( <section className="main-container">
                <h1>rgba(a,b,c,n%4)</h1>
                <h5>
                    <label>change color:</label>
                    <input type='color' value={selectedColor} onChange={e=>{setSelectedColor(e.target.value)}}/>
                </h5>
                <br />
                <div className="box-container">
                    {
                        colors.map((color,index)=>{
                            return    <div style={{backgroundColor:color}} key={index}>
                                    <div className="btn p-2">{color}</div>
                            </div>
                        })
                    }
                </div>
                
        </section>)
}
export default Main_Com