import Link from 'next/link';
import Layout from '../components/layout';
import { getGeneralsList } from '../lib/read_data';

export async function getStaticProps() 
{
  const americanGenerals = getGeneralsList();
  return {
    props: { americanGenerals }
  };
}

export default function Home( { americanGenerals } ) {
  return (
    <Layout home>
      <h1>List of Generals And Lieutenants</h1>
      <h2>American Generals</h2>
      <div className="list-group">
        {americanGenerals.map(
            (post) => (
              <Link key={post.id} href={`/${post.id}`} className="list-group-item list-group-item-action list-group-item-primary">
                {post.name}
              </Link>
            )
          )
        }
      </div>
    </Layout>
  );
}