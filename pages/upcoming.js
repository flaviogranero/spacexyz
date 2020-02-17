import React, { useState, useEffect } from 'react';
import { Section, Card, Content, Title } from 'rbx';
import Layout from '../components/Layout';
import LaunchLink from '../components/LaunchLink';

const Upcoming = () => {
  const [launches, setLaunches] = useState(null);
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
        {!launches && <Title as="h3">Loading...</Title>}
        {launches &&
          launches.map(launch => (
            <Card key={launch.flight_number}>
              <Card.Content>
                <Content>
                  <LaunchLink id={launch.flight_number}>
                    <Title as="h3">{launch.mission_name}</Title>
                    <p>{launch.details}</p>
                    <time dateTime={launch.launch_date_utc}>
                      {launch.launch_date_utc}
                    </time>
                  </LaunchLink>
                </Content>
              </Card.Content>
            </Card>
          ))}
      </Section>
    </Layout>
  );
};

export default Upcoming;
