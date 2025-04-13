import React, {useState, useEffect} from 'react'

const useToggleTheme = () => {
    
    
    const [darkMode,setDarkMode] = useState(false)
    useEffect(()=>{
        if(localStorage.getItem("dark_mode")){
            // setDarkMode(localStorage.getItem("dark-mode"))
            
            console.log("found ",localStorage.getItem("theme"))

        }
        else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            // dark mode
            setDarkMode(true)
        }
        else{
            setDarkMode(false)
        }
        
    },[])

    function toggle(){
        setDarkMode(prev => !prev)
    }


  return [darkMode, toggle]
}

export default useToggleTheme