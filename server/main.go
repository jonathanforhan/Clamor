package main

import (
	"github.com/clamor/database"
	"github.com/clamor/routes"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {

	database.Connect()

	app := fiber.New()

	app.Use(cors.New(cors.Config{
		AllowCredentials: true,
	}))

	app.Static("/", "../client/build")

	routes.Setup(app)

	app.Listen(":8080")
}
