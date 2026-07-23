const cds = require('@sap/cds');

class HelloService extends cds.ApplicationService {
    sayHello(name) { return "Hello Good morning class " + name; }
}

module.exports = HelloService;