'use strict'

const cdriver = require('cassandra-driver')

class Cassandra {
    constructor(clientOptions) {
        this.client = new cdriver.Client(clientOptions)        
    }

    execute(query, params, queryOptions) {
        return new Promise(function (resolve, reject) {
            this.client.query(query, params, queryOptions, (err, results) => {
                if (err) return reject(err)
                if (results) return resolve(results)
            })
        })
    }
}

module.exports = Cassandra
