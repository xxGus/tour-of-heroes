// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyCn7Lvuqs1ha7XxK7kPstE2kvesSI9c_gk',
        authDomain: 'heroes-b8228.firebaseapp.com',
        databaseURL: 'https://heroes-b8228.firebaseio.com',
        projectId: 'heroes-b8228',
        storageBucket: 'heroes-b8228.appspot.com',
        messagingSenderId: '313058136374'
    }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
