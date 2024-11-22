package dev.bengi.feedbackservice.presentation.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class CreateProjectRequest {
    @NotBlank(message = "Project name is required")
    private String name;

    private String description;

    @NotNull(message = "Feedback start date is required")
    private LocalDateTime feedbackStartDate;

    @NotNull(message = "Feedback end date is required")
    private LocalDateTime feedbackEndDate;
}