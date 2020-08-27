FROM alpine:latest

RUN apk add maven

WORKDIR /opt/
COPY . .
RUN mvn clean install -Dmaven.test.skip=true
RUN ls -lht target
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]