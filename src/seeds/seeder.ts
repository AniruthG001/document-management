import { AppDataSource } from '../data-source';
import { Role } from '../role/role.entity';
import * as role from './roleData.json';

async function seed() {
  // Initialize your data source
  const dataSource = await AppDataSource.initialize();

  // Map through the roles data and create Role entities
  const roles = role.data.map((roleData) => {
    const role = new Role();
    role.name = roleData.name;
    role.isActive = roleData.isActive;
    return role;
  });

  // Save all the roles to the database in one batch
  await dataSource.manager.save(roles);

  console.log('Seed data inserted successfully!');
  await dataSource.destroy();
}

seed().catch((error) => {
  console.error('Error seeding data:', error);
});
