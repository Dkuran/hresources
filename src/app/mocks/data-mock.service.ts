import { InMemoryDbService } from 'angular-in-memory-web-api';

export class UsersMockService implements InMemoryDbService {
  createDb() {
    const user = [
      { id: 1, user: 'admin', pass: '1234', session: '' },
      { id: 2, user: 'user', pass: '4567', session: ''},
      { id: 3, user: 'test', pass: 'abcd', session: ''},
    ];

    const employee = [
      { id: 1, name: 'Andres', company: 'Todo1', age: '28', birthday: '03/02/1990', color: 'negro', project: []},
    ];

    const project = [
      { id: 1, name: 'Producto Base', teamSize: 0, client: 'Todo1' },
    ];

    return {user, employee, project};
  }
}