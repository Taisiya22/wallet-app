import { ConnectButton } from "../components/ConnectButton/ConnectButton"
import { Logo } from "../components/Logo/Logo"
import { HeaderWrapper } from "./Header.styled"

export const Header = () => { 
    return (
        <HeaderWrapper>
            <Logo/>
            <ConnectButton/>
       </HeaderWrapper>  
    )
}