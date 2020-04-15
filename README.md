# Thanos 2 API

This is a REST-API.

The data is stored using MongoDB hosted on MongoDB atlas.
The server is hosted on Heroku and synced with the github repository, meaning new commits to github will be deployed automaticlly on Heroku.

The data is organized into sessions, which represent one drive with the mower.  
Each session has the following structure:

```json
{
    "_id":"5e8c3658b300d10017a74a01",
    "startDate": "2020-04-15T10:20:35",
    "stopDate": "2020-04-15T10:25:52",
    "locations":[
        {
            "x":"232",
            "y":"325"
        },
        {
            "x":"654",
            "y":"231"
        }
    ],
    "collisions":[
        {
            "x":"232",
            "y":"325"
        },
        {
            "x":"654",
            "y":"231"
        }
    ]
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
    "_id":2,
    "startDate": "2020-04-15T10:20:35",
    "stopDate": null,
    "locations":[],
    "collisions":[]
}
```

The _id is then used for all subsequent calls regarding that session.

## POST /session/2/stop
Terminates session 2

## GET /sessions
gets all sessions, including all posisions etc within them.


```json
{
    "_id":0,
    "startDate": "2020-04-15T10:20:35",
    "stopDate": "2020-04-15T10:20:47",
    "locations":[
        {
            "x":"232",
            "y":"325"
        },
        {
            "x":"654",
            "y":"231"
        }
    ],
    "collisions":[
        {
            "x":"232",
            "y":"325"
        },
        {
            "x":"654",
            "y":"231"
        }
    ]
},
{
    "_id":1,
    "startDate": "2020-04-16T13:56:03",
    "stopDate": "2020-04-16T14:31:23",
    "locations":[
        {
            "x":"63",
            "y":"156"
        },
        {
            "x":"263",
            "y":"27"
        }
    ],
    "collisions":[
        {
            "x":"722",
            "y":"433"
        },
        {
            "x":"724",
            "y":"765"
        }
    ]
}
```

## POST /session/2/locations
Logs a new location in session 2
Expects JSON body:

```json
    {
        "x": 100,
        "y": 200
    }
```

## GET /session/2/locations
Gets all locations in session 2
Returns json, example:

```json
    [
        {
            "x":100,
            "y":200
        },
        {
            "x":412,
            "y":214 
        },
        {
            "x":563,
            "y":72 
        }
    ]
```


same syntax for collisions.

## POST /session/2/collisions

## GET /session/2/collisions

