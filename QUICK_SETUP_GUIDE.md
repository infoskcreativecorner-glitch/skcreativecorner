# 🚀 Quick Setup Guide - Google Sheets Contact Form

## ⏱️ Setup Time: 10-15 minutes

---

## 📋 STEP 1: Create Google Sheet (2 minutes)

1. Go to: https://sheets.google.com
2. Click **"+ Blank"** (top left)
3. Name it: **"SK Creative Corner - Contact Form"**
4. Add these headers in Row 1:

| A | B | C | D | E | F |
|---|---|---|---|---|---|
| Timestamp | Name | Email | Mobile | Subject | Message |

**Screenshot of what it should look like:**
```
A1: Timestamp
B1: Name
C1: Email
D1: Mobile
E1: Subject
F1: Message
```

---

## 📝 STEP 2: Add Google Apps Script (3 minutes)

1. In your Google Sheet, click: **Extensions** → **Apps Script**
2. You'll see a code editor with some default code
3. **DELETE ALL** the existing code
4. Open the file `google-apps-script.js` (I created it for you)
5. **COPY ALL** the code from that file
6. **PASTE** it into the Apps Script editor
7. Click the **💾 Save** icon (or press Ctrl+S)
8. Name the project: **"Contact Form Handler"**

---

## 🚀 STEP 3: Deploy as Web App (5 minutes)

1. In Apps Script editor, click **Deploy** → **New deployment**
2. Click the **⚙️ gear icon** next to "Select type"
3. Choose **"Web app"**
4. Configure settings:
   - **Description**: Contact Form Handler
   - **Execute as**: **Me (your-email@gmail.com)**
   - **Who has access**: **Anyone** ⚠️ IMPORTANT!
5. Click **Deploy**
6. Click **Authorize access**
7. Choose your Google account
8. You'll see a warning "Google hasn't verified this app"
   - Click **Advanced**
   - Click **Go to Contact Form Handler (unsafe)**
   - Click **Allow**
9. **COPY THE WEB APP URL**
   - It looks like: `https://script.google.com/macros/s/AKfycbxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/exec`
   - **SAVE THIS URL!** You'll need it in the next step

---

## 🔗 STEP 4: Connect Your Website (2 minutes)

1. Open `index.html` in your code editor
2. Press **Ctrl+F** (Find)
3. Search for: `YOUR_GOOGLE_SCRIPT_URL_HERE`
4. Replace it with the URL you copied in Step 3
5. **Save** the file

**Example:**
```javascript
// BEFORE:
const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_URL_HERE';

// AFTER:
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/exec';
```

---

## ✅ STEP 5: Test It! (2 minutes)

1. Open your website in a browser
2. Scroll to **"Get in Touch"** section
3. Fill out the form:
   - Name: Test User
   - Email: test@example.com
   - Mobile: 9876543210
   - Subject: Test
   - Message: This is a test
4. Click **"SEND MESSAGE"**
5. You should see: "Thank you! Your message has been sent successfully."
6. Check your Google Sheet - you should see the data!

---

## 🎉 Done! Your Form is Live!

### What happens now:
- ✅ Every form submission goes directly to your Google Sheet
- ✅ Timestamp is automatically added
- ✅ All fields are captured (Name, Email, Mobile, Subject, Message)
- ✅ Users see a success message
- ✅ Form automatically clears after submission
- ✅ 100% FREE forever!

---

## 🔧 Troubleshooting

### ❌ Form doesn't submit / No success message
**Solution:**
- Make sure you replaced `YOUR_GOOGLE_SCRIPT_URL_HERE` with your actual URL
- Check browser console (F12) for errors
- Make sure you selected "Anyone" for "Who has access"

### ❌ Data doesn't appear in Google Sheet
**Solution:**
- Check column headers match exactly: Timestamp, Name, Email, Mobile, Subject, Message
- Make sure you're looking at the correct sheet
- Check Apps Script execution logs: **Executions** tab in Apps Script editor

### ❌ "Authorization required" error
**Solution:**
- Redeploy the script (Deploy → Manage deployments → Edit → Deploy)
- Make sure you clicked "Allow" during authorization

### ❌ Mobile number validation error
**Solution:**
- Make sure you enter exactly 10 digits
- No spaces, dashes, or country code
- Example: 9876543210 ✅ | +91 98765 43210 ❌

---

## 📊 View Your Data

Your Google Sheet will look like this:

| Timestamp | Name | Email | Mobile | Subject | Message |
|-----------|------|-------|--------|---------|---------|
| 2024-01-15 10:30:25 | John Doe | john@example.com | 9876543210 | Website Design | I need a website... |
| 2024-01-15 11:45:10 | Jane Smith | jane@example.com | 9123456789 | Logo Design | Can you create... |

---

## 🔒 Security & Privacy

- ✅ Your Google Sheet is private - only you can access it
- ✅ The Web App URL is public but only accepts form submissions
- ✅ No one can read or modify your data
- ✅ All data is stored securely in your Google account
- ✅ You can revoke access anytime from Google Apps Script

---

## 🎁 Bonus Features (Optional)

### Want to receive email notifications?

1. Open your Apps Script
2. Find this commented code (around line 42):
```javascript
/*
MailApp.sendEmail({
  to: data.email,
  subject: "Thank you for contacting SK Creative Corner!",
  ...
});
*/
```
3. Remove the `/*` and `*/` to uncomment it
4. Save and redeploy
5. Now you'll send auto-reply emails to customers!

### Want to get notified when someone submits?

Add this code after line 38 in your Apps Script:
```javascript
// Send notification to yourself
MailApp.sendEmail({
  to: "your-email@gmail.com",  // Replace with your email
  subject: "New Contact Form Submission - SK Creative Corner",
  body: "Name: " + data.name + "\n" +
        "Email: " + data.email + "\n" +
        "Mobile: " + data.mobile + "\n" +
        "Subject: " + data.subject + "\n" +
        "Message: " + data.message
});
```

---

## 📞 Need Help?

If you're stuck, check:
1. Browser console (F12) for JavaScript errors
2. Apps Script execution logs (Executions tab)
3. Make sure all steps were followed exactly

---

## 🎊 Congratulations!

You now have a fully functional contact form that saves to Google Sheets - completely FREE! 🎉

No monthly fees, no limits, no third-party services needed!