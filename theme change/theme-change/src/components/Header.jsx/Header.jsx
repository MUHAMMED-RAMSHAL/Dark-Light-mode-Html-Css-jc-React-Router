

const Header = ({theme,toggleTheme}) => {
    const toggle_mode =()=>{
        theme =='light'?toggleTheme('dark') : toggleTheme('light');
    };
  return (
   <header className="header">
   <h1>Dark And Light</h1>
   <button onClick={toggleTheme}>
  
    {theme === 'light'?'Dark':'Light'}Mode
   <img onClick={()=>{toggle_mode()}} src={theme =='light'?'Dark' : 'Light'} 
    alt="" className="toggle-icon"/>

   </button>

   </header>
  )

}

export default Header
