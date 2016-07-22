'use strict'

const cdriver = require('cassandra-driver')

class Cassandra {
    constructor(clientOptions) {
        this._client = new cdriver.Client(clientOptions)
    }
    
    execute(query, params, queryOptions) {
        let _self = this
        params = params || {}
        queryOptions = queryOptions || {}
        return new Promise((resolve, reject) => {
            _self._client.execute(query, params, queryOptions, (err, results) => {
                if (err) return reject(err)
                if (results) return resolve(results)
            })
        })
    }

    static policies() { return cdriver.policies }
}

module.exports = Cassandra
