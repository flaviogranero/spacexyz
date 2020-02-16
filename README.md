# SpaceXYZ

A Next.JS sample app consuming [SpaceX-API](https://github.com/r-spacex/SpaceX-API) for learning purposes.

The application was initially generated with `create-next-app` and [With RBX and Bulma Pro Example](https://github.com/zeit/next.js/tree/canary/examples/with-rbx-bulma-pro).

- `/upcoming` route fetches all data in client side
- `/past` route fetches data in server side, allowing Server-Side Rendering
- `/launch/[id]` route is a Dynamic ROute example to show details about any launch given a `flight_number`

## Development Mode

Inside the project folder run:

```bash
yarn install
yarn dev
```

## Deploy your own

Deploy your own version using [ZEIT Now](https://zeit.co/now):

[![Deploy with ZEIT Now](https://zeit.co/button)](https://zeit.co/new/project?template=https://github.com/flaviogranero/spacexyz)
