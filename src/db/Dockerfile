FROM postgres:alpine

run mkdir -p /docker-entrypoint-initdb.d

COPY ./imsi.sql /docker-entrypoint-initdb.d/00-imsi.sql
COPY ./imsi-seed.sql /docker-entrypoint-initdb.d/10-imsi-seed.sql
