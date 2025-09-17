# BookDemoForm - Reusable Form Component

A highly configurable and reusable form component for booking demos and collecting user information.

## Components

### 1. `BookDemoForm`
The core form component with full customization options.

### 2. `BookDemoFormSection`
A wrapper component that includes section styling, title, description, and AOS animations.

## Basic Usage

### Simple Implementation
```tsx
import BookDemoFormSection from '@/components/forms/BookDemoFormSection';

export default function MyPage() {
  return <BookDemoFormSection />;
}
```

### Custom Form Fields
```tsx
import BookDemoForm, { FormField } from '@/components/forms/BookDemoForm';

const customFields: FormField[] = [
  {
    name: 'name',
    label: 'Full Name',
    type: 'text',
    placeholder: 'Enter your name',
    required: true,
    colSpan: 'half'
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'your@email.com',
    required: true,
    colSpan: 'half'
  }
];

export default function MyPage() {
  return (
    <BookDemoForm
      title="Contact Us"
      fields={customFields}
      submitButtonText="Send Message"
    />
  );
}
```

## Props Reference

### BookDemoForm Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `"Book A Demo"` | Form title |
| `description` | `string` | `"Fill out the form..."` | Form description |
| `submitButtonText` | `string` | `"Book Now"` | Submit button text |
| `fields` | `FormField[]` | `defaultFields` | Array of form fields |
| `apiEndpoint` | `string` | `'https://men4u.xyz/v2/website_api/create_booking'` | API endpoint URL |
| `apiHeaders` | `Record<string, string>` | `{ 'Content-Type': 'application/json' }` | API request headers |
| `className` | `string` | `""` | Additional CSS classes |
| `showBackground` | `boolean` | `true` | Show background blur effects |
| `showErrorDisplay` | `boolean` | `true` | Show error messages |
| `onSuccess` | `(data: any) => void` | `undefined` | Success callback |
| `onError` | `(error: any) => void` | `undefined` | Error callback |
| `onSubmit` | `(formData: any) => void` | `undefined` | Submit callback |
| `containerClassName` | `string` | `"bg-white dark:bg-dark-200..."` | Container styling |
| `formClassName` | `string` | `"bg-white dark:bg-dark-200..."` | Form styling |
| `fieldClassName` | `string` | `"block w-full text-sm..."` | Field styling |
| `buttonClassName` | `string` | `"btn disabled:opacity-50..."` | Button styling |

### BookDemoFormSection Props

Extends all `BookDemoForm` props plus:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `sectionClassName` | `string` | `"py-[200px] max-md:pt-150..."` | Section styling |
| `showSectionBackground` | `boolean` | `true` | Show section background |
| `showSectionTitle` | `boolean` | `true` | Show section title |
| `showSectionDescription` | `boolean` | `true` | Show section description |
| `enableAOS` | `boolean` | `true` | Enable AOS animations |
| `aosProps` | `object` | `{ 'data-aos': 'fade-up', ... }` | AOS animation props |

### FormField Interface

```tsx
interface FormField {
  name: string;                    // Field name (used as key)
  label: string;                   // Field label
  type: 'text' | 'email' | 'tel' | 'select';  // Field type
  placeholder: string;             // Placeholder text
  required?: boolean;              // Required field
  options?: { value: string; label: string }[];  // For select fields
  colSpan?: 'full' | 'half';      // Column span
}
```

## Examples

### 1. Basic Usage
```tsx
<BookDemoFormSection />
```

### 2. Custom Fields
```tsx
<BookDemoForm
  title="Get Started"
  fields={[
    { name: 'name', label: 'Name', type: 'text', placeholder: 'Your name', required: true, colSpan: 'half' },
    { name: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com', required: true, colSpan: 'half' }
  ]}
  submitButtonText="Get Started"
/>
```

### 3. Custom API Endpoint
```tsx
<BookDemoForm
  apiEndpoint="https://api.example.com/contact"
  apiHeaders={{ 'Authorization': 'Bearer token' }}
  onSuccess={(data) => console.log('Success:', data)}
  onError={(error) => console.log('Error:', error)}
/>
```

### 4. Custom Styling
```tsx
<BookDemoForm
  containerClassName="bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-xl"
  formClassName="bg-white/90 backdrop-blur-sm border border-white/20 rounded-lg p-6"
  fieldClassName="bg-white/80 border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
  buttonClassName="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all"
/>
```

### 5. Minimal Form (No Section Wrapper)
```tsx
<BookDemoForm
  showBackground={false}
  containerClassName="bg-gray-50 rounded-lg p-4"
  formClassName="bg-transparent border-none p-0"
  fields={minimalFields}
/>
```

## Integration Examples

### In a Modal
```tsx
import { useState } from 'react';
import BookDemoForm from '@/components/forms/BookDemoForm';

export default function ModalWithForm() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Form</button>
      
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <BookDemoForm
              title="Quick Contact"
              showBackground={false}
              containerClassName="bg-transparent p-0"
              formClassName="bg-transparent border-none p-0"
              onSuccess={() => setIsOpen(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}
```

### In a Sidebar
```tsx
<aside className="w-80 bg-gray-100 p-6">
  <BookDemoForm
    title="Get Started"
    showBackground={false}
    containerClassName="bg-transparent p-0"
    formClassName="bg-white rounded-lg p-4 border"
    fields={sidebarFields}
  />
</aside>
```

### In a Card
```tsx
<div className="bg-white rounded-xl shadow-lg p-8">
  <BookDemoForm
    title="Request Demo"
    showBackground={false}
    containerClassName="bg-transparent p-0"
    formClassName="bg-transparent border-none p-0"
    onSuccess={(data) => {
      // Handle success
      router.push('/thank-you');
    }}
  />
</div>
```

## Default Fields

The component comes with default fields for restaurant booking:

- **Name** (text, required)
- **Mobile Number** (tel, required)
- **Outlet Name** (text, required)
- **Outlet Type** (select, required) - Bakery, Cafe, Cake Shop, Canteen, Hotel, Mess, Outlet
- **City** (text, required)
- **Email** (email, required)

## Styling

The component uses Tailwind CSS classes and supports dark mode. All styling can be customized through props:

- `containerClassName` - Outer container styling
- `formClassName` - Form wrapper styling
- `fieldClassName` - Individual field styling
- `buttonClassName` - Submit button styling

## API Integration

The form automatically handles:
- Form validation
- API requests
- Loading states
- Error handling
- Success notifications
- Form reset

## Accessibility

The component includes:
- Proper form labels
- Required field indicators
- Error message display
- Loading state indicators
- Keyboard navigation support

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive
- Dark mode support
- Touch-friendly interface
