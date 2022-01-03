import React from 'react'

const Footer = () => {
    return (
        <>
             {/* Footer starts here  */}


<footer>
    <div className="main-content">

        <div className="center box">
            <h2>Address</h2>
            <div className="content">
                <div className="place">
                    <span className="fas fa-map-marker-alt"></span>
                    <span className="text">Address-36, Beck Bagan Row, Kolkata-700017</span>
                </div>
                <div className="phone">
                    <span className="fas fa-phone-alt"></span>
                    <span className="text">Phone- +91 8017793202 </span>
                </div>
                <div className="place">
                    <span className="fas fa-envelope"></span>
                    <span className="text">hello@innovaciotech.com</span>
                </div>
            </div>
        </div>


        <div className="social">
                    <a href=" https://www.facebook.com/sk.feejan" target="_blank"><span
                            className="fab fa-facebook-f"></span></a>
                    <a href=" https://in.linkedin.com/in/sk-feejan-90b67620a" target="_blank"><span
                            className="fab fa-linkedin"></span></a>
                    <a href=" https://instagram.com/skfeejan_786?igshid=t88qjjctmv0p" target="_blank"><span
                            className="fab fa-instagram"></span></a>
                                                <a href=" https://instagram.com/skfeejan_786?igshid=t88qjjctmv0p" target="_blank"><span
                            className="fab fa-twitter"></span></a>
                                                {/* <a href=" https://instagram.com/skfeejan_786?igshid=t88qjjctmv0p" target="_blank"><span
                            className="fab fa-youtube"></span></a> */}


                            {/* <p>Hello</p> */}
                </div>


    </div>


    <div className="bottom">
        <center>
            <span className="credit">Created By <a href="https://web.telegram.org/">Innovacio Technology </a>|</span>
            <span className="far fa-copyright"><span>2020 All rights reserved.</span></span>
        </center>
    </div>
</footer>

        </>
    )
}

export default Footer
