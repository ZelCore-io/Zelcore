# Integrating Ethereum ERC20 Token

Integration of Ethereum ERC20 Token is fairly straightforward and consist of following integration scheme.
Integration is done in 2 steps.

 1. Adjusting zelcore files
 2. Adjusting rates/markets repository

## Adjusting zelcore Files

Adjustment consist of editing 3 files AND adding logo
Zelcore repository is located at [zelcore Github](https://github.com/zelcore-io/zelcore)
Files that need to be adjusted are coinsSimple.js, coininfo.js,  and newssources.js

### coinSimple.js

This file consist of an object of coin objects. This is a definition of a coin and technically everything that is needed for a coin to function in zelcore. Coin specification is a named object. In case of ethereum ERC20 Tokens, following configuration shall be present

    qnt: {
      coin: "qnt",
      name: "Quant",
      uri: [
        "qnt",
        "quant",
      ],
      addresses: [],
      api: [
        "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x4a220e6096b25eadb88358cb44068a3248254675&address=",
      ],
      unit: "QNT",
      type: "eth",
      explorer: [
       "https://etherscan.io/tx/",
      ],
      logolink: "static/logos/QNT.svg",
      node: [
        "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3",
        "https://mainnet.infura.io/v3/b203d49348c546c2b5614e5197788937",
        "https://mainnet.infura.io/v3/3258e142b54447a89b8c002ee7465a6d",
        "https://mainnet.infura.io/v3/7533c3c93ff146b1b791cae8af63c25b",
        "https://mainnet.infura.io/v3/533a7c4dec96470aa1682fe03f734cc7",
        "https://mainnet.infura.io/v3/a6a62579e0f94d3e86e77b28e1e0e52d",
        "https://mainnet.infura.io/v3/21f49e19bcbd40a58782763013eeafa6",
        "https://mainnet.infura.io/v3/407f253e1be4454e823175e370b765fd",
        "https://mainnet.infura.io/v3/abcdf7814da54da6a0bd864959202de8",
        "https://mainnet.infura.io/v3/5f9d174ed8ce4ce7b139c9a964207707",
        "https://mainnet.infura.io/v3/be18d2c65a2441c2b726064fb80f98b4",
        "https://eth.getblock.io/mainnet/?api_key=3d10f1d2-eebc-4ad4-8a8a-33fbeb3481dc",
      ],
      fee: 63000,
      feepolicy: {
        economy: 10,
        normal: 15,
        fast: 20,
      },
      contractAddress: "0x4a220e6096b25eadb88358cb44068a3248254675",
      color: "#000000",
      decimals: 18,
      backend: [
        "infura",
      ],
    },

- The name of the object ALWAYS corresponds to the 'coin' variable in the object. Usually it is lower case of a ticker. This variable has to be lower case, without spaces and unique.
- coin - This is unique identifier of a coin in zelcore. Cannot contain space.
- name - The name of the integrated coin, that will be displayed.
- uri - uri protocol schemes of coin that is using, can be multiple. Usually name, ticker. Cannot contain space.
- addresses: [] - leave like this
- api - api which zelcore shall use for this coin. Note the contract address inside. This has to be changed correctly to your token
- unit - unit that will be displayed for your coin. This is also unit that most services such as rates, markets, exchanges use for coin recognition
- type: "eth" - leave like this for erc20 token
- explorer array - you can add more explorers that can be used for the showing transactions on the particular coin
- logolink - path inside zelcore to your logo. Logos are always svg file and shall be named as your UNIT.svg
- node - available infura nodes. Feel free to add yours as well or any infura compatible node
- fee - default Gas Limit used for the token
- feepolicy - economy, normal and fast. This is default values for Gas Price for the buttons. Note that those values are usually overwritten by automatic fee updates of zelcore.
- contractAddress - make sure you get this right. This is the contract zelcore will use for the coin
- color - dominant color of the Token. Shall correspond to logo
- decimals - decimal places of your token. Make sure you get this right also.
- backend - Only infura type backend is coded. Leave like this.

### coininfo.js

This files controls some social interactions of coins. Displays description, links of coins, articles, available explorer, coin circulation and so on. Again a named object.

    qnt: {
      description:  "Quant Network is a United Kingdom-based technology company that is focused   on providing interoperable solutions that bridge multiple protocols, blockchains or other distributed networks. It offers a suite of services and products, including Overledger OS — a distributed ledger technology operating system — and Overledger Network — a decentralized 'network of networks' that connects various DLT ecosystems together.",
      total_supply: 14612493,
      circulating_supply: 12072738,
      websites: [
        "https://quant.network/",
      ],
      explorers: [
        "https://etherscan.io/token/0x4a220e6096b25eadb88358cb44068a3248254675",
        "https://ethplorer.io/address/0x4a220e6096b25eadb88358cb44068a3248254675",
        "https://enjinx.io/eth/token/0x4a220e6096b25eadb88358cb44068a3248254675",
      ],
      medium: "https://medium.com/@quant_network",
      discord: "",
      telegram: "https://t.me/QuantOverledger",
      bitcointalk: "https://bitcointalk.org/index.php?topic=3200795.0",
      facebook: "",
      twitter: "https://twitter.com/quant_network",
      reddit: "https://reddit.com/r/QuantNetwork",
      repository: "https://github.com/quantnetwork",
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

zelcore contains News section. A general one and asset news section as well. It can handle many of RSS feeds
Here is an example for Quant

    qnt: [
      {
        name: "Quant Twitter",
        feed: "https://nitter.zelcore.io/quant_network/rss",
        site: "https://twitter.com/quant_network",
        about: "Quant Network is a United Kingdom-based technology company that is focused on providing interoperable solutions that bridge multiple protocols, blockchains or other distributed networks.",
        pic: "static/logos/QNT.svg",
      },
      {
        name: "Quant Reddit",
        feed: "https://www.reddit.com/r/QuantNetwork/.rss",
        site: "https://www.reddit.com/r/QuantNetwork/",
        about: "Quant Network is a United Kingdom-based technology company that is focused on providing interoperable solutions that bridge multiple protocols, blockchains or other distributed networks.",
        pic: "static/logos/QNT.svg",
      },
      {
        name: "Quant Medium",
        feed: "https://medium.com/feed/@quant_network",
        site: "https://medium.com/@quant_network",
        about: "Quant Network is a United Kingdom-based technology company that is focused on providing interoperable solutions that bridge multiple protocols, blockchains or other distributed networks.",
        pic: "static/logos/QNT.svg",
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
2 Files have to be adjusted

 1. zelcoreMarkets.js
 2. zelcoreRates.js

You can find them in [services folder](https://github.com/zelcore-io/rates-api/blob/master/src/services/) of rates-api.
Adjustment is usually very simple and adding just your UNIT to an api call will do. Or you can write a custom call specifically for your asset. Note that the output of the asset has to be the UNIT used in zelcore coinSimple.js file.

## Notes

Please follow the styling, try using linting in your pull requests. We use 2 spaces, double quotes, commas.

## Thank you for your PRs

Zelcore Team
