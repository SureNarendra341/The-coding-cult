package com.in.terms.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.in.terms.model.Content;

public interface ContentRepository extends JpaRepository<Content, Long> {
    Optional<Content> findByKeyName(String keyName);
}
