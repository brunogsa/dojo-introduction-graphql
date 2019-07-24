# Dojo: Introduction to GraphQL

This repository contains some GraphQL code on both Back and Front-end.  
[Presentation Link](https://docs.google.com/presentation/d/1WWR-qqHBP7BG0Ayw0qsCrlBxEELzQ-T9yhizL9baWzs/edit?usp=sharing).


## Pre-reqs

- npm
- node

```sh
# My current environment

$ npm -v
6.4.1

$ node -v
v10.14.1
```


## Hands-on 1/3: My first GraphQL Schema

This is your data:
```js
const candidate = {
  id:         string | number,
  name:       string,
  email:      string,
  profession: 'frontend' | 'backend' | 'devops' | 'ux' | 'po' | 'tester',
};

const company = {
  id:         string | number,
  name:       string,
  openJobAds: array of jobAd IDs,
};

const jobAd = {
  id:                 string | number,
  title:              string,
  description:        string,
  requiredProfession: 'frontend' | 'backend' | 'devops' | 'ux' | 'po' | 'tester',
  remainingVacancies:  number,
};
```

Build your GraphQL schema at `backend/api.graphql`!

You can test it with:
```sh
$ cd backend/
$ npm install
$ npm run lint:graphql
```

Reference: https://graphql.org/learn/schema/  
Solution on branch `solution/schema`.


## Hands-on 2/3: Plugging GraphQL into your Back-end

Now, implement your resolvers at `backend/resolvers/`!

You can test it with:
```sh
$ cd backend/
$ npm install
$ npm run test:graphql
```

Reference: ?  
Solution on branch `solution/backend`.


## Hands-on 3/3: GraphiQL and Plugging GraphQL into your Front-end

First, let's explore your GraphQL API on the server:
```sh
# Up your API
$ cd backend/
$ npm install
$ npm start

# Starts GraphiQL, an amazing tool
$ cd frontend/
$ npm install
$ npm run graphiql  # Now try some GraphQL queries at localhost:6666
```

Now, starts your Front-end:
```sh
$ cd frontend/
$ npm install
$ npm start  # Go to localhost:8080 to see the available candidate profiles!
```

No data, right? :B

Go and implement your GraphQL query at `frontend/services/candidate-profiles.js`!  
Test if it worked reloading your app!

Reference: ?  
Solution on branch `solution/frontend`.
