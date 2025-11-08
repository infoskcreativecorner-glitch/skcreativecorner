/**
 * Google Apps Script for SK Creative Corner Contact Form
 * This script receives form data and saves it to Google Sheets
 * 
 * INSTRUCTIONS:
 * 1. Open your Google Sheet
 * 2. Go to Extensions → Apps Script
 * 3. Delete any existing code
 * 4. Copy and paste this entire code
 * 5. Click Save (💾)
 * 6. Click Deploy → New deployment
 * 7. Select "Web app" as type
 * 8. Set "Execute as" to "Me"
 * 9. Set "Who has access" to "Anyone"
 * 10. Click Deploy and copy the Web App URL
 */

function doPost(e) {
  try {
    // Get the specific spreadsheet by ID and sheet by name
    var spreadsheet = SpreadsheetApp.openById('1vxiwP9yIo9lUiYdGN4Hpad8MVEtJN3N9uV968vfZV5c');
    var sheet = spreadsheet.getSheetByName('Portfolio Contacts');
    
    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);
    
    // Get current timestamp
    var timestamp = new Date();
    
    // Prepare the row data
    var rowData = [
      timestamp,           // Column A: Timestamp
      data.name,          // Column B: Name
      data.email,         // Column C: Email
      data.mobile,        // Column D: Mobile
      data.subject,       // Column E: Subject
      data.message        // Column F: Message
    ];
    
    // Append the data to the sheet
    sheet.appendRow(rowData);
    
    // Optional: Send auto-reply email (uncomment if you want this feature)
    /*
    MailApp.sendEmail({
      to: data.email,
      subject: "Thank you for contacting SK Creative Corner!",
      body: "Dear " + data.name + ",\n\n" +
            "Thank you for reaching out to us. We have received your message and will get back to you shortly.\n\n" +
            "Your message:\n" + data.message + "\n\n" +
            "Best regards,\n" +
            "SK Creative Corner Team"
    });
    */
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        'status': 'success',
        'message': 'Thank you! Your message has been sent successfully.'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        'status': 'error',
        'message': 'Sorry, there was an error. Please try again or contact us directly.',
        'error': error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function to verify the script works
function testScript() {
  var testData = {
    name: "Test User",
    email: "test@example.com",
    mobile: "9876543210",
    subject: "Test Subject",
    message: "This is a test message"
  };

  var spreadsheet = SpreadsheetApp.openById('1vxiwP9yIo9lUiYdGN4Hpad8MVEtJN3N9uV968vfZV5c');
  var sheet = spreadsheet.getSheetByName('Portfolio Contacts');
  var timestamp = new Date();
  var rowData = [timestamp, testData.name, testData.email, testData.mobile, testData.subject, testData.message];
  sheet.appendRow(rowData);

  Logger.log("Test data added successfully!");
}

