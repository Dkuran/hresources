import { InMemoryDbService } from 'angular-in-memory-web-api';

export class UsersMockService implements InMemoryDbService {
  createDb() {
    const user = [
      { id: 1, user: 'admin', pass: '1234', session: '' },
      { id: 2, user: 'user', pass: '4567', session: ''},
      { id: 3, user: 'test', pass: 'abcd', session: ''},
    ];

    const employee = [
      { id: 1, name: 'Andres', company: 'Todo1', age: '28', birthday: '1990-03-22', color: 'negro', project: []},
      { id: 2, name: 'Constanza', company: 'Juzgado', age: '21', birthday: '1990-03-22', color: 'negro', project: []},
      { id: 3, name: 'Carolina', company: 'MSP', age: '27', birthday: '1990-03-22', color: 'negro', project: []},
      { id: 4, name: 'Maria Jose', company: 'ESPE', age: '24', birthday: '1990-03-22', color: 'negro', project: []},
    ];

    const project = [
      { id: 1, name: 'Producto Base', teamSize: 0, client: 'Todo1' },
      { id: 2, name: 'Colte', teamSize: 4, client: 'Todo1' },
      { id: 3, name: 'Da Vivienda', teamSize: 2, client: 'Todo1' },
      { id: 4, name: 'Celulas', teamSize: 1, client: 'Todo1' },
    ];

    return {user, employee, project};
  }
}
