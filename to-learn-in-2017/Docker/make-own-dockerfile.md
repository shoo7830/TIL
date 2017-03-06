# Hexo blog automated build with Docker

## Dockerfile
~~~ cmd
# use the node
FROM node:latest
MAINTAINER Aria Kim "kis@gabia.com"

# prepare work directory
RUN mkdir -p /blog
WORKDIR /blog

#install hexo
RUN npm install hexo-cli -g

#default port
EXPOSE 4000

#run hexo server
CMD ["hexo", "server", "-i", "0.0.0.0"]
~~~

## Dockerfile build
~~~ cmd
docker build -t shoo7830/hexo .
~~~


## Docker images
~~~ cmd
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
shoo7830/hexo       latest              eb174158b4db        59 seconds ago      676.7 MB
node                latest              607ddfc64bef        3 days ago          664.2 MB
<none>              <none>              86e04928d511        2 weeks ago         231.2 MB
ubuntu              14.04               b969ab9f929b        6 weeks ago         188 MB
hello-world         latest              48b5124b2768        7 weeks ago         1.84 kB
centos              latest              67591570dd29        11 weeks ago        191.8 MB
~~~
