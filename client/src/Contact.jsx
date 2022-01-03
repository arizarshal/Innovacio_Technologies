// import React, {useState} from 'react';

//     const [email, setEmail] = useState("");
//     const [name, setName] = useState("");
//     const [message, setMessage] = useState("");

//     function handleSubmit(e) {
//         e.preventDefault();
//         alert('You Form has been Submitted');
// console.log(name);
// console.log(email);
//     setEmail("");
//     setName("");
//     setMessage("");


//         }

//         axios.post('http://localhost:5000/contact')
    

//     return(
//         <>
//          <div className="ct-us">
//         <h1>Contact Us</h1>
//         <form>
//                     <input  onChange={(e) => setName(e.target.value)} name="name" value={name}  className="form-control" placeholder="name"></input>
//                 <br/>

//                     <input type="email"  name="email" value={email}  className="form-control" placeholder="email"  onChange={(e) => setEmail(e.target.value)}></input>
//                 <br/>

//                     <textarea  onChange={(e) => setMessage(e.target.value)} name="message" value={message} id="textarea" cols="40" rows="8" className="form-control" placeholder="message"></textarea>
//                 <br/>

                
//                 <button onClick={handleSubmit} className="btn btn-lg btn-info">SEND</button>
//         </form>
//     </div>
//     </>
//     )
// }
// export default Contact







import React, {useState}  from 'react'
import axios from "axios";
function Contact() {
    const [input, setInput] = useState({
        name: '',
        message: '',
        email: '',
    })

    function handleChange(event) {
        const {name, value} = event.target;

        setInput(prevInput => {
            return{
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event) {
        event.preventDefault();
        alert('You Form has been Submitted')      
        console.log(input);
        // setInput("");
        const newForm = {
            name: input.name,
            message: input.message,
            email: input.email,
        }

        axios.post('http://localhost:5000/contact', newForm)
    }

    return <div className="ct-us">
        <h1>Contact Us</h1>
        <form>
            {/* <input type="hidden" name="_csrf" value="<%= csrfToken %>"/> */}
                {/* <div className='form-group'> */}
                    <input onChange={handleChange} name="name" value={input.name}  className="form-control" placeholder="name"></input>
                {/* </div> */}
                <br/>

                {/* <div className='form-group'> */}
                    <input type="email" onChange={handleChange} name="email" value={input.email}  className="form-control" placeholder="email"></input>
                {/* </div> */}
                <br/>

                {/* <div className='form-group'> */}
                    <textarea onChange={handleChange} name="message" value={input.message} id="textarea" cols="40" rows="8" className="form-control" placeholder="message"></textarea>
                {/* </div> */}
                <br/>

                
                <button onClick={handleClick} className="btn btn-lg btn-info">SEND</button>
        </form>
    </div>
}

export default Contact