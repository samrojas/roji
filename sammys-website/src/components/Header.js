import {useState} from 'react'
import Logo from '../img/ROJI@3x.png'
import LogoWhite from '../img/ROJIWhite@3x.png'

import { animated, useSpring } from 'react-spring'

function Header(){
    const [hover, setHover] = useState(false)

    return(
        <header className="header">
            
                <img onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)} className="logo" src={hover ? LogoWhite : Logo} alt="logo"/>
            
            <div className='button-container'>
                <button>
                    <p>Work</p>
                </button>
                <button>
                    <p>About</p>
                </button>
            </div>
        </header>
    )
}

export default Header