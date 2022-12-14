import { ServerResponse, IUser, IRepo } from './../../models/models';
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const githubApi = createApi({
  reducerPath: 'github/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/',
  }),
  endpoints: build => ({
    searchUsers: build.query<IUser[], string>({query: (search: string) => ({url: 'search/users', params: {q: search}}),
      transformResponse: (response: ServerResponse<IUser>) => response.items
  }),
  getUserRepos: build.query<IRepo[], string>({
    query: (username: string) => ({
      url: `users/${username}/repos`
    })
  }),
  createUser: build.mutation<any, void>({
    query: () => ''
  })
  }),
})

export const {useSearchUsersQuery, useLazyGetUserReposQuery, useCreateUserMutation} = githubApi