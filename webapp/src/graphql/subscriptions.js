/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSearch = /* GraphQL */ `
  subscription OnCreateSearch($owner: String) {
    onCreateSearch(owner: $owner) {
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
export const onUpdateSearch = /* GraphQL */ `
  subscription OnUpdateSearch($owner: String) {
    onUpdateSearch(owner: $owner) {
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
export const onDeleteSearch = /* GraphQL */ `
  subscription OnDeleteSearch($owner: String) {
    onDeleteSearch(owner: $owner) {
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
export const onCreateRobot = /* GraphQL */ `
  subscription OnCreateRobot {
    onCreateRobot {
      id
      status
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateRobot = /* GraphQL */ `
  subscription OnUpdateRobot {
    onUpdateRobot {
      id
      status
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteRobot = /* GraphQL */ `
  subscription OnDeleteRobot {
    onDeleteRobot {
      id
      status
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
      id
      username
      GroupID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
      id
      username
      GroupID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
      id
      username
      GroupID
      createdAt
      updatedAt
      owner
    }
  }
`;
