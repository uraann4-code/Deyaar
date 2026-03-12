import { NextResponse } from 'next/server';
import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.resolve(process.cwd(), 'enquiries.db');
const db = new Database(dbPath);

// Initialize database
db.exec(`
  CREATE TABLE IF NOT EXISTS enquiries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    phone TEXT,
    city TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, city } = body;

    if (!name || !phone || !city) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const stmt = db.prepare('INSERT INTO enquiries (name, phone, city) VALUES (?, ?, ?)');
    stmt.run(name, phone, city);

    return NextResponse.json({ message: 'Enquiry saved successfully' });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
