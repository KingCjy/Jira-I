package me.kingcjy.jira.domain.issue;


import lombok.Getter;
import me.kingcjy.jira.domain.member.Member;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDateTime;

@Getter
@Entity
public class Issue {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long issuId;
    private String name;

    private Member responsibility;

    @CreationTimestamp
    private LocalDateTime createdDateTime;


}
