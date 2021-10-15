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
      }
      nextToken
    }
  }
`;
