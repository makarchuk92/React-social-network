import { actions, follow,  unfollow} from './usersReducer';
import { userAPI } from '../api/user-api';
import { APIResponseType, ResultCodesEnum } from '../api/api';

jest.mock('../api/user-api')

const userAPIMock = userAPI as jest.Mocked<typeof userAPI>

const dispatchMock = jest.fn()
const getStateMock = jest.fn()

beforeEach( () => {
  dispatchMock.mockClear()
  getStateMock.mockClear()
  userAPIMock.follow.mockClear()
  userAPIMock.unfollow.mockClear()
})

const result: APIResponseType = {
  data: {},
  messages: [],
  resultCode: ResultCodesEnum.Success
}

userAPIMock.follow.mockReturnValue(Promise.resolve(result))
userAPIMock.unfollow.mockReturnValue(Promise.resolve(result))

test('success follow thunk', async () => {
  const thunk = follow(1)
  await thunk(dispatchMock, getStateMock, {})

  expect(dispatchMock).toBeCalledTimes(3)
  expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFolowingProgress(true, 1))
  expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.followSuccess(1))
  expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleFolowingProgress(false, 1))

})

test('success unfollow thunk', async () => {
  const thunk = unfollow(1)
  await thunk(dispatchMock, getStateMock, {})

  expect(dispatchMock).toBeCalledTimes(3)
  expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFolowingProgress(true, 1))
  expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.unfollowSuccess(1))
  expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleFolowingProgress(false, 1))

})