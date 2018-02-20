export const GET_PROJECT_CARDS = 'GET_PROJECT_CARDS'
export const ADD_PROJECT_CARD = 'ADD_PROJECT_CARD'

export function addProjectCard(newCard){
  console.log("in action");
  return {
    type: ADD_PROJECT_CARD,
    payload: newCard
  }
}

export function getProjectCards(){

  const tempProjectCards = [
    { _id: 1,
      project_id: 1,
      quantity: 3,
      properties: [
        { name: "title", field_id: 'A', content: 'This is the card title' },
        { name: 'Cost', field_id: 'B', content: '2 :coin:' }
      ]
    },
    { _id: 2,
      project_id: 1,
      quantity: 5,
      properties: [
        { name: "title", field_id: 'A', content: 'Lalala' },
        { name: 'Cost', field_id: 'B', content: '4 :coin:' }
      ]
    }
  ]

  return {
    type: GET_PROJECT_CARDS,
    payload: tempProjectCards
  }
}
