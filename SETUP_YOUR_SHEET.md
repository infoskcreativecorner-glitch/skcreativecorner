# 🚀 Setup Guide for Your Google Sheet

## Your Google Sheet Details:
- **Sheet URL**: https://docs.google.com/spreadsheets/d/1vxiwP9yIo9lUiYdGN4Hpad8MVEtJN3N9uV968vfZV5c/edit
- **Sheet Name**: Portfolio Contacts
- **Columns**: Timestamp | Name | Email | Mobile | Subject | Message

---

## ⏱️ Quick Setup (10 minutes)

### ✅ STEP 1: Open Your Google Sheet

1. Click this link: https://docs.google.com/spreadsheets/d/1vxiwP9yIo9lUiYdGN4Hpad8MVEtJN3N9uV968vfZV5c/edit
2. Make sure you're logged into the Google account that owns this sheet
3. Verify the sheet name is **"Portfolio Contacts"** (check the tab at the bottom)
4. Verify the columns are: **Timestamp | Name | Email | Mobile | Subject | Message**

---

### ✅ STEP 2: Add Google Apps Script (3 minutes)

1. In your Google Sheet, click: **Extensions** → **Apps Script**
2. A new tab will open with the Apps Script editor
3. You'll see some default code - **DELETE ALL OF IT**
4. Open the file **`google-apps-script.js`** (in your project folder)
5. **COPY ALL** the code from that file
6. **PASTE** it into the Apps Script editor
7. Click the **💾 Save** icon (or press Ctrl+S)
8. At the top, name the project: **"Portfolio Contact Form"**

**The code is already configured for your sheet!** ✅
- Sheet ID: `1vxiwP9yIo9lUiYdGN4Hpad8MVEtJN3N9uV968vfZV5c`
- Sheet Name: `Portfolio Contacts`

---

### ✅ STEP 3: Test the Script (Optional but Recommended)

Before deploying, let's test if the script can write to your sheet:

1. In the Apps Script editor, find the function dropdown (top toolbar)
2. Select **`testScript`** from the dropdown
3. Click the **▶️ Run** button
4. You'll be asked to authorize:
   - Click **Review permissions**
   - Choose your Google account
   - Click **Advanced** → **Go to Portfolio Contact Form (unsafe)**
   - Click **Allow**
5. Go back to your Google Sheet
6. You should see a test row added! 🎉

If you see the test data, the script is working perfectly!

---

### ✅ STEP 4: Deploy as Web App (5 minutes)

1. In Apps Script editor, click **Deploy** → **New deployment**
2. Click the **⚙️ gear icon** next to "Select type"
3. Choose **"Web app"**
4. Configure the settings:
   - **Description**: Portfolio Contact Form Handler
   - **Execute as**: **Me (your-email@gmail.com)** ⚠️ IMPORTANT!
   - **Who has access**: **Anyone** ⚠️ IMPORTANT!
5. Click **Deploy**
6. A dialog will appear with your **Web App URL**
7. **COPY THIS URL** - it looks like:
   ```
   https://script.google.com/macros/s/AKfycbxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/exec
   ```
8. **SAVE THIS URL** - you'll need it in the next step!

---

### ✅ STEP 5: Connect Your Website (2 minutes)

1. Open **`index.html`** in your code editor
2. Press **Ctrl+F** to open Find
3. Search for: `YOUR_GOOGLE_SCRIPT_URL_HERE`
4. You'll find this line (around line 1673):
   ```javascript
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_URL_HERE';
   ```
5. Replace `YOUR_GOOGLE_SCRIPT_URL_HERE` with the URL you copied in Step 4
6. It should look like:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/exec';
   ```
7. **Save** the file (Ctrl+S)

---

### ✅ STEP 6: Test Your Contact Form! 🎉

1. Open your website in a browser (open `index.html`)
2. Scroll down to the **"Get in Touch"** section
3. Fill out the form with test data:
   - **Name**: Test User
   - **Email**: test@example.com
   - **Mobile**: 9876543210
   - **Subject**: Test Submission
   - **Message**: This is a test message
4. Click **"SEND MESSAGE"**
5. You should see: **"Thank you! Your message has been sent successfully..."**
6. Go to your Google Sheet: https://docs.google.com/spreadsheets/d/1vxiwP9yIo9lUiYdGN4Hpad8MVEtJN3N9uV968vfZV5c/edit
7. **Check if the data appeared!** 🎊

---

## 🎉 Success! Your Form is Live!

### What happens now:
✅ Every form submission goes to your **"Portfolio Contacts"** sheet  
✅ Timestamp is automatically added  
✅ All 6 fields are captured  
✅ Users see a success message  
✅ Form clears automatically  
✅ **100% FREE forever!**

---

## 🔧 Troubleshooting

### ❌ "Authorization required" when running testScript
**Solution:**
- Click "Review permissions"
- Choose your Google account
- Click "Advanced" → "Go to Portfolio Contact Form (unsafe)"
- Click "Allow"

### ❌ Form submits but no data in sheet
**Solution:**
- Make sure the sheet name is exactly **"Portfolio Contacts"** (case-sensitive)
- Check Apps Script execution logs: **Executions** tab in Apps Script editor
- Make sure you deployed with "Who has access" = "Anyone"

### ❌ "YOUR_GOOGLE_SCRIPT_URL_HERE" error in browser console
**Solution:**
- You forgot to replace the placeholder URL in index.html
- Go back to Step 5 and update the URL

### ❌ Mobile number validation error
**Solution:**
- Enter exactly 10 digits (no spaces, dashes, or country code)
- Example: 9876543210 ✅ | +91 98765 43210 ❌

---

## 📊 Your Data Will Look Like This:

| Timestamp | Name | Email | Mobile | Subject | Message |
|-----------|------|-------|--------|---------|---------|
| 1/15/2024 10:30:25 | John Doe | john@example.com | 9876543210 | Website Design | I need a website for my business... |
| 1/15/2024 11:45:10 | Jane Smith | jane@example.com | 9123456789 | Logo Design | Can you create a logo for... |

---

## 🎁 Bonus: Email Notifications (Optional)

### Want to receive an email when someone submits the form?

1. Open your Apps Script
2. Find line 38 (after the `sheet.appendRow(rowData);` line)
3. Add this code:

```javascript
// Send notification email to yourself
MailApp.sendEmail({
  to: "your-email@gmail.com",  // Replace with your email
  subject: "🔔 New Contact Form Submission - SK Creative Corner",
  body: "You have a new contact form submission!\n\n" +
        "Name: " + data.name + "\n" +
        "Email: " + data.email + "\n" +
        "Mobile: " + data.mobile + "\n" +
        "Subject: " + data.subject + "\n" +
        "Message: " + data.message + "\n\n" +
        "View all submissions: https://docs.google.com/spreadsheets/d/1vxiwP9yIo9lUiYdGN4Hpad8MVEtJN3N9uV968vfZV5c/edit"
});
```

4. Save and redeploy (Deploy → Manage deployments → Edit → Version: New version → Deploy)
5. Now you'll get an email every time someone submits! 📧

---

## 🔒 Security

- ✅ Your Google Sheet is **private** - only you can access it
- ✅ The Web App URL only accepts form submissions
- ✅ No one can read or modify your data
- ✅ All data is stored securely in your Google account

---

## ✅ Checklist

- [ ] Opened Google Sheet and verified columns
- [ ] Added Apps Script code
- [ ] Ran testScript successfully
- [ ] Deployed as Web App
- [ ] Copied Web App URL
- [ ] Updated index.html with the URL
- [ ] Tested the contact form
- [ ] Verified data appears in Google Sheet

---

## 🎊 Done!

Your contact form is now connected to your Google Sheet and ready to collect customer inquiries! 🚀

**Sheet URL**: https://docs.google.com/spreadsheets/d/1vxiwP9yIo9lUiYdGN4Hpad8MVEtJN3N9uV968vfZV5c/edit

