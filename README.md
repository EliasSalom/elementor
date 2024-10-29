# Elementor Task
#### this is a homework to build user albums system

### Technology

- react **(frontend)**
  - react-query
  - axios
  - Mui
  - react-toastify
- nestjs **(backend)**
  - prisma
  - mongoDB
  - class-validator

### How To Run
please follow the steps to run the project
### Docker Compose
In the project `root` please run this command to build the docker images
by running `docker compose build` AND `docker compose up`

OR by running each file alone
### Docker
> this command to build **frontend** project
```shell
docker build -t frontend -f docker/album.dockerfile .
```
> this command to build **backend** project
```shell
docker build -t backend -f docker/server.dockerfile .
```
now it's the time to run the projects 
> this command to run **frontend** after build
```shell
docker run -t frontend  
```
> this command to run **backend** server after build
```shell
docker run -p 3000:3000 -t backend 
```

Or by following these steps to run the development environment

>Frontend Side
1. in the project `root` run `npm i`
2. go to `cd apps/album`
3. run this command `npm run dev`

>backend Side
1. in the project `root` run `npm i`
2. go to `cd apps/server`
3. run this command `npx prisma generate`
4. to start the project `npm run start`