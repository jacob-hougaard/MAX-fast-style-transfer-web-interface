# Style transfer web frontend

This frontend utilizes the Max Fast Neural Style Transfer model. 

The current implementation is referencing the deployed model. If you wish to deploy this yourself, i recommend that you deploy your own model as described in https://github.com/IBM/MAX-Fast-Neural-Style-Transfer

## How to run.

**Prerequisites**

1. Docker running on you machine.

**How to run**

### Docker

```
docker build -t <repository name> .

docker run -p 3000:3000 <repository name> 
```



### Local

**Prerequisites**

1. Node version 8 or above

**How to run**

to run locally, use the two following commands

```
npm i
npm start
```



### 