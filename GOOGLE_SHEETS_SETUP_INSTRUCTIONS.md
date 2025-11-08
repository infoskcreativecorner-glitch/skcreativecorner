# Google Sheets Integration Setup Instructions

## Step 1: Create Your Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Click **"+ Blank"** to create a new spreadsheet
3. Name it: **"SK Creative Corner - Contact Form Submissions"**
4. In the first row, add these column headers:
   - A1: `Timestamp`
   - B1: `Name`
   - C1: `Email`
   - D1: `Mobile`
   - E1: `Subject`
   - F1: `Message`

## Step 2: Open Apps Script Editor

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code in the editor
3. Copy and paste the code from `google-apps-script.js` (I'll create this file)
4. Click the **Save** icon (💾) or press `Ctrl+S`
5. Name the project: **"Contact Form Handler"**

## Step 3: Deploy as Web App

1. In Apps Script editor, click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **"Web app"**
4. Fill in the settings:
   - **Description**: "Contact Form Submission Handler"
   - **Execute as**: "Me (your email)"
   - **Who has access**: "Anyone"
5. Click **Deploy**
6. Click **Authorize access**
7. Choose your Google account
8. Click **Advanced** → **Go to Contact Form Handler (unsafe)**
9. Click **Allow**
10. **COPY THE WEB APP URL** - it looks like:
    `https://script.google.com/macros/s/XXXXX/exec`

## Step 4: Update Your Website

1. Open `index.html`
2. Find the line with the Web App URL placeholder
3. Replace `YOUR_GOOGLE_SCRIPT_URL_HERE` with the URL you copied in Step 3
4. Save the file

## Step 5: Test Your Form

1. Open your website
2. Go to the "Get in Touch" section
3. Fill out the form with test data
4. Click "Send Message"
5. Check your Google Sheet - the data should appear!

## Troubleshooting

### If the form doesn't submit:
- Make sure you copied the correct Web App URL
- Check that you selected "Anyone" for "Who has access"
- Try redeploying the script

### If data doesn't appear in the sheet:
- Check the Apps Script execution logs: **Executions** tab in Apps Script
- Make sure the column headers match exactly (case-sensitive)

### If you get an authorization error:
- Redeploy the script
- Make sure you clicked "Allow" during authorization

## Security Notes

- The Web App URL is public but only accepts POST requests
- No one can access your Google Sheet without permission
- All data is stored securely in your Google account
- You can revoke access anytime from Google Apps Script

## Features Included

✅ Automatic timestamp for each submission
✅ All form fields captured (Name, Email, Mobile, Subject, Message)
✅ Success/error messages shown to users
✅ Form automatically clears after successful submission
✅ Loading spinner during submission
✅ Email validation
✅ Mobile number validation (10 digits)

## Need Help?

If you encounter any issues, check:
1. Browser console for JavaScript errors (F12)
2. Apps Script execution logs
3. Make sure the sheet name matches the script

