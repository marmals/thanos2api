# Thanos 2 API

This is a REST-API.

The data is stored using MongoDB hosted on MongoDB atlas.
The server is hosted on Heroku and synced with the github repository, meaning new commits to github will be deployed automaticlly on Heroku.

The data is organized into sessions, which represent one drive with the mower.  
Each session has the following structure:

```json
{
    "_id": "5e970a51336b2a37c97d7aeb",
    "startDate": "2020-04-15T13:21:21.254Z",
    "stopDate": null,
    "locations": [
        {
            "_id": "5e970a92336b2a37c97d7aec",
            "x": 5,
            "y": 5
        }
    ],
    "collisions": [
        {
            "_id": "5e970aa2336b2a37c97d7aed",
            "x": 6,
            "y": 6
        }
    ],
    "__v": 2
}
```

### URL:  
http://thanos2api.herokuapp.com/

# Endpoints:

## POST /sessions/start
Creates a new session.  
An _id and startDate is generated, and a base session is returned:

```json
{
    "_id": "5e970bb6336b2a37c97d7aee",
    "startDate": "2020-04-15T13:27:18.938Z",
    "stopDate": null, 
    "locations": [],
    "collisions": [],
    "__v": 0
}
```

The _id is then used for all subsequent calls regarding that session.  

## POST /session/5e96f5c1f0a3bd1fbecb30f5/stop
Terminates session 5e96f5c1f0a3bd1fbecb30f5  
When a session is terminated the "stopDate" is automatically updated. 

```json
{
    ...
    "stopDate": "2020-04-15T11:56:20.545Z7",
    ...
}
```

## GET /sessions
Gets all sessions, including all positions etc within them.  
Example:
```json
[
    {
        "_id": "5e970a51336b2a37c97d7aeb",
        "startDate": "2020-04-15T13:21:21.254Z",
        "stopDate": null,
        "locations": [
            {
                "_id": "5e970a92336b2a37c97d7aec",
                "x": 5,
                "y": 5
            }
        ],
        "collisions": [
            {
                "_id": "5e970aa2336b2a37c97d7aed",
                "x": 6,
                "y": 6
            }
        ],
        "__v": 2
    },
    {
        "_id": "5e970bb6336b2a37c97d7aee",
        "startDate": "2020-04-15T13:27:18.938Z",
        "stopDate": null,
        "locations": [],
        "collisions": [],
        "__v": 0
    }
]
```

## POST /session/5e96f5c1f0a3bd1fbecb30f5/locations
Logs a new location in session 5e96f5c1f0a3bd1fbecb30f5    
Expects JSON body:

```json
{
    "x": 100,
    "y": 200
}
```

## GET /session/5e96f5c1f0a3bd1fbecb30f5/locations
Gets all locations in session 5e96f5c1f0a3bd1fbecb30f5   
Returns json, example:

```json
[
    {
        "_id": "5e970a92336b2a37c97d7aec",
        "x": 5,
        "y": 5
    },
    {
        "_id": "5e970c92336b2a37c97d7aef",
        "x": 52,
        "y": 62
    }
]
```


## The syntax for collisions is identical, the following endpoints are available:

### POST /session/5e96f5c1f0a3bd1fbecb30f5/collisions

### GET /session/5e96f5c1f0a3bd1fbecb30f5/collisions

