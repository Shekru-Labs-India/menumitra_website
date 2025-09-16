# Play Store Data Safety Mapping - MenuMitra

## Overview
This document maps MenuMitra's privacy policy to Google Play Store Data Safety requirements. Use this information when filling out the Data Safety section in Google Play Console.

## Data Categories Collected

| Data Type | Collected | Shared | Used for Ads | Required for App Functionality |
|-----------|-----------|--------|--------------|-------------------------------|
| **Personal info** | ✅ | ❌ | ❌ | ✅ |
| - Name | ✅ | ❌ | ❌ | ✅ |
| - Email address | ✅ | ❌ | ❌ | ✅ |
| - Phone number | ✅ | ❌ | ❌ | ✅ |
| **Financial info** | ✅ | ❌ | ❌ | ✅ |
| - Payment info (processed via third-party gateways) | ✅ | ❌ | ❌ | ✅ |
| **Location** | ✅ | ❌ | ❌ | ✅ |
| - Approximate location (for BLE functionality) | ✅ | ❌ | ❌ | ✅ |
| **Contacts** | ❌ | ❌ | ❌ | ❌ |
| **Device or other IDs** | ✅ | ❌ | ❌ | ✅ |
| - Device ID | ✅ | ❌ | ❌ | ✅ |
| **App activity** | ✅ | ❌ | ❌ | ✅ |
| - App interactions | ✅ | ❌ | ❌ | ✅ |
| - In-app search history | ✅ | ❌ | ❌ | ✅ |
| - Other app activity (POS operations, order management) | ✅ | ❌ | ❌ | ✅ |
| **App info and performance** | ✅ | ❌ | ❌ | ✅ |
| - Crash logs | ✅ | ❌ | ❌ | ✅ |
| - Diagnostics | ✅ | ❌ | ❌ | ✅ |
| - Other app performance data | ✅ | ❌ | ❌ | ✅ |

## App Permissions Used

| Permission | Purpose | Required for Core Functionality |
|------------|---------|-------------------------------|
| `BLUETOOTH` | Enable staff device sync and BLE communication | ✅ |
| `BLUETOOTH_ADMIN` | Manage Bluetooth connections for POS sync | ✅ |
| `ACCESS_FINE_LOCATION` | Enable BLE functionality and device proximity detection | ✅ |
| `ACCESS_COARSE_LOCATION` | Approximate location for BLE operations | ✅ |
| `POST_NOTIFICATIONS` | Order alerts, system updates, critical communications | ✅ |
| `READ_EXTERNAL_STORAGE` | Access cached assets and receipts | ✅ |
| `WRITE_EXTERNAL_STORAGE` | Save receipts and offline data | ✅ |
| `RECEIVE_BOOT_COMPLETED` | Resume POS/background tasks after device restart | ✅ |
| `WAKE_LOCK` | Keep device awake during critical operations | ✅ |
| `INTERNET` | Sync data and communicate with servers | ✅ |
| `ACCESS_NETWORK_STATE` | Check connectivity for offline/online mode | ✅ |

## Third-Party Services That Access Data

| Service Provider | Data Accessed | Purpose | Data Sharing |
|------------------|---------------|---------|--------------|
| **Expo Notifications** | Device tokens, notification preferences | Push notification delivery | ✅ (Service Provider) |
| **Payment Gateways** | Payment information, transaction data | Payment processing | ✅ (Service Provider) |
| **Cloud Hosting** | All app data, user data | Data storage and processing | ✅ (Service Provider) |
| **Analytics Providers** | Usage data, crash reports | App performance monitoring | ✅ (Service Provider) |
| **Customer Support** | User communications, account info | Support ticket resolution | ✅ (Service Provider) |

## Data Safety Declarations

### Data Collection Purpose
- **App functionality**: All data collection is necessary for core POS and restaurant management features
- **Analytics**: Usage data collected for service improvement and debugging
- **Personalization**: User preferences stored for better experience
- **Developer communications**: Contact information used for support and service updates

### Data Sharing
- **No data sold**: MenuMitra does not sell personal data to third parties
- **Service providers only**: Data shared only with necessary service providers under contract
- **Legal compliance**: Data may be shared with authorities when legally required

### Data Security
- **Encryption**: All data encrypted in transit (TLS 1.2+) and at rest (AES-256)
- **Access controls**: Role-based access with least privilege principles
- **Secure storage**: Encrypted local storage for offline functionality

### User Controls
- **Data access**: Users can request copies of their data
- **Data deletion**: Users can request data deletion (subject to legal requirements)
- **Contact**: Users can contact info@menumitra.com for data requests

## Privacy Policy Verification

✅ **Privacy Policy URL**: https://menumitra.com/privacy-and-policy  
✅ **Publicly accessible**: Policy is available without login requirement  
✅ **Matches Play Console**: Data Safety declarations align with privacy policy  
✅ **Contact information**: Clear contact details provided (info@menumitra.com, +91 93178 18283)  
✅ **Data rights**: Clear explanation of user rights and how to exercise them  

## Implementation Notes

1. **Update Play Console**: Use this mapping to fill out Data Safety section
2. **Regular review**: Update Data Safety declarations when privacy policy changes
3. **User communication**: Ensure in-app privacy notices align with Play Store declarations
4. **Compliance monitoring**: Regular audits to ensure continued alignment

## Contact for Data Safety Questions

- **Email**: info@menumitra.com
- **Phone**: +91 93178 18283
- **Privacy Policy**: https://menumitra.com/privacy-and-policy

---

*This mapping is based on MenuMitra Privacy Policy v1.0 and should be updated whenever the privacy policy is modified.*
