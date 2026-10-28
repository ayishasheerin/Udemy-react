import Main from "../images/udemy_1.jpg"
function Mainimg() {
    return(
         <div className="main_img">
        <img className="main_img" src={Main} alt="main_img"/>
        <div className="inside_main_img">
            <h1>Build your learning routine from Rs.449.00</h1>
            <br/>
            <p>Learning 15 minutes a day can pay off in your career.</p>
            <p>Offer ends Sept 24.</p>
            <br/>
            <button class="main_img_btn">Save now</button>
        </div>
    </div>
    )
}
export default Mainimg