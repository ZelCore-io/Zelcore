# Integrating Binance Chain BEP2 Token

Integration of Binance Chain BEP2 Token is fairly straightforward and consist of following integration scheme.
Integration is done in 2 steps.

 1. Adjusting zelcore files
 2. Adjusting rates/markets repository

## Adjusting zelcore Files

Adjustment consist of editing 3 files AND adding logo
Zelcore repository is located at [zelcore Github](https://github.com/zelcore-io/zelcore)
Files that need to be adjusted are coinsSimple.js, coininfo.js,  and newssources.js

### coinSimple.js

This file consist of an object of coin objects. This is a definition of a coin and technically everything that is needed for a coin to function in zelcore. Coin specification is a named object. In case of Binance Chain BEP2 Tokens, following configuration shall be present

    btcb: {
      coin: "btcb",
      name: "Bitcoin BEP2",
      uri: [
        "btcbinance",
        "bitcoinbnb",
        "btcb",
      ],
      addresses: [],
      api: [
        "https://dex.binance.org/",
        "https://dex-european.binance.org/",
        "https://dex-asiapacific.binance.org/",
        "https://dex-atlantic.binance.org/",
      ],
      unit: "BTCB",
      type: "bnb",
      explorer: [
        "https://explorer.binance.org/tx/",
      ],
      logolink: "static/logos/BTCB.svg",
      node: [
        "https://explorer.binance.org/",
      ],
      fee: 0.000375,
      feepolicy: {
        economy:  0.5,
        normal:  1,
        fast:  2,
      },
      color: "#f7931a",
      decimals: 8,
      backend: [
        "bnb",
      ],
      identifier: "BTCB-1DE",
    },

- The name of the object ALWAYS corresponds to the 'coin' variable in the object. Usually it is lower case of a ticker. This variable has to be lower case, without spaces and unique. It is reccommeded to add trc behind it.
- coin - This is unique identifier of a coin in zelcore. Cannot contain space. It is recommeded to add trc behind it.
- name - The name of the integrated coin, that will be displayed.
- uri - uri protocol schemes of coin that is using, can be multiple. Usually name, ticker. Cannot contain space.
- addresses: [] - leave like this
- api - api which zelcore shall use for this coin. Note the contract address inside. This has to be changed correctly to your token
- unit - unit that will be displayed for your coin. This is also unit that most services such as rates, markets, exchanges use for coin recognition
- type: "bnb" - leave like this for binance chain token
- explorer array - you can add more explorers that can be used for the showing transactions on the particular coin
- logolink - path inside zelcore to your logo. Logos are always svg file and shall be named as your UNIT.svg
- node - available infura nodes. Feel free to add yours as well or any infura compatible node
- fee - default fee used for the token. Leave as 0.000375. Others shall be discouraged and are not reflected anyway.
- feepolicy - economy, normal and fast fee policies. This field is obsolete and not used for BNB. It is left only for future compatibility. Leave like it is.
- color - dominant color of the Token. Shall correspond to logo
- decimals - decimal places of your token. Make sure you get this right.
- backend - Only Tron type backend is coded. Leave like this.
- identifier - contract name or a number. It is always a string. Make sure to get this right!

### coininfo.js

This files controls some social interactions of coins. Displays description, links of coins, articles, available explorer, coin circulation and so on. Again a named object.

    btcb: {
      description:  "BTCB is a BEP2 token that is 100% backed by Bitcoin (BTC). The reserve addresses are published for anyone to audit.",
      total_supply: 21000000,
      circulating_supply: 9001,
      websites: [
        "https://bitcoin.org/",
      ],
      explorers: [
        "https://explorer.binance.org/asset/BTCB-1DE",
      ],
      medium: "",
      discord: "",
      telegram: "",
      bitcointalk: "",
      facebook: "",
      twitter: "https://twitter.com/btc",
      reddit: "https://www.reddit.com/r/Bitcoin/",
      repository: "https://github.com/bitcoin",
    },

Fields are done to be self-explanatory:

- description - describe your asset
- total_supply - maximum supply of your asset
- circulating_supply - current supply in circulation
- websites - an array of projects websites
- explorers - explorer for your asset
- medium - medium link on which articles are published
- discord - invitation to discord
- telegram - main telegram group
- bitcointalk - thread for the asset
- facebook - available facebook group
- twitter - main twitter
- reddit - subreddit of asset
- repository - repository account. Does not have to be github. Bitbucket, gitlab and others possible as well.
- Others - feel free to add slack, wechat groups or others. We may let it available in the future

### newssources.js

Zelcore contains News section. A general one and asset news section as well. It can handle many of RSS feeds
Here is an example for Quant

    btcb: [
      {
        name: "Bitcoin News",
        feed: "https://www.reddit.com/r/bitcoin/.rss",
        site: "https://www.reddit.com/r/bitcoin/",
        about: "Subreddit for the discussion of Bitcoin 'The official source for CryptoCurrency News, Discussion & Analysis.",
        pic: "static/logos/BTCB.svg",
      },
    ],
This array is an object of available news for an asset.

- name - name of the news
- feed - rss feed for the news
- site - site for the news for browsing
- about - short description. Less than 300 characters!
- pic - logo displayed in case a news does not have a logo in the rss feed. Usually for assets we display the coin logo

### Logo

Please look at many examples in [Logos directory](https://github.com/zelcore-io/zelcore/blob/master/logos/). This is where your logo has to be placed. It has to be a nice SVG in correspondence with zelcore design of other logos. This logo will be used for your asset. Make it pretty and clean :)

## Rates & Markets

Zelcore uses its own Rates and Markets services. The repository can be found in [rates-api](https://github.com/zelcore-io/rates-api).
2 Files have to be adjusted

 1. zelcoreMarkets.js
 2. zelcoreRates.js

You can find them in [services folder](https://github.com/zelcore-io/rates-api/blob/master/src/services/) of rates-api.
Adjustment is usually very simple and adding just your UNIT to an api call will do. Or you can write a custom call specifically for your asset. Note that the output of the asset has to be the UNIT used in zelcore coinSimple.js file.

## Notes

Please follow the styling, try using linting in your pull requests. We use 2 spaces, double quotes, commas.

## Thank you for your PRs

Zelcore Team
