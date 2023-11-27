import React from 'react';
import { getPosts, getPostDetails } from '../../services';

import {
  PostWidget,
  PostDetail,
  Categories,
  Author,
  Comments,
  CommentsForm,
} from '../../components';

const PostDetails = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          <PostDetail />
          <Author />
          <CommentsForm />
          <Comments />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
