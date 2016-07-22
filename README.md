##### cassandra-driver-promise

A library to wrap around the cassandra driver to provide a promise based API. Also, can be used by generator functions.

###### Example

    let Cassandra = require('cassandra-driver-promise'),
        client = new Cassandra({ contactPoints: ['localhost'], keyspace: 'TestKS' })

    function *testExec() {
        yield client.execute('SELECT * FROM TestCF WHERE name = ?', ['Eugene'])
    }

**Only Execute is implemented at the moment. I will add more as I need for my projects but I am gladly accepting PR's to finish the library.** 
