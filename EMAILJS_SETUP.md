# EmailJS Setup Instructions

## 1. Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Set Up Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Copy the **Service ID** (you'll need this)

## 3. Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: Portfolio Contact from {{from_name}}

From: {{from_name}} ({{from_email}})
Message: {{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and copy the **Template ID**

## 4. Get Public Key

1. Go to "Account" → "General"
2. Copy your **Public Key**

## 5. Update Configuration

1. Open `src/config/emailjs.js`
2. Replace the placeholder values:
   - `YOUR_SERVICE_ID` with your Service ID
   - `YOUR_TEMPLATE_ID` with your Template ID
   - `YOUR_PUBLIC_KEY` with your Public Key

## 6. Test the Form

1. Start your development server: `npm start`
2. Go to the contact form
3. Fill out and submit the form
4. Check your email for the message

## Template Variables Used

- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{message}}` - Message content
- `{{to_email}}` - Your email address

## Free Tier Limits

- 200 emails per month
- Perfect for portfolio contact forms
- No credit card required

## Troubleshooting

- Check browser console for errors
- Verify all IDs are correct
- Ensure email service is properly connected
- Check spam folder for test emails
