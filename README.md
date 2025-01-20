# Unhandled Dynamic Route Parameters in Next.js 15

This repository demonstrates a common error in Next.js 15 applications related to unhandled dynamic route parameters.  Accessing query parameters directly in a page component without proper error handling can lead to runtime issues if those parameters are not present.

## Bug Description

The `About` page attempts to access `query` parameters using `useRouter()`, which can result in errors if a user navigates to `/about` without any additional parameters.

## Solution

The solution involves using optional chaining (`?.`) or conditional rendering to safely access query parameters.  This prevents the application from crashing due to undefined values.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. Navigate to `/about` - you will see the error in the console.
5. Navigate to `/about?id=123` - the error will be resolved with the solution.