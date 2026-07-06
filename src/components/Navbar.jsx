import logo from "../assets/logo.png";
import "../styles/navbar.css";

export default function Navbar(){

return(

<nav className="navbar">

<div className="left">

<img src={logo}/>

<div>

<h2>ResourceHub</h2>

<p>by Bits.priyam</p>

</div>

</div>

<a
  href="https://instagram.com/bits.priyam"
  target="_blank"
  rel="noopener noreferrer"
  className="insta"
>
  Instagram
</a>

</nav>

)

}