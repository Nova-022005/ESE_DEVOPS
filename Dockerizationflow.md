### Create a node app llike index.js
### Ceate a Dockerfile 

FROM
WORKDIR
COPY
RUN
EXPOSE
CMD
ENV

### Create a docker-compose.yml file

version: "3.8"
services:
  app:
    build: .
    container_name: CONT_NAME
    ports:
      - 8080:5000
    command: ["node", "index.js"]

Step 4: run command ``docker-compose up```
Step 5: check : curl https://localhost:8000/health
