-- Create messages table
CREATE TABLE IF NOT EXISTS messages (
    id UUID PRIMARY KEY,
    content VARCHAR(255) NOT NULL DEFAULT 'Hello World',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
); 