import React from 'react'
import './App.css';

const Counter = () => {
    const [inp,setinp]=React.useState('');
    const [n1,setN1]=React.useState('');
    const [n2,setN2]=React.useState('');
    const [n3,setN3]=React.useState('');
    const [tgl,setTgl]=React.useState(false);
    const [back,setBack]=React.useState("white");
    const [txt,setTxt]=React.useState("black");
    const [album,setAlbum]=React.useState([]);
    const [show,setShow]=React.useState([]);

    const fetchapi = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data)
      }

    React.useEffect(() => {
        fetchapi();
      });
    

    const takeval =(e)=>{
        setinp(Number(e.target.value));
        setN1(Number(e.target.value)+1);
        setN2(Number(e.target.value)+2);
        setN3(Number(e.target.value)+3);
        console.warn("Showing");
        console.log(inp)
    }
    
    const toggle =()=>{
        if(tgl){
            setTgl(false)
            setBack("white");
            setTxt("black");
        }
        else{
            setTgl(true)
            setBack("black");
            setTxt("white");
        }
    }

    const fetch=async()=>{
        // console.log(album)
        // setShow(album)
        
    }
  return (
    <div className='Counter' style={{backgroundColor:back,color:txt}}>
        <input placeholder='Enter number...' onChange={takeval} />
        <div className='numtogg'>
        <div className='numbers'>
        <p>{n1}</p>
        <p>{n2}</p>
        <p>{n3}</p>
        </div>
        <button className='themechanger' onClick={toggle}>Toggle</button>
        </div>

        <button className='themechanger' onClick={fetch}>Fetch Album</button>
        <table>
                {show.map(i=>{
                    return <tr><td>{i.id}</td><td>{i.title}</td></tr>
                })}
        </table>
        

    </div>
  )
}

export default Counter