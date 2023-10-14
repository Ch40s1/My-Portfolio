function Navbar (){
  const aboutMe = <li><a href="#About-Me">About Me</a></li>;
  const myWork = <li><a href="#My-work">My Work</a></li>;
  const contact = <li><a href="#Contact">Conatct</a></li>;

  return <ul>{aboutMe} {myWork} {contact}</ul>
}

export default Navbar;
