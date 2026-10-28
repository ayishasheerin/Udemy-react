function Navbar() {
    return(
         <div className="navbar">
        <div className="nav_sec_0">
            <i className="fa-mosaic fa-solid fa-bars"></i>
        </div>
        <div className="navbar_sec1">
            <h1 className="navbar_sec1_title">Udemy</h1>
        </div>
        <div className="navbar_1">
            <p>Explore</p>
        </div>
        <div className="navbar_2">
            <p>Subscribe</p>
        </div>
        
        <div className="navbar_sec2">
           <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
           <input type="text" placeholder="Search for anything"/>
        </div>
        <div className="navbar_3">
            <p>Udemy Business</p>
        </div>
        <div className="navbar_4">
            <p>Teach on Udemy</p>
        </div>
        <div className="nav_sec6">
        <div className="popup">
         <div className="navbar_sec4">
            <i className="fa-solid fa-cart-shopping"></i>
            </div>
            <div className="pop_up">
                <p> The Cart is empty</p>
            </div>
        </div>
            <div className="sec_button_1">
                <button class="button_1">Log in</button>
            </div>
            <div className="sec_button_2">
                <button class="button_2">Sign up</button>
            </div>
            <div className="navbar_sec5">
                <i className="fa-solid fa-globe"></i>
            </div>
        </div>
    </div>
    )
}
export default Navbar