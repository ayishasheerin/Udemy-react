import one from "../images/udemy_3.jpg"
import two from "../images/udemy_4.jpg"
import three from "../images/udemy_5.jpg"
import four from "../images/udemy_6.jpg"
function Course() {
    return(
         <div className="course">
        <h1 className="course_title">Trending Courses</h1>
        <br/>
        <div className="course_cards">
        <div className="course_card1">
            <img className="img_1" src={one} alt="one"/>
            <h3>AI Engineer Agentic Track: The Complete Agent & MCP Course</h3>
            <p>Ed Donner, Ligency</p>
            <br/>
            <br/>
            <div className="c_card_1_1">
            <p class="bestseller">Bestseller</p>
            <p class="rate">⭐ 4.7</p>
            <p class="ratings">47,900 ratings</p>
            </div>
            <br/>
            <div className="c_card_1_2">
            <p>Rs.799 <del> Rs.1999</del></p>
            <button className="c_btn_1">Add to cart</button>
            </div>
        </div>
        <div className="course_card2">
            <img className="img_2" src={two} alt="two"/>
            <h3>The Complete Claude Code & Claude Cowork Masterclass[2026]</h3>
            <p>Prof. Ryan Ahmed,Stemplicity</p>
            <br/>
            <br/>
            <div className="c_card_2_1">
            <p className="bestseller_1">Bestseller</p>
            <p className="rate_1">⭐ 4.6</p>
            <p className="ratings_1">8,960 ratings</p>
            </div>
            <br/>
            <div className="c_card_2_2">
            <p>Rs.799 <del> Rs.1999</del></p>
            <button className="c_btn_2">Add to cart</button>
            </div>
        </div>
        <div className="course_card3">
            <img className="img_3" src={three} alt="three"/>
            <h3>100 Days of Code: The Complete Python Pro Bootcamp</h3>
            <p>Dr. Angela Yu,Developer </p>
            <br/>
            <br/>
            <div className="c_card_3_1">
            <p className="bestseller_2">Bestseller</p>
            <p className="rate_2">⭐ 4.7</p>
            <p className="ratings_2"> 474,676 ratings</p>
            </div>
            <br/>
            <div className="c_card_3_2">
            <p>Rs.3199 <del> Rs.4999</del></p>
            <button className="c_btn_3">Add to cart</button>
            </div>
        </div>
        <div className="course_card4">
            <img class="img_4" src={four} alt="four"/>
            <h3>Microsoft Excel - Excel from Beginner to Advanced 2026</h3>
            <p>Kyle Pew</p>
            <br/>
            <br/>
            <div className="c_card_4_1">
            <p className="bestseller_3">Bestseller</p>
            <p className="rate_3">⭐ 4.7</p>
            <p className="ratings_3">543,976 ratings</p>
            </div>
            <br/>
            <div className="c_card_4_2">
            <p>Rs.3199 <del> Rs.4999</del></p>
            <button className="c_btn_4">Add to cart</button>
            </div>
        </div>
    </div>
     <br></br>
    <br></br>
    </div>
    )
}

export default Course