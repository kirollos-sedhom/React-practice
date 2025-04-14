import React, {useState, useEffect} from 'react'

type hookType = [
    darkMode : "on" | "off",
    toggle: ()=> void
]
  
const useToggleTheme = ():hookType => {
    
    
    const [darkMode,setDarkMode] = useState<"on" | "off">("on")
    useEffect(()=>{
        let PreviousStorage = localStorage.getItem("dark_mode")
        if(PreviousStorage === "on" || PreviousStorage === "off"){
            // setDarkMode(localStorage.getItem("dark-mode"))
            
            setDarkMode(PreviousStorage)

        }
        else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            // dark mode
            setDarkMode("on")
        }
        else{
            setDarkMode("off")
        }
        
    },[])

    function toggle(){
        
        if(darkMode === "on"){
            setDarkMode("off")
            localStorage.setItem("dark_mode", "off")
        }
        else{
            setDarkMode("on")
            localStorage.setItem("dark_mode", "on")
        }
        
        
    } 


  return [darkMode, toggle]
}

export default useToggleTheme