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
  photo:      string,
  following:  array of candidate ID,
};

const company = {
  id:         string | number,
  name:       string,
  photo:      string,
  openJobAds: array of jobAd IDs,
};

const jobAd = {
  id:                 string | number,
  title:              string,
  description:        string,  // Optional
  forCompany:         company ID,
  requiredProfession: 'frontend' | 'backend' | 'devops' | 'ux' | 'po' | 'tester',
  remainingVacancies:  number,
};
```

Build your GraphQL schema at `schema.graphql` file!

You can test it with:
```sh
$ npm install
$ npm run lint:graphql
```

Reference:
- https://graphql.org/learn/schema/

Solution on branch `solution/1`.


## Hands-on 2/3: My first Resolver

Now, implement some basic resolvers `resolvers/` folder.

You can test it with:
```sh
$ npm start               # http://localhost:3000/graphql
$ npm run test:graphql
```

Reference:
- https://graphql.org/learn/execution/
- https://graphql.org/graphql-js/basic-types/

Solution on branch `solution/2`.


## Hands-on 3/3: Passing parameters to Resolvers

Implement the new resolvers at `resolvers/` folder.  
More tests were added, so feel free to run the same scripts :)

Reference:
- https://graphql.org/graphql-js/passing-arguments/
- https://graphql.org/graphql-js/object-types/

Solution on branch `solution/3`.
