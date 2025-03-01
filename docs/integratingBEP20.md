# Integrating Binance Smart Chain BEP20 Token

Integration of Binance Smart Chain BEP20 Token is fairly straightforward and consist of following integration scheme.
Integration is done in 2 steps.

 1. Adjusting zelcore files
 2. Adjusting rates/markets repository

## Adjusting zelcore Files

Adjustment consist of editing 3 files AND adding logo
Zelcore repository is located at [zelcore Github](https://github.com/zelcore-io/zelcore)
Files that need to be adjusted are coinsSimple.js, coininfo.json,  and newssources.json

### coinSimple.js

This file consist of an object of coin objects. This is a definition of a coin and technically everything that is needed for a coin to function in zelcore. Coin specification is a named object. In case of Binance Smart Chain BEP20 Tokens, following configuration shall be present

```js
    pancakeswap: {
      coin: "pancakeswap",
      name: "PancakeSwap BEP20",
      uri: [
        "pancakeswap",
        "cake",
      ],
      addresses: [],
      api: [
        "https://api.bscscan.com/api?module=account&action=tokentx&contractaddress=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82&address=",
      ],
      unit: "CAKE",
      type: "bsc",
      family: "ethlike",
      coinType: "token",
      explorer: [
       "https://bscscan.com/tx/",
      ],
      logolink: "@/assets/logos/CAKE.svg",
      node: [
        "https://node.bsc.zelcore.io",
        "https://bsc-dataseed1.binance.org",
        "https://bsc-dataseed1.defibit.io",
        "https://bsc-dataseed1.ninicoin.io",
      ],
      fee: 63000,
      feepolicy: {
        economy: 20,
        normal: 25,
        fast: 40,
      },
      contractAddress: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
      color: "#d1884f",
      decimals: 18,
      backend: [
        "bsc",
      ],
    },
```

- The name of the object ALWAYS corresponds to the 'coin' variable in the object. Usually it is lower case of a ticker. This variable has to be lower case, without spaces and unique.
- coin - This is unique identifier of a coin in zelcore. Cannot contain space.
- name - The name of the integrated coin, that will be displayed.
- uri - uri protocol schemes of coin that is using, can be multiple. Usually name, ticker. Cannot contain space.
- addresses: [] - leave like this
- api - api which zelcore shall use for this coin. Note the contract address inside. This has to be changed correctly to your token
- unit - unit that will be displayed for your coin. This is also unit that most services such as rates, markets, exchanges use for coin recognition
- type: "bsc" - leave like this for bep20 token
- explorer array - you can add more explorers that can be used for the showing transactions on the particular coin
- logolink - path inside zelcore to your logo. Logos are always svg file and shall be named as your UNIT.svg
- node - available infura nodes. Feel free to add yours as well or any infura compatible node
- fee - default Gas Limit used for the token
- feepolicy - economy, normal and fast. This is default values for Gas Price for the buttons. Note that those values are usually overwritten by automatic fee updates of zelcore.
- contractAddress - make sure you get this right. This is the contract zelcore will use for the coin
- color - dominant color of the Token. Shall correspond to logo
- decimals - decimal places of your token. Make sure you get this right also.
- backend - Only bsc type backend is coded. Leave like this.

### coininfo.json

This files controls some social interactions of coins. Displays description, links of coins, articles, available explorer, coin circulation and so on. Again a named object.

    pancakeswap: {
      description: "PancakeSwap is a decentralized exchange for swapping BEP20 tokens on Binance Smart Chain. PancakeSwap uses an automated market maker (AMM) model where users trade against a liquidity pool. Such pools are filled with users’ funds. They deposit them into the pool, receiving liquidity provider (or LP) tokens in return. They can use those tokens to reclaim their share, plus a portion of the trading fees.",
      total_supply: 199540428,
      circulating_supply: 124399112,
      websites: [
        "https://pancakeswap.finance",
      ],
      explorers: [
        "https://bscscan.com/token/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
      ],
      medium: "https://pancakeswap.medium.com",
      discord: "",
      telegram: "https://t.me/PancakeSwap",
      bitcointalk: "",
      facebook: "https://www.facebook.com/Pancakeswap-102189531674731",
      twitter: "https://twitter.com/PancakeSwap",
      reddit: "https://www.reddit.com/r/pancakeswap",
      repository: "https://github.com/pancakeswap",
      youtube: "",
      instagram: "",
      tiktok: "",
      twitch: "",
      linkedin: "",
      cryptoCompareID: "CAKE",
      coinMarketCapID: "pancakeswap",
      coingeckoID: "pancakeswap-token",
      auditInfos: [
        {
          auditor: "CertiK",
          reportUrl: "https://cmc.certik-skynet.com/redirect?project=pancakeswap",
        },
        {
          auditor: "SlowMist",
          reportUrl: "https://www.slowmist.com/en/security-audit-certificate.html?id=015e0e0a3ef5ea0e2bd9651c9cb47af497597d9e42b1fc13bdf46689c4a2b4f6",
        },
      ],
      whitepaper: [],
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

Zelcore contains News section. A general one and asset news section as well. It can handle many of RSS feeds
Here is an example for Quant

    pancakeswap: [
      {
        name: "PancakeSwap Twitter",
        feed: "https://nitter.zelcore.io/PancakeSwap/rss",
        site: "https://twitter.com/PancakeSwap",
        about: "PancakeSwap is a Binance Smart Chain-based DEX launched by anonymous devs with a penchant for breakfast foods and rabbits.",
        pic: "@/assets/logos/CAKE.svg",
      },
      {
        name: "PancakeSwap Reddit",
        feed: "https://www.reddit.com/r/pancakeswap/.rss",
        site: "https://www.reddit.com/r/pancakeswap",
        about: "PancakeSwap is a Binance Smart Chain-based DEX launched by anonymous devs with a penchant for breakfast foods and rabbits.",
        pic: "@/assets/logos/CAKE.svg",
      },
      {
        name: "PancakeSwap Medium",
        feed: "https://medium.com/feed/@pancakeswap",
        site: "https://pancakeswap.medium.com",
        about: "PancakeSwap is a Binance Smart Chain-based DEX launched by anonymous devs with a penchant for breakfast foods and rabbits.",
        pic: "@/assets/logos/CAKE.svg",
      },
    ],
This array is an object of available news for an asset.

- name - name of the news
- feed - rss feed for the news
- site - site for the news for browsing
- about - short description. Less than 300 characters!
- pic - logo disaplyed in case a news does not have a logo in the rss feed. Usually for assets we display the coin logo

### Logo

Please look at many examples in [Logos directory](https://github.com/zelcore-io/zelcore/blob/master/logos/). This is where your logo has to be placed. It has to be a nice SVG in correspondence with zelcore design of other logos. This logo will be used for your asset. Make it pretty and clean :)

## Rates & Markets

Zelcore uses its own Rates and Markets services. The repository can be found in [rates-api](https://github.com/zelcore-io/rates-api).
1 File have to be adjusted at rates-api/src/services/. Add the asset's aggregator ID on the corresponding list. Adding the ID of one aggregetor is enough.

 1. coinAggregatorIDs.js

You can find them in [services folder](https://github.com/zelcore-io/rates-api/blob/master/src/services/) of rates-api.
Adjustment is usually very simple and adding just your UNIT to an api call will do. Or you can write a custom call specifically for your asset. Note that the output of the asset has to be the UNIT used in zelcore coinSimple.js file.

## Notes

Please follow the styling, try using linting in your pull requests. We use 2 spaces, double quotes, commas.

## Thank you for your PRs

Zelcore Team
