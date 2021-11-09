# Potluck Back-end (Express.js)
 
## Available Scripts

In the project directory, you can run:

### `npm install` - install dependencies

Installs all the dependencies listed in the `package.json` configuration file.
This is necessary before running the app, since the 3rd-party dependency code is excluded from version control by the `.gitignore` git settings file.

### `npm run dev` - start the server locally

Description of `npm run dev` here

---

## Dependencies
Available in `package.json`

---

## Server API End-Points

This server code sets up routes for several API end-points - URLs to which a client can make requests. Except where indicated, the server accepts `GET` requests to these routes.

The example routes include:

- `/restaurants` - a route that serves all restaurant data queried from the mockaroo API, available as an array of JSONs
- `/users` - a route that servers all user data queried from the mockaroo API, available as an array of JSONs
- `/login/:email/:password` - a route that authenticates the login information and responds with a true or false value to indicate authentication success or failure
- `/search` - a route that serves all feed posts data queried from the mockaroo API, available as an array of JSONs

