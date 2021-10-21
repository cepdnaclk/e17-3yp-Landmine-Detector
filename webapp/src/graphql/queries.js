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
export const getOrg = /* GraphQL */ `
  query GetOrg($id: ID!) {
    getOrg(id: $id) {
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
export const listOrgs = /* GraphQL */ `
  query ListOrgs(
    $filter: ModelOrgFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrgs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        fleet {
          nextToken
        }
        team {
          nextToken
        }
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
        createdAt
        updatedAt
        owner
      }
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
          createdAt
          updatedAt
          owner
        }
        name
        description
        searchLat
        searchLon
        startLat
        startLon
        LocationData {
          nextToken
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
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
