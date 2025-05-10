# Experiments

This Fastify application provides static JSON data, designed to prevent clients from manipulating it during experiments. The application is maintained by the experimentation team.

## Installation

1. Clone this repository.
2. Install the dependencies (requires Node version 20.12.1):

```bash
npm ci
```

## Configuration

- No environment variables are required at this time.

## Usage

To run the application in development mode:

```bash
npm run dev
```

To compile the TypeScript code to JavaScript:

```bash
npm run build
```

To run the compiled application:

```bash
npm start
```

## Testing

To execute the tests:

```bash
npm test
```

## Environments

The application supports the following environments:

- **Staging**: [https://commerce-staging.falabella.com/s/experiments/...](https://commerce-staging.falabella.com/s/experiments/...)
- **Development**: [https://commerce-dev.falabella.com/s/experiments/...](https://commerce-dev.falabella.com/s/experiments/...)
- **Production**: [https://commerce-production.falabella.com/s/experiments/...](https://commerce-production.falabella.com/s/experiments/...)

## Repository

- **URL**: [https://gitlab.falabella.tech/digital-retail/bu/falabella/b2c/services/experiments](https://gitlab.falabella.tech/digital-retail/bu/falabella/b2c/services/experiments)
- **Project ID**: 93485
- **FAI / Application ID**: APP02738
- **Cell ID**: CELL0020943

## Production Deployment

To deploy to production, create a tag following the `DD.MM.YYYY` format. Ensure all tests pass with 100% coverage and the code adheres to linting standards.

## Database

This API is `NOT` intended to be used with a database; instead, it operates with static JSON files.

## Adding New Paths

When adding a new path, create a folder with an ID, which can be either the EXP ticket number or the name of the feature. Inside this folder, include the tenant and version. The tenant folder can be omitted if not necessary.

## Asesor Online

Each tenant has its own versions and schedules, but all schedules follow a standardized structure, used in both testing and production. This structure is defined in `./src/routes/asesor-online/types.ts`.

Important notes:
- The schedule considers January as month 1 and Monday as day 1.
- The time format is 24-hour.
- The `default` property represents the standard schedule, while `especialTimes` (optional) contains special schedules for specific days, months, or years. When a request is made, the application checks `especialTimes`; if the date matches, it uses the special schedule. Otherwise, it falls back to `default`.
