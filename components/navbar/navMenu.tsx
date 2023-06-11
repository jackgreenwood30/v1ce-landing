import NavButton from './navButton';

import navbarData from './navbar.json';

const NavMenu: React.FC = () => {
  return (
    <div className='flex gap-4'>
      {navbarData.buttons.map((button, index) => (
        <NavButton key={index} buttonText={button.buttonText} style={button.buttonStyle} iconUrl={button.iconUrl} iconAlt={button.iconAlt}/>
      ))}
    </div>
  );
};

export default NavMenu;
