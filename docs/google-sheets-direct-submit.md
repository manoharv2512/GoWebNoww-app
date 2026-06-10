# Google Sheets Direct Submit via Google Apps Script

This document explains how to send form data directly from the frontend to Google Sheets using Google Apps Script, without a backend.

## 1. Create a Google Apps Script

1. Open https://script.google.com
2. Create a new project.
3. Replace the default code with this script:

```javascript
function doPost(e) {
  try {
    // Get the spreadsheet (create it first and note the ID)
    const sheetId = "YOUR_SHEET_ID_HERE"; // Replace with your Google Sheet ID
    const sheet = SpreadsheetApp.openById(sheetId).getActiveSheet();

    // Parse the form data
    const data = JSON.parse(e.postData.contents);

    // Add headers if this is the first row
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Timestamp", "Name", "Email", "Pincode"]);
    }

    // Append the new row
    sheet.appendRow([new Date(), data.name, data.email, data.pincode]);

    return ContentService.createTextOutput(
      JSON.stringify({ success: true, message: "Data saved!" }),
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, message: error.toString() }),
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click **Deploy → New deployment**.
5. Select **Type: Web app**.
6. Set **Execute as:** your account.
7. Set **Who has access:** Anyone.
8. Deploy and copy the web app URL.

## 2. Create the Google Sheet

1. Open https://sheets.google.com.
2. Create a new spreadsheet.
3. Copy the Sheet ID from the URL between `/d/` and `/edit`.
4. Replace `YOUR_SHEET_ID_HERE` in the Apps Script with that ID.

## 3. Update the frontend call

In your frontend component, change the save button handler to send a POST request to the Apps Script URL.

Example update:

```tsx
onClick={async () => {
  try {
    const APPS_SCRIPT_URL = "https://script.google.com/macros/d/YOUR_DEPLOYMENT_ID/userweb/dev";

    const response = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify(saveForm),
    });

    const result = await response.json();

    if (result.success) {
      setSaved(true);
    } else {
      alert("Error: " + result.message);
    }
  } catch (error) {
    alert("Failed to save data: " + (error as Error).message);
  }
}}
```

## 4. Replace the values

- `YOUR_SHEET_ID` — the ID from your Google Sheet URL.
- `YOUR_DEPLOYMENT_ID` — the deployment identifier from your Apps Script web app URL.

## 5. Important notes

- Google Apps Script web apps can accept direct `fetch()` POST requests from browser code.
- No backend is needed when using this approach.
- Do not store sensitive secrets in client-side code.

## 6. Summary

This flow lets your app submit form data directly to Google Sheets:

- Create Google Apps Script.
- Deploy it as a public web app.
- Use the sheet ID in the script.
- Call the deployed URL from the browser.
- Append form values into the sheet.
