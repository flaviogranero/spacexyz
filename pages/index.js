import Link from 'next/link';
import { Section, Card, Content, Title } from 'rbx';
import Layout from '../components/Layout';

const Home = () => (
  <Layout title="Welcome to SpaceXYZ">
    <Section>
      <Card>
        <Card.Content>
          <Content>
            <Link href="/upcoming">
              <a>
                <Title as="h3">Upcoming Launches</Title>
                <p>See all SpaceX scheduled upcoming launches</p>
              </a>
            </Link>
          </Content>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Content>
            <Link href="/past">
              <a>
                <Title as="h3">Past Launches</Title>
                <p>See all SpaceX past launches</p>
              </a>
            </Link>
          </Content>
        </Card.Content>
      </Card>
    </Section>
  </Layout>
);

export default Home;
