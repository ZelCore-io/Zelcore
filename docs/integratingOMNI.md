
# Integrating Omni  Token

Integration of Omni Token is fairly straightforward and consist of following integration scheme.

Integration is done in 2 steps.

1. Adjusting ZelCore files
2. Adjusting rates/markets repository

## Adjusting ZelCore Files

Adjustment consist of editing 3 files AND adding logo

ZelCore repository is located at [ZelCore Github](https://github.com/zelcash/ZelCore)

Files that need to be adjusted are coinsSimple.js, coininfo.js, and newssources.js

### coinSimple.js

This file consist of an object of coin objects. This is a definition of a coin and technically everything that is needed for a coin to function in ZelCore. Coin specification is a named object. In case of Binance Chain BEP2 Tokens, following configuration shall be present

    usdtomni: {
      coin:  "usdtomni",
      name:  "Tether Omni",
      uri: [
        "tether",
        "usdt",
      ],
      pubKeyHash:  "00",
      scriptHash:  "05",
      normalAddress:  "1",
      scriptAddress:  "3",
      normalAddressB:  "1",
      scriptAddressB:  "3",
      wif:  "80",
      slip:  200,
      addresses: [],
      api: [
        "https://api.omniexplorer.info",
      ],
      unit:  "USDT",
      type:  "omni",
      explorer: [
        "https://omniexplorer.info/tx/",
      ],
      logolink:  "static/logos/USDT_Omni.svg",
      node: [
        "omniexplorer.info",
      ],
      fee:  0.0000226,
      feepolicy: {
        economy:  22,
        normal:  30,
        fast:  55,
      },
      color:  "#26a17a",
      backend: [
        "omni",
      ],
      decimals:  8,
      tokenNumber:  31,
    },

- The name of the object ALWAYS corresponds to the 'coin' variable in the object. Usually it is lower case of a ticker. This variable has to be lower case, without spaces and unique. Nowadays It is recommended to add omni behind it - eg from  usdt create usdtomni
- coin - This is unique identifier of a coin in ZelCore. Cannot contain space. It is recommended to add omni behind it.
- name - The name of the integrated coin, that will be displayed.
- uri - uri protocol schemes of coin that is using, can be multiple. Usually name, ticker. Cannot contain space.
- pubKeyHash - leave like this for default bitcoin P2PKH address derivation
- scriptHash - leave like this for default bitcoin P2SH address derivation
- normalAddress - leading symbol of P2PKH address, leave value like it is.
- scriptAddress - leading symbol of P2SH address, leave value like it is.
- normalAddressB - another leading symbol of P2PKH address, leave value like it is.
- scriptAddressB - another leading symbol of P2SH address, leave value like it is.
- wif - leave like it is for default Bitcoin WIF format of private key
- slip - leave like it is to follow slip standard, Omni has registered value of 200
- addresses: [] - leave like this
- api - api which zelcore shall use for this coin. Note the contract address inside. This has to be changed correctly to your token
- unit - unit that will be displayed for your coin. This is also unit that most services such as rates, markets, exchanges use for coin recognition
- type: "omni" - leave like this for Omni token
- explorer array - you can add more explorers that can be used for the showing transactions on the particular coin
- logolink - path inside ZelCore to your logo. Logos are always svg file and shall be named as your UNIT.svg
- node - available infura nodes. Feel free to add yours as well or any infura compatible nod
- fee - default fee used for the token. Leave as 0.0000226. Just a placeholder value as ZelCore calculates fee based on transaction size and satoshis per byte needed autoadjusted by network demands
- feepolicy - economy, normal and fast fee policies. Default satoshis per byte values for ZelCore fee policies. These values are automatically adjusted by ZelCore api to reflect current network demands and thus can be left like it is
- color - dominant color of the Token. Shall correspond to logo
- decimals - decimal places of your token. Make sure you get this right.
- backend - Only Omni type backend is coded. Leave like this.
- tokenNumber - Number of the token. Make sure to get this right!

### coininfo.js

This files controls some social interactions of coins. Displays description, links of coins, articles, available explorer, coin circulation and so on. Again a named object.

    usdt: {
      description:  "Tether (USDT) is a cryptocurrency with a value meant to mirror the value of the U.S. dollar. The idea was to create a stable cryptocurrency that can be used like digital dollars. Coins that serve this purpose of being a stable dollar substitute are called “stable coins.” Tether is the most popular stable coin and even acts as a dollar replacement on many popular exchanges! According to their site, Tether converts cash into digital currency, to anchor or “tether” the value of the coin to the price of national currencies like the US dollar, the Euro, and the Yen. Like other cryptos it uses blockchain. Unlike other cryptos, it is [according to the official Tether site] “100% backed by USD” (USD is held in reserve). The primary use of Tether is that it offers some stability to the otherwise volatile crypto space and offers liquidity to exchanges who can’t deal in dollars and with banks (for example to the sometimes controversial but leading exchange <a href=\"https://coingecko.com/en/exchanges/bitfinex\">Bitfinex</a>).\r\n\r\nThe digital coins are issued by a company called Tether Limited that is governed by the laws of the British Virgin Islands, according to the legal part of its website. It is incorporated in Hong Kong. It has emerged that Jan Ludovicus van der Velde is the CEO of cryptocurrency exchange Bitfinex, which has been accused of being involved in the price manipulation of bitcoin, as well as tether. Many people trading on exchanges, including Bitfinex, will use tether to buy other cryptocurrencies like bitcoin. Tether Limited argues that using this method to buy virtual currencies allows users to move fiat in and out of an exchange more quickly and cheaply. Also, exchanges typically have rocky relationships with banks, and using Tether is a way to circumvent that.\r\n\r\nUSDT is fairly simple to use. Once on exchanges like <a href=\"https://coingecko.com/en/exchanges/poloniex\">Poloniex</a> or Bittrex, it can be used to purchase Bitcoin and other cryptocurrencies. It can be easily transferred from an exchange to any Omni Layer enabled wallet. Tether has no transaction fees, although external wallets and exchanges may charge one. In order to convert USDT to USD and vise versa through the Tether.to Platform, users must pay a small fee. Buying and selling Tether for Bitcoin can be done through a variety of exchanges like the ones mentioned previously or through the Tether.to platform, which also allows the conversion between USD to and from your bank account.",
      total_supply:  3080109502,
      circulating_supply:  2057371745.62,
      websites: [
        "https://tether.to",
      ],
      explorers: [
        "https://blockchair.com/bitcoin/omni/property/31",
        "https://omniexplorer.info/asset/31",
        "https://etherscan.io/token/0xdac17f958d2ee523a2206206994597c13d831ec7",
        "https://usdt.tokenview.com",
      ],
      medium:  "",
      discord:  "",
      telegram:  "https://t.me/OfficialTether",
      bitcointalk:  "",
      facebook:  "https://facebook.com/tether.to",
      twitter:  "https://twitter.com/Tether_to",
      reddit:  "",
      repository:  "",
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

ZelCore contains News section. A general one and asset news section as well. It can handle many of RSS feeds

Here is an example for Quant

    usdt: [
      {
        name:  "Tether Blog",
        feed:  "https://tether.to/feed/",
        site:  "https://tether.to/press/",
        about:  "USDT is a cryptocurrency asset issued on the Bitcoin blockchain via the Omni Layer Protocol. It is also issued on the Ethereum blockchain via the ERC20 Token Standard.",
        pic:  "static/logos/USDT_Omni.svg",
      },
    ],

This array is an object of available news for an asset.

- name - name of the news
- feed - rss feed for the news
- site - site for the news for browsing
- about - short description. Less than 300 characters!
- pic - logo displayed in case a news does not have a logo in the rss feed. Usually for assets we display the coin logo

### Logo

Please look at many examples in [Logos directory](https://github.com/zelcash/ZelCore/blob/master/logos/). This is where your logo has to be placed. It has to be a nice SVG in correspondence with ZelCore design of other logos. This logo will be used for your asset. Make it pretty and clean :)

## Rates & Markets

ZelCore uses its own Rates and Markets services. The repository can be found in [rates-api](https://github.com/zelcash/rates-api).

2 Files have to be adjusted

1. zelcoreMarkets.js
2. zelcoreRates.js

You can find them in [services folder](https://github.com/zelcash/rates-api/blob/master/src/services/) of rates-api.

Adjustment is usually very simple and adding just your UNIT to an api call will do. Or you can write a custom call specifically for your asset. Note that the output of the asset has to be the UNIT used in ZelCore coinSimple.js file.

## Notes

Please follow the styling, try using linting in your pull requests. We use 2 spaces, double quotes, commas.

## Thank you for your PRs

ZelCore Team
