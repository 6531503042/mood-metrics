package dev.bengi.feedbackservice.application.port.input;

import dev.bengi.feedbackservice.domain.model.Project;
import dev.bengi.feedbackservice.presentation.dto.request.CreateProjectRequest;

import java.util.List;
import java.util.UUID;

public interface ProjectUseCase {
    Project createProject(CreateProjectRequest request);

    Project updateProject(UUID id, CreateProjectRequest request);

    void deleteProject(UUID id);

    Project getProject(UUID id);

    List<Project> getAllActiveProjects();

    void assignQuestionsToProject(UUID projectId, List<UUID> questionIds);
}