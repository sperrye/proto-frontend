export const GET_PROJECT_CARDS = 'GET_PROJECT_CARDS'
export const ADD_PROJECT_CARD = 'ADD_PROJECT_CARD'

export function addProjectCard(newCard){
  console.log(newCard, "newCard in action");
  return {
    type: ADD_PROJECT_CARD,
    payload: newCard
  }
}

export function getProjectCards(){

  const tempProjectCards = [
    { _id: 1,
      name: 'A cool card',
      project_id: 1,
      quantity: 3,
      properties: [
        { field_id: 'title', content: 'Mighty JSON' },
        { name: 'Cost', field_id: 'B', content: '2 :coin:' }
      ]
    },
    { _id: 2,
      name: 'Another awesome card',
      project_id: 1,
      quantity: 3,
      properties: [
        { field_id: 'title', content: 'Curly Boys' },
        { name: 'Cost', field_id: 'B', content: '5 :coin:' }
      ]
    }
  ]

  return {
    type: GET_PROJECT_CARDS,
    payload: tempProjectCards
  }
}
