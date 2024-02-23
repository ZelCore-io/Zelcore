# Integrating Polygon Token

Integration of Polygon ERC20 Token is fairly straightforward and consist of following integration scheme.
Integration is done in 2 steps.

 1. Adjusting zelcore files
 2. Adjusting rates/markets repository

## Adjusting zelcore Files

Adjustment consist of editing 3 files AND adding logo
Zelcore repository is located at [zelcore Github](https://github.com/zelcore-io/zelcore)
Files that need to be adjusted are coinsSimple.js, coininfo.js,  and newssources.js

### coinSimple.js

This file consist of an object of coin objects. This is a definition of a coin and technically everything that is needed for a coin to function in zelcore. Coin specification is a named object. In case of Polygon ERC20 Tokens, following configuration shall be present

```js
    usdcpoly: {
      coin: "usdcpoly",
      name: "USD Coin POLY",
      uri: [
        "usdcpoly",
        "usdc",
        "usdcoin",
      ],
      addresses: [],
      api: [
        "https://api.polygonscan.com/api?module=account&action=tokentx&contractaddress=0x2791bca1f2de4661ed88a30c99a7a9449aa84174&address=",
      ],
      unit: "USDC",
      type: "polygon",
      family: "ethlike",
      coinType: "token",
      explorer: [
        "https://polygonscan.com/tx/",
      ],
      logolink: "@/assets/logos/USDC_POLY.svg",
      node: [
        "https://rpc-mainnet.maticvigil.com/v1/402f9f697388f6a978ca9579a79e6b17d60f1378",
        "https://polygon-rpc.com",
      ],
      fee: 120000,
      feepolicy: {
        economy: 22,
        normal: 30,
        fast: 45,
      },
      color: "#2775ca",
      contractAddress: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
      decimals: 6,
      backend: [
        "polygon",
      ],
    },
```

- The name of the object ALWAYS corresponds to the 'coin' variable in the object. Usually it is lower case of a ticker. This variable has to be lower case, without spaces and unique. It is reccommeded to add trc behind it.
- coin - This is unique identifier of a coin in zelcore. Cannot contain space. It is recommeded to add trc behind it.
- name - The name of the integrated coin, that will be displayed.
- uri - uri protocol schemes of coin that is using, can be multiple. Usually name, ticker. Cannot contain space.
- contractOrNumber - contract name or a number. It is always a string. In case of BitTorrent (BTT) the string is "1002000". Make sure to get this right!
- decimals - decimal places of your token. Make sure you get this right also.
- addresses: [] - leave like this
- api - api which zelcore shall use for this coin. Note the contract address inside. This has to be changed correctly to your token
- unit - unit that will be displayed for your coin. This is also unit that most services such as rates, markets, exchanges use for coin recognition
- type: "polygon" - leave like this for polygon token
- explorer array - you can add more explorers that can be used for the showing transactions on the particular coin
- logolink - path inside zelcore to your logo. Logos are always svg file and shall be named as your UNIT.svg
   node - available infura nodes. Feel free to add yours as well or any infura compatible node
- fee - default fee used for the token. Leave as 0.1. Others shall be discouraged and are not reflected anyway.
- feepolicy - economy, normal and fast fee policies. This field is obsolete and not used for Polygon. It is left only for future compatibility. Leave like it is.
- color - dominant color of the Token. Shall correspond to logo
- backend - Only polygon type backend is coded. Leave like this.

### coininfo.js

This files controls some social interactions of coins. Displays description, links of coins, articles, available explorer, coin circulation and so on. Again a named object.

      usdtpoly: {
        description: "USDT is a stablecoin (stable-value cryptocurrency) that mirrors the price of the U.S. dollar, issued by a Hong Kong-based company Tether. The token’s peg to the USD is achieved via maintaining a sum of dollars in reserves that is equal to the number of USDT in circulation.",
        total_supply: 59476291004,
        circulating_supply: 59476291004,
        websites: [
          "https://tether.to",
        ],
        explorers: [
          "https://polygonscan.com/token/0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
        ],
        medium: "",
        discord: "",
        telegram: "https://t.me/OfficialTether",
        bitcointalk: "",
        facebook: "https://facebook.com/tether.to",
        twitter: "https://twitter.com/tether_to",
        reddit: "",
        repository: "",
        youtube: "",
        instagram: "",
        tiktok: "",
        twitch: "",
        linkedin: "",
        cryptoCompareID: "USDT",
        coinMarketCapID: "tether",
        coingeckoID: "tether",
        auditInfos: [
          {
            auditor: "CertiK",
            reportUrl: "https://cmc.certik-skynet.com/redirect?project=tether",
          },
        ],
        whitepaper: [
          "https://tether.to/wp-content/uploads/2016/06/TetherWhitePaper.pdf",
        ],
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
- youtube - youtube channel of asset
- instagram - main instagram of asset
- tiktok - main tiktok of asset
- twitch - twitch channel of asset
- linkedin - main linkedin of asset
- cryptoCompareID - the ID of the asset at the cryproCompare aggregator api
- coinMarketCapID - the ID of the asset at the coinMarketCap aggregator api
- coingeckoID - the ID of the asset at the coingecko aggregator api
- auditInfos - available audit reports for the asset in dictionary format e.g. [
      {
        auditor: "Quantstamp",
        reportUrl: "https://certificate.quantstamp.com/view/serum",
      },
    ],
- whitepaper - available whitepapers for the asset e.g. [
      "https://docs.projectserum.com",
    ],
- Others - feel free to add slack, wechat groups or others. We may let it available in the future

### newssources.js

zelcore contains News section. A general one and asset news section as well. It can handle many of RSS feeds
Here is an example for Quant

    usdcpoly: [
      {
        name: "USD Coin Blog",
        feed: "https://www.circle.com/blog/rss.xml",
        site: "https://www.circle.com/blog",
        about: "USD Coin (known by its ticker USDC) is a stablecoin that is pegged to the U.S. dollar on a 1:1 basis.",
        pic: "@/assets/logos/USDC_POLY.svg",
      },
      {
        name: "USD Coin Medium",
        feed: "https://medium.com/feed/centre-blog",
        site: "https://medium.com/centre-blog",
        about: "USD Coin (known by its ticker USDC) is a stablecoin that is pegged to the U.S. dollar on a 1:1 basis.",
        pic: "@/assets/logos/USDC_POLY.svg",
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
1 File have to be adjusted at rates-api/src/services/. Add the asset's aggregator ID on the corresponding list. Adding the ID of one aggregetor is enough.

 1. coinAggregatorIDs.js

You can find the file in [services folder](https://github.com/zelcore-io/rates-api/blob/master/src/services/) of rates-api.

## Notes

Please follow the styling, try using linting in your pull requests. We use 2 spaces, double quotes, commas.

## Thank you for your PRs

Zelcore Team
