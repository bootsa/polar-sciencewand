import gql from 'graphql-tag';

export const GET_BASIC_IDEAS = gql`
  query getBasicIdeas {
    allBasicIdeas {
      name
      description
    }
  }
`;