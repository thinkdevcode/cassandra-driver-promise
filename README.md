#### cassandra-driver-promise

A library to wrap around the cassandra driver to provide a promise based API. Also, can be used by generator functions.

###### Example

    let Cassandra = require('cassandra-driver-promise'),
        client = new Cassandra({ contactPoints: ['localhost'], keyspace: 'TestKS' })

    function *testExec() {
        yield client.execute('SELECT * FROM TestCF WHERE name = ?', ['Eugene'])
    }

###### Example with custom AddresssResolution Policy
The documentation was very poor for this feature of the cassandra driver (in every language) so i'm documenting it here in case it helps anyone.

    let Cassandra = require('cassandra-driver-promise'),
        addressResolution = Cassandra.policies().addressResolution

    // translates IP's provided by cassandra cluster to reachable endpoints by service
    addressResolution.AddressTranslator.prototype.translate = function (address, port, cb) {
        let addressMap = {
            '10.1.98.19': '54.66.23.78',
            '10.1.98.20': '54.66.24.70',
            '10.1.98.21': '54.66.25.81'
        }
        cb(`${addressMap[address]}:${port}`)
    }

    let client = new Cassandra({
        contactPoints: ['54.66.23.78', '54.66.24.70', '54.66.25.81'],
        policies: {
            addressResolution = new addressResolution.AddressTranslator()
        }
    })

**Only Execute is implemented at the moment. I will add more as I need for my projects but I am gladly accepting PR's to finish the library.** 
