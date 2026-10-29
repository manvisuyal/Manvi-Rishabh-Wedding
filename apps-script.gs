// FREE RSVP BACKEND: Google Sheets + Apps Script
// 1. Create a Google Sheet for RSVPs. Open Extensions > Apps Script.
// 2. Paste this code and save. Deploy > New deployment > Web app.
// 3. Execute as: Me. Access: Anyone (guests need not sign in). Deploy and copy URL.
// 4. Paste URL as rsvpEndpoint in config.js and publish the updated site.
// Sheet owner and anyone explicitly shared on the Sheet can view responses.
// Public endpoint accepts submissions; do not collect sensitive data.
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (sheet.getLastRow() === 0) sheet.appendRow(["Submitted At","Guest Name","Contact","Attendance","Events","Guest Count","Message"]);
  const d = JSON.parse((e && e.postData && e.postData.contents) || "{}");
  sheet.appendRow([new Date(), safe_(d.guestName), safe_(d.contact), safe_(d.attendance), Array.isArray(d.events)?d.events.join(", "):"", safe_(d.guestCount), safe_(d.message)]);
  return ContentService.createTextOutput(JSON.stringify({ok:true})).setMimeType(ContentService.MimeType.JSON);
}
function safe_(v) { return v == null ? "" : String(v).slice(0,2000); }