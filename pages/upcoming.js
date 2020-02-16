import React, { useState, useEffect } from 'react';
import { Section, Card, Content, Title } from 'rbx';
import Layout from '../components/Layout';

const Upcoming = () => {
  const [launches, setLaunches] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        'https://api.spacexdata.com/v3/launches/upcoming',
      );
      const data = await result.json();
      setLaunches(data);
    };
    fetchData();
  }, []);

  return (
    <Layout title="Upcoming Launches">
      <Section>
        {!launches.length && <Title as="h3">Loading...</Title>}
        {launches.map(launch => (
          <Card key={launch.flight_number}>
            <Card.Content>
              <Content>
                <Title as="h3">{launch.mission_name}</Title>
                <p>{launch.details}</p>
                <time dateTime={launch.launch_date_utc}>
                  {launch.launch_date_utc}
                </time>
              </Content>
            </Card.Content>
          </Card>
        ))}
      </Section>
    </Layout>
  );
};

export default Upcoming;
