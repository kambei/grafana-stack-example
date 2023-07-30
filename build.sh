#!/bin/bash

cd sample-go
docker build -t sample-go .

cd ../sample-node
docker build -t sample-node .

cd ../sample-quarkus
./gradlew build -Dquarkus.container-image.build=true -Dquarkus.container-image.group=""

cd ../sample-spring
docker build -t sample-spring .

