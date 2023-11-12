import Layout from '../components/layout';
import { getIdList, getPerson } from '../lib/read_data';

export async function getStaticProps( { params } )
{
  const personData = await getPerson(params.id);
  return {
    props: {
      personData
    }
  };
}

export async function getStaticPaths() 
{
  const paths = getIdList();
  return {
    paths,
    fallback: false
  };
}

export default function displayLieutenants( { personData } ) 
{

  let customFields = personData.custom_fields;
  let customFieldsData = Object.fromEntries(customFields.split(',').map(item => item.split(':')));

  return (
    <Layout>
      <article className="card col-6">
        <div className="card-body">
        <h5 className="form-control">Post Title: {personData.post_title}</h5>
        <p className="form-control">Post Status: {personData.post_status}</p>
          <p className="form-control">Custom Post Item Type: {customFieldsData.item_type}</p>
          <p className="form-control">Custom Post Item Color: {customFieldsData.item_color}</p>

        </div>
      </article>
    </Layout>
  );
}