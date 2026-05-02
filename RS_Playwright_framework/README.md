# RS Playwright Framework

A comprehensive Playwright test automation framework with TypeScript support for e-commerce and cinema booking workflows.

## Setup

```bash
npm install
npm run install:browsers
```

## Running Tests

- **Headless mode**: `npm test`
- **Headed mode**: `npm run test:headed`
- **UI mode**: `npm run test:ui`
- **Code generation**: `npm run codegen`

## Project Structure

- `tests/` - Test specification files
- `playwright.config.ts` - Playwright configuration
- `tsconfig.json` - TypeScript configuration

## Test Cases

### 1. Rahul Shetty Academy Login & Cart
- Login to the platform
- Select iPhone X product
- Add to cart
- Verify checkout

### 2. PVR Cinema Booking
- Select city and cinema
- Choose movie and showtime
- Select seat
- Complete booking flow
