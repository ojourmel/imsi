FROM postgres:alpine

RUN mkdir -p /imsi/
WORKDIR /imsi

COPY ./imsi.sql /imsi/imsi.sql
COPY ./imsi-seed.sql /imsi/imsi-seed.sql
