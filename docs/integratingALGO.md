# Integrating Algorand Token

Integration of Algorand Token is fairly straightforward and consist of following integration scheme.
Integration is done in 2 steps.

 1. Adjusting zelcore files
 2. Adjusting rates/markets repository

## Adjusting zelcore Files

Adjustment consist of editing 3 files AND adding logo
Zelcore repository is located at [zelcore Github](https://github.com/zelcore-io/zelcore)
Files that need to be adjusted are coinsSimple.js, coininfo.json,  and newssources.json

### coinSimple.js

This file consist of an object of coin objects. This is a definition of a coin and technically everything that is needed for a coin to function in zelcore. Coin specification is a named object. In case of Algorand Tokens, following configuration shall be present

```js
    usdtalgo: {
      coin: "usdtalgo",
      name: "Tether ALGO",
      uri: [
        "usdtalgo",
        "usdt",
        "tether",
      ],
      addresses: [],
      api: [
        "https://api.algo.zelcore.io",
      ],
      unit: "USDT",
      assetId: 312769
      type: "algorand",
      explorer: [
        "https://algoexplorer.io/tx/",
        "https://algoscan.app/tx/",
      ],
      logolink: "@/assets/logos/USDT.svg",
      node: [
         "https://node.algo.zelcore.io",
      ],
      fee: 0.001,
      feepolicy: {
        economy: 1,
        normal: 1,
        fast: 2,
      },
      color: "#26a17a",
      decimals: 6,
      backend: [
        "algorand",
      ],
    },
```

- The name of the object ALWAYS corresponds to the 'coin' variable in the object. Usually it is lower case of a ticker. This variable has to be lower case, without spaces and unique. It is reccommeded to add trc behind it.
- coin - This is unique identifier of a coin in zelcore. Cannot contain space. It is recommeded to add trc behind it.
- name - The name of the integrated coin, that will be displayed.
- uri - uri protocol schemes of coin that is using, can be multiple. Usually name, ticker. Cannot contain space.
- assetId - Asset ID. It is always a number. Make sure it is correct
- decimals - decimal places of your token. Make sure you get this right also.
- addresses: [] - leave like this
- api - api which zelcore shall use for this coin. Note the contract address inside. This has to be changed correctly to your token
- unit - unit that will be displayed for your coin. This is also unit that most services such as rates, markets, exchanges use for coin recognition
- type: "algorand" - leave like this for algorand token
- explorer array - you can add more explorers that can be used for the showing transactions on the particular coin
- logolink - path inside zelcore to your logo. Logos are always svg file and shall be named as `UNIT.svg` (all caps); To meet our standards of use, __image should be a filled circle with a transparent background__.
   node - available infura nodes. Feel free to add yours as well or any infura compatible node
- fee - default fee used for the token. Leave as 0.001. Others shall be discouraged and are not reflected anyway.
- feepolicy - economy, normal and fast fee policies. Leave like it is.
- color - dominant color of the Token. Shall correspond to logo
- backend - Only algorand type backend is coded. Leave like this.

### coininfo.json

This files controls some social interactions of coins. Displays description, links of coins, articles, available explorer, coin circulation and so on. Again a named object.

      usdtalgo: {
        description: "USDT is a stablecoin (stable-value cryptocurrency) that mirrors the price of the U.S. dollar, issued by a Hong Kong-based company Tether. The token’s peg to the USD is achieved via maintaining a sum of dollars in reserves that is equal to the number of USDT in circulation.",
        total_supply: 59476291004,
        circulating_supply: 59476291004,
        websites: [
          "https://tether.to",
        ],
        explorers: [
          "https://algoexplorer.io/asset/312769",
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

### newssources.json

zelcore contains News section. A general one and asset news section as well. It can handle many of RSS feeds
Here is an example for Quant

    usdtalgo: [
      {
        name: "Tether Blog",
        feed: "https://tether.to/feed",
        site: "https://tether.to/press",
        about: "USDT is a cryptocurrency asset issued on the Ethereum blockchain via the ERC20 Token Standard. It is also issued on the Bitcoin blockchain via the Omni Layer Protocol.",
        pic: "@/assets/logos/USDT.svg",
      },
      {
        name: "Tether Twitter",
        feed: "https://nitter.zelcore.io/tether_to/rss",
        site: "https://twitter.com/tether_to",
        about: "USDT is a stablecoin (stable-value cryptocurrency) that mirrors the price of the U.S. dollar, issued by a Hong Kong-based company Tether.",
        pic: "@/assets/logos/USDT.svg",
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
