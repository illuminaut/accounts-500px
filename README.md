# accounts-500px

Login service for 500px accounts in Meteor

read more at [https://www.meteor.com/accounts] https://www.meteor.com/accounts


Configure 500px services. Example:

```
ServiceConfiguration.configurations.remove({
    service: "500px"
  });
  
ServiceConfiguration.configurations.upsert(
  { service: "500px" },
  { $set: { consumerKey: <your client_id>, secret: <client_secret> } }
);

```

Using any accounts-ui package it will enable the Sign in with 500px button.