FROM scratch

ADD ./build /build/
COPY Caddyfile /
COPY caddy-linux /

EXPOSE 8000
ENTRYPOINT ["/caddy-linux"]
