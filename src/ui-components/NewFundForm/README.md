The component loads the new add a new Fund button and the form to add the data.
It will make an ajax call to its server and get back response. The form will send in CSRF token and few other details for verification before confirming to add it to the users account.

## Dependencies
  - Material UI
  - Security : CSRF

### Usage:

```<NewFundForm funds={LISTOFFUNDS} /> ```
