import emailjs from '@emailjs/browser'

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
  paymentMethod?: 'cash' | 'card'
  basePrice: number
  finalPrice: number
  customerEmail?: string
  wantsDiscounts?: boolean
}

/**
 * Initialize EmailJS with public key
 */
export function initEmailJS() {
  emailjs.init(EMAILJS_PUBLIC_KEY)
}

/**
 * Format quote data into a readable email body
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
      emailBody += `Destination: ${data.destination}\n`
    }
    if (data.pickupTown) {
      emailBody += `Town: ${data.pickupTown}\n`
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

    const emailBody = formatQuoteEmail(data)
    const subject = `New Quote Request - ${data.serviceType === 'airport' ? 'Airport Service' : 'Long Distance Service'}`

    const templateParams = {
      to_email: 'info.westchesterlimousine@gmail.com',
      subject: subject,
      message: emailBody,
      service_type: data.serviceType === 'airport' ? 'Airport Service' : 'Long Distance Service',
      final_price: `$${data.finalPrice.toFixed(2)}`,
      customer_email: data.customerEmail || 'Not provided',
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

