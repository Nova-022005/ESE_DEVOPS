# Virtual Machine vs Docker 

```mermaid
flowchart TD

A["Application layer"]->B["Host OS kerel layer"]
B-->C[""Hardware]


```
### A VM has it's own OS kernel theire fore it virtualize both application and host os kernel layer

### A Docker only virtualize the application therefore it is much more lightweight

## Drawback of docker

As docker only virtualize application layer and build for linux it can't be used for all OS (which VM can do ) .therefore, Docker desktop add a hyperwise layer to our system which internally use a lightweight linux distribution system which allow to run container on non linux system .