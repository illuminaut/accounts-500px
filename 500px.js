Accounts.oauth.registerService('500px');
if (Meteor.isClient) {
  Meteor.loginWith500px = function(options, callback) {
    // support a callback without options
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }
    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    _500px.requestCredential(options, credentialRequestCompleteCallback);
  };
} else {
  Accounts.addAutopublishFields({
    forLoggedInUser: ['services.500px'],
    forOtherUsers: ['services.500px.name', 'services.500px.id']
  });
}
