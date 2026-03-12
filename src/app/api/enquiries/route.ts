import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabase';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, city } = body;

    if (!name || !phone || !city) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const { error } = await supabase
      .from('enquiries')
      .insert([{ name, phone, city }]);

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: 'Failed to save enquiry' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Enquiry saved successfully' });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

