import { apiSlice } from '../apiSlice';
import { FriendProfile, FriendStatus, FriendRequest, GenericResponse } from './types';

export const friendsService = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFriends: builder.query<{ friends: FriendProfile[] }, FriendStatus>({
      query(type) {
        return {
          url: '/friends',
          params: { type }
        };
      },
      providesTags: ['Friends']
    }),
    friendRequest: builder.mutation<GenericResponse, FriendRequest>({
      query(body) {
        return {
          url: '/friends',
          method: 'POST',
          body
        };
      },
      invalidatesTags: ['Friends']
    })
  })
});

export const { useGetFriendsQuery, useFriendRequestMutation } = friendsService;
