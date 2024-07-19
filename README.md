# 🚀 Project Setup

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```bash
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```bash
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```bash
npm run build
# or
yarn build
```

## 🔐 Admin Access

Login into Strapi with admin access:

```bash
npm run develop
# or
yarn develop
```

Then go to the Content Manager and in Single Types, add the following:

### Complaint Stats

```json
[
  ["Year", "Pending", "Resolved"],
  ["2004", 100, 100],
  ["2005", 170, 60],
  ["2006", 60, 120],
  ["2007", 130, 40]
]
```

### Room Info

```json
{
  "Room": 101,
  "Wing": "A",
  "Floor": 1
}
```

### Room Status Graph Data

```json
[
  ["Status", "Number of Rooms"],
  ["Empty", 11],
  ["Partial-filled", 5],
  ["Filled", 5],
  ["Not-available", 2]
]
```

In the Collection Types section, for `menuItems`, add a link for a start.

## 🔒 User Roles

In the Strapi dashboard, go to **Settings** then to **USERS & PERMISSIONS PLUGIN** then to **ROLES**.

### Admin Role

1. Go to the **Roles** section.
2. Add an **Admin** role.
3. Give all the access to all the resources that are necessary.

### Student Role

1. Create a **Student** role.
2. Give this role all relevant access.

## ENV setup

### Env

```
HOST=0.0.0.0
PORT=1337
APP_KEYS=TuMeYLohsvpUN/pB1w+zRA==,vDcanRpTLIbo/QK7qb/8nQ==,3bJdbdPrtB+1Nc17jyiyzQ==,wDKqkJ+BLgiq4wkd/AMnBA==
API_TOKEN_SALT=9uhm6m48v57Ld56EJrecPg==
ADMIN_JWT_SECRET=QcE/jZ4IpFVVuMAkyNkAPQ==
TRANSFER_TOKEN_SALT=CzFgAk37b25l9+816OkyMg==
```

### Database ENV

```
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db
JWT_SECRET=is9g6KsT5WlV4qOiJYw3fg==
```

# Developer message

Will work on the static data for graph, staff and room as some functionality is not complete.

If you do want to contribute then feel free. Here is the frontend link:

**Frontend Repository**: [Frontend Project](https://github.com/krishnaagarwal1506/HostelHubProject)
