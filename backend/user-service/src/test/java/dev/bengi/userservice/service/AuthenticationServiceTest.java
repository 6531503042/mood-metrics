package dev.bengi.userservice.service;

import dev.bengi.userservice.domain.model.Role;
import dev.bengi.userservice.domain.model.User;
import dev.bengi.userservice.dto.request.AuthenticationRequest;
import dev.bengi.userservice.dto.request.RegisterRequest;
import dev.bengi.userservice.dto.response.AuthenticationResponse;
import dev.bengi.userservice.repository.TokenRepository;
import dev.bengi.userservice.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class AuthenticationServiceTest {

    @Mock
    private UserRepository userRepository;
    @Mock
    private TokenRepository tokenRepository;
    @Mock
    private PasswordEncoder passwordEncoder;
    @Mock
    private JwtService jwtService;
    @Mock
    private AuthenticationManager authenticationManager;

    @InjectMocks
    private AuthenticationService authenticationService;

    private RegisterRequest registerRequest;
    private AuthenticationRequest authRequest;
    private User user;

    @BeforeEach
    void setUp() {
        registerRequest = RegisterRequest.builder()
                .firstName("John")
                .lastName("Doe")
                .email("john@example.com")
                .password("password")
                .role(Role.USER)
                .build();

        authRequest = AuthenticationRequest.builder()
                .email("john@example.com")
                .password("password")
                .build();

        user = User.builder()
                .firstName("John")
                .lastName("Doe")
                .email("john@example.com")
                .password("encodedPassword")
                .role(Role.USER)
                .build();
    }

    @Test
    void register_ShouldCreateNewUser() {
        // Arrange
        when(passwordEncoder.encode(any())).thenReturn("encodedPassword");
        when(userRepository.save(any())).thenReturn(user);
        when(jwtService.generateToken(any())).thenReturn("jwtToken");
        when(jwtService.generateRefreshToken(any())).thenReturn("refreshToken");

        // Act
        AuthenticationResponse response = authenticationService.register(registerRequest);

        // Assert
        assertNotNull(response);
        assertNotNull(response.getAccessToken());
        assertNotNull(response.getRefreshToken());
        verify(userRepository).save(any(User.class));
        verify(tokenRepository).save(any());
    }

    @Test
    void authenticate_ShouldAuthenticateExistingUser() {
        // Arrange
        when(userRepository.findByEmail(anyString())).thenReturn(Optional.of(user));
        when(jwtService.generateToken(any())).thenReturn("jwtToken");
        when(jwtService.generateRefreshToken(any())).thenReturn("refreshToken");

        // Act
        AuthenticationResponse response = authenticationService.authenticate(authRequest);

        // Assert
        assertNotNull(response);
        assertNotNull(response.getAccessToken());
        assertNotNull(response.getRefreshToken());
        verify(authenticationManager).authenticate(any());
    }
}