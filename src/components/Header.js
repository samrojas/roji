import {useState} from 'react'
import Logo from '../img/ROJI@3x.png'
import LogoWhite from '../img/ROJIWhite@3x.png'
import {Link, useHistory} from 'react-router-dom'
import { animated, useSpring } from 'react-spring'

function Header(props){
    let history = useHistory()
    const [hover, setHover] = useState(false)
    const [buttons, setButtons] = useState(
       [
           {
               class: "button-selected",
               text: 'Gallery'
            },
            {
                class: "",
                text: 'Radio'
            },
            {
                class: "",
                text: "About"
            },
        ]   
    )

    const selectButton = (button) => {
        let buttonCopy = [...buttons]
        const prevSelected = buttons.find(x => x.class === "button-selected")
        const nextSelected = buttons.find(x => x.text === button)
        const before = buttonCopy.indexOf(prevSelected)
        const after = buttonCopy.indexOf(nextSelected)

        buttonCopy[before].class = ""
        buttonCopy[after].class = "button-selected"

        history.push(`/${button.toLowerCase()}`)
        props.setSelected(button)
        setButtons(buttonCopy) 
    }

    // Don't show header on Stardust page
    if (window.location.pathname.includes('stardust')) {
        return null;
    }

    return(
        <header className="header">
            <Link to="/roji">
                <img className="logo" src={LogoWhite} alt="roji logo"/>
            </Link>
            
            <div className='button-container'>
                {buttons.map(x => {
                    return(
                        <button onClick={() => selectButton(x.text)} className={x.class}>
                            <p>{x.text}</p>
                        </button>
                    )
                })}
                
            </div>
        </header>
    )
}



export default Header