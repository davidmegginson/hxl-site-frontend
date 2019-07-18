### Develop with Docker

You will need Docker and docker-compose software installed on your computer

# prepare to start develop
1. cd to this directory
2. docker-compose pull unocha/hxl-gatsby:dev
3. docker-compose up -d

## one-time setup 
4. remove local node_modules directory
5. docker-compose exec gatsby yarn
6. docker-compose exec gatsby yarn install --production=false

## develop away!
7. docker-compose exec gatsby npm run dockerdev
8. wait for it then go to http://localhost:8000

Repeat the one time setup whenever you update the modules used or if you suspect they got corrupted.
Currently, the container will stay up for 4 hours then stop. Run `docker-compose start gatsby` to start it again.
