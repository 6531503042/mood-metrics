package dev.bengi.feedbackservice.domain.model;

import lombok.Builder;
import lombok.Value;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Value
@Builder
public class Project {
    UUID id;
    String name;
    String description;
    LocalDateTime feedbackStartDate;
    LocalDateTime feedbackEndDate;
    List<Question> questions;
    boolean isActive;
}