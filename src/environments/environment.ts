// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

// import { MtlAuthLibraryConfig } from '@villemontreal/core-security-angular-lib';

// This file is the template file. Commit change to this file
// Copy this file to environment.local.ts to develop locally

export const environment: any = {
  production: false,
  backendUrl: 'http://localhost:12345',
  nuxeo: 'http://vdm.cgi.com:9090/nuxeo/ui/#!/browse/default-domain/workspaces/Service du greffe/processus dad',
  root : '/api',
  // domainPath: '/boroughs/permits/pet-licensing',
  // dciUrl: 'http://localhost:3333/recherche-citoyens',
  // mockDciApi: true,
  // dciApi: 'https://api.dev.interne.montreal.ca/api/city-services/citizen/search',
  pitbullCreateLimitDate: '2017-12-31',
  notSterilizedForMedicalReasonDocumentRequiredStartDate: '2019-01-01',
  authentificationConfig: {
    activation: false,
    authServerUrl: 'https://auth.dev.interne.montreal.ca',
    clientId: '@!4025.CA62.9BB6.16C5!0001!2212.0010!0008!2212.0070',
    customQueryParams: {acr_values: 'basic_multi_auth_conf_emp'},
    scope: 'openid profile user_name',
    postLoginRedirectUrl: 'http://localhost:4200',
    postLogoutRedirectUrl: 'http://localhost:4200',
    silentRefreshEnabled: false,
    silentRefreshUrl: 'http://localhost:4200',
    startupRoute: '/',
    unauthorizedRoute: '/error',
    applicationName: 'dad',
    storage: localStorage,
    redirectToGuardAttemptedUrl: true
  } //as MtlAuthLibraryConfig
};


