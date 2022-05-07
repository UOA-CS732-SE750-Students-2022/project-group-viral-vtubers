// Read here for more:
// https://onexlab-io.medium.com/docker-mongodb-multiple-databases-62a685c4352a
print('Start #################################################################');

db = db.getSiblingDB('virtual-vtubers');
db.createUser(
  {
    user: 'admin',
    pwd: 'password',
    roles: [{ role: 'readWrite', db: 'virtual-vtubers' }],
  },
);
db.createCollection('users');

db = db.getSiblingDB('virtual-vtubers-test');
db.createUser(
  {
    user: 'admin',
    pwd: 'password',
    roles: [{ role: 'readWrite', db: 'virtual-vtubers-test' }],
  },
);
db.createCollection('users');

print('END #################################################################');