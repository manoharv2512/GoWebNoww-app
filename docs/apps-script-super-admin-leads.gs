const SUPER_ADMIN = {
  spreadsheetId: "1WfEOBxiCjpZ7IzdMS7JqjZl0q_UA0-j8ixDz922-FSM",
  sheetName: "AllLeads",
};

const ADMINS = {
  Bunzaa: {
    spreadsheetId: "1Kz4lr6xnQGSC2ZjMwvZG32DRdFCWjytWinsqJUPLOSo",
    sheetName: "Sheet1",
    business: "Bunzaa",
  },
  KanchanMedicos: {
    spreadsheetId: "1PK5hLtXrQF96QpyrbrXZgqBy9TaHewbqRvq511Grctc",
    sheetName: "Sheet1",
    business: "Kanchan Medicos",
  },
  DevanshSports: {
    spreadsheetId: "11WCYcTXtbQUobhRRKSPyEVz0rWAFJVeROsmmlOozIgI",
    sheetName: "Sheet1",
    business: "Devansh Sports",
  },
};

const ADMIN_HEADERS = ["Timestamp", "Name", "PhoneNo", "Pincode"];
const SUPER_ADMIN_HEADERS = [
  "LeadId",
  "Timestamp",
  "AdminKey",
  "Business",
  "Name",
  "PhoneNo",
  "Pincode",
];

function doGet(e) {
  try {
    const phone = String(e.parameter.phone || "").trim();
    const adminKey = String(e.parameter.adminKey || "").trim();
    const callback = e.parameter.callback;

    if (!phone || !adminKey || !ADMINS[adminKey]) {
      return createOutput(
        { exists: false, error: "Invalid phone or adminKey" },
        callback,
      );
    }

    const adminSheet = getSheet(
      ADMINS[adminKey].spreadsheetId,
      ADMINS[adminKey].sheetName,
    );
    ensureHeaders(adminSheet, ADMIN_HEADERS);

    const data = adminSheet.getDataRange().getValues();
    const phoneCol = 2;
    const exists = data.slice(1).some((row) => {
      return String(row[phoneCol]).trim() === phone;
    });

    return createOutput({ exists }, callback);
  } catch (error) {
    return createOutput(
      { exists: false, error: String(error) },
      e.parameter.callback,
    );
  }
}

function doPost(e) {
  const lock = LockService.getScriptLock();

  try {
    lock.waitLock(10000);

    const payload = parseRequestPayload(e);
    const adminKey = String(
      payload.adminKey || findAdminKeyFromBusiness(payload.businessName),
    ).trim();

    if (!adminKey || !ADMINS[adminKey]) {
      return createJsonResponse({
        success: false,
        message: "Invalid adminKey",
      });
    }

    const name = String(payload.name || "").trim();
    const phoneNo = String(payload.phoneNo || "").trim();
    const pincode = String(payload.pincode || "").trim();

    if (!name || !phoneNo || !pincode) {
      return createJsonResponse({
        success: false,
        message: "Missing required fields",
      });
    }

    if (!/^\d{10}$/.test(phoneNo)) {
      return createJsonResponse({
        success: false,
        message: "Invalid phone number",
      });
    }

    const adminConfig = ADMINS[adminKey];
    const adminSheet = getOrCreateSheet(
      adminConfig.spreadsheetId,
      adminConfig.sheetName,
    );
    const superAdminSheet = getOrCreateSheet(
      SUPER_ADMIN.spreadsheetId,
      SUPER_ADMIN.sheetName,
    );

    ensureHeaders(adminSheet, ADMIN_HEADERS);
    ensureHeaders(superAdminSheet, SUPER_ADMIN_HEADERS);

    const timestamp = new Date();
    const leadId = Utilities.getUuid();

    adminSheet.appendRow([timestamp, name, phoneNo, pincode]);
    superAdminSheet.appendRow([
      leadId,
      timestamp,
      adminKey,
      adminConfig.business,
      name,
      phoneNo,
      pincode,
    ]);

    return createJsonResponse({
      success: true,
      message: "Data saved!",
      leadId,
    });
  } catch (error) {
    return createJsonResponse({
      success: false,
      message: String(error),
    });
  } finally {
    lock.releaseLock();
  }
}

function getSheet(spreadsheetId, sheetName) {
  const sheet =
    SpreadsheetApp.openById(spreadsheetId).getSheetByName(sheetName);

  if (!sheet) {
    throw new Error(`Sheet not found: ${sheetName}`);
  }

  return sheet;
}

function getOrCreateSheet(spreadsheetId, sheetName) {
  const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  const existingSheet = spreadsheet.getSheetByName(sheetName);

  if (existingSheet) {
    return existingSheet;
  }

  return spreadsheet.insertSheet(sheetName);
}

function parseRequestPayload(e) {
  const rawBody =
    e && e.postData && typeof e.postData.contents === "string"
      ? e.postData.contents
      : "";

  if (rawBody) {
    try {
      return JSON.parse(rawBody);
    } catch (error) {
      // Fall back to URL encoded parsing below.
    }
  }

  const payload = {};
  const parameters = e && e.parameter ? e.parameter : {};

  Object.keys(parameters).forEach((key) => {
    payload[key] = String(parameters[key] || "").trim();
  });

  if (!payload.businessName && payload.business) {
    payload.businessName = payload.business;
  }

  return payload;
}

function findAdminKeyFromBusiness(businessName) {
  const normalizedBusiness = String(businessName || "")
    .trim()
    .toLowerCase();

  if (!normalizedBusiness) {
    return "";
  }

  const adminKey = Object.keys(ADMINS).find((key) => {
    return ADMINS[key].business.toLowerCase() === normalizedBusiness;
  });

  return adminKey || "";
}

function ensureHeaders(sheet, headers) {
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
  }
}

function createJsonResponse(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON,
  );
}

function createOutput(payload, callback) {
  const json = JSON.stringify(payload);
  const output = callback ? `${callback}(${json})` : json;

  return ContentService.createTextOutput(output).setMimeType(
    callback
      ? ContentService.MimeType.JAVASCRIPT
      : ContentService.MimeType.JSON,
  );
}

// ----------------------------------------------for single sheet - first beta version------------------------
// const SHEET_NAME = "Sheet1";
// const SHEET_ID = "1WfEOBxiCjpZ7IzdMS7JqjZl0q_UA0-j8ixDz922-FSM"; // same in both

// function doGet(e) {
//   const phone = e.parameter.phone;
//   const callback = e.parameter.callback;

//   // ✅ same sheet as doPost
//   const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
//   const data = sheet.getDataRange().getValues();
//   const phoneCol = 2; // Column C = PhoneNo (0=Timestamp, 1=Name, 2=PhoneNo, 3=Pincode)

//   const exists = data.some(row =>
//     String(row[phoneCol]).trim() === String(phone).trim()
//   );

//   const json = JSON.stringify({ exists });
//   const output = callback ? `${callback}(${json})` : json;

//   return ContentService
//     .createTextOutput(output)
//     .setMimeType(callback ? ContentService.MimeType.JAVASCRIPT : ContentService.MimeType.JSON);
// }

// function doPost(e) {
//   try {
//     // ✅ same sheet as doGet
//     const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
//     const data = JSON.parse(e.postData.contents);

//     if (sheet.getLastRow() === 0) {
//       sheet.appendRow(["Timestamp", "Name", "PhoneNo", "Pincode"]);
//     }

//     sheet.appendRow([
//       new Date(),
//       data.name,
//       data.phoneNo,
//       data.pincode,
//     ]);

//     return ContentService
//       .createTextOutput(JSON.stringify({ success: true, message: "Data saved!" }))
//       .setMimeType(ContentService.MimeType.JSON);

//   } catch (error) {
//     return ContentService
//       .createTextOutput(JSON.stringify({ success: false, message: error.toString() }))
//       .setMimeType(ContentService.MimeType.JSON);
//   }
// }
