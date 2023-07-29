# Monitoring

## BUILD

- Go in sample-go folder and run:
```bash
docker build -t sample-go .
```

- Go in sample-node folder and run:
```bash
docker build -t sample-node .
```


## RUN

<br>

- Launch:
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
  - http://localhost:8081/sample/test
  - http://localhost:8082/sample/test

<br>

Enjoy!