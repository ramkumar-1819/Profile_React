import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"

function Make(props){          //this component makes a section for each leader and return it
    return(<div className="details">
        <img src={props.image} alt="leader images"></img>
        <div>Name:<b>{props.name}</b></div>
        <div>Birth:<b>{props.birth}</b></div>
        <div>State:<b>{props.state}</b></div>
        </div>)
}

function Leaders(){     //this component contains leader details and return when all section for leaders are maked.
    var Details=[{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Ambedkar_1966_stamp_of_India_%28cropped%29.jpg/150px-Ambedkar_1966_stamp_of_India_%28cropped%29.jpg",name:"B.R.Ambedkar",birth:"(1891–1956)",state:"Maharastra"},
                 {image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/APJ_Abdul_Kalam_2015_stamp_of_India_%28cropped%29.jpg/150px-APJ_Abdul_Kalam_2015_stamp_of_India_%28cropped%29.jpg",name:"A.P.J.Abdul Kalam",birth:"(1931–2015)",state:"TamilNadu"},
                 {image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Vallabhbhai_Patel_1975_stamp_of_India.jpg/150px-Vallabhbhai_Patel_1975_stamp_of_India.jpg",name:"Vallabhbhai Patel",birth:"(1875–1950)",state:"Gujarat"},
                 {image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Jawaharlal_Nehru_stamp_%28cropped%29.jpg/150px-Jawaharlal_Nehru_stamp_%28cropped%29.jpg",name:"Jawaharlal Nehru",birth:"(1889–1964)",state:"Uttar Pradesh"},
                 {image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Mutter_Teresa_von_Kalkutta.jpg/150px-Mutter_Teresa_von_Kalkutta.jpg",name:"Mother Teresa",birth:"(1910–1997)",state:"West Bengal"}
                ]
    return( 
        <div className="section">{
        Details.map(val=>{
        return<Make image={val.image} name={val.name} birth={val.birth} state={val.state}/>
    })  }
        </div>
    )
}

ReactDOM.render(<Leaders/>,document.getElementById("root"))
