package main

import (
	"log"
	"net/http"

	"social-network/pkg/db/handlers"
	"social-network/pkg/db/sqlite"

	"github.com/gorilla/mux"
)

func main() {
	db := sqlite.InitDB("social-network.db")
	defer db.Close()

	// hub := websockets.NewHub(db)
	// go hub.Run()
	app := &handlers.Handler{Database: db}

	r := mux.NewRouter()

	// Use CORS middleware for all routes
	r.Use(handlers.CORS)

	// Subrouter for API
	apiRouter := r.PathPrefix("/api").Subrouter()

	// Auth routes
	apiRouter.HandleFunc("/register", app.RegisterHandler).Methods("POST", "OPTIONS")
	// apiRouter.HandleFunc("/login", app.LoginHandler).Methods("POST", "OPTIONS")

	// // Authenticated routes
	// authRouter := apiRouter.PathPrefix("/").Subrouter()
	// authRouter.Use(app.Authenticate)
	// authRouter.HandleFunc("/logout", app.LogoutHandler).Methods("POST", "OPTIONS")

	// WebSocket route
	// authRouter.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
	// 	app.ServeWs(hub, w, r)
	// })
	log.Println("Server is listening on port 8080...")
	if err := http.ListenAndServe(":8080", r); err != nil {
		log.Fatalf("Failed to start server: %v", err)
	}
}
