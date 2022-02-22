import React, { ReactNode } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Container } from './LayoutStyles';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => (
  <Container>
    <Header />
    <main>{children}</main>
    <Footer />
  </Container>
);

export default Layout;
