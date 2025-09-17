# Contact Configuration

This directory contains centralized configuration files for the MenuMitra website.

## 📧 Contact Configuration (`contact.ts`)

The `contact.ts` file contains all contact information, website URLs, and social media handles. Update this file to change contact information across the entire project.

### Usage

```typescript
import { email, phone, website, social } from '@/config/contact';
import { getEmailLink, getPhoneLink } from '@/config/contact';

// Use individual values
<a href={getEmailLink()}>{email}</a>
<a href={getPhoneLink()}>{phone}</a>

// Use website URLs
<a href={website.base}>Home</a>
<a href={website.stats}>Stats Dashboard</a>
```

### Configuration Options

```typescript
export const CONTACT_CONFIG = {
  // Primary contact email
  email: 'menumitra.info@gmail.com',
  
  // Phone number
  phone: '+91 93178 18283',
  
  // Company name
  companyName: 'MenuMitra',
  
  // Website URLs
  website: {
    base: 'https://menumitra.com',
    www: 'www.menumitra.com',
    stats: 'https://stats-v2.menumitra.com',
    kds: 'https://kds-v2.menumitra.com',
    cds: 'https://customer-v2.menumitra.com',
    customer: 'https://customer-v2.menumitra.com',
  },
  
  // Social media handles
  social: {
    youtube: '@menumitra',
    instagram: 'menumitra',
    facebook: 'menumitra',
    twitter: '@menumitra',
  },
  
  // Location
  location: 'India',
  
  // Business hours
  businessHours: 'Mon-Fri 9AM-6PM IST',
  
  // Response time
  responseTime: 'We\'ll respond within 24 hours',
};
```

### Helper Functions

- `getEmailLink(email?)` - Returns `mailto:` link
- `getPhoneLink(phone?)` - Returns `tel:` link  
- `getWebsiteUrl(path?)` - Returns full website URL with optional path

## 🔄 How to Update Contact Information

1. **Edit the config file**: Update values in `src/config/contact.ts`
2. **Changes apply globally**: All components using the config will automatically update
3. **No need to search/replace**: The config system handles all occurrences

## 📁 Files Using the Config

- ✅ `src/app/contact/page.tsx`
- ✅ `src/components/organisms/FooterSection.tsx`
- ✅ `src/app/layout.tsx`
- ✅ `src/app/sitemap.ts`
- ✅ `src/app/privacy-and-policy/page.tsx`
- ✅ `src/app/terms-and-conditions/page.tsx`
- ✅ `src/app/cookie-policy/page.tsx`
- ✅ `src/app/request-data-removal/page.tsx`
- ✅ `src/app/products/page.tsx`
- ✅ `src/app/book-demo/layout.tsx`

## 🚀 Benefits

- **Single source of truth**: All contact info in one place
- **Easy updates**: Change once, apply everywhere
- **Type safety**: TypeScript ensures correct usage
- **Consistency**: Prevents typos and inconsistencies
- **Maintainability**: Easy to update and manage
