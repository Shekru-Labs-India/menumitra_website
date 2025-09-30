# MenuMitra Image Generation System Prompt

## Project Context
You are working on the MenuMitra website project - a restaurant management system. The project is located at: `c:\Users\sugat\Documents\MenuMitra Android Apps\menumitra_website`

## Current Task Overview
You are generating images for restaurant management features using a two-tab workflow:
1. **Tab 0**: ChatGPT (Photorealistic Prompt Creator) - for getting elaborated prompts
2. **Tab 1**: Google Gemini - for generating images from those prompts

## Completed Work

### ✅ Outlet Types (7 images generated and implemented):
1. **Fine Dine** - Generated `fine-dine-management.png`, updated `src/app/outlet-type/fine-dine/page.tsx`
2. **Pizzeria** - Generated `pizzeria-management.png`, updated `src/app/outlet-type/pizzeria/page.tsx`
3. **Bakeries** - Generated `bakeries-management.png`, updated `src/app/outlet-type/bakeries/page.tsx`
4. **Bar & Pub** - Generated `bar-pub-management.png`, updated `src/app/outlet-type/bar-pub/page.tsx`
5. **Catering** - Generated `catering-management.png`, updated `src/app/outlet-type/catering/page.tsx`
6. **Cloud Kitchens** - Generated `cloud-kitchens-management.png`, updated `src/app/outlet-type/cloud-kitchens/page.tsx`
7. **Large Chain** - Generated `large-chain-management.png`, updated `src/app/outlet-type/large-chain/page.tsx`

### ✅ Features (12 images generated, 1 in progress):
1. **Billing Management** ✅ - Generated `billing-management.png`
2. **Inventory Management** ✅ - Generated `inventory-management.png`
3. **Menu Management** ✅ - Generated `menu-management.png`
4. **Online Order Management** ✅ - Generated `online-order-management.png`
5. **Restaurant Reports** ✅ - Generated `restaurant-reports-management.png`
6. **Customer Management** ⏳ - Currently generating
7. **Customer Feedback** - Pending prompt from ChatGPT
8. **Scan & Order** - Pending prompt from ChatGPT
9. **Store Management** - Pending prompt from ChatGPT
10. **Recipe Management** - Pending prompt from ChatGPT
11. **Social Media Management** - Pending prompt from ChatGPT
12. **Utility Management** - Pending prompt from ChatGPT
13. **Staff Management** - Pending prompt from ChatGPT
14. **Chain Management** - Pending prompt from ChatGPT

## Workflow Instructions

### Tab Management:
- **Tab 0**: ChatGPT (Photorealistic Prompt Creator) - URL: `https://chatgpt.com/g/g-iWNYzo5Td-photorealistic-prompt-creator/c/68dbb2ba-feac-8323-b8f3-784efa1d47e5`
- **Tab 1**: Google Gemini - URL: `https://gemini.google.com/app/9f5e70ba23e3dc0c`

### Image Generation Process:
1. **Get elaborated prompt from ChatGPT** (Tab 0):
   - Submit feature name with detailed description
   - Wait for response with elaborated prompt
   - Copy the detailed prompt

2. **Generate image in Gemini** (Tab 1):
   - Use the elaborated prompt from ChatGPT
   - Wait for image generation to complete
   - **DO NOT download individual images** - user wants bulk download at the end

### Prompt Format for ChatGPT:
```
[Feature Name] - Restaurant [feature] system with human managers and technology integration. Show restaurant managers and supervisors using digital [feature] systems, tablets, and [specific software] while managing restaurant [feature]. Include modern [feature] displays, managers reviewing [feature] on tablets, staff members [specific actions], and real-time [feature] coordination. Focus on the seamless blend of human leadership and advanced [feature] technology in a professional restaurant environment in Pune. Show the efficiency and coordination of modern [feature] systems while maintaining the personal touch of human management.
```

### Image Generation Prompt Format for Gemini:
```
inside a modern restaurant in Pune, [feature] scene, restaurant managers and staff using [specific technology], [detailed scene description], interiors blending contemporary design with subtle Indian décor elements, focus on seamless blend of human [service/management] and advanced [feature] technology, showcasing efficiency, accuracy, and professionalism, shot on Fujifilm, Fujicolor C200, depth of field emphasized --ar 16:9 --style raw
```

## Current Status
- **12 out of 13 feature images generated**
- **Customer Management image currently generating**
- **7 prompts still pending from ChatGPT**
- **All images to be downloaded in bulk at the end**
- **Code files to be updated after all images are ready**

## File Structure
- Images stored in: `public/images/`
- Code files to update: `src/app/features/[feature-name]/page.tsx`
- Downloaded images location: `.playwright-mcp/` (temporary)

## Key Instructions
1. **DO NOT download images individually** - wait for bulk download
2. **Use elaborated prompts from ChatGPT** - don't use simple words
3. **Focus on "human and tech blend"** theme
4. **All images should be restaurant management focused**
5. **Use Pune, India as the location context**
6. **Maintain consistent Fujifilm, Fujicolor C200 style**

## Next Steps
1. Complete Customer Management image generation
2. Switch to ChatGPT to get remaining 7 prompts
3. Generate remaining 7 feature images
4. Download all images in bulk
5. Rename and move images to `public/images/`
6. Update code files to use new images

## Technical Details
- Browser: Playwright MCP
- Image format: PNG
- Aspect ratio: 16:9
- Style: Raw, documentary-style
- Location: Pune, India
- Theme: Human + Technology integration in restaurant management

## User Preferences
- Bulk download at the end (not individual downloads)
- Elaborated prompts for better results
- Human and tech blend theme
- Professional restaurant management focus
- Indian context (Pune)
