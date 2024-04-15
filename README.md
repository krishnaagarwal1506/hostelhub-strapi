# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

### `Env file`

HOST=0.0.0.0
PORT=1337
APP_KEYS=TuMeYLohsvpUN/pB1w+zRA==,vDcanRpTLIbo/QK7qb/8nQ==,3bJdbdPrtB+1Nc17jyiyzQ==,wDKqkJ+BLgiq4wkd/AMnBA==
API_TOKEN_SALT=9uhm6m48v57Ld56EJrecPg==
ADMIN_JWT_SECRET=QcE/jZ4IpFVVuMAkyNkAPQ==
TRANSFER_TOKEN_SALT=CzFgAk37b25l9+816OkyMg==

# Database

DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db
JWT_SECRET=is9g6KsT5WlV4qOiJYw3fg==

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project including [Strapi Cloud](https://cloud.strapi.io). Browse the [deployment section of the documentation](https://docs.strapi.io/dev-docs/deployment) to find the best solution for your use case.

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>

## ENVS

```
VITE_API_ENDPOINT=http://localhost:4000
VITE_GOOGLE_OAUTH2_CLIENT_ID=google-client-id
VITE_UNSPLASH_API_KEY=api_key
VITE_CURRENCY=USD
VITE_SOCKET_APP_KEY=app-key
VITE_SOCKET_HOST=192.168.2.123
VITE_SOCKET_PORT=6001
VITE_SOCKET_USE_TLS=false
VITE_SOCKET_CLUSTER=cluster-1
VITE_LIVEKIT_URL=wss://livekit.thedevelopercompany.com
```
