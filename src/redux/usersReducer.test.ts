import usersReducer, { actions, inicialStateType } from './usersReducer';



let state: inicialStateType

beforeEach( () => {
  state = {
    users: [
      {id: 0, name: 'Andrew', status: 'status 1',  photos: {small: null, large: null}, followed: false},
      {id: 1, name: 'Alex', status: 'status 2',  photos: {small: null, large: null}, followed: false},
      {id: 2, name: 'Nastya', status: 'status 3',  photos: {small: null, large: null}, followed: false},
      {id: 3, name: 'Vlad', status: 'status 4',  photos: {small: null, large: null}, followed: true},
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
  }
})

test('follow success', () => {
  const newState = usersReducer(state, actions.followSuccess(0))
  
  expect(newState.users[0].followed).toBeTruthy()
  expect(newState.users[1].followed).toBeFalsy()
})

test('unFollow success', () => {
  const newState = usersReducer(state, actions.unfollowSuccess(3))
  
  expect(newState.users[2].followed).toBeFalsy()
  expect(newState.users[3].followed).toBeFalsy()
})