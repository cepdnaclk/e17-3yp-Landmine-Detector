/* Amplify Params - DO NOT EDIT
	API_WEBAPPAPI_GRAPHQLAPIENDPOINTOUTPUT
	API_WEBAPPAPI_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */


const https = require('https');
const AWS = require("aws-sdk");
const urlParse = require("url").URL;
const appsyncUrl = process.env.API_WEBAPPAPI_GRAPHQLAPIENDPOINTOUTPUT;
const region = process.env.REGION;
const endpoint = new urlParse(appsyncUrl).hostname.toString();
const graphqlQuery = require('./query.js').mutation;
const apiKey = process.env.API_WEBAPPAPI_GRAPHQLAPIKEYOUTPUT;

exports.handler = async (event) => {
    const req = new AWS.HttpRequest(appsyncUrl, region);

    const item = {
        input: {
            id: event.id,
            status: event.data.status
        }
    };

    req.method = "POST";
    req.path = "/graphql";
    req.headers.host = endpoint;
    req.headers["Content-Type"] = "application/json";
    req.body = JSON.stringify({
        query: graphqlQuery,
        operationName: "updateRobot",
        variables: item
    });

    if (apiKey) {
        req.headers["x-api-key"] = apiKey;
    } else {
        const signer = new AWS.Signers.V4(req, "appsync", true);
        signer.addAuthorization(AWS.config.credentials, AWS.util.date.getDate());
    }

    const data = await new Promise((resolve, reject) => {
        const httpRequest = https.request({ ...req, host: endpoint }, (result) => {
            let data = "";

            result.on("data", (chunk) => {
                data += chunk;
            });

            result.on("end", () => {
                resolve(JSON.parse(data.toString()));
            });
        });

        httpRequest.write(req.body);
        httpRequest.end();
    });

    return {
        statusCode: 200,
        body: data
    };
};
