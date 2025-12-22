# Correct EmailJS Template Configuration

## ❌ What You Did (WRONG)
You pasted a static HTML template with placeholders like:
- `[Service Type]`
- `[Airport/Destination Name]`
- `[Town Name]`
- `$XXX.XX`
- `customer@email.com`
- `[Timestamp]`

This won't work because EmailJS doesn't automatically replace these placeholders.

## ✅ What You Should Do (CORRECT)

### Step 1: Go to Your EmailJS Template
Visit: https://dashboard.emailjs.com/admin/template/86k4xx6

### Step 2: Clear the Email Body/Content Field
Delete everything in the email body/content field.

### Step 3: Add This Single Line
In the email body/content field, type exactly this:

```
{{message}}
```

That's it! Just `{{message}}` - nothing else.

### Step 4: Set Content Type to HTML
Make sure the content type is set to "HTML" (not plain text).

### Step 5: Save the Template
Click Save.

## How It Works

The code in `lib/email-service.ts` already generates a complete HTML email with:
- ✅ All actual values (not placeholders)
- ✅ Proper formatting
- ✅ All service details
- ✅ Pricing breakdown
- ✅ Customer information
- ✅ Timestamp

This complete HTML is sent to EmailJS in the `{{message}}` variable. When you use `{{message}}` in your template, EmailJS will insert the entire formatted email.

## Example of What You'll Receive

When a customer submits a quote, you'll receive an email like:

```
New Quote Request
Airport Service

Service Details
Service Type: Airport Service
Direction: Pickup from Airport
Pickup Airport: LaGuardia Airport
Dropoff Town: White Plains
Payment Method: Credit Card

Pricing
Base Price: $150.00
Card Processing Fee (13.5%): $20.25
Total Price: $170.25

Customer Information
Email: customer@example.com
Wants Discount Notifications: Yes

Requested at: Monday, January 15, 2024 at 2:30 PM
```

All values will be real, not placeholders!

## Summary

**EmailJS Template Email Body/Content:**
```
{{message}}
```

**Subject:**
```
{{subject}}
```

**Content Type:** HTML

That's all you need!

