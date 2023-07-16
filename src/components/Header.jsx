import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

const Header = () => {
  return (
    <nav>
        <h1>Web Developer</h1>
        <main>
            <HashLink to={"/#home"}>Home</HashLink>
            <Link to={"/contact"}>Contact</Link>
            <HashLink to={"/#about"}>About</HashLink>    
            {/* hm <a> tag se particular us div pr jump kr jaate h but <a> tag load hota h jo hm react m nhi chahte
             isliye hashlink ka use krte h <a> tag or <link> dono ki functionality use ho    */}

            {/* #about isliye hm ek div bnayenge usko id #about de denge to scroll hokr uspr aa jaega */}
            {/* <HashLink to={"/#brands"}>Brands</HashLink> */}
            <HashLink to={"/#brands"}>Brands</HashLink>
            <Link to={"/services"}>Services</Link>
            {/* <Link to={"/products"}>Products</Link> */}
        </main>
    </nav>
  )
};

export default Header;