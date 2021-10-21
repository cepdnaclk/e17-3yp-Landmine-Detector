/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateData = /* GraphQL */ `
  subscription OnCreateData {
    onCreateData {
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
export const onUpdateData = /* GraphQL */ `
  subscription OnUpdateData {
    onUpdateData {
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
export const onDeleteData = /* GraphQL */ `
  subscription OnDeleteData {
    onDeleteData {
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
export const onCreateOrg = /* GraphQL */ `
  subscription OnCreateOrg {
    onCreateOrg {
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
export const onUpdateOrg = /* GraphQL */ `
  subscription OnUpdateOrg {
    onUpdateOrg {
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
export const onDeleteOrg = /* GraphQL */ `
  subscription OnDeleteOrg {
    onDeleteOrg {
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
      createdAt
      updatedAt
      owner
    }
  }
`;
