# accounts-500px

Login service for 500px accounts in Meteor

read more at [https://www.meteor.com/accounts] https://www.meteor.com/accounts


Configure 500px services. Example:

```
ServiceConfiguration.configurations.remove({
    service: "Fivehundredpx"
  });
  
ServiceConfiguration.configurations.upsert(
  { service: "Fivehundredpx" },
  { $set: { consumerKey: <your client_id>, secret: <client_secret> } }
);

```

Using any accounts-ui package it will enable the "Sign in with Fivehundredpx" button.