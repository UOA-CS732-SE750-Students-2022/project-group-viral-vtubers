# Viral Vtubers

## INSERT LOGO

## Project Structure

| Directory     |   Description |
|---------------|---------------|
| [viral-vtubers-backend](https://github.com/UOA-CS732-SE750-Students-2022/project-group-viral-vtubers/tree/main/viral-vtubers-backend) | Contains all the backend code |
| [viral-vtubers-frontend](https://github.com/UOA-CS732-SE750-Students-2022/project-group-viral-vtubers/tree/main/viral-vtubers-frontend) | Contains all the frontend code|

## Project Setup

### Prerequisites
- [Yarn 3](https://yarnpkg.com/getting-started/install)
- [Node.js](https://nodejs.org/en/) >=16.10
- [Maven](https://maven.apache.org/)
- [Firebase](https://firebase.google.com/) (used for authentication handling, you will need to create a Firebase project, from there you can create a service account and get a key)
- [Docker](https://www.docker.com/)
- Java JDK 11+


### (Optional) Prerequisites
- Visual Studio Code IDE, used for front-end development
  -   [Angular Language Service](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template)
  -   [Apollo GraphQL](https://marketplace.visualstudio.com/items?itemName=apollographql.vscode-apollo)
  -   [GraphQL](https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql)
  -   [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  -   [GraphQL for VSCode](https://marketplace.visualstudio.com/items?itemName=kumar-harsh.graphql-for-vscode)
- Intellij IDEA IDE, used for back-end development, and streamlining the running process



### Setup

1. Ensure all prerequisites have been installed
2. Start by cloning the github repository into a suitable location
3. Create a new firebase project, and get a [firebase api key from a service account](https://firebase.google.com/docs/auth/web/custom-auth)
4. Once you have got this key, save it as `firebase-service-account.json`, and place it in `/viral-vtubers-backend/src/main/resources/`
5. Also please visit the following environment config files at `/viral-vtubers-frontend/src/environments/`, there should be two files `environment.ts` and `environment.prod.ts` for both of these add the firebase config for the firebase project you have setup, and ensure the production value is true for the prod.ts, and false for the normal environment.ts 
```javascript 
export const environment = {
    production: false,
    firebaseConfig: {
    apiKey: 'XXXXXXXXXXXXXXXXXXXXXXXX',
    authDomain: 'XXXXXXXXX',
    projectId: 'XXXXXXXXXXX',
    storageBucket: 'XXXXXXXXXXXXXXXXXXXXXXXXXXX,
    messagingSenderId: 'XXXXXXXXXX',
    appId: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  },
```

#### Frontend

1. Go into the frontend directory in a terminal `cd ./viral-vtubers-frontend` 
2. Run `yarn install` to get all the project dependencies
3. Run `yarn run` to start the frontend

#### Backend

1. Go into the backend directory in a terminal `cd ./viral-vtubers-backend`
2. Run `mvn install` to install all of the backend dependencies
3. Once it has finished installing, run `mvn package` to generate a jar
4. Now we can start up the docker image with the MongoDB database, run `docker-compose up` inside `/viral-vtubers-backend/`
5. Run either `java -jar viral-vtubers-backend-0.0.1-jar-with-dependencies.jar` or `mvn exec java`

### Served Content

### Testing

### Troubleshooting
