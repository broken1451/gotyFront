// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url: 'http://localhost:5000/goty-a7aab/us-central1',
  firebaseConfig : {
    apiKey: 'AIzaSyDeVJ4HTdmD5SOmDDxh1kiUwI9KkTTEBxI',
    authDomain: 'goty-a7aab.firebaseapp.com',
    databaseURL: 'https://goty-a7aab.firebaseio.com',
    projectId: 'goty-a7aab',
    storageBucket: 'goty-a7aab.appspot.com',
    messagingSenderId: '837290887261',
    appId: '1:837290887261:web:ac56c98fe59bd5af03e5b4',
    measurementId: 'G-F7DQYKQWXT'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
