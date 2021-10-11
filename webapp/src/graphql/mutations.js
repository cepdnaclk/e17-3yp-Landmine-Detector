/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSearch = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
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
export const updateSearch = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
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
export const deleteSearch = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
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
