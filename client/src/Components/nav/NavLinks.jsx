const NavLinks = () => {
    const links =["Home", "About", "Resume", "Portifolio", "Services", "Contact"];
  return (
    <ul className="navlinks" >
      {links.map((link) =>(
        <li><a href="#">{link}</a></li>
      ))}
    </ul>
  )
}

export default NavLinks
