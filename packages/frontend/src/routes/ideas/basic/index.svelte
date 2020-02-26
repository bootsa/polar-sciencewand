<script context="module">
  import { client } from '../../../gql_client';
  import gql from 'graphql-tag';
 
  export async function preload() {
    return {
      cache: await client.query({
        query: gql`
          query getAllBasicIdeas {
            allBasicIdeas {
              name
              description
              parent {
                name
                description
                parent {
                  name
                  description
                }
              }
            }
          }
        `
      })
    }
  }
</script> 
 
<script>

  // debugger;
  // import { setClient, restore, query } from 'svelte-apollo';
  // import { GET_BASIC_IDEAS } from '../../../data/gql_queries';

  // console.log(client)
 
  // export let cache;
  // restore(client, cache);
  // // setClient(client);
 
  // // query a subset of the preloaded (the rest if for Account)
  // const basicIdeas = query(client, GET_BASIC_IDEAS);
  // console.log('here');
  // console.log({basicIdeas});
</script> 
