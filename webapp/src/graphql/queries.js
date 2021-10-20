/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSearch = /* GraphQL */ `
  query GetSearch($id: ID!) {
    getSearch(id: $id) {
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
export const listSearches = /* GraphQL */ `
  query ListSearches(
    $filter: ModelSearchFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSearches(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getRobot = /* GraphQL */ `
  query GetRobot($id: ID!) {
    getRobot(id: $id) {
      id
      status
      createdAt
      updatedAt
    }
  }
`;
export const listRobots = /* GraphQL */ `
  query ListRobots(
    $filter: ModelRobotFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRobots(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      GroupID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        GroupID
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
