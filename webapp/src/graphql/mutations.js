/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createData = /* GraphQL */ `
  mutation CreateData(
    $input: CreateDataInput!
    $condition: ModelDataConditionInput
  ) {
    createData(input: $input, condition: $condition) {
      id
      Lat
      Lon
      Elev
      isMine
      isObs
      isClear
      createdAt
      updatedAt
    }
  }
`;
export const updateData = /* GraphQL */ `
  mutation UpdateData(
    $input: UpdateDataInput!
    $condition: ModelDataConditionInput
  ) {
    updateData(input: $input, condition: $condition) {
      id
      Lat
      Lon
      Elev
      isMine
      isObs
      isClear
      createdAt
      updatedAt
    }
  }
`;
export const deleteData = /* GraphQL */ `
  mutation DeleteData(
    $input: DeleteDataInput!
    $condition: ModelDataConditionInput
  ) {
    deleteData(input: $input, condition: $condition) {
      id
      Lat
      Lon
      Elev
      isMine
      isObs
      isClear
      createdAt
      updatedAt
    }
  }
`;
export const createOrg = /* GraphQL */ `
  mutation CreateOrg(
    $input: CreateOrgInput!
    $condition: ModelOrgConditionInput
  ) {
    createOrg(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      fleet {
        items {
          id
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      team {
        items {
          id
          username
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const updateOrg = /* GraphQL */ `
  mutation UpdateOrg(
    $input: UpdateOrgInput!
    $condition: ModelOrgConditionInput
  ) {
    updateOrg(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      fleet {
        items {
          id
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      team {
        items {
          id
          username
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const deleteOrg = /* GraphQL */ `
  mutation DeleteOrg(
    $input: DeleteOrgInput!
    $condition: ModelOrgConditionInput
  ) {
    deleteOrg(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      fleet {
        items {
          id
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      team {
        items {
          id
          username
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
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
      startLat
      startLon
      LocationData {
        items {
          id
          Lat
          Lon
          Elev
          isMine
          isObs
          isClear
          createdAt
          updatedAt
        }
        nextToken
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
      startLat
      startLon
      LocationData {
        items {
          id
          Lat
          Lon
          Elev
          isMine
          isObs
          isClear
          createdAt
          updatedAt
        }
        nextToken
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
      startLat
      startLon
      LocationData {
        items {
          id
          Lat
          Lon
          Elev
          isMine
          isObs
          isClear
          createdAt
          updatedAt
        }
        nextToken
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
      createdAt
      updatedAt
      owner
    }
  }
`;
