CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS application_user(
  uuid uuid DEFAULT uuid_generate_V4(),
  username VARCHAR NOT NULL,
  passaword VARCHAR NOT NULL,
  PRIMARY KEY (uuid)
);

INSERT INTO application_user (username, passaword) VALUES ('admin', crypt('admin', 'my_salt'));