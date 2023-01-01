package database

import (
	"github.com/clamor/models"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {

	connection, err := gorm.Open(mysql.Open("root:cablemodem1@/clamor"), &gorm.Config{})

	if err != nil {
		panic("Cannot locate database")
	}

	DB = connection

	connection.AutoMigrate(&models.User{})
}
