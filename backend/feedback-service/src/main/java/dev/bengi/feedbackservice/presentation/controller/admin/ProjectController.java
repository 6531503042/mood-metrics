package dev.bengi.feedbackservice.presentation.controller.admin;

import dev.bengi.feedbackservice.application.port.input.ProjectUseCase;
import dev.bengi.feedbackservice.presentation.dto.request.CreateProjectRequest;
import dev.bengi.feedbackservice.presentation.dto.response.ProjectResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/admin/projects")
@RequiredArgsConstructor
public class ProjectController {
    private final ProjectUseCase projectUseCase;

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ProjectResponse> createProject(@RequestBody CreateProjectRequest request) {
        var project = projectUseCase.createProject(request);
        return ResponseEntity.ok(ProjectResponse.from(project));
    }

    // Other endpoints...
}