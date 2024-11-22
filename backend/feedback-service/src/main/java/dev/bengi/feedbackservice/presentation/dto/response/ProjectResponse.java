package dev.bengi.feedbackservice.presentation.dto.response;

import dev.bengi.feedbackservice.domain.model.Project;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Builder
public class ProjectResponse {
    private UUID id;
    private String name;
    private String description;
    private LocalDateTime feedbackStartDate;
    private LocalDateTime feedbackEndDate;
    private boolean active;

    public static ProjectResponse from(Project project) {
        return ProjectResponse.builder()
                .id(project.getId())
                .name(project.getName())
                .description(project.getDescription())
                .feedbackStartDate(project.getFeedbackStartDate())
                .feedbackEndDate(project.getFeedbackEndDate())
                .active(project.isActive())
                .build();
    }
}