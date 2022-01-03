import React from 'react';
import { NavLink } from "react-router-dom";


const Blog = () => {
    return (
        <>
           {/* Blogs */}

<div className="solution">
<div className="sol-h1"><h1>Welcome to our Blog</h1></div>

<div className="all-sols">
    <div className="sols">
        <div className="sol blog-img0"></div>
        <div><h4>The Benefits of Crypto Payment Gateway Development</h4></div>
        <div className="blog-btn">
        <NavLink to = "/blog"><button>Read more</button></NavLink>
        </div>

    </div>

    <div className="sols">
        <div className="sol blog-img1"></div>
        <div><h4>Everything About Launching Your ICO Platform Using ERC20 Token & ICO Script</h4></div>
        <div className="blog-btn">
        <NavLink to = "/blog"><button>Read more</button></NavLink>
        </div>

    </div>

    <div className="sols">
        <div className="sol blog-img2"></div>
        <div><h4>Develop your own BEP-20 Token on the Binance Smart Chain</h4></div>
        <div className="blog-btn">
        <NavLink to = "/blog"><button>Read more</button></NavLink>
        </div>

    </div>


</div>
</div>

 
        </>
    )
}

export default Blog
