# Setup

## Set environments variables

- Rename .env.sample file to .env
- Add the secret key in `CRYPT_SECRET_KEY`. The key it will be provider to encrypt and decrypt data
- Add configurations data for the database. The default data it is:

```POSTGRES_HOST=database
    POSTGRES_PASSWORD=root
    POSTGRES_USER=postgres
    POSTGRES_DB=faciledb
    POSTGRES_PORT=5432
```

## Install docker container

- Install container and images with the command: `docker-compose up -d --build`

## Running backend

- Enter in the container with interative mode: `docker-compose exec backend bash`
- Enter in the folder: `cd /var/www`
- Run the command `yarn` to install dependeces
- Run the command `yarn start` or `yarn start:dev` to developer mode

## Routes

## The Base url is: `http://127.0.0.1/bucket/`

---

- [POST] /create
  - Body: data
  - Response example

```
{
  "success": true,
  "data": {
    "bucket": "U2FsdGVkX18En3vSjaNYUL89Hg5+anOtVvchF76NAsTAg3GhbcAa0T/VN174iJejd4YkBdvkv7m32FriIsURw+f6JSDrOA==",
    "id": 1,
    "createdAt": "2021-08-03T01:20:30.088Z",
    "updatedAt": "2021-08-03T01:20:30.088Z"
  }
}
```

---

- [GET] /encrypts/:id
  - param: id
  - Response example

```
{
  "data": [
    {
      "id": 1,
      "bucket": "{\"user\":{\"id\":1,\"name\":\"Eduardo Felipe Araya Jezine\"}}",
      "createdAt": "2021-08-02T22:52:03.881Z",
      "updatedAt": "2021-08-02T22:52:03.881Z"
    }
  ]
}
```

---
