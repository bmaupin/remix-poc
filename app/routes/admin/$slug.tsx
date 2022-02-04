import {
  useActionData,
  useLoaderData,
  useTransition,
  Form,
  LoaderFunction,
  useLocation,
} from 'remix';
import invariant from 'tiny-invariant';

import { action as newPostAction } from './new';
import { getPost } from '~/post';

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, 'expected params.slug');
  return getPost(params.slug);
};

export const action = newPostAction;

export default function EditPost() {
  const errors = useActionData();
  const location = useLocation();
  const post = useLoaderData();
  const transition = useTransition();

  console.log('post=', post);

  return (
    <Form key={location.key} method="post">
      <p>
        <label>
          Post Title: {errors?.title ? <em>Title is required</em> : null}
          <input type="text" name="title" defaultValue={post?.title} />
        </label>
      </p>
      <p>
        <label>
          Post Slug: {errors?.slug ? <em>Slug is required</em> : null}
          <input type="text" name="slug" defaultValue={post?.slug} />
        </label>
      </p>
      <p>
        <label htmlFor="markdown">Markdown:</label>{' '}
        {errors?.markdown ? <em>Markdown is required</em> : null}
        <br />
        <textarea rows={20} name="markdown" defaultValue={post?.markdown} />
      </p>
      <p>
        <button type="submit">
          {transition.submission ? 'Updating...' : 'Update Post'}
        </button>
      </p>
    </Form>
  );
}
