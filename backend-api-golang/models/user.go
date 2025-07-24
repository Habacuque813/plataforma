package models


import "time"

type User struct {
 ID string   `gorm:"type:uuid;primaryKey;default:uuid_generate_v4()"`
 Name string `gorm:"not null"`
 Email string `gorm:"unique,not null"`
 Password string `gorm:"not null"`
 Role string `gorm:"type:enum('Student', 'Teacher', 'Admin'); not null"`
 CreatedAt time.Time `gorm:"autoCreateTime"`
}
