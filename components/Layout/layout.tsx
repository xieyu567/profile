import React, {ReactNode} from 'react';
import Header from '../Header/header'
// import Footer from './footer'

type Props = {
    children: ReactNode;
};


const Layout = ({children}: Props) => (
    <>
        <Header/>
        <main>{children}</main>
    </>
)

export default Layout;