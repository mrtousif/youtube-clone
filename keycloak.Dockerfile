FROM quay.io/keycloak/keycloak:19.0.3 as builder

ENV KC_HEALTH_ENABLED=true
ENV KC_METRICS_ENABLED=true
ENV KC_FEATURES=token-exchange
ENV KC_DB=postgres

# Install custom providers
RUN curl -sL https://github.com/aerogear/keycloak-metrics-spi/releases/download/2.5.3/keycloak-metrics-spi-2.5.3.jar -o /opt/keycloak/providers/keycloak-metrics-spi-2.5.3.jar
RUN curl -sL https://github.com/aznamier/keycloak-event-listener-rabbitmq/releases/download/3.0/keycloak-to-rabbit-3.0.jar -o /opt/keycloak/providers/keycloak-to-rabbit-3.0.jar

RUN /opt/keycloak/bin/kc.sh build

FROM quay.io/keycloak/keycloak:19.0.3
COPY --from=builder /opt/keycloak/ /opt/keycloak/
WORKDIR /opt/keycloak

# for demonstration purposes only, please make sure to use proper certificates in production instead
# RUN keytool -genkeypair -storepass password -storetype PKCS12 -keyalg RSA -keysize 2048 -dname "CN=server" -alias server -ext "SAN:c=DNS:localhost,IP:127.0.0.1" -keystore conf/server.keystore
# # change these values to point to a running postgres instance
# ENV KC_DB_URL=jdbc:postgresql://postgres:5432/keycloak
# ENV KC_DB_USERNAME=postgres
# ENV KC_DB_PASSWORD=password
# ENV KC_HOSTNAME=localhost
ENTRYPOINT ["/opt/keycloak/bin/kc.sh"]