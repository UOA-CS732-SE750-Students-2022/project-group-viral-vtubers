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
- [GNU Make](https://www.gnu.org/software/make/) >= 4.0


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

1. Run `make frontend-install` to get all the project dependencies
2. Run `make frontend-start` to run a development server to host the frontend
3. Visit `http://localhost:4200/` to visit the frontend site

#### Backend

1. Run `make backend-install` to install all of the backend dependencies
2. Now we can start up the docker image with the MongoDB database, run `make backend-db-up`
3. Run either `java -jar viral-vtubers-backend-0.0.1-jar-with-dependencies.jar` (in target directory), `mvn exec:java`(in backend directory), or `make backend-start` (in the root directory)
4. Alternately for the easiest way to run it, is to load the project in intellij, and setup a config for running the main application, this requires having a java runtime environment of at least jdk 17, and then it can just be started from in the ide
  
### Data population

I would strongly recommend that you populate data into the database, this can easily be done, by running `make backend-populate`, if you run this class you will populate the database with data, that makes the application much easier to navigate and see the functionality


### Served Content

- Frontend: [localhost:4200/](http://localhost:4200/)
- GraphQL Schema (Backend): [localhost:8080/graphql](http://localhost:8080/graphql)

### Testing
- To run all the frontend unit tests run `make frontend-test` in the frontend directory
- To run all the backend unit tests `make backend-test` in the backend directory

### Troubleshooting

If you get an error that starts like the following for the backend, it means that the `firebase-service-account.json` is not in the correct location `viral-vtubers-backend/src/main/resources/`
```
java.lang.NullPointerException
        at com.google.common.base.Preconditions.checkNotNull(Preconditions.java:892)
        at com.google.api.client.util.Preconditions.checkNotNull(Preconditions.java:125)
        at com.google.auth.oauth2.GoogleCredentials.fromStream(GoogleCredentials.java:151)
        at com.google.auth.oauth2.GoogleCredentials.fromStream(GoogleCredentials.java:134)
        at com.viralvtubers.plugins.SecurityKt.configureSecurity(Security.kt:21)
        at com.viralvtubers.ApplicationKt.module(Application.kt:19)  
```

If the error is like the following, than you need to check and make sure the docker container with the database has started up correctly
```
MongoTimeout Timed out after 30000 ms while waiting for a server that matches WritableServerSelector. Client view of cluster state is {type=UNKNOWN, servers=[{address=localhost:27017, type=UNKNOWN, state=CONNECTING, exception={com.mongodb.MongoSocketOpenException: Exception opening socket}, caused by {java.net.ConnectException: Connection refused}}]
```
