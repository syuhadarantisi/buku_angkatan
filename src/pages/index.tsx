import React from 'react';
import Layout from '@theme/Layout';
import CardContainer from '../components/CardContainer';
import { MEMBER_DATA } from '@site/data/members';

export default function Homepage(): JSX.Element {
  return (
    <Layout
      title="Halaman depan"
      description="Description will go into a meta tag in <head />">
      <main className="container padding-top--md padding-bottom--lg">
        <CardContainer members={MEMBER_DATA} />
      </main>
    </Layout>
  );
}
