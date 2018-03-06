export const GET_PROJECT_CARDS = 'GET_PROJECT_CARDS'
export const ADD_PROJECT_CARD = 'ADD_PROJECT_CARD'

const baseURL = 'http://localhost:3000'

export function addProjectCard(newCard){

  const mutation = `mutation card($input:CardInput){
    createCard(input:$input){
      _id
      projectId
      quantity
      properties{
        name
        fieldId
        content
      }
    }
  }`

  return async (dispatch) => {
    const data = await fetch(`http://localhost:3000/graphql`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: mutation,
          variables: { input: newCard }
      })
    })
    .then(res => res.json())

    dispatch({
      type: ADD_PROJECT_CARD,
      payload: data.data.createCard
    })
  }

}

export function getProjectCards(){

  const query = `query projectCards($projectId:ID){
  getProjectCards(projectId:$projectId){
    _id
    projectId
    properties{
      name
      fieldId
      content
    }
    }
  }`

  return async (dispatch) => {
    const data = await fetch(`http://localhost:3000/graphql`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: query,
          variables: { projectId: '5a861f6ef36d2873fccf8312' }
      })
    })
    .then(res => res.json())

    console.log(data.data.getProjectCards, "get project cards")
    dispatch({
      type: GET_PROJECT_CARDS,
      payload: data.data.getProjectCards
    })
  }

}
