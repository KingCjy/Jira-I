package me.kingcjy.jira.domain.issue;


import lombok.Builder;
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

    private Member createdMember;

    @CreationTimestamp
    private LocalDateTime createdDateTime;

    @Builder
    public Issue(Long issuId, String name, Member responsibility, Member createdMember) {
        this.issuId = issuId;
        this.name = name;
        this.responsibility = responsibility;
        this.createdMember = createdMember;
    }
}
