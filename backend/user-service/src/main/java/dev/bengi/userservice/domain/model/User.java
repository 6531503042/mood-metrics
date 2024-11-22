package dev.bengi.userservice.domain.model;

import lombok.Builder;
import lombok.Value;

import java.util.UUID;

@Value
@Builder
public class User {
    UUID id;
    String email;
    String firstName;
    String lastName;
    String password;
    Role role;
    boolean enabled;
}
