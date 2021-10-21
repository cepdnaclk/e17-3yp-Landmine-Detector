module.exports = {
	mutation: `mutation updateRobot($input: UpdateRobotInput!) {
	  updateRobot(input: $input) {
		id
		status
	  }
	}
	`
}
//module.exports = {
//	mutation: `mutation createRobot($input: CreateRobotInput!) {
//	  createRobot(input: $input) {
//		id
//		status
//	  }
//	}
//	`
//}
