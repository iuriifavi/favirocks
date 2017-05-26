import { Injectable } from '@angular/core';

/*var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;

var oauth2Client = new OAuth2(
  '758038730356-vj0817r88nsqkqedjtljs0mmuvrpcs4a.apps.googleusercontent.com',
  'zIEHNTtXwx2jDdBXAb-zzN3O',
  ''
);

var scopes = [
  'https://www.googleapis.com/auth/plus.me',
  'https://www.googleapis.com/auth/calendar'
];

var url = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: scopes,
});*/

/*oauth2Client.getToken(code, function (err, tokens) {
  if (!err) {
    oauth2Client.setCredentials(tokens);
  }
});*/

@Injectable()
export class GapiService {
  protected _gapi: any = undefined

  test() {
    return this._gapi.client.request({
      'path': 'https://content.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails',
      'params': ['channelId=UCGh4Gh0FxKMP1-rDnUTUtZQ']
    })
  }

  init(callback) {
    //oauth2Client
    var start = () => {
          console.log(this);
          window["gapi"].client.init({
            'apiKey': 'AIzaSyD41RlxKB8HSYs1xtMPolt2r2bjokn_tWI',
            'clientId': '758038730356-vj0817r88nsqkqedjtljs0mmuvrpcs4a.apps.googleusercontent.com',
            'scopes': 'https://www.googleapis.com/youtube/v3'
          });
          if (callback) callback();
        }
    window["gapi"].load('client:youtube', start);
  }

  get instance() : any {
      if (this._gapi)
        return this._gapi
      else {
        return this._gapi = window["gapi"];
      }
   }

}