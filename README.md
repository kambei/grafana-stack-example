# Monitoring

## BUILD

- Launch:
```bash
./build.sh
```


## RUN

<br>

- Launch:
```bash
./run.sh
```

or:


```bash
docker compose up -d
```

<br>

- Login to Grafana: http://localhost:3000

<br>

- Add the datasources to Grafana:
  - Prometheus: http://prometheus:9090
  - Loki: http://loki:3100

<br>

- Make some POST with a JSON body to 
  - http://localhost:8081/sample/test (sample-go)
  - http://localhost:8082/sample/test (sample-node)
  - http://localhost:8083/sample/test (sample-quarkus)
  - http://localhost:8084/sample/test (sample-spring)

<br>

Enjoy!