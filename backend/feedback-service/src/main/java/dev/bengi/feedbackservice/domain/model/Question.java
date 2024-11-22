package dev.bengi.feedbackservice.domain.model;

import lombok.Builder;
import lombok.Value;

import java.util.UUID;

@Value
@Builder
public class Question {
    UUID id;
    String content;
    QuestionCategory category;
    QuestionType type; // RATING, TEXT, MULTIPLE_CHOICE
    String[] options; // For multiple choice questions
    boolean isRequired;
}