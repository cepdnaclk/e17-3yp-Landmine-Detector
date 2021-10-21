/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getData = /* GraphQL */ `
  query GetData($id: ID!) {
    getData(id: $id) {
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
export const listData = /* GraphQL */ `
  query ListData(
    $filter: ModelDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listData(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getDataSet = /* GraphQL */ `
  query GetDataSet($id: ID!) {
    getDataSet(id: $id) {
      id
      Set {
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
    }
  }
`;
export const listDataSets = /* GraphQL */ `
  query ListDataSets(
    $filter: ModelDataSetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDataSets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Set {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSearch = /* GraphQL */ `
  query GetSearch($id: ID!) {
    getSearch(id: $id) {
      id
      RobotID {
        id
        status
        createdAt
        updatedAt
      }
      UserID {
        id
        username
        GroupID
        createdAt
        updatedAt
        owner
      }
      name
      description
      searchLat
      searchLon
      startLot
      startLon
      LocationData {
        id
        Set {
          nextToken
        }
        createdAt
        updatedAt
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
        RobotID {
          id
          status
          createdAt
          updatedAt
        }
        UserID {
          id
          username
          GroupID
          createdAt
          updatedAt
          owner
        }
        name
        description
        searchLat
        searchLon
        startLot
        startLon
        LocationData {
          id
          createdAt
          updatedAt
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
