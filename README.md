<h1 align="center">
  <img src="https://github.com/UOA-CS732-SE750-Students-2022/project-group-viral-vtubers/blob/main/viral-vtubers-frontend/src/assets/logo.svg" alt="Viral Vtubers" height="200px"></a>
  <br>
  Viral Vtubers
  <br>
</h1>
<h4 align="center">Group project for SOFTENG 750</h4>
<p align="center">
<br>

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
- Java JDK 17+


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
    storageBucket: 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
    messagingSenderId: 'XXXXXXXXXX',
    appId: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  },
```
6. You will also need to manually change some of the values within `/viral-vtubers-backend/src/main/resources/application.conf`, once you have created your own firebase project, all you need to do is replace `jwt.issuer` with your project id subsituted into the value `https://securetoken.google.com/{YOUR PROJECT ID}` and `gcp.bucket` with `{YOUR_PROJECT_ID}.appspot.com`, examples are shown in the following screenshot
  ![image](https://user-images.githubusercontent.com/66896513/168470984-c9bbe339-d667-4d92-8805-df482c417d47.png)


#### Frontend

1. Go into the frontend directory in a terminal `cd ./viral-vtubers-frontend` 
2. Run `yarn install` to get all the project dependencies
3. Run `yarn run` to run through the steps of setting up all the needed stages for the frontend
4. Run `ng serve` to run a development server to host the frontend
4. Visit `http://localhost:4200/` to visit the frontend site

#### Backend

1. Go into the backend directory in a terminal `cd ./viral-vtubers-backend`
2. Run `mvn install` to install all of the backend dependencies
3. Once it has finished installing, run `mvn package` to generate a jar
4. Now we can start up the docker image with the MongoDB database, run `docker-compose up` inside `/viral-vtubers-backend/`
5. Run either `java -jar viral-vtubers-backend-0.0.1-jar-with-dependencies.jar` (in target directory) or `mvn exec:java`(in backend directory)
6. Alternately for the easiest way to run it, is to load the project in intellij, and setup a config for running the main application, this requires having a java runtime environment of at least jdk 11, and then it can just be started from in the ide
  
### Data population

I would strongly recommend that you populate data into the database, this can easily be done, by opening the project in intellij idea, and navigating to `viral-vtubers-backend/src/test/kotlin/com.viralvtubers/database.mongo/population/DatabasePopulator.kt` (as shown in the screenshot), if you run this class you will populate the database with data, that makes the application much easier to navigate and see the functionality

![image](https://user-images.githubusercontent.com/66896513/168471490-ccc99507-436b-4554-b990-a7c4acd7c55b.png)


### Served Content

- Frontend: [localhost:4200/](http://localhost:4200/)
- GraphQL Schema (Backend): [localhost:8080/graphql](http://localhost:8080/graphql)

### Testing
- To run all the frontend unit tests run `yarn test` in the frontend directory
- To run all the backend unit tests `mvn test` in the backend directory

### Troubleshooting
