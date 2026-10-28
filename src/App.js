import Navbar from "./components/Navbar.js"
import Categories from "./components/Categories.js"
import Mainimg from "./components/Mainimg.js"
import Course from "./components/Course.js"
import Skills from "./components/Skills.js"
import Ppcourse from "./components/Ppcourse.js"
import Footer from "./components/Footer.js"


function App(){
    return(
        <div>
    <Navbar></Navbar>
    <Categories></Categories>
    <Mainimg></Mainimg>
    <Course></Course>
    <Skills></Skills>
    <Ppcourse></Ppcourse>
    <Footer></Footer>
        </div>
    )
}
export default App