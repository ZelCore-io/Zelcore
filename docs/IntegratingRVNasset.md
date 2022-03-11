# Integrating Ravencoin (RVN) asset

Zelcore contains all RVN assets in Asset tab of RVN coin overview. This addition add a RVN asset as a native asset of zelcore - selectable as a custom asset without a need of going to asset overview through Raven thus adding exposure to project, uniqness and convenience of using.
Zelcore currently does not offer market and rates information. Nor news, asset information of particular RVN assets.
If projects wishes to add those information, please kindly contact us to build out these features.
Integration of RVN Asset is fairly straightforward and consist of following integration scheme.
Integration is thus done in a single step.

 1. Adjusting zelcore files

## Adjusting zelcore Files

Adjustment consist of editing 1 file AND adding logo
Zelcore repository is located at [zelcore Github](https://github.com/zelcore-io/zelcore)
File that need to be adjusted is coinsSimple.js,

### coinSimple.js

This file consist of an object of coin objects. This is a definition of a coin and technically everything that is needed for a coin to function in zelcore. Coin specification is a named object. In case of Binance Chain BEP2 Tokens, following configuration shall be present

    nahanrvn: {
      coin: "nahanrvn",
      name: "NAHAN",
      uri: [
        "nahanrvn",
        "nahan"
      ],
      type: "rvnasset",
      unit: "NAHAN",
      logolink: "static/logos/RVNNAHAN.svg",
      color: "#f05239",
      assetname: "NAHAN",
    },

- The name of the object ALWAYS corresponds to the 'coin' variable in the object. Usually it is lower case of a ticker. This variable has to be lower case, without spaces and unique. It is reccommeded to add rvn behind it.
- coin - This is unique identifier of a coin in zelcore. Cannot contain space. It is recommeded to add rvn behind it.
- name - The name of the integrated coin, that will be displayed. Name shall be the same as identifier or RVN network assetName (described later) to not confuse user.
- uri - uri protocol schemes of coin that is using, can be multiple. Usually name, ticker. Cannot contain space.
- unit - unit that will be displayed for your coin. This is also unit that most services such as rates, markets, exchanges use for coin recognition.
- type: "rvnasset" - leave like this for binance chain token
- logolink - path inside zelcore to your logo. Logos are always svg file and shall be named as your UNIT.svg
- color - dominant color of the Token. Shall correspond to logo
- assetname - identifier from which we zelcore selects correct RVN asset, make sure to get this right.

### Logo

Please look at many examples in [Logos directory](https://github.com/zelcore-io/zelcore/blob/master/logos/). This is where your logo has to be placed. It has to be a nice SVG in correspondence with zelcore design of other logos. This logo will be used for your asset. Make it pretty and clean :)

## Notes

Please follow the styling, try using linting in your pull requests. We use 2 spaces, double quotes, commas.

## Thank you for your PRs

Zelcore Team
