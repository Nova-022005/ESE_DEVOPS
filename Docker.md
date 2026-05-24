# Problem 

When working on large-scale projects where multiple people collaborate on the same or different features, it becomes difficult to ensure that every new person has all the necessary dependencies to run the application. Many times, a feature or application will run on one system (e.g., macOS) but may not work on another (e.g., Windows).

This is the common problem of “it runs on my machine.” The main reason these issues arise in production code is that an application requires specific dependencies and environments to function properly. As the number of dependencies grows very large in production, it becomes hard for the team to keep track of them.

Solution

# Solution

## Contaiersization

Containerization is the process of bundling production code together with all required dependencies and environment configurations into a single package. This automates dependency installation and ensures the application runs consistently on any system (including production servers). Containers can be shared across team members, eliminating the need to manually track dependencies.

### Properties

* Portable 
* lightweight

# Docker 

Docker is the leading containerization platform that solves the “works on my machine” problem by packaging applications with all their dependencies into portable containers, ensuring consistent performance across macOS, Windows, and Linux. It is widely used for development, deployment, and scaling applications

# Docker Image 

A Docker Image can be understood as a blueprint that contains everything needed to run an application — including the code, dependencies, libraries, and configuration. From a single image, you can launch multiple Docker containers, each running the same application in an isolated environment.

``` mermaid 
flowchart TD
    
    B[Docker Image]--> C[Docker Container 1]
    B --> D[Docker Container 2]
    B --> E[Docker Container 3]

```

We share the docker  image not the contaniner 

A Docker Container is a running instance of an application, created from a Docker image. In contrast, a Docker Image is a static snapshot that defines what the environment looks like — including the application code, dependencies, libraries, and configuration.
    