package service

import (
	"github.com/programmerjide/taskify/internal/lib/job"
	"github.com/programmerjide/taskifyternal/repository"
	"github.com/programmerjide/taskifyternal/server"
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
