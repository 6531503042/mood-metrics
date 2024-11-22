package dev.bengi.userservice.application.port.input;

import dev.bengi.userservice.domain.model.User;
import dev.bengi.userservice.presentation.dto.request.AuthenticationRequest;
import dev.bengi.userservice.presentation.dto.request.RegisterRequest;
import dev.bengi.userservice.presentation.dto.response.AuthenticationResponse;

public interface AuthenticationUseCase {
    User register(RegisterRequest request);

    AuthenticationResponse authenticate(AuthenticationRequest request);

    AuthenticationResponse refreshToken(String refreshToken);

    void logout(String token);
}