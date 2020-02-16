import Head from 'next/head';
import Link from 'next/link';
import {
  Generic,
  Container,
  Content,
  Navbar,
  Footer,
  Section,
  Hero,
  Title,
} from 'rbx';

const Layout = ({ title, children }) => {
  return (
    <Generic>
      <Head>
        <title>{title || 'SpaceXYZ'}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar fixed="top" color="primary">
        <Navbar.Brand>
          <Navbar.Item href="#">SpaceXYZ</Navbar.Item>
          <Navbar.Burger />
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Segment align="start">
            <Link href="/">
              <Navbar.Item>Home</Navbar.Item>
            </Link>
            <Link href="/upcoming">
              <Navbar.Item>Upcoming</Navbar.Item>
            </Link>
            <Link href="/contact">
              <Navbar.Item>Contact</Navbar.Item>
            </Link>
          </Navbar.Segment>
        </Navbar.Menu>
      </Navbar>
      <Section backgroundColor="primary">
        <Hero>
          <Hero.Body>
            <Container>
              <Title as="h1" align="center" color="white">
                {title}
              </Title>
            </Container>
          </Hero.Body>
        </Hero>
      </Section>
      <Container>
        <Content>{children}</Content>
      </Container>
      <Footer>
        <Content textAlign="centered">
          <p>
            <span>Public data from </span>
            <a href="https://github.com/r-spacex/SpaceX-API">SpaceX-API</a>.
          </p>
        </Content>
      </Footer>
    </Generic>
  );
};

export default Layout;
