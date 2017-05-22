-- @author ojourmel
-- schema for imsi database

DROP FUNCTION IF EXISTS insertrole(_name TEXT);

DROP TABLE IF EXISTS creationcollection;
DROP TABLE IF EXISTS creationcreatorrole;
DROP TABLE IF EXISTS creationrole;
DROP TABLE IF EXISTS creation;

DROP TABLE IF EXISTS creator;
DROP TABLE IF EXISTS role;


CREATE TABLE role (
    id SERIAL NOT NULL,
    name TEXT,
    CONSTRAINT role_pk_id PRIMARY KEY(id),
    CONSTRAINT role_uniq_name UNIQUE(name)
);

CREATE TABLE creator (
    id BIGSERIAL NOT NULL,
    name TEXT,
    dob DATE,
    dod DATE,
    CONSTRAINT creator_pk_id PRIMARY KEY(id)
);

CREATE TABLE creation (
    id BIGSERIAL NOT NULL,
    isbn INTEGER,
    title TEXT NOT NULL,
    year DATE NOT NULL,
    edition INTEGER,
    CONSTRAINT creation_pk_id PRIMARY KEY(id),
    CONSTRAINT creation_uniq_isgn UNIQUE(isbn)
);

CREATE TABLE creationrole (
    creation_id BIGINT NOT NULL,
    role_id INTEGER NOT NULL,
    CONSTRAINT creationrole_pk_creation_id_role_id PRIMARY KEY(creation_id, role_id),
    CONSTRAINT creationrole_fk_creation_id FOREIGN KEY(creation_id) REFERENCES creation (id),
    CONSTRAINT creationrole_fk_role_id FOREIGN KEY(role_id) REFERENCES role (id)
);

CREATE TABLE creationcreatorrole (
    creation_id BIGINT NOT NULL,
    creator_id BIGINT NOT NULL,
    role_id INTEGER NOT NULL,
    CONSTRAINT creationcreatorrole_pk_creation_id_creator_id_role_id PRIMARY KEY(creation_id, creator_id, role_id),
    CONSTRAINT creationcreatorrole_fk_creation_id FOREIGN KEY(creation_id) REFERENCES creation (id),
    CONSTRAINT creationcreatorrole_fk_creator_id FOREIGN KEY(creator_id) REFERENCES creator (id),
    CONSTRAINT creationcreatorrole_fk_role_id FOREIGN KEY(role_id) REFERENCES role (id)
);

CREATE TABLE creationcollection (
    collection_id BIGINT NOT NULL,
    creation_id BIGINT NOT NULL,
    CONSTRAINT creationcollection_pk_collection_id_creation_id PRIMARY KEY(collection_id, creation_id),
    CONSTRAINT creationcollection_fk_collection_id FOREIGN KEY(collection_id) REFERENCES creation (id),
    CONSTRAINT creationcollection_fk_creation_id FOREIGN KEY(creation_id) REFERENCES creation (id)
);


CREATE FUNCTION insertrole(_name TEXT) RETURNS BIGINT
    LANGUAGE plpgsql
    AS $$
DECLARE
   r INTEGER;
BEGIN

    WITH s AS (
        SELECT role.id
        FROM role
        WHERE name = _name
    ), i AS (
        INSERT INTO role (name)
        SELECT _name
        WHERE NOT EXISTS (SELECT 1 FROM s)
        RETURNING role.id
    )
    SELECT i.id
    INTO r
    FROM i
    UNION ALL
    SELECT s.id
    FROM s;

    RETURN r;


END;
$$;

ALTER FUNCTION public.insertrole(_name TEXT) OWNER TO imsi;

