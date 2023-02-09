import { apiSlice } from '../apiSlice';
import { UserPost, GenericPost } from './types';

export const postsService = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOwnPosts: builder.query<{ posts: UserPost[] }, void>({
      query() {
        return {
          url: '/posts'
        };
      }
    }),
    getAllPosts: builder.query<{ posts: GenericPost[] }, void>({
      query() {
        return {
          url: '/posts/all'
        };
      }
    }),
    getPostsByUserId: builder.mutation<{ posts: UserPost[] }, number>({
      query(id) {
        return {
          url: `/posts/user${id}`
        };
      }
    }),
    addPost: builder.mutation<UserPost, FormData>({
      query(data) {
        return {
          url: '/posts',
          method: 'POST',
          body: data
        };
      }
    }),
    deletePostById: builder.mutation<void, number>({
      query(id) {
        return {
          url: `/posts/${id}`,
          method: 'DELETE'
        };
      }
    })
  })
});

export const {
  useAddPostMutation,
  useDeletePostByIdMutation,
  useGetAllPostsQuery,
  useGetOwnPostsQuery,
  useGetPostsByUserIdMutation
} = postsService;