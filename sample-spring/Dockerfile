# Stage 1: Build the application
FROM gradle:8-jdk17 AS build
WORKDIR /workspace/app

COPY gradlew .
COPY gradle gradle
COPY build.gradle .
COPY settings.gradle .
COPY src src

RUN ./gradlew build -x test

# Stage 2: Run the application
FROM openjdk:17-slim
COPY --from=build /workspace/app/build/libs/*.jar application.jar
ENTRYPOINT ["java", "-jar", "application.jar"]
