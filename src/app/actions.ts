'use server'

import { google } from 'googleapis';

export async function appendToGoogleSheet(data: any) {
  try {
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const formatter = new Intl.DateTimeFormat('pt-BR',{
      year:'numeric',
      month:'2-digit',
      day:'2-digit',
      hour:'2-digit',
      minute:'2-digit',
      second:'2-digit',
      timeZone:'America/Sao_Paulo'
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const rowData = [
      "",
      data.name,
      data.email,
      data.whatsapp,
      data.conta,
      formatter.format(new Date()), // Timestamp
      // Add other data fields here
    ];

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: process.env.GOOGLE_SHEETS_RANGE || "Leads App!B:F", // Default to first sheet
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [rowData],
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error appending to Google Sheet:', error);
    return null; // Or throw an error if you prefer
  }
}