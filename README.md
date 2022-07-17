## Dockerize

```properties
docker build . -t jithset/node-web:latest 
docker run -p 3000:3000 --name node-web jithset/node-web:latest
```