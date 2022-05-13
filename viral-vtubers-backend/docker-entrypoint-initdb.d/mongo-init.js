// Read here for more:
// https://onexlab-io.medium.com/docker-mongodb-multiple-databases-62a685c4352a
print('Start #################################################################');

db = db.getSiblingDB('viral-vtubers');
db.createUser(
    {
        user: 'admin',
        pwd: 'password',
        roles: [{role: 'readWrite', db: 'viral-vtubers'}],
    },
);
db.createCollection('user');

db = db.getSiblingDB('viral-vtubers-test');
db.createUser(
    {
        user: 'admin',
        pwd: 'password',
        roles: [{role: 'readWrite', db: 'viral-vtubers-test'}],
    },
);
db.createCollection('user');

print('END #################################################################');
