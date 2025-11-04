package repository

import "github.com/programmerjide/go-taskify/internal/server"

type Repositories struct{}

func NewRepositories(s *server.Server) *Repositories {
	return &Repositories{}
}
