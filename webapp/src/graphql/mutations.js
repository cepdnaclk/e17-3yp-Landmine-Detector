/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSearch = /* GraphQL */ `
  mutation CreateSearch(
    $input: CreateSearchInput!
    $condition: ModelSearchConditionInput
  ) {
    createSearch(input: $input, condition: $condition) {
      id
      RobotID
      UserID
      name
      description
      searchLat
      searchLon
      startLot
      startLon
      LocationData {
        Lat
        Lon
        Elev
        isMine
        isObs
        isClear
      }
      PathData {
        Lat
        Lon
        Elev
        isMine
        isObs
        isClear
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateSearch = /* GraphQL */ `
  mutation UpdateSearch(
    $input: UpdateSearchInput!
    $condition: ModelSearchConditionInput
  ) {
    updateSearch(input: $input, condition: $condition) {
      id
      RobotID
      UserID
      name
      description
      searchLat
      searchLon
      startLot
      startLon
      LocationData {
        Lat
        Lon
        Elev
        isMine
        isObs
        isClear
      }
      PathData {
        Lat
        Lon
        Elev
        isMine
        isObs
        isClear
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteSearch = /* GraphQL */ `
  mutation DeleteSearch(
    $input: DeleteSearchInput!
    $condition: ModelSearchConditionInput
  ) {
    deleteSearch(input: $input, condition: $condition) {
      id
      RobotID
      UserID
      name
      description
      searchLat
      searchLon
      startLot
      startLon
      LocationData {
        Lat
        Lon
        Elev
        isMine
        isObs
        isClear
      }
      PathData {
        Lat
        Lon
        Elev
        isMine
        isObs
        isClear
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createRobot = /* GraphQL */ `
  mutation CreateRobot(
    $input: CreateRobotInput!
    $condition: ModelRobotConditionInput
  ) {
    createRobot(input: $input, condition: $condition) {
      id
      status
      createdAt
      updatedAt
    }
  }
`;
export const updateRobot = /* GraphQL */ `
  mutation UpdateRobot(
    $input: UpdateRobotInput!
    $condition: ModelRobotConditionInput
  ) {
    updateRobot(input: $input, condition: $condition) {
      id
      status
      createdAt
      updatedAt
    }
  }
`;
export const deleteRobot = /* GraphQL */ `
  mutation DeleteRobot(
    $input: DeleteRobotInput!
    $condition: ModelRobotConditionInput
  ) {
    deleteRobot(input: $input, condition: $condition) {
      id
      status
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      GroupID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      GroupID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      GroupID
      createdAt
      updatedAt
      owner
    }
  }
`;
