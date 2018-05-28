echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
docker push jsboilerplates/web-reactjs
docker push jsboilerplates/web-reactjs:0.1.0
