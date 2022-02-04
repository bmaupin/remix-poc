Just playing with the [Remix](https://remix.run/) tutorial (https://remix.run/docs/en/v1/tutorials/blog) ...

#### Notes

- Frontend and backend in one app (not just one repo)
  - Seamlessly combines react and the backend; no need to expicility "call" the backend from react (e.g. using an HTTP request)
  - I think this means form validation could also be in just one place, instead of having to have it duplicated in the frontend and the backend
- TypeScript support out of the box :)
- `console.log` logs to browser and node!
- Works without JS in the browser!!!
  - When JS is disabled, it seems to fall back to server-side rendering. Everything still works and the page size is even smaller (~5 KB compressed vs ~69 KB)
- react-router is built in
- It's just a normal Node.js app so deployment is easy
- Like any framework, there's a bit of a learning curve as you learn new concepts (nested routes, outlet, etc.)

#### Questions

- Could it be used to create just an API? Or maybe that would be overkill ...
