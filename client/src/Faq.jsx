import React,{useState} from 'react'



function Faq (){
    const[show0,setShow0]=useState(false)
    const[show1,setShow1]=useState(false)
    const[show2,setShow2]=useState(false)
    const[show3,setShow3]=useState(false)
    const[show4,setShow4]=useState(false)

    return (
        <>
            {/* FAQ's */}


<div className="faqs">
<div className="faq-h"><h1>FAQs</h1></div>
    <div  onClick={()=>setShow0(!show0)} className="faq"><h3>1) Why is blockchain considered Trustworthy?<button className="down-arr"><span>&#128071;</span></button></h3></div>
    <div className="togg">{ show0?<p>Blockchain works on a peer-to-peer network of consensus algorithm, which makes the transactions trustworthy and protects them from malicious activities of any third party.</p>:null}</div>
    <div onClick={()=>setShow1(!show1)}  className="faq "><h3>2) What is consortium algorithm?<button className="down-arr"><span>&#x1F447;</span></button></h3></div>
    <div className="togg">{ show1?<p>It is a blockchain-enabled network wherein consensus over unknown nodes is gained over the system of distributed network. Most popular consensus algorithms are POS & POW.</p>:null}</div>
    <div onClick={()=>setShow2(!show2)} className="faq"><h3>3) What are the key feature of blockchain?<button  className="down-arr"><span>&#x1F447;</span></button></h3></div>
    <div className="togg">{ show2?<p>Blockchain acts as a structured database on a decentralized ledger technology. It is immutable in nature, signifying that once the data has been entered, it cannot be tampered with. Users have full anonymity and blockchain also overcomes the problem of double spending.</p>:null}</div>
    <div onClick={()=>setShow3(!show3)}  className="faq"><h3>4) What are the various types of blockchain?<button className="down-arr"><span>&#x1F447;</span></button></h3></div>
    <div className="togg">{ show3?<p>The main type of blockchain can be classified as public blockchain, private blockchain and hybrid blockchain. Public blockchain is an open network from where data can be accessed freely while a private blockchain is a permissioned network where a user needs to join the network to access the data. Hybrid blockchain is a mix of above two.</p>:null}</div>
    <div onClick={()=>setShow4(!show4)} className="faq"><h3>5) What are the business benefit of blockchain integration?<button className="down-arr"><span>&#x1F447;</span></button></h3></div>
    <div className="togg">{ show4?<p>Blockchain technology provides the benefits of faster transaction settlement with improved transparency, security and traceability of transactions. It also improves efficiency of transactions thereby reducing the cost.</p>:null}</div>


</div>

        </>
    )
}

export default Faq;
