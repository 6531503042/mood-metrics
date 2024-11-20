package dev.bengi.userservice.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import dev.bengi.userservice.dto.request.AuthenticationRequest;
import dev.bengi.userservice.dto.request.RegisterRequest;
import dev.bengi.userservice.dto.response.AuthenticationResponse;
import dev.bengi.userservice.service.AuthenticationService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

@SpringBootTest
@AutoConfigureMockMvc
class AuthenticationControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockBean
    private AuthenticationService authenticationService;

    private RegisterRequest registerRequest;
    private AuthenticationRequest authRequest;
    private AuthenticationResponse authResponse;

    @BeforeEach
    void setUp() {
        registerRequest = RegisterRequest.builder()
                .firstName("John")
                .lastName("Doe")
                .email("john@example.com")
                .password("password")
                .build();

        authRequest = AuthenticationRequest.builder()
                .email("john@example.com")
                .password("password")
                .build();

        authResponse = AuthenticationResponse.builder()
                .accessToken("accessToken")
                .refreshToken("refreshToken")
                .build();
    }

    @Test
    void register_ShouldReturnAuthenticationResponse() throws Exception {
        when(authenticationService.register(any())).thenReturn(authResponse);

        mockMvc.perform(post("/api/v1/auth/register")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(registerRequest)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.access_token").value("accessToken"))
                .andExpect(jsonPath("$.refresh_token").value("refreshToken"));
    }

    @Test
    void authenticate_ShouldReturnAuthenticationResponse() throws Exception {
        when(authenticationService.authenticate(any())).thenReturn(authResponse);

        mockMvc.perform(post("/api/v1/auth/authenticate")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(authRequest)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.access_token").value("accessToken"))
                .andExpect(jsonPath("$.refresh_token").value("refreshToken"));
    }
}