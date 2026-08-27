import { createClient } from '@blinkdotnew/sdk'

export const blink = createClient({
  projectId: import.meta.env.VITE_BLINK_PROJECT_ID || 'jaxleen-landing-clone-5wmv71jb',
  publishableKey: import.meta.env.VITE_BLINK_PUBLISHABLE_KEY || 'blnk_pk_YdZESfTdOCl0Nl16vYQrEZIMacH7W5dx',
  authRequired: false,
  auth: { mode: 'managed' },
})
