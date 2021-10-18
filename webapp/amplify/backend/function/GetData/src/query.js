module.exports = {
    mutation: `mutation UpdateSearch($input: UpdateSearchInput!) {
      UpdateSearch(input: $input) {
        id
        description
      }
    }
    `
}