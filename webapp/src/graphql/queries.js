/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSearch = /* GraphQL */ `
  query GetSearch($id: ID!) {
    getSearch(id: $id) {
      id
      name
      description
      startLoc
      createdAt
      updatedAt
    }
  }
`;
export const listSearches = /* GraphQL */ `
  query ListSearches(
    $filter: ModelSearchFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSearches(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        startLoc
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
