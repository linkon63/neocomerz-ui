---
name: neocomerz-ui-development
description: Build or modify neocomerz-ui components, hooks, utilities, and types using the package's strict TypeScript and API-response conventions.
---

# Neocomerz UI development

Apply this skill when changing code in this package.

## TypeScript

- Leave the package free of TypeScript errors.
- Do not introduce `any`, `unknown`, `undefined`, or `never` types. Model API data and component contracts with explicit interfaces and named types.
- Put all reusable types and interfaces in `src/types/`. Import them with `import type`; do not declare types or interfaces in `.tsx` files.

## API responses

- Check API success with the expected HTTP status codes, such as `response.status === 200` or `response.status === 201`.
- Do not use `response.ok` to decide whether an API request succeeded.
- Do not make API calls in `.tsx` files. Keep API requests in hooks or utility modules; components consume the hook state.

## Components and shared code

- Follow current Next.js and React guidance for client boundaries, server rendering, data loading, and accessibility.
- When logic is shared by more than one component, move it into a named function in `src/utils/` and cover its input and output with explicit types.
- Keep component files focused on rendering and local interaction state. Reuse shared types and utilities instead of duplicating response parsing, price logic, or formatting.
- Before adding a helper, check `src/utils/`. When an existing utility provides the needed behavior, import and use it instead of creating another implementation.

## Before finishing

- Run the relevant package type check or build.
- Confirm no new TypeScript errors or formatting errors were introduced.
