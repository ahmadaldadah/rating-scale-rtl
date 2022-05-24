import React ,{ useState , useEffect } from "react";
import "./rating.css" ;
const Rating = ({colorBackground = "#e4e5e9",colorRating = "#ffc107", rtl=false ,  width = "75px" , height="20px"}) =>{
    const [rating , setRating] = useState(null);
    const [hover , setHover] = useState(null);
    const [input , setInput] = useState(null);
    const [input2 , setInput2] = useState(null);
    useEffect(() => {console.log("input state is", input)}, [input])
    useEffect(() => {console.log("input 2 state is", input2)}, [input2])

    const getInputValue = (event) => {
         setInput(event.target.value);
    }
    const inputValue = (event) => {
        setInput2(event.target.value);
   }

   const increaseBrightness = (hex , percent )=>{
    // strip the leading # if it's there
    hex = hex.replace(/^\s*#|\s*$/g, '');

    // convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
    if(hex.length === 3){
        hex = hex.replace(/(.)/g, '$1$1');
    }

    var r = parseInt(hex.substr(0, 2), 16),
        g = parseInt(hex.substr(2, 2), 16),
        b = parseInt(hex.substr(4, 2), 16);

    return '#' +
       ((0|(1<<8) + r + (256 - r) * percent / 100).toString(16)).substr(1) +
       ((0|(1<<8) + g + (256 - g) * percent / 100).toString(16)).substr(1) +
       ((0|(1<<8) + b + (256 - b) * percent / 100).toString(16)).substr(1);
    }   
    let hoverColor = increaseBrightness(input||colorRating , 60);

    let ratingStyle = {
        backgroundColor :  input || colorRating,
        width : `${width}px`,
        height : `${height}px`
    };

    let hoverStyle = {
        backgroundColor :  hoverColor,
        width : `${width}px`,
        height : `${height}px`
    };

    let backgroundStyle = {
        backgroundColor : input2 ||  colorBackground ,
        width : `${width}px`,
        height : `${height}px`
    };

    return (
    <div style={{marginBottom:"15px"} } >
        <div className="takeValue">
            <label>
                Choose rating color
                <input type="color" value={input || colorRating}  className="inputClass" onChange={getInputValue} />
            </label>
            
      
            <label>
                Choose background color
                <input type="color" value={input2 || colorBackground}  className="inputClass" onChange={inputValue} />

            </label>
        </div>
        
        <div className={rtl === true ? "rating_scaleRtl" : "rating_scale"}>
            {[...Array(10)].map((rate,i) => {
                const ratingValue = i + 1;
                return(
                <div className={rtl === true ? "scaleRtl" : "scale"} key={i} 
                onClick={()=>setRating(ratingValue)}
                style={ratingValue <=  rating  ? ratingStyle:
                    ratingValue <= hover ? hoverStyle :backgroundStyle}  
                onMouseEnter={()=>setHover(ratingValue)}
                onMouseLeave={()=>setHover(null)}
                >
                </div>
                )})}
        </div>
       
    </div>)
       
}

export default Rating;