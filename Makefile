backend-install:
	cd viral-vtubers-backend && mvn install

backend-clean:
	cd viral-vtubers-backend && mvn clean

backend-start:
	cd viral-vtubers-backend && mvn exec:java

backend-db-up:
	cd viral-vtubers-backend && docker compose up

backend-db-down:
	cd viral-vtubers-backend && docker compose down

backend-populate:
	cd viral-vtubers-backend && mvn -Dmain.class=com.viralvtubers.database.mongo.DatabasePopulatorKt exec:java

backend-test:
	cd viral-vtubers-backend && mvn verify

backend-build:
	cd viral-vtubers-backend && mvn package

frontend-install:
	cd viral-vtubers-frontend && yarn

frontend-start:
	cd viral-vtubers-frontend && yarn start

frontend-test:
	cd viral-vtubers-frontend && yarn test

frontend-build:
	cd viral-vtubers-frontend && yarn build