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
    }
  }
`;
