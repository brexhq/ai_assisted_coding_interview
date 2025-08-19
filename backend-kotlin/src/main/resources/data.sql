-- Insert sample messages
INSERT INTO messages (id, content, created_at) VALUES
(RANDOM_UUID(), 'Hello World', CURRENT_TIMESTAMP); 