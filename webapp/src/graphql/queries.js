/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSearch = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      searchLoc
      searchArea
      LoacationData
      createdAt
      updatedAt
    }
  }
`;
export const listSearches = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        searchLoc
        searchArea
        LoacationData
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
