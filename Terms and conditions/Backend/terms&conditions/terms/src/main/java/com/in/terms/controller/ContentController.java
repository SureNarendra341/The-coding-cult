package com.in.terms.controller;

import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.in.terms.model.Content;
import com.in.terms.repository.ContentRepository;

@RestController
@RequestMapping("/api/content")
@CrossOrigin(origins = "http://localhost:5173")
public class ContentController {

    @Autowired
    private ContentRepository repository;

    @GetMapping
    public Map<String, String> getAllContent() {
        List<Content> list = repository.findAll();
        Map<String, String> map = new HashMap<>();
        for (Content c : list) {
            map.put(c.getKeyName(), c.getValue());
        }
        return map;
    }

    @PatchMapping
    public ResponseEntity<String> updateContent(@RequestBody Map<String, String> updates) {
        for (Map.Entry<String, String> entry : updates.entrySet()) {
            String key = entry.getKey(); // This is keyName
            String value = entry.getValue(); // This is value

            repository.findByKeyName(key).ifPresentOrElse(
                existing -> {
                    existing.setValue(value);
                    repository.save(existing);
                },
                () -> {
                    Content newContent = new Content();
                    newContent.setKeyName(key);
                    newContent.setValue(value);
                    repository.save(newContent);
                }
            );
        }
        return ResponseEntity.ok("Content updated");
    }
}