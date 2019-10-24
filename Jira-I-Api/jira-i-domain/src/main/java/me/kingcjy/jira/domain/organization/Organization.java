package me.kingcjy.jira.domain.organization;

import lombok.Builder;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDateTime;

@Entity
public class Organization {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @CreationTimestamp
    private LocalDateTime createdDateTime;

    @Builder
    public Organization(String name) {
        this.name = name;
    }
}
