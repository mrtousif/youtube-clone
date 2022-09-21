# Best tech stack

Keycloak

```sh
curl --request POST \
  --url http://localhost:8180/realms/myrealm/protocol/openid-connect/token \
  --header 'Content-Type: application/x-www-form-urlencoded' \
  --data username=developer \
  --data password=password123 \
  --data grant_type=password \
  --data client_id=hasura

```