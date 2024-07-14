import './NavBar.scss';

export const NavBar = ({Logo, links, buttonText}) => {
  return (
    <nav className='navbar'>
      <div className='navbar__links'>
        <Logo />
        {links.map((link, index) => <a key={index} href={link.url}>{link.label}</a>)}
      </div>
      <div className='navbar__signup'>
        <button>
          {buttonText}
        </button>
      </div>

    </nav>
  )
}