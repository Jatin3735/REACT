const NavIcons = () => {
    const icons = ["twitter", "facebook-circle", "instagram", "linkedin-square"]
  return (
    <div className="navicons">
      {icons.map((icon) => (
        <i class={`bx bxl-${icon}`}></i>
      ))}
    </div>
  )
}

export default NavIcons
