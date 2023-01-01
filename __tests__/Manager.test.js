const Manager = require('../lib/Manager.js')
const manager = new Manager('Cornelius', 4, 'manager@work.com', 100)

describe('Manager tests', () => {
    test("Role to be Manager", () => {
      expect(manager.getRole()).toBe(Manager);
    });
    test('Name to be Cornelius', () => {
        expect(manager.getName()).toBe("Cornelius");
    })
    test('Id to be 4', () => {
        expect(manager.getId()).toBe(4);
    })
    test("Email to be manager@work.com", () => {
      expect(manager.getEmail()).toBe("manager@work.com");
    });
})