import React, { useState, useEffect } from 'react';
import { Section, Card, Content, Title, Media, Image } from 'rbx';
import fetch from 'isomorphic-unfetch';
import Layout from '../../components/Layout';

const Launch = ({ launch }) => {
  return (
    <Layout title={launch.mission_name}>
      <Section>
        <Media>
          <Media.Item as="figure" align="left">
            <Image.Container as="p" size={64}>
              <Image
                alt={launch.mission_name}
                src={launch.links.mission_patch_small}
              />
            </Image.Container>
          </Media.Item>
          <Media.Item align="content">
            <Content>
              <p>
                <strong>{launch.mission_name}</strong>{' '}
                <small>{launch.rocket.rocket_name}</small>{' '}
                <time dateTime={launch.launch_date_utc}>
                  {launch.launch_date_utc}
                </time>
                <br />
                {launch.details}
              </p>
            </Content>
          </Media.Item>
        </Media>
      </Section>
      <Section>
        {launch.links.flickr_images.map((image, index) => (
          <Card key={index}>
            <Card.Image>
              <Image.Container size="4by3">
                <Image src={image} />
              </Image.Container>
            </Card.Image>
          </Card>
        ))}
      </Section>
    </Layout>
  );
};

Launch.getInitialProps = async function({ query }) {
  const { id } = query;
  const result = await fetch(`https://api.spacexdata.com/v3/launches/${id}`);
  const data = await result.json();
  return {
    launch: data,
  };
};

export default Launch;
