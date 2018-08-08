## Classes

<dl>
<dt><a href="#DB">DB</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#Result">Result</a> : <code>Object</code></dt>
<dd></dd>
</dl>

<a name="DB"></a>

## DB
**Kind**: global class  
**Version**: 1.0  
**Author**: Tom Sacher  
**License**: MIT  

* [DB](#DB)
    * [new DB(bearer, sandbox)](#new_DB_new)
    * [.getLocation(name)](#DB+getLocation) ⇒ [<code>Result</code>](#Result)
    * [.getArrivalBoard(id, date)](#DB+getArrivalBoard) ⇒ [<code>Result</code>](#Result)
    * [.getDepartureBoard(id, date)](#DB+getDepartureBoard) ⇒ [<code>Result</code>](#Result)
    * [.getJourneyDetails(id)](#DB+getJourneyDetails) ⇒ [<code>Result</code>](#Result)

<a name="new_DB_new"></a>

### new DB(bearer, sandbox)

| Param | Type | Description |
| --- | --- | --- |
| bearer | <code>String</code> | The Bearer Token for the API |
| sandbox | <code>Boolean</code> | If true, the module will use http instead of https |

<a name="DB+getLocation"></a>

### DB.getLocation(name) ⇒ [<code>Result</code>](#Result)
Get information about locations matching the given name or name fragment

**Kind**: instance method of [<code>DB</code>](#DB)  
**Returns**: [<code>Result</code>](#Result) - Result or Error  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | Name or name fragment of a location |

<a name="DB+getArrivalBoard"></a>

### DB.getArrivalBoard(id, date) ⇒ [<code>Result</code>](#Result)
Get arrival board at a given location at a given daten and time.

**Kind**: instance method of [<code>DB</code>](#DB)  
**Returns**: [<code>Result</code>](#Result) - Result or Error  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>String</code> | Id of location. Use attribute 'id' from the result of 'location' |
| date | <code>String</code> | Date and time in ISO-8601 format, yyyy-mm-ddThh:mm:ss, example: 2017-04-01 or 2017-04-01T10:30 |

<a name="DB+getDepartureBoard"></a>

### DB.getDepartureBoard(id, date) ⇒ [<code>Result</code>](#Result)
Get departure board at a given location at a given daten and time.

**Kind**: instance method of [<code>DB</code>](#DB)  
**Returns**: [<code>Result</code>](#Result) - Result or Error  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>String</code> | Id of location. Use attribute 'id' from the result of 'location' |
| date | <code>String</code> | Date and time in ISO-8601 format, yyyy-mm-ddThh:mm:ss, example: 2017-04-01 or 2017-04-01T10:30 |

<a name="DB+getJourneyDetails"></a>

### DB.getJourneyDetails(id) ⇒ [<code>Result</code>](#Result)
Retrieve details of a journey. The id of journey should come from an arrival board or a departure board.

**Kind**: instance method of [<code>DB</code>](#DB)  
**Returns**: [<code>Result</code>](#Result) - Result or Error  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>String</code> | Id of a journey. Use attribute 'detailsId' from the result of 'arrivalBoard' or 'departureBoard' |

<a name="Result"></a>

## Result : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| Status | <code>Number</code> | HTTP Status Code |
| Result | <code>Object</code> | Data from Server |

