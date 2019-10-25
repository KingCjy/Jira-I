package me.kingcjy.jira.app.api.organization;

import me.kingcjy.jira.app.api.response.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/organization")
public class OrganizationRegistrationController {

    @PostMapping
    public ResponseEntity<ApiResponse<Void>> registerOrganization() {

        return ApiResponse.successResponse();
    }
}
