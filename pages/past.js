import React, { useState, useEffect } from 'react';
import { Section, Card, Content, Title, Media, Image } from 'rbx';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';

const Past = ({ launches }) => {
  return (
    <Layout title="Past Launches">
      <Section>
        {!launches.length && <Title as="h3">Loading...</Title>}
        {launches.map(launch => (
          <Card key={launch.flight_number}>
            <Card.Content>
              <Media>
                <Media.Item as="figure" align="left">
                  <Image.Container as="p" size={64}>
                    <Image
                      alt={launch.mission_name}
                      src={launch.links.mission_patch_small}
                    />
                  </Image.Container>
                </Media.Item>
                <Media.Item>
                  <Title as="p" size={4}>
                    {launch.mission_name}
                  </Title>
                  <Title as="p" subtitle size={6}>
                    {launch.rocket.rocket_name}
                  </Title>
                </Media.Item>
              </Media>
              <Content>
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

Past.getInitialProps = async function() {
  const result = await fetch(
    'https://api.spacexdata.com/v3/launches/past?limit=20',
  );
  const data = await result.json();
  return {
    launches: data,
  };
};

export default Past;
