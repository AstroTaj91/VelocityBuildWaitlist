/**
 * VelocityBuild.ai - Google Sheets Sync Script
 * 
 * 1. Create a Google Sheet.
 * 2. Go to Extensions > Apps Script.
 * 3. Delete everything and paste this code.
 * 4. Build headers in your sheet: timestamp, email, name, location, comment.
 * 5. Deploy > New Deployment > Web App.
 * 6. Set "Execute as: Me" and "Who has access: Anyone".
 * 7. Copy the Web App URL and add it to your .env.local as GOOGLE_SHEETS_WEBHOOK_URL.
 */

function doPost(e) {
    try {
        const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
        const data = JSON.parse(e.postData.contents);

        sheet.appendRow([
            data.timestamp || new Date().toISOString(),
            data.email,
            data.name || "N/A",
            data.location || "N/A",
            data.comment || "N/A"
        ]);

        return ContentService.createTextOutput(JSON.stringify({ result: 'success' }))
            .setMimeType(ContentService.MimeType.JSON);

    } catch (error) {
        return ContentService.createTextOutput(JSON.stringify({ result: 'error', error: error.toString() }))
            .setMimeType(ContentService.MimeType.JSON);
    }
}
