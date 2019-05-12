## Zel protocol specifications

### Abstract
This paper specifies zel url protocol scheme and provides a guide on how to interact with ZelCore and ZelID.

### Introduction
Zel protocol is implemented inside of both ZelCore desktop and ZelCore mobile application. It helps other applications communicate with ZelCore and users ZelID with its own url protocol scheme. Website and third party application developers can thus interact with user via ZelCore and access ZelCores user (zelid) information to currently proceed with payments (important for merchandise stores) or authenticate with user zelid to any website.

### Basic protocol scheme
a) The url prefix to interact with ZelCore is zel:
b) Data in url must be encoded in standard uri scheme
c) Protocol scheme is defined as a standard query. The first interaction with parameter begins with ?param1= followed with &param2= etc.
d) Beginning ? is mandatory
e) Action parameter 'action' is expected. Without specifying an ?action= protocol will fall back to its default action which is a pay action

### Protocol actions
Currently 2 protocol actions are implemented with many more to come
a) pay
b) sign

### Pay action
Pay action is designed for third parties to request payments for ZelCore users. An example is a merchendise store generating a zel protocol url link which upon clicking launches ZelCore and fills payments neccessary data and thus significantly simplifies payment process while keeping high security standards.

**Pay action must have following specifications**
a) *address* - an address to which user shall send a payment
b) *amount* - amount in coin units (BTC, ETH, ZEL). If amount is a decimal number a point (.) is used as a decimal distinguisher. eg. 1.45 

**Pay action should have**
c) *coin* - a coin specification telling in what asset user should pay. Otherwise a request will fall back to default asset which is Bitcoin(BTC). Coin has to be a valid
coin as defined as one of uri specification inside ZelCore coinSimple.json file https://github.com/zelcash/ZelCore/blob/master/coinsSimple.js

**Pay action can have**
d) *message* - this is a payment note or payment ID (monero). Maximum payment note length in case of BTC forks is 80 characters and may default to just first 20 characters
depending on an end user. In case of Monero fork coins a payment ID should have 64 characters. Length of characters for ETH forks is not limited and is supplied as data attached 
to transaction. If interacting with a coin that is a token, in that case a message will not be attached.

*Example of a pay action url*
```
zel:?action=pay&coin=zelcash&address=t1UQfB1QKe5abwUwGx7wAwHSjxSJLoXqgSg&amount=3&message=Payment%20for%20dinner
```

### Sign action
Sign action is designed as an authentication system for websites and is based on authparty http://authparty.io/ . Websites and other application can use zelcore users identity being zelid as the users identity on their website. Users thus does not have to register on their website, website does not have to store users credntials such as password and can only have a database tied to users zelid. ZelID is users unique bitcoin address he owns the private key to. It is a website role to ask ZelCore and thus users zelid to sign a specific message. ZelCore than signs this message with users zelid and supplies the signature and user zelid address back to the server (website) in a callback action 
or shows the signature. It is website responsibility to verify that obtained signature is valid. Meaning signature belongs to the zelid address and message that was asked for to be signed

**Sign action must have**
a) *?action=sign* - sign action must be defined
b) *message* - a message that user shall sign

**Sign action can have**
c) *icon* - and Icon of your service. This icon will be shown to the user
d) *callback*- Callback url to which ZelCore POSTs the data in following format

> stringified data as a standard query string of following Object =
```
{
   address - users zelid, a bitcoin address that will be used for signing obtained message
   message - message obtained from service
   signature - signature obtained by signing the message with an address (users zelid)
}
```
> Furthermore following header will be attached
```
"Content-Type": "application/x-www-form-urlencoded"
```

*Example of sign action url*
```
zel:?action=sign&message=Zel%20ID%20Login%20vdcwxyehi3z6ro9t7jszq&icon=http%3A%2F%2Fzelid.io%2Fimg%2FzelID.svg&callback=http%3A%2F%2Fdev.authparty.io%2Fapi%2Fv1%2Fauthorize_login%3Fmodal_id%3DWpKmMMyWqRZonzA
```
