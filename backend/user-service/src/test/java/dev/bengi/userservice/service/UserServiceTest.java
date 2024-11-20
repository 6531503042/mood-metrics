package dev.bengi.userservice.service;

import dev.bengi.userservice.domain.model.Role;
import dev.bengi.userservice.domain.model.User;
import dev.bengi.userservice.dto.request.UpdateUserRequest;
import dev.bengi.userservice.dto.response.UserResponse;
import dev.bengi.userservice.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    @Mock
    private UserRepository userRepository;
    @Mock
    private PasswordEncoder passwordEncoder;
    @Mock
    private SecurityContext securityContext;
    @Mock
    private Authentication authentication;

    @InjectMocks
    private UserService userService;

    private User user;
    private UUID userId;

    @BeforeEach
    void setUp() {
        userId = UUID.randomUUID();
        user = User.builder()
                .id(userId)
                .firstName("John")
                .lastName("Doe")
                .email("john@example.com")
                .role(Role.USER)
                .build();

        SecurityContextHolder.setContext(securityContext);
        when(securityContext.getAuthentication()).thenReturn(authentication);
        when(authentication.getName()).thenReturn("john@example.com");
    }

    @Test
    void getAllUsers_ShouldReturnListOfUsers() {
        // Arrange
        when(userRepository.findAll()).thenReturn(List.of(user));

        // Act
        List<UserResponse> users = userService.getAllUsers();

        // Assert
        assertFalse(users.isEmpty());
        assertEquals(1, users.size());
        assertEquals(user.getEmail(), users.get(0).getEmail());
    }

    @Test
    void getUserById_ShouldReturnUser() {
        // Arrange
        when(userRepository.findById(userId)).thenReturn(Optional.of(user));

        // Act
        UserResponse response = userService.getUserById(userId);

        // Assert
        assertNotNull(response);
        assertEquals(user.getEmail(), response.getEmail());
    }

    @Test
    void getUserById_ShouldThrowException_WhenUserNotFound() {
        // Arrange
        when(userRepository.findById(any())).thenReturn(Optional.empty());

        // Act & Assert
        assertThrows(EntityNotFoundException.class, () -> userService.getUserById(UUID.randomUUID()));
    }

    @Test
    void updateUser_ShouldUpdateUserDetails() {
        // Arrange
        UpdateUserRequest request = UpdateUserRequest.builder()
                .firstName("Jane")
                .lastName("Doe")
                .email("jane@example.com")
                .build();

        when(userRepository.findById(userId)).thenReturn(Optional.of(user));
        when(userRepository.findByEmail("john@example.com")).thenReturn(Optional.of(user));
        when(userRepository.save(any())).thenReturn(user);

        // Act
        UserResponse response = userService.updateUser(userId, request);

        // Assert
        assertNotNull(response);
        verify(userRepository).save(any(User.class));
    }
}