#### imsi - internet music score index

---

### Secrets

Several application secrets are required to build this project, including a `postgres` username and password, as well as `api` and `ui` dev ports.

These should be defined in a `imsi.env` file, which will be used by `docker-compose` to set the environment of the various containers.

`imsi` expects the following keys to be set:

* `POSTGRES_USER=`
* `POSTGRES_PASSWORD=`
* `POSTGRES_DB=`
* `POSTGRES_ADDRESS=imsi-db`
* `POSTGRES_PORT=5432`
* `API_PORT=8081`
* `UI_PORT=8080`
* `NODE_ENV=development`
