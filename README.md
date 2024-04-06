# SPLYCE API JS

![Splyce Logo](/img_samples/branding.png)

## Highlights

- Create Account Information
- [Read One Account](#highlights)
- [Update an Account](#highlights)
- [Delete an Account](#highlights)

## Install

```console
npm install splycejs_api
```

Typescripts are also supported in this package

## Usage

```javascript
const {splyce_api } = require("splycejs")
api.create_account({
    index: "2",
    account_name: "Username",
    account_number: "9349996963",
    bank_code: "044"
})
```

![Create Account](/img_samples/create_account.png)
![Read Account](/img_samples/read_account.png)
![Create Account](/img_samples/update_account.png)
