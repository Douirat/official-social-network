package handlers

import (
	"fmt"
	"net/http"
)

func (app *Handler) RegisterHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Println("called")
}