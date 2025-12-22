import emailjs from '@emailjs/browser'
import { getDestinationDisplayName } from './airport-pricing-utils'

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_dkms0qa'
const EMAILJS_TEMPLATE_ID = 'template_86k4xx6'
const EMAILJS_PUBLIC_KEY = 'kb96CNJACX27xxhlD'

export interface QuoteData {
  serviceType: 'airport' | 'long-distance'
  direction?: 'pickup' | 'dropoff'
  pickupTown?: string
  dropoffTown?: string
  destination?: string
  paymentMethod: 'cash' | 'card'
  basePrice: number
  finalPrice: number
  customerEmail?: string
  wantsDiscounts: boolean
}

/**
 * Initialize EmailJS with public key
 */
export function initEmailJS() {
  emailjs.init(EMAILJS_PUBLIC_KEY)
}

/**
 * Format quote data into a readable HTML email body
 */
function formatQuoteEmailHTML(data: QuoteData): string {
  const timestamp = new Date().toLocaleString('en-US', {
    dateStyle: 'full',
    timeStyle: 'short',
  })

  const serviceTypeLabel = data.serviceType === 'airport' ? 'Airport Service' : 'Long Distance Service'
  const directionLabel = data.direction === 'pickup' ? 'Pickup from Airport' : 'Dropoff to Airport'
  const paymentLabel = data.paymentMethod === 'cash' ? 'Cash' : 'Credit Card'
  const cardFee = data.paymentMethod === 'card'
    ? data.finalPrice - data.basePrice 
    : 0

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Quote Request - ${serviceTypeLabel}</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: bold;">New Quote Request</h1>
              <p style="color: #e0e0e0; margin: 10px 0 0 0; font-size: 16px;">${serviceTypeLabel}</p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 30px;">
              <!-- Service Details Section -->
              <h2 style="color: #1a1a1a; font-size: 18px; margin: 0 0 15px 0; padding-bottom: 10px; border-bottom: 2px solid #e0e0e0;">Service Details</h2>
              <table width="100%" cellpadding="8" cellspacing="0">
                <tr>
                  <td style="color: #666666; font-weight: bold; width: 40%;">Service Type:</td>
                  <td style="color: #1a1a1a;">${serviceTypeLabel}</td>
                </tr>
                ${data.serviceType === 'airport' && data.direction ? `
                <tr>
                  <td style="color: #666666; font-weight: bold;">Direction:</td>
                  <td style="color: #1a1a1a;">${directionLabel}</td>
                </tr>
                ` : ''}
                ${data.serviceType === 'airport' && data.destination ? `
                <tr>
                  <td style="color: #666666; font-weight: bold;">${data.direction === 'pickup' ? 'Pickup Airport:' : 'Dropoff Airport:'}</td>
                  <td style="color: #1a1a1a;">${getDestinationDisplayName(data.destination)}</td>
                </tr>
                ` : ''}
                ${data.serviceType === 'airport' && data.direction === 'pickup' && data.dropoffTown ? `
                <tr>
                  <td style="color: #666666; font-weight: bold;">Dropoff Town:</td>
                  <td style="color: #1a1a1a;">${data.dropoffTown.charAt(0).toUpperCase() + data.dropoffTown.slice(1)}</td>
                </tr>
                ` : ''}
                ${data.serviceType === 'airport' && data.direction === 'dropoff' && data.pickupTown ? `
                <tr>
                  <td style="color: #666666; font-weight: bold;">Pickup Town:</td>
                  <td style="color: #1a1a1a;">${data.pickupTown.charAt(0).toUpperCase() + data.pickupTown.slice(1)}</td>
                </tr>
                ` : ''}
                ${data.serviceType === 'long-distance' && data.pickupTown ? `
                <tr>
                  <td style="color: #666666; font-weight: bold;">Pickup Town:</td>
                  <td style="color: #1a1a1a;">${data.pickupTown.charAt(0).toUpperCase() + data.pickupTown.slice(1)}</td>
                </tr>
                ` : ''}
                ${data.serviceType === 'long-distance' && data.dropoffTown ? `
                <tr>
                  <td style="color: #666666; font-weight: bold;">Dropoff Town:</td>
                  <td style="color: #1a1a1a;">${data.dropoffTown.charAt(0).toUpperCase() + data.dropoffTown.slice(1)}</td>
                </tr>
                ` : ''}
                ${data.paymentMethod ? `
                <tr>
                  <td style="color: #666666; font-weight: bold;">Payment Method:</td>
                  <td style="color: #1a1a1a;">${paymentLabel}</td>
                </tr>
                ` : ''}
              </table>

              <!-- Pricing Section -->
              <h2 style="color: #1a1a1a; font-size: 18px; margin: 30px 0 15px 0; padding-top: 20px; border-top: 2px solid #e0e0e0; padding-bottom: 10px; border-bottom: 2px solid #e0e0e0;">Pricing</h2>
              <table width="100%" cellpadding="8" cellspacing="0">
                <tr>
                  <td style="color: #666666; font-weight: bold; width: 40%;">Base Price:</td>
                  <td style="color: #1a1a1a; font-weight: bold;">$${data.basePrice.toFixed(2)}</td>
                </tr>
                ${cardFee > 0 ? `
                <tr>
                  <td style="color: #666666; font-weight: bold;">Card Processing Fee (13.5%):</td>
                  <td style="color: #1a1a1a;">$${cardFee.toFixed(2)}</td>
                </tr>
                ` : ''}
                <tr style="background-color: #f8f8f8;">
                  <td style="color: #1a1a1a; font-weight: bold; font-size: 16px; padding-top: 15px; padding-bottom: 15px; border-top: 2px solid #e0e0e0;">Total Price:</td>
                  <td style="color: #1a1a1a; font-weight: bold; font-size: 20px; padding-top: 15px; padding-bottom: 15px; border-top: 2px solid #e0e0e0;">$${data.finalPrice.toFixed(2)}</td>
                </tr>
              </table>

              <!-- Customer Information Section -->
              <h2 style="color: #1a1a1a; font-size: 18px; margin: 30px 0 15px 0; padding-top: 20px; border-top: 2px solid #e0e0e0; padding-bottom: 10px; border-bottom: 2px solid #e0e0e0;">Customer Information</h2>
              <table width="100%" cellpadding="8" cellspacing="0">
                <tr>
                  <td style="color: #666666; font-weight: bold; width: 40%;">Email:</td>
                  <td style="color: #1a1a1a;">
                    ${data.customerEmail ? `<a href="mailto:${data.customerEmail}" style="color: #0066cc; text-decoration: none;">${data.customerEmail}</a>` : '<span style="color: #999999; font-style: italic;">Not provided</span>'}
                  </td>
                </tr>
                <tr>
                  <td style="color: #666666; font-weight: bold;">Wants Discount Notifications:</td>
                  <td style="color: #1a1a1a;">${data.customerEmail && data.wantsDiscounts ? 'Yes' : 'No'}</td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f8f8f8; padding: 20px 30px; text-align: center; border-radius: 0 0 8px 8px; border-top: 1px solid #e0e0e0;">
              <p style="color: #666666; margin: 0; font-size: 12px;">
                Requested at: ${timestamp}
              </p>
              <p style="color: #999999; margin: 10px 0 0 0; font-size: 11px;">
                This quote was generated through the Westchester Limousine pricing tool.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim()
}

/**
 * Format quote data into a plain text email body (fallback)
 */
function formatQuoteEmail(data: QuoteData): string {
  const timestamp = new Date().toLocaleString('en-US', {
    dateStyle: 'full',
    timeStyle: 'short',
  })

  let emailBody = `New Quote Request - ${data.serviceType === 'airport' ? 'Airport Service' : 'Long Distance Service'}\n\n`
  emailBody += `═══════════════════════════════════════\n\n`

  // Service Details
  emailBody += `SERVICE DETAILS:\n`
  emailBody += `Service Type: ${data.serviceType === 'airport' ? 'Airport Service' : 'Long Distance Service'}\n`
  
  if (data.serviceType === 'airport') {
    if (data.direction) {
      emailBody += `Direction: ${data.direction === 'pickup' ? 'Pickup from Airport' : 'Dropoff to Airport'}\n`
    }
    if (data.destination) {
      emailBody += `${data.direction === 'pickup' ? 'Pickup Airport' : 'Dropoff Airport'}: ${data.destination}\n`
    }
    if (data.direction === 'pickup' && data.dropoffTown) {
      emailBody += `Dropoff Town: ${data.dropoffTown}\n`
    }
    if (data.direction === 'dropoff' && data.pickupTown) {
      emailBody += `Pickup Town: ${data.pickupTown}\n`
    }
    if (data.paymentMethod) {
      emailBody += `Payment Method: ${data.paymentMethod === 'cash' ? 'Cash' : 'Credit Card'}\n`
    }
  } else {
    if (data.pickupTown) {
      emailBody += `Pickup Town: ${data.pickupTown}\n`
    }
    if (data.dropoffTown) {
      emailBody += `Dropoff Town: ${data.dropoffTown}\n`
    }
    if (data.paymentMethod) {
      emailBody += `Payment Method: ${data.paymentMethod === 'cash' ? 'Cash' : 'Credit Card'}\n`
    }
  }

  emailBody += `\nPRICING:\n`
  emailBody += `Base Price: $${data.basePrice.toFixed(2)}\n`
  
  if (data.paymentMethod === 'card' && data.serviceType === 'airport') {
    const fee = data.finalPrice - data.basePrice
    emailBody += `Card Processing Fee (13.5%): $${fee.toFixed(2)}\n`
  }
  
  emailBody += `Final Price: $${data.finalPrice.toFixed(2)}\n`

  // Customer Information
  if (data.customerEmail) {
    emailBody += `\nCUSTOMER INFORMATION:\n`
    emailBody += `Email: ${data.customerEmail}\n`
    emailBody += `Wants Discount Notifications: ${data.wantsDiscounts ? 'Yes' : 'No'}\n`
  }

  emailBody += `\n═══════════════════════════════════════\n`
  emailBody += `Requested at: ${timestamp}\n`
  emailBody += `\nThis quote was generated through the Westchester Limousine pricing tool.`

  return emailBody
}

/**
 * Send quote email via EmailJS
 */
export async function sendQuoteEmail(data: QuoteData): Promise<{ success: boolean; error?: string }> {
  try {
    initEmailJS()

    const emailBodyHTML = formatQuoteEmailHTML(data)
    const emailBodyText = formatQuoteEmail(data)
    const subject = `New Quote Request - ${data.serviceType === 'airport' ? 'Airport Service' : 'Long Distance Service'}`

    // Prepare all template parameters
    const templateParams: Record<string, string> = {
      to_email: 'info.westchesterlimousine@gmail.com',
      subject: subject,
      // Main HTML email content - use {{message}} in EmailJS template
      message: emailBodyHTML,
      // Plain text fallback
      message_text: emailBodyText,
      // Individual fields for template flexibility
      service_type: data.serviceType === 'airport' ? 'Airport Service' : 'Long Distance Service',
      direction: data.direction === 'pickup' ? 'Pickup from Airport' : data.direction === 'dropoff' ? 'Dropoff to Airport' : '',
      destination: data.destination ? getDestinationDisplayName(data.destination) : '',
      pickup_town: data.serviceType === 'airport' && data.direction === 'dropoff' && data.pickupTown 
        ? data.pickupTown.charAt(0).toUpperCase() + data.pickupTown.slice(1)
        : data.serviceType === 'long-distance' && data.pickupTown
        ? data.pickupTown.charAt(0).toUpperCase() + data.pickupTown.slice(1)
        : '',
      dropoff_town: data.serviceType === 'airport' && data.direction === 'pickup' && data.dropoffTown
        ? data.dropoffTown.charAt(0).toUpperCase() + data.dropoffTown.slice(1)
        : data.serviceType === 'long-distance' && data.dropoffTown
        ? data.dropoffTown.charAt(0).toUpperCase() + data.dropoffTown.slice(1)
        : '',
      payment_method: data.paymentMethod === 'cash' ? 'Cash' : 'Credit Card',
      base_price: `$${data.basePrice.toFixed(2)}`,
      card_fee: data.paymentMethod === 'card'
        ? `$${(data.finalPrice - data.basePrice).toFixed(2)}`
        : '$0.00',
      final_price: `$${data.finalPrice.toFixed(2)}`,
      customer_email: data.customerEmail || 'Not provided',
      wants_discounts: data.customerEmail && data.wantsDiscounts ? 'Yes' : 'No',
      timestamp: new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' }),
    }

    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)

    return { success: true }
  } catch (error) {
    console.error('Error sending email:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to send email',
    }
  }
}

