``` mermaid
erDiagram

serviceTickets {
  int id PK
  int userId FK
  varchar description
  boolean emergency
  date dateCompleted
}

customers {
  int id PK
  varchar address
  varchar phoneNumber
  int userId FK
}

employeeTickets {
  int id PK
  int employeeId FK
  int serviceTicketId FK
}

employees {
  int id PK
  varchar specialty
  float rate
  int userId FK
}

users {
  int id PK
  varchar fullName
  varchar email
  boolean isStaff
}

serviceTickets ||--o{ employeeTickets : includes
employees ||--o{ employeeTickets : includes
users ||--o{ employees : employs
users ||--o{ customers : owns
users ||--o{ serviceTickets : reports
