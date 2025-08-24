import logo from './logo.png';
import {AppBar, Toolbar} from '@mui/material';

const Header = ()=>{
    return (
        <>
        <AppBar color='secondary'position='static'>
            <Toolbar>
                <img src= {logo} alt="logo"style={{width:120}}/>
            </Toolbar>
        </AppBar>
        </>
    )
}

export default Header;