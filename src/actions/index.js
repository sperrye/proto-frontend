export const GET_PROJECT_CARDS = 'GET_PROJECT_CARDS'

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
