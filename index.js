/**
 * @typedef {Object} Result
 * @property {Number} Status HTTP Status Code
 * @property {Object} Result Data from Server
 */

const axios = require('axios');


/**
 * @version 1.0
 * @author Tom Sacher
 * @license MIT
 */
class DB {

    /**
     *
     * @param {String} bearer - The Bearer Token for the API
     * @param {Boolean} sandbox - If true, the module will use http instead of https
     */
    constructor(bearer, sandbox) {
        this.axios = axios.create({
            baseURL: `${sandbox ? 'http' : 'https'}://api.deutschebahn.com/fahrplan-plus/v1`,
            headers: {
                Authorization: 'Bearer ' + bearer
            }
        })
    }

    /**
     * Get information about locations matching the given name or name fragment
     * @param {String} name - Name or name fragment of a location
     * @returns {Result} Result or Error
     */
    async getLocation(name) {
        try {
            const result = await this.axios(`/location/${name}`);
            return {
                status: result.status,
                result: result.data
            }
        } catch (e) {
            return {
                status: e.request.status,
            };
        }
    }

    /**
     * Get arrival board at a given location at a given daten and time.
     * @param {String} id - Id of location. Use attribute 'id' from the result of 'location'
     * @param {String} date - Date and time in ISO-8601 format, yyyy-mm-ddThh:mm:ss, example: 2017-04-01 or 2017-04-01T10:30
     * @returns {Result} Result or Error
     */
    async getArrivalBoard(id, date) {
        try {
            const result = await this.axios(`/arrivalBoard/${id}?date=${date}`)
            return {
                status: result.status,
                result: result.data
            }
        } catch (e) {
            return {
                status: e.request.status,
            };
        }
    }

    /**
     * Get departure board at a given location at a given daten and time.
     * @param {String} id - Id of location. Use attribute 'id' from the result of 'location'
     * @param {String} date - Date and time in ISO-8601 format, yyyy-mm-ddThh:mm:ss, example: 2017-04-01 or 2017-04-01T10:30
     * @returns {Result} Result or Error
     */
    async getDepartureBoard(id, date) {
        try {
            const result = await this.axios(`/departureBoard/${id}?date=${date}`);
            return {
                status: result.status,
                result: result.data
            }
        } catch (e) {
            return {
                status: e.request.status,
            };
        }
    }

    /**
     * Retrieve details of a journey. The id of journey should come from an arrival board or a departure board.
     * @param {String} id - Id of a journey. Use attribute 'detailsId' from the result of 'arrivalBoard' or 'departureBoard'
     * @returns {Result} Result or Error
     */
    async getJourneyDetails(id) {
        try {
            const result = await this.axios(`/journeyDetails/${id}`);
            return {
                status: result.status,
                result: result.data
            }
        } catch (e) {
            return {
                status: e.request.status,
            };
        }
    }
}

module.exports = DB;