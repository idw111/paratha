import Head from 'next/head';
import { Options } from '../components/Options';
import { Layout } from '../components/layout/Layout';

export default function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Paratha</title>
      </Head>
      <div className="p-4">
        <Options onChange={(options) => console.log(options)} />
      </div>
    </Layout>
  );
}
