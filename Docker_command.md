
### docker pull 

The docker pull command is used to download (install) an image from Docker Hub into your local system.


* Command :  ``` docker pull <image_name>:<tag> ```

* default-tag(latest version):`docker pull <image_name>:latest` 

* example : ```docker pull ubuntu:20.04```

### docker images

used to list all images in the system

Command: ```docker images```

### docker run
he docker run command is used to create and start a new container from a Docker image. Think of it as: pull image → run container.

Command: ```docker run [OPTIONS] IMAGE [COMMAND] [ARG...]```

* COMMAND → optional command to execute inside the container

* OPTIONS → flags to configure behavior (ports, volumes, interactive mode, etc.)

exmaple: ```docker run -it ubuntu:20.04 bash```

***detached mode*** *for running in background*

Command: `docker run -d IMAGE [COMMAND] [ARG...]`

The `-it` option in docker run is what makes the container **interactive**, so you can type commands and see output directly in your terminal. 

### docker ps
 Used for listing conatiner

Command: `docker ps -a`

Command: `docker ps`

### docker start
To run existing container without creating a new which run caommand does.

Command : `docker start IMAGE_NAME or CONT_ID`

For docker **start** to attach **interactively** is with `-ai`, not `-it`.

### docker stop 

Command : `docker stop IMAGE_NAME or CONST_ID`

### docker rmi
for **removinga image**

Command:`docker rms <IMAGE_NAME>`

### docker mi
for **removing** **container**

Command: `docker rm <IMAGE_NAME>`

### Custom name

Command : `docker run --name <custom_name> -d <IMAGE_NAME>`