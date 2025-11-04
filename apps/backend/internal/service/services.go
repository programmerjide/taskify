package service

import (
	"github.com/programmerjide/go-taskify/internal/lib/job"
	"github.com/programmerjide/go-taskify/internal/repository"
	"github.com/programmerjide/go-taskify/internal/server"
)

type Services struct {
	Auth *AuthService
	Job  *job.JobService
}

func NewServices(s *server.Server, repos *repository.Repositories) (*Services, error) {
	authService := NewAuthService(s)

	return &Services{
		Job:  s.Job,
		Auth: authService,
	}, nil
}
