import { useEffect, useState } from "react"
import Content from "./components/Content/Content";
import Header from "./components/Header.jsx/Header";



function App  ()  {
  const [theme,setTheme] = useState('light');

  useEffect (()=>{
    const savedTheme =
    localStorage.getItem('theme');
    if (savedTheme) setTheme(savedTheme);
  },[]);

  const toggleTheme =()=>{
    const newTheme = theme ==='light'?
    'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme',newTheme);
  };
  return (
    <div className={`app ${theme}`}>
    <Header theme = {theme}
    toggleTheme = {toggleTheme}/>
   
<Content/>
      
    </div>
  )
}

export default App
