package dev.bengi.feedbackservice.domain.model;

import lombok.Builder;
import lombok.Value;

import java.util.UUID;
import java.util.List;

@Value
@Builder
public class Question {
    UUID id;
    String content;
    QuestionCategory category;
    QuestionType type;
    List<String> options;
    boolean required;
}