datasource db {
    provider = "postgresql"
    url      = env("DATABASE_URL")
  }
  