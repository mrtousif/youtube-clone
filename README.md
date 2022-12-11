# Best tech stack

Keycloak

```sh
curl --request POST \
  --url http://localhost:8180/realms/development_realm/protocol/openid-connect/token \
  --header 'Content-Type: application/x-www-form-urlencoded' \
  --data username=tousif101@outlook.com \
  --data password=password123 \
  --data grant_type=password \
  --data client_id=hasura

```

```sh
curl  -XPOST 127.0.0.1:9080/apisix/admin/routes -H "X-Api-Key: edd1c9f034335f136f87ad84b625c8f1" -d '{
    "uri":"/*",
    "plugins":{
        "openid-connect":{
            "bearer_only": false,
            "client_id": "hasura",
            "client_secret": "sGDpddl2JcwvrUk7IERmqDA9QTyNqwyN",
            "disable": false,
            "discovery": "https://8180-mrtousif-youtubeclone-6p60rhw8gtr.ws-us67.gitpod.io/realms/development_realm/.well-known/openid-configuration",
            "introspection_endpoint_auth_method": "client_secret_post",
            "realm": "development_realm",
            "redirect_uri": "https://9080-mrtousif-youtubeclone-6p60rhw8gtr.ws-us67.gitpod.io/",
            "scope": "openid profile"
        }
    },
    "upstream":{
        "type":"roundrobin",
        "nodes":{
            "httpbin.org:80":1
        }
    }
}'

```