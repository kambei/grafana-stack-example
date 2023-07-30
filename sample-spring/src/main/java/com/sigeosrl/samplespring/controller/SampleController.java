package com.sigeosrl.samplespring.controller;

import com.google.gson.Gson;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/sample")
@Slf4j
public class SampleController {

    @PostMapping("/test")
    public ResponseEntity<Void> test(@RequestBody Map<String, Object> body) {
        Gson gson = new Gson();
        String json = gson.toJson(body);
        log.info("Received message: {}", json);
        return ResponseEntity.ok().build();
    }
}
