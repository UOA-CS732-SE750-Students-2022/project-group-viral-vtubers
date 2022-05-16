# syntax = docker/dockerfile:1.2

# Part 1: Build the app using Maven
FROM maven:3.8.5-openjdk-18


## download dependencies
ADD pom.xml /
RUN mvn verify clean
## build after dependencies are down so it wont redownload unless the POM changes
ADD . /

# Secrets
RUN --mount=type=secret,id=application_conf,dst=/etc/secrets/application.conf cp -rf /etc/secrets/application.conf /src/main/resources/application.conf
RUN --mount=type=secret,id=firebase-service-account_json,dst=/etc/secrets/firebase-service-account.json cp /etc/secrets/firebase-service-account.json /src/main/resources/firebase-service-account.json

RUN mvn package

# Part 2: use the JAR file used in the first part and copy it across ready to RUN
FROM openjdk:17-oracle
WORKDIR /root/
## COPY packaged JAR file and rename as app.jar 
## → this relies on your MAVEN package command building a jar 
## that matches *-jar-with-dependencies.jar with a single match
COPY --from=0 /target/*-jar-with-dependencies.jar app.jar

EXPOSE 8080:8080

ENTRYPOINT ["java","-jar","./app.jar"]
