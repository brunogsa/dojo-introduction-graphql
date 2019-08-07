# Dojo: Introduction to GraphQL

This repository contains some GraphQL code that covers its usage on Back-End (plus GraphiQL).
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

Go to branch `develop/1`.

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

You may check `data-sources/` folder for more details about how is your data.

Your first step is to build your GraphQL schema at `schema.graphql` file!

Reference:
- https://graphql.org/learn/schema/

You can test it with:
```sh
$ npm install
$ npm run lint:graphql
```

Solution on branch `solution/1`.


## Hands-on 2/3: My first Resolver

Go to branch `develop/2`.

Resolvers are functions that tell GraphQL how to provide your data.  
- You need 1 resolver for each query
- You need 1 resolver for each field of a type you defined in your `schema.graphql`

Now, you want to enable 3 queries for your users:
- `candidates`
- `companies`
- `jobAds`

For that, implement those basic resolvers at `resolvers/` folder, using the imported functions
from your `services/` folder.

You can test your resolvers with:
```sh
$ npm start               # Manually at http://localhost:3000/graphql
$ npm run test:graphql    # Automatically
```

Reference:
- https://graphql.org/learn/execution/
- https://graphql.org/graphql-js/basic-types/

Solution on branch `solution/2`.


## Hands-on 3/3: Passing parameters to Resolvers

Go to branch `develop/3`.

Implement 3 new queries for your users:
- One that retrieves data from a `candidate`, either by `id` or `email`
- One that retrieves data from a `company`, given its `id`
- One that retrieves data from a `jobAd`, given its `id`

Again: check your `services/` to reuse you already existing code!  
More automated tests were added, so feel free to run the same scripts :)

Reference:
- https://graphql.org/graphql-js/passing-arguments/
- https://graphql.org/graphql-js/object-types/

Solution on branch `solution/3`.
