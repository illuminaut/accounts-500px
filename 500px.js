Accounts.oauth.registerService('Fivehundredpx');
if (Meteor.isClient) {
  Meteor.loginWithFivehundredpx = function(options, callback) {
    // support a callback without options
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }
    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    Fivehundredpx.requestCredential(options, credentialRequestCompleteCallback);
  };
} else {
  Accounts.addAutopublishFields({
    forLoggedInUser: ['services.Fivehundredpx'],
    forOtherUsers: ['services.Fivehundredpx.name', 'services.Fivehundredpx.id']
  });
}
