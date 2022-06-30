import {Outlet} from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../context'
import { useNavigate } from 'react-router-dom'
import './layout_style.scss'
import sun from '../icons/icon-sun.svg'
import moon from '../icons/icon-moon.svg'

import {useTheme} from '../hooks/use-theme'

function Layout(){
    const {mode, modeToggle} = useContext(AppContext);
    const navigate = useNavigate();
    const {theme, setTheme} = useTheme();
    return(
        <>
        <header id={mode}>
            <div>
                <span onClick={()=>navigate('/')}>Where in the world?</span>
                    {theme === 'light'? 
                        <>
                            <div onClick={()=>setTheme('dark')}>
                                <img src={moon} alt="Moon"/>
                                <span>Dark Mode</span>
                            </div>
                        </>
                         :
                        <>
                            <div onClick={()=>setTheme('light')}>
                                <img src={sun} alt="Sun"/>
                                <span>Light Mode</span>
                            </div>
                        </>
                    }
            </div>
        </header>
        <main>
            <Outlet/>
        </main>
        <footer id={mode}>
            <div>
                <span>Front-end Mentor Task Torianyk Yevhenii</span>
            </div>
        </footer>
        </>
    )
}

export default Layout