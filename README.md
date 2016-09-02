# hycamp

## To start

To start the app and install all dependencies

```make install```

## To run

To start the app in dev mode - will restart via nodemon on changes to the backend, and reload via hot reloading/webpack dev server on changes to the frontend.

```make run```

## API calls the server

### AUTH

#### `GET /auth/login/facebook` or GET `/auth/login/github`

This will redirect the user to login to facebook/github. Once they do/don't it will either redirect them to the route

`/?userSuccess` on a successful authentication 
`/?userFailure` on an unsuccessful authentication


#### `GET /api/users/getUser`

returns an array of a single object which holds the user info dependant on the current browser session.

Example response:
```Javascript
 data: [
  {
    id: 123123123,
    facebook: {
      name: 'Jinx Monsoon',
      token: 123123213131,
      id: 12313131313,
      email: 'jinx@jmonsoonseason.biz',
    },
    github: {
      name: 'Jinx Monsoon',
      token: 123123213131,
      id: 12313131313,
      email: 'jinx@jmonsoonseason.biz',
    }
    favouriteEvents: [],
  }
 ];
```

If there is no current browser session, an empty array will be returned.

### Events

#### `GET /api/events/getEvents`

returns all the events in the database

example response: 
```javascript
  {
     _id: '57c64831312311aad763da560a',
     dateCreated: '2016-08-31T02:59:41.603Z',
     eventDate: '2016-08-31T02:58:39.035Z',
     location: 'a mountain',
     createdBy: 'Garrett',
     label: 'Mountain Hike',
     __v: 0,
     attending: [],
   },
   {
     _id: '512313142ffe91131c',
     dateCreated: '2016-08-31T03:01:40.409Z',
     eventDate: '2016-08-31T02:58:39.035Z',
     location: 'somewhere cool',
     createdBy: 'Mike',
     label: 'Forest party',
     __v: '0',
     attending: [],
   },
```

#### `POST /api/events/createEvent`

required paramaters
| Param         | Type          | Example                    |    
| ------------- |:-------------:| :--------------------------|
| createdBy     | string        | 'Adore'                    |
| label         | string        | 'Party'                    |
| eventDate     | JS Date       | '' |
| location      | string        | 'rooftops in paris, duh 💁'|

exmaple response:
```javascript
  {
    "__v": 0,
    "dateCreated":"2016-09-02T15:05:51.194Z",
    "eventDate":"2016-08-31T02:58:39.035Z",
    "location":"this",
    "createdBy":"me",
    "label":"huh",
    "_id":"57c9954f89cd945fc81fe60e",
    "attending":[],
  }
```

#### `POST /api/events/deleteEvent

delete an event from the database based on its id number

required paramaters
| Param         | Type          | Example                    |    
| ------------- |:-------------:| :--------------------------|
| id            | string        | '57c9954f89cd945fc81fe60e' |

example response
```javascript
  { "id": "57c9954f89cd945fc81fe60e" }
```

### Cabins/Leaderboard

#### `GET /api/leaderboard/getCabins`

returns all the cabins in an array of objects with their scores, members, and the id in the database

example response:
```javascript
  [
    {
      "_id":"57c64f3aba203a2568fcdc8a",
      "label":"test cabin",
      "score":111,
      "members":["garrett"],
    },
  ]
```
#### `POST /api/leaderboard/updateScore'

updates the score of the specified cabin in the database TO the score provided.

required paramaters
| Param         | Type          | Example                    |    
| ------------- |:-------------:| :--------------------------|
| id            | string        | '57c9954f89cd945fc81fe60e' |
| score         | number        | 9001                       |

expected response:

```javascript
  {
    "_id":"57c64f3aba203a2568fcdc8a",
    "label":"test cabin",
    "score": 9001,
    "members":["garrett"],
  }
```


