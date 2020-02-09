# URL Shortener Microservice

#### Tech stack

**Database** | PostgreSQL + Knex query builder
**Server** | NodeJS + Express
**URL Encoding** | Base62 encoding of DB id

#### Creation Example

```HTTP
POST [project_url]/api/shorturl/new - body (urlencoded) : url=https://github.com/thiagodebastos/shorturl
```

#### Usage

`[this_project_url]/api/shorturl/n`\*

\* _decoding `n` with `base62` results in `1`. Lookup in DB `WHERE id = 1` will give
the result._

#### Will redirect to

https://github.com/thiagodebastos/shorturl
