'use client';

import localFont from "next/font/local";
import { Provider } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

import store from '@/redux/store';
import Navigation from '@/components/Navigation';

import '@/styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './layout.module.scss'

const geistSans = localFont({
  src: "../../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

interface IRootLayout {
  children: React.ReactNode
}

export default function RootLayout({ children }: IRootLayout) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Provider store={store}>
          <Container fluid id="mainLayout" className={styles.mainLayout}>
            <Row className="nm flex-grow-1 flex-column flex-md-row">
              <Col className="nmp" md={2} id="nav">
                <Navigation />
              </Col>
              <Col id="main" className={`nm ${styles.mainContainer}`}>
                {children}
              </Col>
            </Row>
          </Container>
        </Provider>
      </body>
    </html>
  );
}