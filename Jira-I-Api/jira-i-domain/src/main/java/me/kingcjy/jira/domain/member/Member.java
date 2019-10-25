package me.kingcjy.jira.domain.member;

import lombok.Builder;
import lombok.Getter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Getter
@Entity
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String email;
    private String password;

    private String name;
    private String profile;

    @Builder
    public Member(String email, String password, String name, String profile) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.profile = profile;
    }
}
