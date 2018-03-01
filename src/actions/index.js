export const GET_PROJECT_CARDS = 'GET_PROJECT_CARDS'
export const ADD_PROJECT_CARD = 'ADD_PROJECT_CARD'
export const SELECT_PROJECT_CARD = 'SELECT_PROJECT_CARD'
export const SELECT_ALL_CARDS = 'SELECT_ALL_CARDS'
export const UNSELECT_ALL_CARDS = 'UNSELECT_ALL_CARDS'

const baseURL = 'localhost:3000'

export function addProjectCard(newCard){
  //   const mutation = `mutation {
  //   createCard(input: {
  //   projectId:"5a861f6ef36d2873fccf8312"
  //   quantity:1
  //   properties:[
  //     {name:"title", fieldId:"1", content: "This card has a title"}
  //   ]
  //   }) {
  //       _id
  //         projectId
  //       quantity
  //       properties {
  //         name
  //         fieldId
  //         content
  //       }
  //     }
  //   }`
  //
  //   const data = await fetch(`${baseURL}/graphql`, {
  //     method: 'POST',
  //     body: JSON.stringify(mutation)
  //   })
  //
  //   dispatch({
  //     type: ADD_PROJECT_CARD,
  //     payload: newCard
  //   })
  // }
  
  return {
    type: ADD_PROJECT_CARD,
    payload: newCard
  }
}

export function selectCard(clickedCard){
  return {
    type: SELECT_PROJECT_CARD,
    payload: clickedCard
  }
}

export function selectAllCards(allCards){
  return {
    type: SELECT_ALL_CARDS,
    payload: allCards
  }
}

export function unselectAllCards(allCards){
  return {
    type: UNSELECT_ALL_CARDS,
    payload: allCards
  }
}

export function getProjectCards(){
// temporary card list until hooked to API
// * will have to ADD 'is_selected' bc won't be stored in DB
  const tempProjectCards = [
    { _id: 111,
      project_id: 1,
      quantity: 3,
      properties: [
        { name: "title", field_id: 'A', content: 'This is the card title' },
        { name: 'Cost', field_id: 'B', content: '2 :coin:' }
      ],
      is_selected: false
    },
    { _id: 222,
      project_id: 1,
      quantity: 5,
      properties: [
        { name: "title", field_id: 'A', content: 'Lalala' },
        { name: 'Cost', field_id: 'B', content: '4 :coin:' }
      ],
      is_selected: false
    }
  ]

  return {
    type: GET_PROJECT_CARDS,
    payload: tempProjectCards
  }
}
