import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />

                <NavMenu>
                    <NavLink to='/hotelinfo' activeStyle>
                        Hotel Information
                    </NavLink>
                    <NavLink to='/operation' activeStyle>
                        Operation
                    </NavLink>
                    <NavLink to='/help' activeStyle>
                        Help
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/logout'>Log out</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;
