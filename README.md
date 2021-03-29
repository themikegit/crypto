# Crypto

Initial subscription is in app.ts in ngOnInit. Subject is introduced in crypto-api service. So iteration on observable is done from each component
directly to Subject in service.
BuildChart service is responsible for creating new chart object. Styling is centralized.
'\_variable.scss' contains color codes for app

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
