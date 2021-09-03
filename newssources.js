const newssources = {
  // general
  general: [
    {
      name: "CoinDesk",
      feed: "https://coindesk.com/feed/",
      site: "https://coindesk.com/",
      about: "CoinDesk is the leading digital media, events and information services company for the crypto asset and blockchain technology community. Its mandate is to inform, educate and connect the global community as the authoritative daily news provider dedicated to chronicling the space.",
      pic: "static/news/coindesk.svg",
    },
    {
      name: "Cointelegraph",
      feed: "https://cointelegraph.com/rss/",
      site: "https://cointelegraph.com/",
      about: "Cointelegraph is the leading independent digital media resource covering a wide range of news on blockchain technology, crypto assets, and emerging fintech trends. Each day our team delivers the most accurate and up-to-date news from both the decentralized and centralized worlds.",
      pic: "static/news/cointelegraph.svg",
    },
    {
      name: "Blockonomi",
      feed: "https://blockonomi.com/feed/",
      site: "https://blockonomi.com/",
      about: "Blockonomi is a fast-growing publication launched in 2017 which aims to cover all aspects of Cryptocurrencies, fintech and the blockchain economy. We focus on bringing you the latest unbiased news, information articles, reviews and tutorials to help you gain an understanding.",
      pic: "static/news/blockonomi.svg",
    },
    {
      name: "CryptoSlate",
      feed: "https://cryptoslate.com/feed/",
      site: "https://cryptoslate.com/",
      about: "CryptoSlate was founded in mid-2017 by Seattle-based technology entrepreneurs, Nate Whitehill and Matthew Blancarte. CryptoSlate's mission is to foster an informed crypto-community through accurate, objective, and timely blockchain and cryptocurrency news coverage.",
      pic: "static/news/cryptoslate.svg",
    },
    {
      name: "NewsBTC",
      feed: "https://www.newsbtc.com/feed/",
      site: "https://www.newsbtc.com/",
      about: "NewsBTC is a premier news and resource platform, working since October 2013 to bring quality news content, reviews, technical analysis and other unique insights to the ever-growing cryptocurrency community.",
      pic: "static/news/newsbtc.svg",
    },
    {
      name: "Bitcoin Magazine",
      feed: "https://bitcoinmagazine.com/feed",
      site: "https://bitcoinmagazine.com/",
      about: "Bitcoin Magazine is the oldest and most established source of news, information and expert commentary on Bitcoin, its underlying blockchain technology and the industry that has grown up around it. Founded by Mihai Alisie and Vitalik Buterin, the creator of Ethereum, in May 2012",
      pic: "static/news/bitcoinmagazine.svg",
    },
    // {
    //   name: "/r/CryptoCurrency",
    //   feed: "https://www.reddit.com/r/CryptoCurrency/.rss",
    //   site: "https://www.reddit.com/r/CryptoCurrency/",
    //   about: "Subreddit for the discussion of CryptoCurrency 'The official source for CryptoCurrency News, Discussion & Analysis.'",
    //   pic: "static/news/reddit.svg",
    // },
    // {
    //   name: "/r/gpumining",
    //   feed: "https://www.reddit.com/r/gpumining/.rss",
    //   site: "https://www.reddit.com/r/gpumining/",
    //   about: "Subreddit for the discussion of GPU mining 'The community of GPU mining enthusiasts, both professionals and hobbyists.'",
    //   pic: "static/news/reddit.svg",
    // },
    // {
    //   name: "/r/bitcoin",
    //   feed: "https://www.reddit.com/r/bitcoin/.rss",
    //   site: "https://www.reddit.com/r/bitcoin/",
    //   about: "Subreddit for the discussion of Bitcoin 'The official source for CryptoCurrency News, Discussion & Analysis.'",
    //   pic: "static/news/reddit.svg",
    // },
    // {
    //   name: "/r/btc",
    //   feed: "https://www.reddit.com/r/btc/.rss",
    //   site: "https://www.reddit.com/r/btc/",
    //   about: "Subreddit for the discussion of Bitcoin '/r/btc was created to foster and support free and open Bitcoin discussion, Bitcoin news, and exclusive AMA (Ask Me Anything) interviews from top Bitcoin industry leaders!'",
    //   pic: "static/news/reddit.svg",
    // },
    // {
    //   name: "/r/BitCoinMining",
    //   feed: "https://www.reddit.com/r/BitCoinMining/.rss",
    //   site: "https://www.reddit.com/r/BitCoinMining/",
    //   about: "Subreddit for the discussion of BitCoinMining 'The official bitcoin mining forum / subreddit / chat room / place to be!'",
    //   pic: "static/news/reddit.svg",
    // },
    // {
    //   name: "Medium Topic Cryptocurrency",
    //   feed: "https://medium.com/feed/topic/cryptocurrency",
    //   site: "https://medium.com/topic/cryptocurrency",
    //   about: "Cryptocurrency on Medium: An ode to the anti-banks.",
    //   pic: "static/news/medium.svg",
    // },
  ],
  // asset specific
  assets: {
    zelcash: [
      {
        name: "Flux Blog",
        feed: "https://fluxofficial.medium.com/feed",
        site: "https://fluxofficial.medium.com",
        about: "Blog source for all things Flux, officially, from the Zelcore Team.",
        pic: "static/logos/FLUX.svg",
      },
      {
        name: "Flux Twitter",
        feed: "https://nitter.zelcore.io/RunOnFlux/rss",
        site: "https://twitter.com/RunOnFlux",
        about: "Official Flux Twitter.",
        pic: "static/logos/FLUX.svg",
      },
      {
        name: "Zelcore Twitter",
        feed: "https://nitter.zelcore.io/Zel_Core/rss",
        site: "https://twitter.com/Zel_Core",
        about: "Official zelcore Twitter.",
        pic: "static/logos/FLUX.svg",
      },
    ],
    testnet: [
      {
        name: "Flux Blog",
        feed: "https://fluxofficial.medium.com/feed",
        site: "https://fluxofficial.medium.com",
        about: "Blog source for all things Flux, officially, from the Zelcore Team.",
        pic: "static/logos/FLUX.svg",
      },
      {
        name: "Flux Twitter",
        feed: "https://nitter.zelcore.io/RunOnFlux/rss",
        site: "https://twitter.com/RunOnFlux",
        about: "Official Flux Twitter.",
        pic: "static/logos/FLUX.svg",
      },
      {
        name: "Zelcore Twitter",
        feed: "https://nitter.zelcore.io/Zel_Core/rss",
        site: "https://twitter.com/Zel_Core",
        about: "Official zelcore Twitter.",
        pic: "static/logos/FLUX.svg",
      },
    ],
    bitcoin: [
      {
        name: "Bitcoin News",
        feed: "https://www.reddit.com/r/bitcoin/.rss",
        site: "https://www.reddit.com/r/bitcoin/",
        about: "Subreddit for the discussion of Bitcoin 'The official source for CryptoCurrency News, Discussion & Analysis.'",
        pic: "static/logos/BTC.svg",
      },
    ],
    ethereum: [
      {
        name: "Ethereum Reddit",
        feed: "https://www.reddit.com/r/ethereum/.rss",
        site: "https://www.reddit.com/r/ethereum/",
        about: "Ethereum Reddit with the latest news and announcements",
        pic: "static/logos/ETH.svg",
      },
    ],
    litecoin: [
      {
        name: "Litecoin Foundation Blog",
        feed: "https://blog.litecoin.org/rss",
        site: "https://blog.litecoin.org/",
        about: "Blog related to Litecoin cryptocurrency",
        pic: "static/logos/LTC.svg",
      },
    ],
    zcash: [
      {
        name: "Zcash Twitter",
        feed: "https://nitter.zelcore.io/zcashco/rss",
        site: "https://twitter.com/zcashco",
        about: "Zcash is a privacy-protectig, digital currency built on strong science.",
        pic: "static/logos/ZEC.svg",
      },
    ],
    bitcoinz: [
      {
        name: "BitcoinZ Twitter",
        feed: "https://nitter.zelcore.io/BitcoinZTeam/rss",
        site: "https://twitter.com/bitcoinzteam",
        about: "BitcoinZ - 100% community focused and ran Zcash fork.",
        pic: "static/logos/BTCZ.svg",
      },
    ],
    ravencoin: [
      {
        name: "Ravencoin Twitter",
        feed: "https://nitter.zelcore.io/ravencoin/rss",
        site: "https://twitter.com/ravencoin",
        about: "Ravencoin is a peer-to-peer blockchain, handling the efficient creation and transfer of assets from one party to another.",
        pic: "static/logos/RVN.svg",
      },
    ],
    bitcore: [
      {
        name: "Bitcore Twitter",
        feed: "https://nitter.zelcore.io/Bitcore_BTX/rss",
        site: "  https://twitter.com/Bitcore_BTX",
        about: "Bitcore is a cryptocurrency that is based on 0.15.2 of Bitcoin Core.",
        pic: "static/logos/BTX.svg",
      },
    ],
    binance: [
      {
        name: "Binance Blog",
        feed: "https://medium.com/feed/@binance",
        site: "https://medium.com/@binance",
        about: "Binance Exchange provides cryptocurrency trading for fintech and blockchain enthusiasts globally, with multilingual support over a variety of services.",
        pic: "static/logos/BNB.svg",
      },
    ],
    bnbbinance: [
      {
        name: "Binance Blog",
        feed: "https://medium.com/feed/@binance",
        site: "https://medium.com/@binance",
        about: "Binance Exchange provides cryptocurrency trading for fintech and blockchain enthusiasts globally, with multilingual support over a variety of services.",
        pic: "static/logos/BNB.svg",
      },
    ],
    sonm: [
      {
        name: "Sonm Blog",
        feed: "https://medium.com/feed/@sonm/",
        site: "https://medium.com/@sonm/",
        about: "Sonm, Global Fog Computing Platform",
        pic: "static/logos/SONM.svg",
      },
    ],
    omisego: [
      {
        name: "OmiseGO Blog",
        feed: "https://medium.com/feed/@omise_go/",
        site: "https://medium.com/@omise_go/",
        about: "OmiseGO is an impact driven and technology first company that builds on blockchain to enable access to financial services that are fast, fair and secure.      ",
        pic: "static/logos/OMG.svg",
      },
    ],
    zilliqa: [
      {
        name: "Zilliqa Blog",
        feed: "https://blog.zilliqa.com/feed/",
        site: "https://blog.zilliqa.com/",
        about: "Next generation, high-throughput blockchain platform",
        pic: "static/logos/ZIL.svg",
      },
    ],
    zrx: [
      {
        name: "0x Blog",
        feed: "https://blog.0xproject.com/feed/",
        site: "https://blog.0xproject.com/",
        about: "0x is an open protocol that allows token to token trading on decentralized exchanges and relayers. Initially it has been built for the trading of ERC20 tokens, but has been built in such a way that it could easily be integrated into other chains in the future.",
        pic: "static/logos/ZRX.svg",
      },
    ],
    golem: [
      {
        name: "Golem Blog",
        feed: "https://blog.golemproject.net/rss/",
        site: "https://blog.golemproject.net",
        about: "Golem (GNT) is a peer-to-peer decentralized marketplace for computing power.",
        pic: "static/logos/GNT.svg",
      },
    ],
    kucoin: [
      {
        name: "Kucoin Blog",
        feed: "https://nitter.zelcore.io/kucoincom/rss",
        site: "https://twitter.com/kucoincom",
        about: "Kucoin is a cryptocurrency exchange.",
        pic: "static/logos/KCS.svg",
      },
    ],
    bat: [
      {
        name: "Basic Attention token Blog",
        feed: "https://medium.com/feed/@AttentionToken",
        site: "https://medium.com/@AttentionToken",
        about: "The token aims to correctly price user attention within the platform. Advertisers pay BAT to website publishers for the attention of users. ",
        pic: "static/logos/BAT.svg",
      },
    ],
    maker: [
      {
        name: "MakerDAO Blog",
        feed: "https://blog.makerdao.com/feed/",
        site: "https://blog.makerdao.com/",
        about: "Maker is comprised of a stablecoin, collateral loans, and decentralized governance.",
        pic: "static/logos/MKR.svg",
      },
    ],
    kyber: [
      {
        name: "Kyber Blog",
        feed: "https://blog.kyber.network/feed",
        site: "https://blog.kyber.network/",
        about: "Kyber’s on-chain liquidity protocol allows decentralized token swaps to be integrated into any application, enabling value exchange to be performed seamlessly between all parties in the ecosystem.",
        pic: "static/logos/KNCL.svg",
      },
    ],
    enigma: [
      {
        name: "Enigma Blog",
        feed: "need feed",
        site: "https://blog.enigma.co/@EnigmaMPC",
        about: "Enigma is building a privacy layer for the decentralized web. Our protocol enables scalable, end-to-end decentralized applications",
        pic: "static/logos/ENG.svg",
      },
    ],
    tenx: [
      {
        name: "TenX Blog",
        feed: "https://blog.tenx.tech/feed/",
        site: "https://blog.tenx.tech/",
        about: "Be in full control. Hold, send and receive popular cryptocurrencies such as Bitcoin, Ethereum, and Litecoin— right at your fingertips.",
        pic: "static/logos/PAY.svg",
      },
    ],
    substratum: [
      {
        name: "Substratum Blog",
        feed: "https://medium.com/feed/@SubstratumNet/",
        site: "https://medium.com/@SubstratumNet",
        about: "Substratum is an open-source network that allows anyone to allocate spare computing resources to make the internet a free and fair place for the entire world.",
        pic: "static/logos/SUB.svg",
      },
    ],
    civic: [
      {
        name: "Civic Blog",
        feed: "https://www.civic.com/blog/feed/",
        site: "https://www.civic.com/blog/",
        about: "Civic is giving businesses & individuals the tools to control and protect identities.",
        pic: "static/logos/CVC.svg",
      },
    ],
    stox: [
      {
        name: "Stox Blog",
        feed: "https://blog.stox.com/feed/",
        site: "https://blog.stox.com/",
        about: "Predict on the hottest markets, create your own predictions, and make profit on one platform",
        pic: "static/logos/STOX.svg",
      },
    ],
    bitcoingold: [
      {
        name: "Bitcoingold Blog",
        feed: "https://medium.com/feed/@btcgpu",
        site: "https://medium.com/@btcgpu",
        about: "BTG is a cryptocurrency with Bitcoin fundamentals, mined on common GPUs instead of specialty ASICs.",
        pic: "static/logos/BTG.svg",
      },
    ],
    snowgem: [
      {
        name: "Snowgem Blog",
        feed: "https://snowgem.org/blog?format=feed&type=rss",
        site: "https://snowgem.org/blog",
        about: "SnowGem is a cryptocurrency that is forked from Zcash with the addition of masternodes.",
        pic: "static/logos/XSG.svg",
      },
    ],
    btcp: [
      {
        name: "BTCP Blog",
        feed: "https://medium.com/feed/@bitcoinprivate",
        site: "https://medium.com/@bitcoinprivate",
        about: "Fork of Zclassic and Bitcoin",
        pic: "static/logos/BTCP.svg",
      },
    ],
    anon: [
      {
        name: "Anon Blog",
        feed: "https://medium.com/feed/anonymous-bitcoin",
        site: "https://medium.com/anonymous-bitcoin",
        about: "ANON is an advancement of the technology of both the Bitcoin and ZClassic blockchain through a co-fork of both cryptocurrencies.",
        pic: "static/logos/ANON.svg",
      },
    ],
    zen: [
      {
        name: "Horizen Blog",
        feed: "https://blog.zenprotocol.com/feed",
        site: "https://blog.zenprotocol.com/",
        about: "Create financial instruments, applications, and contractual obligations - secured by a trustless and decentralized network.",
        pic: "static/logos/ZEN.svg",
      },
    ],
    safecoin: [
      {
        name: "Safecoin Twitter",
        feed: "https://nitter.zelcore.io/safecoins/rss",
        site: "https://twitter.com/safecoins",
        about: "Safecoin is the cryptocurrency of the SAFE (Secure Access For Everyone) network.",
        pic: "static/logos/SAFE.svg",
      },
    ],
    komodo: [
      {
        name: "Komodo Blog",
        feed: "https://medium.com/feed/@komodoplatform",
        site: "https://medium.com/@komodoplatform",
        about: "Komodo is an end-to-end blockchain infrastructure solutions provider. Recognized as one of the world's most innovative projects",
        pic: "static/logos/KMD.svg",
      },
    ],
    zcoin: [
      {
        name: "Zcoin Medium",
        feed: "https://medium.com/feed/@zcoin",
        site: "https://medium.com/@zcoin",
        about: "Firo (FIRO) formerly Zcoin (XZC) is a cryptocurrency focused on privacy and decentralization. Firo recent accomplishment is a privacy protocol Lelantus. It is also the first coin to implement the Zerocoin protocol that enables financial privacy through the power of zero knowledge proofs with a focus on making privacy easy to use. It is also set to be the first to release MTP an ASIC resistant, anti-botnet proof of work algorithm that remains lightweight to verify to ensure fair distribution of coins and decentralized security.\r\n\r\nZcoin is an open source decentralized cryptocurrency that focuses on achieving privacy and anonymity for its users while transacting. To achieve this privacy and anonymity, Zcoin uses zero-knowledge proofs via Zerocoin protocol which is one of the most cited cryptography papers at this point in time. In other words, when you transact using  <a href=\"https://www.coingecko.com/en/coins/bitcoin\">Bitcoin</a> or <a href=\"https://www.coingecko.com/en/coins/ethereum\">Ethereum</a> or something similar, your transaction history is always linked to your coins by default which makes you vulnerable. That, because all it takes is one link to your personal information or IP to find out the origin of the coins.However, if you transact using Zcoin’s Zerocoin feature, none of your transaction histories is linked to the actual coins and only the receiver and sender know that you have actually exchanged funds.\r\n\r\nZerocoin is a cryptocurrency proposed by Johns Hopkins University professor Matthew D. Green and graduate students Ian Miers and Christina Garman as an extension to the Bitcoin protocol that would add true cryptographic anonymity to Bitcoin transactions. Zerocoin was first implemented into a fully functional cryptocurrency released to the public by Poramin Insom, as Zcoin who is also the lead developer, in September 2016. At the initial stage, Zcoin uses the Lyra2z algorithm for proof of work, then they will transition to a Merkle Tree proof of work algorithm, known as MTP. MTP is a unique memory hard algorithm that aims to solve several problems. Memory hard algorithms help prevent the development of ASICs which lead to centralized mining farms. \r\n\r\nMemory hard algorithms also prevent the use of botnets infecting computers for mining purposes. If a botnet was using up multiple gigs of memory, you’d be likely to notice something is wrong. “The basic concept is that it should establish the same price/cost for a single computation unit on all platforms meaning that there is no single device that should gain a significant advantage over another for the same price hence promoting egalitarian computing.",
        pic: "static/logos/FIRO.svg",
      },
      {
        name: "Zcoin Medium 2",
        feed: "https://medium.com/feed/@firo-financial-privacy",
        site: "https://medium.com/@firo-financial-privacy",
        about: "Firo (FIRO) formerly Zcoin (XZC) is a cryptocurrency focused on privacy and decentralization. Firo recent accomplishment is a privacy protocol Lelantus. It is also the first coin to implement the Zerocoin protocol that enables financial privacy through the power of zero knowledge proofs with a focus on making privacy easy to use. It is also set to be the first to release MTP an ASIC resistant, anti-botnet proof of work algorithm that remains lightweight to verify to ensure fair distribution of coins and decentralized security.\r\n\r\nZcoin is an open source decentralized cryptocurrency that focuses on achieving privacy and anonymity for its users while transacting. To achieve this privacy and anonymity, Zcoin uses zero-knowledge proofs via Zerocoin protocol which is one of the most cited cryptography papers at this point in time. In other words, when you transact using  <a href=\"https://www.coingecko.com/en/coins/bitcoin\">Bitcoin</a> or <a href=\"https://www.coingecko.com/en/coins/ethereum\">Ethereum</a> or something similar, your transaction history is always linked to your coins by default which makes you vulnerable. That, because all it takes is one link to your personal information or IP to find out the origin of the coins.However, if you transact using Zcoin’s Zerocoin feature, none of your transaction histories is linked to the actual coins and only the receiver and sender know that you have actually exchanged funds.\r\n\r\nZerocoin is a cryptocurrency proposed by Johns Hopkins University professor Matthew D. Green and graduate students Ian Miers and Christina Garman as an extension to the Bitcoin protocol that would add true cryptographic anonymity to Bitcoin transactions. Zerocoin was first implemented into a fully functional cryptocurrency released to the public by Poramin Insom, as Zcoin who is also the lead developer, in September 2016. At the initial stage, Zcoin uses the Lyra2z algorithm for proof of work, then they will transition to a Merkle Tree proof of work algorithm, known as MTP. MTP is a unique memory hard algorithm that aims to solve several problems. Memory hard algorithms help prevent the development of ASICs which lead to centralized mining farms. \r\n\r\nMemory hard algorithms also prevent the use of botnets infecting computers for mining purposes. If a botnet was using up multiple gigs of memory, you’d be likely to notice something is wrong. “The basic concept is that it should establish the same price/cost for a single computation unit on all platforms meaning that there is no single device that should gain a significant advantage over another for the same price hence promoting egalitarian computing.",
        pic: "static/logos/FIRO.svg",
      },
      {
        name: "Zcoin Twitter",
        feed: "https://nitter.zelcore.io/zcoinofficial/rss",
        site: "https://twitter.com/zcoinofficial",
        about: "Official Zcoin Twitter.",
        pic: "static/logos/FIRO.svg",
      },
      {
        name: "Zcoin Twitter 2",
        feed: "https://nitter.zelcore.io/firoorg/rss",
        site: "https://twitter.com/firoorg",
        about: "Official Firo Twitter.",
        pic: "static/logos/FIRO.svg",
      },
    ],
    usdt: [
      {
        name: "Tether Blog",
        feed: "https://tether.to/feed/",
        site: "https://tether.to/press/",
        about: "USDT is a cryptocurrency asset issued on the Bitcoin blockchain via the Omni Layer Protocol. It is also issued on the Ethereum blockchain via the ERC20 Token Standard.",
        pic: "static/logos/USDT_Omni.svg",
      },
      {
        name: "Tether Twitter",
        feed: "https://nitter.zelcore.io/tether_to/rss",
        site: "https://twitter.com/tether_to",
        about: "USDT is a stablecoin (stable-value cryptocurrency) that mirrors the price of the U.S. dollar, issued by a Hong Kong-based company Tether.",
        pic: "static/logos/USDT_Omni.svg",
      },
    ],
    usdterc: [
      {
        name: "Tether Blog",
        feed: "https://tether.to/feed/",
        site: "https://tether.to/press/",
        about: "USDT is a cryptocurrency asset issued on the Ethereum blockchain via the ERC20 Token Standard. It is also issued on the Bitcoin blockchain via the Omni Layer Protocol.",
        pic: "static/logos/USDT_ERC20.svg",
      },
      {
        name: "Tether Twitter",
        feed: "https://nitter.zelcore.io/tether_to/rss",
        site: "https://twitter.com/tether_to",
        about: "USDT is a stablecoin (stable-value cryptocurrency) that mirrors the price of the U.S. dollar, issued by a Hong Kong-based company Tether.",
        pic: "static/logos/USDT_ERC20.svg",
      },
    ],
    zero: [
      {
        name: "Zero Blog",
        feed: "https://medium.com/feed/@zerocurrency",
        site: "https://medium.com/@zerocurrency",
        about: "Zerocoin is a project to fix a major weakness in Bitcoin: the lack of privacy guarantees we take for granted in using credit cards and cash. Our goal is to build a cryptocurrency where your neighbors, friends and enemies can’t see what you bought or for how much.",
        pic: "static/logos/ZER.svg",
      },
    ],
    bitcoincash: [
      {
        name: "BitcoinCash Blog",
        feed: "https://news.bitcoin.com/feed/",
        site: "https://news.bitcoin.com",
        about: "Bitcoin Cash is a fork of Bitcoin. It has bigger blocks.",
        pic: "static/logos/BCH.svg",
      },
    ],
    arcblock: [
      {
        name: "ArcBlock Blog",
        feed: "https://medium.com/feed/arcblock",
        site: "https://medium.com/arcblock",
        about: "The World’s First Blockchain Ecosystem for Building and Deploying Decentralized Applications",
        pic: "static/logos/ARC.svg",
      },
    ],
    adex: [
      {
        name: "Adex Blog",
        feed: "https://medium.com/feed/the-adex-blog",
        site: "https://medium.com/the-adex-blog",
        about: "AdEx is an open-source, blockchain based, decentralised digital ad exchange platform which uses Ethereum smart contracts",
        pic: "static/logos/ADX.svg",
      },
    ],
    aeternity: [
      {
        name: "Aeternity Blog",
        feed: "https://blog.aeternity.com/feed",
        site: "https://blog.aeternity.com/",
        about: "æternity is a scalable blockchain platform that enables high-speed transacting, purely-functional smart contracts, and decentralized oracles.",
        pic: "static/logos/AE.svg",
      },
    ],
    airswap: [
      {
        name: "Airswap Blog",
        feed: "https://medium.com/feed/@airswap",
        site: "https://medium.com/@airswap",
        about: "AirSwap is a peer-to-peer trading network built on Ethereum. Our mission is to empower people through global, frictionless trade.",
        pic: "static/logos/AST.svg",
      },
    ],
    bigbom: [
      {
        name: "Bigbomb Blog",
        feed: "https://medium.com/feed/bigbomeco",
        site: "https://medium.com/bigbomeco",
        about: "Bigbom's application ecosystem provides wide sets of features like optimization, contract sign, ads tracking, ads payment among other features.",
        pic: "static/logos/BBO.svg",
      },
    ],
    appcoins: [
      {
        name: "AppCoins Blog",
        feed: "https://medium.com/feed/@appcoins",
        site: "https://medium.com/@appcoins",
        about: "The first ICO serving 200 million users to create a trusted economy without intermediaries. Supported by Aptoide App Store.",
        pic: "static/logos/APPC.svg",
      },
    ],
    bluzelle: [
      {
        name: "Bluzelle Blog",
        feed: "https://medium.com/feed/@Bluzelle",
        site: "https://medium.com/@Bluzelle",
        about: "Bluzelle is a smart, in-memory data store technology, used as a cache or database. Highly available, durable and globally distributed.",
        pic: "static/logos/BLZ.svg",
      },
    ],
    bancor: [
      {
        name: "Bancor Blog",
        feed: "https://medium.com/feed/@bancor",
        site: "https://medium.com/@bancor",
        about: "Bancor Protocol is a standard for the creation of Smart Tokens™, cryptocurrencies with built-in convertibility directly through their smart contracts.",
        pic: "static/logos/BNT.svg",
      },
    ],
    coinfi: [
      {
        name: "Coinfi Blog",
        feed: "https://blog.coinfi.com/feed/",
        site: "https://blog.coinfi.com/",
        about: "Crypto market intelligence platform",
        pic: "static/logos/COFI.svg",
      },
    ],
    dai: [
      {
        name: "Sai Blog",
        feed: "https://medium.com/feed/@MakerDAO",
        site: "https://medium.com/@MakerDAO",
        about: "Sai is an asset-backed, hard currency for the 21st century. The first decentralized stablecoin on the Ethereum blockchain.",
        pic: "static/logos/SAI.svg",
      },
    ],
    digixgoldtoken: [
      {
        name: "Digix Gold Token Blog",
        feed: "https://medium.com/feed/digix/",
        site: "https://medium.com/digix/",
        about: "Using blockchain technology, DigixDAO represent physical gold with DGX tokens, where 1 DGX represents 1 gram of gold on Ethereum.",
        pic: "static/logos/DGX.svg",
      },
    ],
    electrify: [
      {
        name: "Electrify Blog",
        feed: "https://medium.com/feed/electrifyasia",
        site: "https://medium.com/electrifyasia",
        about: "ELECTRIFY is the first retail electricity marketplace in Southeast-Asia addressing the need for transparency and security in the consumption of energy.",
        pic: "static/logos/ELEC.svg",
      },
    ],
    aelf: [
      {
        name: "Aelf Blog",
        feed: "https://medium.com/feed/@aelfblockchain",
        site: "https://medium.com/@aelfblockchain",
        about: "Building a Decentralized Cloud Computing Blockchain Network",
        pic: "static/logos/ELF.svg",
      },
    ],
    enjincoin: [
      {
        name: "Enjincoin Blog",
        feed: "https://blog.enjincoin.io/feed",
        site: "https://blog.enjincoin.io",
        about: "Enjin Coin is a smart cryptocurrency fueling a modular blockchain development platform for creating, integrating and scaling tokenized gaming assets",
        pic: "static/logos/EJN.svg",
      },
    ],
    storj: [
      {
        name: "Storj Blog",
        feed: "https://medium.com/feed/@storjproject",
        site: "https://medium.com/@storjproject",
        about: "Storj is an open source decentralized cloud storage platform.",
        pic: "static/logos/STORJ.svg",
      },
    ],
    iost: [
      {
        name: "IOST Blog",
        feed: "https://medium.com/feed/iost",
        site: "https://medium.com/iost",
        about: "IOST is an ultra-fast, decentralized blockchain network based on the next-generation consensus algorithm “Proof of Believability” (PoB).",
        pic: "static/logos/IOST.svg",
      },
    ],
    dent: [
      {
        name: "Dent Blog",
        feed: "https://medium.com/feed/dent-coin",
        site: "https://medium.com/dent-coin",
        about: "Dent plans to disrupt the mobile operator industry by creating an open marketplace for buying and selling of mobile data.",
        pic: "static/logos/DENT.svg",
      },
    ],
    ethlend: [
      {
        name: "EthLend Blog",
        feed: "https://medium.com/feed/aave",
        site: "https://medium.com/aave",
        about: "The World's First Crypto Lending Marketplace",
        pic: "static/LEND.svg",
      },
    ],
    chainlink: [
      {
        name: "Chainlink Blog",
        feed: "https://blog.chain.link/rss/",
        site: "https://blog.chain.link/",
        about: "The Chainlink network provides reliable tamper-proof inputs and outputs for complex smart contracts on any blockchain.",
        pic: "static/logos/LINK.svg",
      },
    ],
    decentraland: [
      {
        name: "Decentraland Blog",
        feed: "https://medium.com/feed/@decentraland",
        site: "https://medium.com/@decentraland",
        about: "Decentraland is a virtual reality platform powered by the Ethereum blockchain.",
        pic: "static/logos/MANA.svg",
      },
    ],
    loopring: [
      {
        name: "Loopring blog",
        feed: "https://medium.com/feed/loopring-protocol",
        site: "https://medium.com/loopring-protocol",
        about: "Powering secure, transparent, and high-liqudity decentralized trading experiences.",
        pic: "static/logos/LRC.svg",
      },
    ],
    qash: [
      {
        name: "Qash Blog",
        feed: "https://medium.com/feed/quoineglobal",
        site: "https://medium.com/quoineglobal",
        about: "Liquid, formerly Quoine, is building a universal liquidity solution for cryptoasset trading and a suite of services, Worldbook and Prime Brokerage, using the Qash (QASH) token.",
        pic: "static/logos/QASH.svg",
      },
    ],
    iconomi: [
      {
        name: "Iconomi Blog",
        feed: "https://medium.com/feed/iconominet/",
        site: "https://medium.com/iconominet",
        about: "The ICONOMI platform is designed for beginners and experienced investors alike.",
        pic: "static/logos/ICN.svg",
      },
    ],
    mco: [
      {
        name: "Crypto.com Blog",
        feed: "https://medium.com/feed/@Crypto.com",
        site: "https://medium.com/@Crypto.com",
        about: "At Crypto.com, we are on a mission to accelerate the world's transition to cryptocurrency.",
        pic: "static/logos/MCO.svg",
      },
    ],
    poet: [
      {
        name: "po.et Blog",
        feed: "https://blog.po.et/feed",
        site: "https://blog.po.et/",
        about: "Po.et is the decentralized protocol for content ownership, discovery and monetization in media",
        pic: "static/logos/POE.svg",
      },
    ],
    polymath: [
      {
        name: "Polymath Blog",
        feed: "https://medium.com/feed/@polymathnetwork",
        site: "https://medium.com/@polymathnetwork",
        about: "Interfacing securities and the Blockchain",
        pic: "static/logos/POLY.svg",
      },
    ],
    powerledger: [
      {
        name: "Power Ledger Blog",
        feed: "https://medium.com/feed/@PowerLedger_io",
        site: "https://medium.com/@PowerLedger_io",
        about: "Power Ledger is a world leading P2P blockchain full stack technology energy company.",
        pic: "static/logos/POWR.svg",
      },
    ],
    ripiocredit: [
      {
        name: "RCN Blog",
        feed: "https://medium.com/feed/rcn-news",
        site: "https://medium.com/rcn-news",
        about: "RCN is an open global credit network that connects creditors, financial institutions, fintech companies and decentralized finance service providers on the blockchain, to create frictionless, transparent and borderless debt markets.",
        pic: "static/logos/RCN.svg",
      },
    ],
    raidentoken: [
      {
        name: "Raiden Network Blog",
        feed: "https://medium.com/feed/raiden-network",
        site: "https://medium.com/raiden-network",
        about: "Fast, cheap, scalable token transfers for Ethereum.",
        pic: "static/logos/RDN.svg",
      },
    ],
    requestnetwork: [
      {
        name: "Request Network blog",
        feed: "https://blog.request.network/feed",
        site: "https://blog.request.network/",
        about: "The open network for transaction requests",
        pic: "static/logos/REQ.svg",
      },
    ],
    status: [
      {
        name: "Status blog",
        feed: "https://blog.status.im/feed/",
        site: "https://blog.status.im/",
        about: "A Mobile OS, built for Ethereum",
        pic: "static/logos/SNT.svg",
      },
    ],
    salt: [
      {
        name: "Salt Lending Blog",
        feed: "https://blog.saltlending.com/feed/",
        site: "https://blog.saltlending.com/",
        about: "FinTech Solutions for Blockchain Assets",
        pic: "static/logos/SALT.svg",
      },
    ],
    storm: [
      {
        name: "Storm Blog",
        feed: "https://blog.stormtoken.com/feed/",
        site: "https://blog.stormtoken.com/",
        about: "Built on the back of blockchain technology, Storm’s gamified microtask platform creates opportunities for people around the world to earn cryptocurrency rewards.",
        pic: "static/logos/STORM.svg",
      },
    ],
    eidoo: [
      {
        name: "Eido Blog",
        feed: "https://cryptonomist.ch/blog/eidoo/feed/",
        site: "https://cryptonomist.ch/blog/eidoo/",
        about: "Eidoo is a Swiss company formed by a group of professionals with a shared goal: to improve how people manage their assets, invest, and make a profit in the blockchain economy.",
        pic: "static/logos/EDO.svg",
      },
    ],
    trueusd: [
      {
        name: "True USD Blog",
        feed: "https://blog.trusttoken.com/feed/",
        site: "https://blog.trusttoken.com/",
        about: "TrueUSD (TUSD) is a stablecoin that you can redeem 1-for-1 for US dollars. TUSD is the first asset token created on the TrustToken Platform.",
        pic: "static/logos/TUSD_ERC20.svg",
      },
    ],
    dentacoin: [
      {
        name: "Dentacoin Blog",
        feed: "https://blog.dentacoin.com/feed/",
        site: "https://blog.dentacoin.com/",
        about: "Dentacoin is a blockchain solution for the global dental industry.",
        pic: "static/logos/DCN.svg",
      },
    ],
    wax: [
      {
        name: "Wax Blog",
        feed: "https://medium.com/feed/wax-io/",
        site: "https://medium.com/wax-io",
        about: "WAX allows you to operate own virtual item marketplace",
        pic: "static/logos/WAX.svg",
      },
    ],
    wings: [
      {
        name: "Wings Blog",
        feed: "https://blog.wings.ai/feed",
        site: "https://blog.wings.ai/",
        about: "Financial forecasting, valuations and funding for projects on Ethereum",
        pic: "static/logos/WINGS.svg",
      },
    ],
    dta: [
      {
        name: "DATA Blog",
        feed: "https://medium.com/feed/@Blockchain_Data/",
        site: "https://medium.com/@Blockchain_Data",
        about: "Decentralized AI-Powered Trust Alliance",
        pic: "static/logos/DTA.svg",
      },
    ],
    funfair: [
      {
        name: "FunFair Blog",
        feed: "https://funfair.io/latest/latest-news/feed/",
        site: "https://funfair.io/latest/latest-news/",
        about: "Market leading enterprise and white label casinos powered by high-performance blockchain technology.",
        pic: "static/logos/FUN.svg",
      },
    ],
    kin: [
      {
        name: "Kin Blog",
        feed: "https://medium.com/feed/kinblog/",
        site: "https://medium.com/kinblog",
        about: "Get ready for digital experiences that are more connected, more fair, and more fun.",
        pic: "static/logos/KIN.svg",
      },
    ],
    zclassic: [
      {
        name: "Zclassic Reddit",
        feed: "https://www.reddit.com/r/ZClassic/.rss",
        site: "https://www.reddit.com/r/ZClassic",
        about: "Zclassic is a cryptocurrency that is forked from Zcash.",
        pic: "static/logos/ZCL.svg",
      },
    ],
    sirin: [
      {
        name: "Sirin Blog",
        feed: "https://medium.com/feed/@sirinlabs",
        site: "https://medium.com/@sirinlabs",
        about: "Secure open source consumer electronics for the blockchain era.",
        pic: "static/logos/SRN.svg",
      },
    ],
    aurora: [
      {
        name: "Aurora Blog",
        feed: "https://medium.com/feed/@AuroraOfficial",
        site: "https://medium.com/@AuroraOfficial",
        about: "Decentralized cryptobanking and financial platform",
        pic: "static/logos/AOA.svg",
      },
    ],
    theta: [
      {
        name: "Theta Blog",
        feed: "https://medium.com/feed/theta-network",
        site: "https://medium.com/theta-network",
        about: "Next generation video delivery powered by you",
        pic: "static/logos/THETA.svg",
      },
    ],
    dash: [
      {
        name: "Dash blog",
        feed: "https://blog.dash.org/feed/",
        site: "https://blog.dash.org/",
        about: "Digital Cash",
        pic: "static/logos/DASH.svg",
      },
    ],
    monero: [
      {
        name: "Monero Blog",
        feed: "https://ww.getmonero.org/feed.xml",
        site: "https://www.getmonero.org/blog/",
        about: "Monero is cash for a connected world. It’s fast, private, and secure.",
        pic: "static/logos/XMR.svg",
      },
    ],
    usdc: [
      {
        name: "Circle Blog",
        feed: "https://medium.com/feed/circle-blog",
        site: "https://medium.com/circle-blog",
        about: "USD Coin (USDC) is a type of cryptocurrency that is referred to as a stablecoin created by Coinbase.",
        pic: "static/logos/USDC.svg",
      },
    ],
    gusd: [
      {
        name: "Gemini Blog",
        feed: "https://medium.com/feed/gemini",
        site: "https://medium.com/gemini",
        about: "Gemini dollar is the first regulated stablecoin issued by Gemini Trust Company, LLC.",
        pic: "static/logos/GUSD.svg",
      },
    ],
    pax: [
      {
        name: "Paxos Blog",
        feed: "https://www.paxos.com/feed/",
        site: "https://www.paxos.com/",
        about: "Paxos Standard (PAX) combines US Dollar stability with the efficiency of blockchain technology.",
        pic: "static/logos/PAX.svg",
      },
    ],
    etc: [
      {
        name: "Ethereum Classic Blog",
        feed: "https://medium.com/feed/ethereum-classic/",
        site: "https://medium.com/ethereum-classic",
        about: "The original, decentralized, immutable, unstoppable smnart contract blockchain.",
        pic: "static/logos/ETC.svg",
      },
    ],
    coni: [
      {
        name: "Coinbene Blog",
        feed: "https://medium.com/feed/@coinbeneglobal",
        site: "https://medium.com/@coinbeneglobal",
        about: "Coinbene is an exchange, Coni is their token.",
        pic: "static/logos/CONI.svg",
      },
    ],
    tok: [
      {
        name: "Tokok Blog",
        feed: "https://medium.com/feed/@tokok",
        site: "https://medium.com/@tokok",
        about: "Tokok is an exchange, TOK is their token.",
        pic: "static/logos/TOK.svg",
      },
    ],
    genesis: [
      {
        name: "Genesis Blog",
        feed: "https://nitter.zelcore.io/genx_network/rss",
        site: "https://twitter.com/genx_network",
        about: "P2P point of sale and payments processing ecosystem for business and e-commerce.",
        pic: "static/logos/GENX.svg",
      },
    ],
    por: [
      {
        name: "Proof of Review Blog",
        feed: "https://medium.com/feed/@proofofreview",
        site: "https://medium.com/@proofofreview",
        about: "Proof of Review's team review and vet projects.",
        pic: "static/logos/POR.svg",
      },
    ],
    bzedge: [
      {
        name: "BZEdge Blog",
        feed: "https://medium.com/feed/@bzedge",
        site: "https://medium.com/@bzedge",
        about: "Cutting Edge Cryptocurrency. Ultra fast secure and low cost blockchain.",
        pic: "static/logos/BZE.svg",
      },
    ],
    bithereum: [
      {
        name: "Bithereum Network Blog",
        feed: "https://medium.com/feed/bithereum-network/",
        site: "https://medium.com/bithereum-network",
        about: "Bithereum is a fork of Bitcoin and Ethereum aiming to fuse the visions of both.",
        pic: "static/logos/BTH.svg",
      },
    ],
    adt: [
      {
        name: "AdToken Blog",
        feed: "https://medium.com/feed/metax-publication",
        site: "https://medium.com/metax-publication",
        about: "AdToken is intended for use in the adChain Registry dapp.",
        pic: "static/logos/ADT.svg",
      },
    ],
    mft: [
      {
        name: "Mainframe Blog",
        feed: "https://blog.mainframe.com/feed",
        site: "https://blog.mainframe.com/",
        about: "Mainframe OS makes it easy to use and build decentralized applications.",
        pic: "static/logos/MFT.svg",
      },
    ],
    atl: [
      {
        name: "Atlant Blog",
        feed: "https://blog.atlant.io/feed",
        site: "https://blog.atlant.io/",
        about: "A project with a focus on the real estate investment world",
        pic: "static/logos/ATL.svg",
      },
    ],
    ant: [
      {
        name: "Aragon Blog",
        feed: "https://blog.aragon.org/feed",
        site: "https://blog.aragon.org/",
        about: "Build unstoppable organizations on Ethereum.",
        pic: "static/logos/ANT.svg",
      },
    ],
    arn: [
      {
        name: "Aeron Blog",
        feed: "https://medium.com/feed/@aeronaero",
        site: "https://medium.com/@aeronaero/",
        about: "Blockchain solutions for Aviation safety ",
        pic: "static/logos/ARN.svg",
      },
    ],
    brd: [
      {
        name: "BRD Blog",
        feed: "https://nitter.zelcore.io/brdhq/rss",
        site: "https://twitter.com/brdhq",
        about: "BRD is the simple and secure onramp to bitcoin, ethereum, and other digital currencies.",
        pic: "static/logos/BRD.svg",
      },
    ],
    rep: [
      {
        name: "Augur Blog",
        feed: "https://medium.com/feed/@AugurProject",
        site: "https://medium.com/@AugurProject",
        about: "An open-source, decentralized, peer-to-peer prediction market platform built on Ethereum.",
        pic: "static/logos/REP.svg",
      },
    ],
    qkc: [
      {
        name: "QuarkChain Blog",
        feed: "https://medium.com/feed/quarkchain-official",
        site: "https://medium.com/quarkchain-official",
        about: "Enable everyone to use blockchain technology anywhere and anytime.",
        pic: "static/logos/QKC.svg",
      },
    ],
    loom: [
      {
        name: "Loom Blog",
        feed: "https://medium.com/feed/loom-network",
        site: "https://medium.com/loom-network",
        about: "Loom Network's DPoS sidechains allow for truly scalable blockchain games and Dapps with the security of Ethereum mainnet.",
        pic: "static/logos/LOOM.svg",
      },
    ],
    eurs: [
      {
        name: "Stasis Blog",
        feed: "https://medium.com/feed/stasis-blog",
        site: "https://medium.com/stasis-blog",
        about: "Bridging the gap between decentralized finance and the off-chain market",
        pic: "static/logos/EURS.svg",
      },
    ],
    commercium: [
      {
        name: "Commercium Blog",
        feed: "https://medium.com/feed/commercium-cmm",
        site: "https://medium.com/commercium-cmm",
        about: "CMM is a proof-of-work (mineable) cryptocurrency. CMM includes 60 second block times for fast confirmation of transfers.",
        pic: "static/logos/CMM.svg",
      },
    ],
    groestlcoin: [
      {
        name: "Groestlcoin Blog",
        feed: "https://medium.com/feed/@groestlcoin",
        site: "https://medium.com/@groestlcoin",
        about: "Instant & Private transactions with subAtomic fees",
        pic: "static/logos/GRS.svg",
      },
    ],
    gunthy: [
      {
        name: "Gunthy Twitter",
        feed: "https://nitter.zelcore.io/gunthyio/rss",
        site: "https://twitter.com/Gunthyio",
        about: "Emotionless trading.",
        pic: "static/logos/GUNTHY.svg",
      },
    ],
    metal: [
      {
        name: "Metal Blog",
        feed: "https://blog.metalpay.com/rss/",
        site: "https://blog.metalpay.com",
        about: "Send. Receive. Earn",
        pic: "static/logos/MTL.svg",
      },
    ],
    ethos: [
      {
        name: "EthOS Blog",
        feed: "https://medium.com/feed/@ethos.io",
        site: "https://medium.com/@ethos.io",
        about: "The people-powered blockchain platform.",
        pic: "static/logos/ETHOS.svg",
      },
    ],
    singularitynet: [
      {
        name: "SingularityNET Blog",
        feed: "https://blog.singularitynet.io/feed",
        site: "https://blog.singularitynet.io/",
        about: "SingularityNET lets anyone create, share and monetize AI services as scale.",
        pic: "static/logos/AGI.svg",
      },
    ],
    ambrosus: [
      {
        name: "Ambrosus Blog",
        feed: "https://blog.ambrosus.com/feed",
        site: "https://blog.ambrosus.com/",
        about: "Decentralized IoT Ecosystems.",
        pic: "static/logos/AMB.svg",
      },
    ],
    blockmasoncreditprotocol: [
      {
        name: "BlockMason Blog",
        feed: "https://blockmason.io/blog/feed/",
        site: "https://blockmason.io/blog/",
        about: "Building the Foundation for the Blockchain Revolution",
        pic: "static/logos/BCPT.svg",
      },
    ],
    blox: [
      {
        name: "Blox Twitter",
        feed: "https://nitter.zelcore.io/Blox_Official/rss",
        site: "https://twitter.com/Blox_Official",
        about: "Blox is a platform for managing crypto assets.",
        pic: "static/logos/CDT.svg",
      },
    ],
    celertoken: [
      {
        name: "Celer Network Blog",
        feed: "https://medium.com/feed/celer-network",
        site: "https://medium.com/celer-network",
        about: "Celer Network brings interactive, secure and low-cost applications to every blockchain.",
        pic: "static/logos/CELR.svg",
      },
    ],
    cindicator: [
      {
        name: "Cindicator Blog",
        feed: "https://blog.cindicator.com/rss/",
        site: "https://blog.cindicator.com/",
        about: "Hybrid intelligence for effective asset management",
        pic: "static/logos/CND.svg",
      },
    ],
    streamrdatacoin: [
      {
        name: "Streamr Blog",
        feed: "https://medium.com/feed/streamrblog",
        site: "https://medium.com/streamrblog",
        about: "Streamr is creating an open source platform for the free and fair exchange of the world’s real-time data.",
        pic: "static/logos/DATA.svg",
      },
    ],
    agrello: [
      {
        name: "Agrello Blog",
        feed: "https://blog.agrello.org/feed/",
        site: "https://blog.agrello.org/",
        about: "Legally binding smart contracts, powered by AI",
        pic: "static/logos/DLT.svg",
      },
    ],
    dock: [
      {
        name: "Dock Blog",
        feed: "https://medium.com/feed/dock/",
        site: "https://medium.com/dock",
        about: "Verifiable digital records on blockchain",
        pic: "static/logos/DOCK.svg",
      },
    ],
    everex: [
      {
        name: "Everex Blog",
        feed: "https://blog.everex.io/feed/",
        site: "https://blog.everex.io/",
        about: "Everex offers DLT based financial services to individuals and business in Asia and globally",
        pic: "static/logos/EVX.svg",
      },
    ],
    gifto: [
      {
        name: "Gifto Blog",
        feed: "https://medium.com/feed/@gifto",
        site: "https://medium.com/@gifto",
        about: "Gifto.io is an Ethereum-based Dapp for digital content creators, gamers, art collectors, and charities to send and receive customized virtual gifts #GTO",
        pic: "static/logos/GTO.svg",
      },
    ],
    genesisvision: [
      {
        name: "GenesisVision Blog",
        feed: "https://medium.com/feed/@GenesisVision",
        site: "https://medium.com/@GenesisVision",
        about: "The first platform for the private trust management market, built on Blockchain technology and Smart Contracts.",
        pic: "static/logos/GVT.svg",
      },
    ],
    holotoken: [
      {
        name: "HoloChain Blog",
        feed: "https://medium.com/feed/holochain",
        site: "https://medium.com/holochain",
        about: "HOT is a utility token built for the participants of its ecosystem to contribute to and utilize the platform.",
        pic: "static/logos/HOT.svg",
      },
    ],
    insolar: [
      {
        name: "Insolar Blog",
        feed: "https://medium.com/feed/insolar",
        site: "https://medium.com/insolar",
        about: "Insolar (INS) is a project that is trying to develop distributed business networks which will use new innovations in blockchain technology to make them secure and interoperable.",
        pic: "static/logos/INS.svg",
      },
    ],
    iotex: [
      {
        name: "Iotex Blog",
        feed: "https://medium.com/feed/iotex",
        site: "https://medium.com/iotex",
        about: "A Decentralized Network for Internet of Things (IoT), Powered by a Auto-Scalable, Extensible, Private-Centric Blockchain.",
        pic: "static/logos/iotex.svg",
      },
    ],
    selfkey: [
      {
        name: "selfkey Blog",
        feed: "https://blog.selfkey.org/feed",
        site: "https://blog.selfkey.org/",
        about: "A Self-Sovereign Identity system that empowers individuals to find more Freedom and Privacy through the full ownership of their digital identity.",
        pic: "static/logos/KEY.svg",
      },
    ],
    lunyr: [
      {
        name: "Lunyr Blog",
        feed: "https://medium.com/feed/lunyr",
        site: "https://medium.com/lunyr",
        about: "With Lunyr you'll be able to contribute and peer review information for rewards in a completely decentralized way.",
        pic: "static/logos/LUN.svg",
      },
    ],
    monetha: [
      {
        name: "Monetha Blog",
        feed: "https://medium.com/feed/@monetha",
        site: "https://medium.com/@monetha",
        about: "Monetha's Reputation Platform is a solution to build a censorship resistant and transferable reputation that is reliable and based on your behavior",
        pic: "static/logos/MTH.svg",
      },
    ],
    oax: [
      {
        name: "Oax Blog",
        feed: "https://medium.com/feed/@OAX_Foundation",
        site: "https://medium.com/@OAX_Foundation",
        about: "OAX is a new, decentralized, digital asset ecosystem initiative run by the “The OAX Foundation Limited”",
        pic: "static/logos/OAX.svg",
      },
    ],
    ost: [
      {
        name: "Ost Blog",
        feed: "https://medium.com/feed/ostdotcom",
        site: "https://medium.com/ostdotcom",
        about: "The OST Platform enables you to easily add brand currency into any app to strengthen direct-to-consumer relationships.",
        pic: "static/logos/OST.svg",
      },
    ],
    populous: [
      {
        name: "Populous Blog",
        feed: "https://medium.com/feed/@BitPopulous",
        site: "https://medium.com/@BitPopulous",
        about: "Populous is a peer-to-peer (P2P) platform that uses blockchain to provide small and medium-sized enterprises (SMEs) a more efficient way to participate in invoice financing.",
        pic: "static/logos/PPT.svg",
      },
    ],
    quantstamp: [
      {
        name: "QuantStamp Blog",
        feed: "https://medium.com/feed/quantstamp",
        site: "https://medium.com/quantstamp",
        about: "Quantstamp is a Y Combinator-backed blockchain security company. Scan a smart contract using QSP, get a full-service smart contract audit",
        pic: "static/logos/QSP.svg",
      },
    ],
    ren: [
      {
        name: "Ren Blog",
        feed: "https://medium.com/feed/renproject",
        site: "https://medium.com/renproject",
        about: "Transfer tokens in zero-knowledge, trustlessly swap between blockchains, trade on a dark pool, build any privacy preserving application. Never reveal anything.",
        pic: "static/logos/REN.svg",
      },
    ],
    iexecrlc: [
      {
        name: "Iexercrlc Blog",
        feed: "https://medium.com/feed/iex-ec",
        site: "https://medium.com/iex-ec",
        about: "iExec provides distributed applications running on the blockchain (DApps) scalable, secure and easy.  RLC is the native token of the iExec cloud platform.",
        pic: "static/logos/RLC.svg",
      },
    ],
    singulardtv: [
      {
        name: "BreakerWorldWide Blog",
        feed: "https://medium.com/feed/@BreakerWorldwide",
        site: "https://medium.com/@BreakerWorldwide",
        about: "Breaker.io is the first to launch a blockchain-powered entertainment platform. Built with the creator in mind. Formerly singulardtv",
        pic: "static/logos/SNGLS.svg",
      },
    ],
    tierion: [
      {
        name: "Tierion Blog",
        feed: "https://medium.com/feed/tierion",
        site: "https://medium.com/tierion",
        about: "Tierion turns the blockchain into a global platform for verifying any data, file, or business process",
        pic: "static/logos/TNT.svg",
      },
    ],
    viberate: [
      {
        name: "Viberate Blog",
        feed: "https://medium.com/feed/viberate-blog",
        site: "https://medium.com/viberate-blog",
        about: "Viberate is a live music ecosystem and a blockchain-based marketplace that connects artists and music-industry professionals.",
        pic: "static/logos/VIB.svg",
      },
    ],
    vibe: [
      {
        name: "Vibe Blog",
        feed: "https://medium.com/feed/@VIBEHUBNEWS",
        site: "https://medium.com/@VIBEHUBNEWS",
        about: "Capturing and creating the virtual life. Bridging the gap between communities for gaming on blockchain",
        pic: "static/logos/VIBE.svg",
      },
    ],
    tael: [
      {
        name: "Taelpay Blog",
        feed: "https://medium.com/feed/@Taelpay",
        site: "https://medium.com/@Taelpay",
        about: "The digital token used in the Techrock ecosystem for verifiably authentic products. Formerly WaBi",
        pic: "static/logos/WABI.svg",
      },
    ],
    wepower: [
      {
        name: "WePower Blog",
        feed: "https://medium.com/feed/@wepower",
        site: "https://medium.com/wepower",
        about: "Blockchain-based green energy procurement and trading platform",
        pic: "static/logos/WPR.svg",
      },
    ],
    dibicoin: [
      {
        name: "Dibicoin Twitter",
        feed: "https://nitter.zelcore.io/dibicoin/rss",
        site: "https://twitter.com/dibicoin",
        about: "Who let the DIBI out?",
        pic: "static/logos/DIBI.svg",
      },
    ],
    bitcoinzero: [
      {
        name: "Bitcoinzero Blog",
        feed: "https://medium.com/feed/@BitcoinZero",
        site: "https://medium.com/@BitcoinZero",
        about: "Bitcoin Zero is a fork between BTC, LTC and HXX.",
        pic: "static/logos/BZX.svg",
      },
    ],
    etherparty: [
      {
        name: "Etherparty Blog",
        feed: "https://blog.etherparty.com/feed",
        site: "https://blog.etherparty.com/",
        about: "Etherparty is about simple tools for the next generation of Blockchain-connected economies powered by Smart Contract automation",
        pic: "static/logos/FUEL.svg",
      },
    ],
    ripple: [
      {
        name: "Ripple Blog",
        feed: "https://ripple.com/insights/feed",
        site: "https://ripple.com/",
        about: "Ripple is centralized payment protocol used to hold fiat currency, cryptocurrency and commodities. Ripple has been adopted by banks and payment networks as settlement infrastructure technology.",
        pic: "static/logos/XRP.svg",
      },
    ],
    eos: [
      {
        name: "EOS news",
        feed: "https://cointelegraph.com/rss/tag/eos",
        site: "https://eos.io/",
        about: "EOS.IO is a blockchain protocol powered by the native cryptocurrency EOS",
        pic: "static/logos/EOS.svg",
      },
    ],
    axe: [
      {
        name: "Axe Reddit",
        feed: "https://www.reddit.com/r/AXErunners/.rss",
        site: "https://axerunners.com/",
        about: "AXE is a decentralized X11-based cryptocurrency. The foundation of AXE network is hybrid PoW/PoSe system. First-tier nodes provide hash power to move data and secure the blockchain, while the second tier of full nodes adds extra privacy and increases network performance.",
        pic: "static/logos/AXE.svg",
      },
    ],
    unussedleo: [
      {
        name: "Bitfinex",
        feed: "https://medium.com/feed/@bitfinex",
        site: "https://medium.com/@Bitfinex",
        about: "Bitfinex is a cryptocurrency exchange owned and operated by iFinex Inc., which is headquartered in Hong Kong and registered in the British Virgin Islands. Their LEO Token is mostly used for reduced exchange fees.",
        pic: "static/logos/LEO.svg",
      },
    ],
    beaxy: [
      {
        name: "Beaxy Exchange Medium",
        feed: "https://medium.com/feed/beaxy-exchange",
        site: "https://medium.com/beaxy-exchange",
        about: "Blog related to Beaxy Exchange",
        pic: "static/logos/BXY.svg",
      },
    ],
    stableusd: [
      {
        name: "Stably Medium",
        feed: "https://medium.com/feed/stably-blog",
        site: "https://medium.com/stably-blog",
        about: "StableUSD (USDS) is a fiat-collateralized stablecoin created by Stably. Each StableUSD token is legally backed and redeemable for a US Dollar held in escrow accounts managed by Stably's regulated trustees, such as Prime Trust.",
        pic: "static/logos/USDS.svg",
      },
    ],
    nuke: [
      {
        name: "Half Life Twitter",
        feed: "https://nitter.zelcore.io/NukeToken/rss",
        site: "https://twitter.com/NukeToken",
        about: "NUKE is a currency that grows by shrinking.",
        pic: "static/logos/NUKE.svg",
      },
    ],
    dogecoin: [
      {
        name: "Dogeocin Twitter",
        feed: "https://nitter.zelcore.io/dogecoin/rss",
        site: "https://twitter.com/dogecoin",
        about: "Dogecoin is a cryptocurrency featuring a likeness of the Shiba Inu dog from the Doge Internet meme as its logo.",
        pic: "static/logos/DOGE.svg",
      },
    ],
    tron: [
      {
        name: "TRON",
        feed: "https://medium.com/feed/@Tronfoundation",
        site: "https://tron.network/",
        about: "TRON (TRX) strives to build the future of a truly decentralized internet and global free content entertainment system that utilizes blockchain technology.",
        pic: "static/logos/TRX.svg",
      },
    ],
    bittorrent: [
      {
        name: "BitTorrent Twitter",
        feed: "https://nitter.zelcore.io/bittorrent/rss",
        site: "https://twitter.com/bittorrent",
        about: "BitTorrent is a popular peer-to-peer (P2P) file sharing and torrent platform which has become increasingly decentralized in recent years.",
        pic: "static/logos/BTT_TRC.svg",
      },
      {
        name: "BitTorrent Reddit",
        feed: "https://www.reddit.com/r/bittorrent/.rss",
        site: "https://www.reddit.com/r/bittorrent/",
        about: "BitTorrent is a popular peer-to-peer (P2P) file sharing and torrent platform which has become increasingly decentralized in recent years.",
        pic: "static/logos/BTT_TRC.svg",
      },
    ],
    digibyte: [
      {
        name: "DigiByte Twitter",
        feed: "https://nitter.zelcore.io/DigiByteCoin/rss",
        site: "https://twitter.com/DigiByteCoin",
        about: "DigiByte (DGB) is a rapidly growing global blockchain with a focus on cybersecurity for digital payments & decentralized applications. Over 5 years, DigiByte has become the world's fastest, longest and most decentralized UTXO blockchain today.",
        pic: "static/logos/DGB.svg",
      },
    ],
    sinovate: [
      {
        name: "Sinovate Twitter",
        feed: "https://nitter.zelcore.io/SinovateChain/rss",
        site: "https://twitter.com/SinovateChain",
        about: "SINOVATE (SIN) is a new Peer-to-Peer (P2P) digital currency and ecosystem which creates unique and modern Blockchain products, services and solutions. \n"
          + "SIN embraces this new technology and has executed extensive research, on various ways to educate others and help them implement innovation into their daily lives and businesses.",
        pic: "static/logos/SIN.svg",
      },
    ],
    neo: [
      {
        name: "NEO news",
        feed: "https://neonewstoday.com/feed/",
        site: "https://neo.org/",
        about: "NEO (NEO), formerly Antshares, aims to build a 'smart economy' by incorporating digital assets, digital identities, and smart contracts.",
        pic: "static/logos/NEO.svg",
      },
    ],
    gas: [
      {
        name: "NEO news",
        feed: "https://neonewstoday.com/feed/",
        site: "https://neo.org/",
        about: "NEO (NEO), formerly Antshares, aims to build a 'smart economy' by incorporating digital assets, digital identities, and smart contracts.",
        pic: "static/logos/NEO.svg",
      },
    ],
    neofish: [
      {
        name: "NEO news",
        feed: "https://neonewstoday.com/feed/",
        site: "https://neo.org/",
        about: "FishChain, an Ethereum-based blockchain game, has announced its intention to launch a NEO-based counterpart called NeoFish, alongside an airdrop of the NEP-5 version of its FISH token.\n"
          + "FishChain combines a mining mechanism and fishing gameplay with a token model, with the goal of creating an interactive, player-driven marketplace and ecosystem.",
        pic: "static/logos/NEO.svg",
      },
    ],
    stellar: [
      {
        name: "Stellar Medium",
        feed: "https://medium.com/feed/@StellarOrg/",
        site: "https://medium.com/@StellarOrg",
        about: "The Stellar network is an open source, distributed, and community owned network used to facilitate cross-asset transfers of value.",
        pic: "static/logos/XLM.svg",
      },
    ],
    gcstar: [
      {
        name: "Fabrix Medium",
        feed: "https://medium.com/feed/fabrx-blockchain/",
        site: "https://medium.com/fabrx-blockchain",
        about: "Merchcoins are wrapped gift cards in the form of ERC-20 stablecoins. Buy, exchange, send and receive Merchcoins today.",
        pic: "static/logos/GCSTAR.svg",
      },
    ],
    gctgt: [
      {
        name: "Fabrix Medium",
        feed: "https://medium.com/feed/fabrx-blockchain/",
        site: "https://medium.com/fabrx-blockchain",
        about: "Merchcoins are wrapped gift cards in the form of ERC-20 stablecoins. Buy, exchange, send and receive Merchcoins today.",
        pic: "static/logos/GCTGT.svg",
      },
    ],
    gcwal: [
      {
        name: "Fabrix Medium",
        feed: "https://medium.com/feed/fabrx-blockchain/",
        site: "https://medium.com/fabrx-blockchain",
        about: "Merchcoins are wrapped gift cards in the form of ERC-20 stablecoins. Buy, exchange, send and receive Merchcoins today.",
        pic: "static/logos/GCWAL.svg",
      },
    ],
    gcbest: [
      {
        name: "Fabrix Medium",
        feed: "https://medium.com/feed/fabrx-blockchain/",
        site: "https://medium.com/fabrx-blockchain",
        about: "Merchcoins are wrapped gift cards in the form of ERC-20 stablecoins. Buy, exchange, send and receive Merchcoins today.",
        pic: "static/logos/GCBEST.svg",
      },
    ],
    gchd: [
      {
        name: "Fabrix Medium",
        feed: "https://medium.com/feed/fabrx-blockchain/",
        site: "https://medium.com/fabrx-blockchain",
        about: "Merchcoins are wrapped gift cards in the form of ERC-20 stablecoins. Buy, exchange, send and receive Merchcoins today.",
        pic: "static/logos/GCHD.svg",
      },
    ],
    gclowe: [
      {
        name: "Fabrix Medium",
        feed: "https://medium.com/feed/fabrx-blockchain/",
        site: "https://medium.com/fabrx-blockchain",
        about: "Merchcoins are wrapped gift cards in the form of ERC-20 stablecoins. Buy, exchange, send and receive Merchcoins today.",
        pic: "static/logos/GCLOWE.svg",
      },
    ],
    ontology: [
      {
        name: "Ontology Medium",
        feed: "https://medium.com/feed/ontologynetwork/",
        site: "https://medium.com/ontologynetwork",
        about: "Ontology describes itself as a provider of high-performance public blockchains, which includes distributed ledger and smart contract systems.\n"
          + "The Ontology blockchain framework reportedly supports public blockchain systems that can be customized for different applications. Ontology supports collaboration among chain networks with its various protocol groups.\n"
          + "Ontology aims to constantly provide common modules on the underlying infrastructure for different kinds of distributed scenarios, such as those for the distributed digital identity framework and distributed data exchange protocol.\n",
        pic: "static/logos/ONT.svg",
      },
    ],
    ontologygas: [
      {
        name: "Ontology Medium",
        feed: "https://medium.com/feed/ontologynetwork/",
        site: "https://medium.com/ontologynetwork",
        about: "Ontology gas is token used for paying transactions on ontology network. Ontology describes itself as a provider of high-performance public blockchains, which includes distributed ledger and smart contract systems.\n"
          + "The Ontology blockchain framework reportedly supports public blockchain systems that can be customized for different applications. Ontology supports collaboration among chain networks with its various protocol groups.\n"
          + "Ontology aims to constantly provide common modules on the underlying infrastructure for different kinds of distributed scenarios, such as those for the distributed digital identity framework and distributed data exchange protocol.\n",
        pic: "static/logos/ONG.svg",
      },
    ],
    dmme: [
      {
        name: "DMme Blog",
        feed: "https://medium.com/feed/@.Bio_Logik./",
        site: "https://medium.com/@.Bio_Logik./",
        about: "The Next Generation Of Messaging Mobile Application",
        pic: "static/logos/DMME.svg",
      },
    ],
    veriblock: [
      {
        name: "Veriblock Twitter",
        feed: "https://nitter.zelcore.io/VeriBlock/rss",
        site: "https://twitter.com/VeriBlock",
        about: "Using VeriBlock, every blockchain can benefit from Bitcoin’s computational power and unrivaled security.",
        pic: "static/logos/VBK.svg",
      },
    ],
    huobitoken: [
      {
        name: "Huobi Twitter",
        feed: "https://nitter.zelcore.io/HuobiGlobal/rss",
        site: "https://twitter.com/HuobiGlobal",
        about: "The Leading Global Digital Asset Exchange.",
        pic: "static/logos/HT.svg",
      },
    ],
    busd: [
      {
        name: "Binance Blog",
        feed: "https://medium.com/feed/@binance",
        site: "https://medium.com/@binance",
        about: "Binance Exchange provides cryptocurrency trading for fintech and blockchain enthusiasts globally, with multilingual support over a variety of services.",
        pic: "static/logos/BUSD_ERC20.svg",
      },
    ],
    okb: [
      {
        name: "OKEx Twitter",
        feed: "https://nitter.zelcore.io/OKEx/rss",
        site: "https://twitter.com/OKEx",
        about: "OKEx is a world-leading digital asset exchange, providing advanced financial services to traders globally by using blockchain technology.",
        pic: "static/logos/OKB.svg",
      },
    ],
    bitforextoken: [
      {
        name: "BitForex Twitter",
        feed: "https://nitter.zelcore.io/bitforexcom/rss",
        site: "https://twitter.com/bitforexcom",
        about: "A global top-10 cryptocurrency exchange leader — BitForex provides powerful tools letting you take full control of your digital asset trades and management.",
        pic: "static/logos/BF.svg",
      },
    ],
    mxtoken: [
      {
        name: "MXC Blog",
        feed: "https://medium.com/feed/@mxc.com",
        site: "https://medium.com/@mxc.com",
        about: "More than just an exchange.",
        pic: "static/logos/MX.svg",
      },
    ],
    zbtoken: [
      {
        name: "ZB Blog",
        feed: "https://medium.com/feed/@zbhk",
        site: "https://medium.com/@zbhk",
        about: "ZB Global is a world's leading blockchain assets financial service provider.",
        pic: "static/logos/ZB.svg",
      },
    ],
    hotbittoken: [
      {
        name: "Hotbit Blog",
        feed: "https://medium.com/feed/@hotbit",
        site: "https://medium.com/@hotbit",
        about: "Hotbit is one of the professional digital asset exchange platforms that provide trading services among major digital currencies like Bitcoin and Ethereum.",
        pic: "static/logos/HTB.svg",
      },
    ],
    huobipooltoken: [
      {
        name: "Huobi Pool Twitter",
        feed: "https://nitter.zelcore.io/EOS_huobipool/rss",
        site: "https://twitter.com/EOS_huobipool",
        about: "HPT-HuobiPool Token is the global ecological certificate of HuobiPool.",
        pic: "static/logos/HPT.svg",
      },
    ],
    golfcoin: [
      {
        name: "Golfcoin Twitter",
        feed: "https://nitter.zelcore.io/golfcoin/rss",
        site: "https://twitter.com/golfcoin",
        about: "Rewards program for the golf industry.",
        pic: "static/logos/GOLF.svg",
      },
    ],
    enecuum: [
      {
        name: "Enecuum Medium",
        feed: "https://medium.com/feed/@EnqBlockchain",
        site: "https://medium.com/@EnqBlockchain",
        about: "Blockchain mobile network for decentralized application.",
        pic: "static/logos/ENQ.svg",
      },
    ],
    fantom: [
      {
        name: "Fantom Medium",
        feed: "https://medium.com/feed/fantomfoundation",
        site: "https://medium.com/fantomfoundation",
        about: "The core of the new internet. The most advanced, fast and secure consensus for distributed networks.",
        pic: "static/logos/FTM.svg",
      },
    ],
    zeroxbitcoin: [
      {
        name: "0xBitcoin Twitter",
        feed: "https://nitter.zelcore.io/0xbitcoin_erc20/rss",
        site: "https://twitter.com/0xbitcoin_erc20",
        about: "The first truly decentralized PoW mineable ERC20 token contract on the Ethereum blockchain.",
        pic: "static/logos/0xBTC.svg",
      },
    ],
    vayla: [
      {
        name: "Vayla Twitter",
        feed: "https://nitter.zelcore.io/VAYLAtoken/rss",
        site: "https://twitter.com/VAYLAtoken",
        about: "A token valued by the people.",
        pic: "static/logos/VYA.svg",
      },
    ],
    aergo: [
      {
        name: "Aergo Twitter",
        feed: "https://nitter.zelcore.io/AERGO_IO/rss",
        site: "https://twitter.com/AERGO_IO",
        about: "It's not blockchain. It's blockchain for business.",
        pic: "static/logos/AERGO.svg",
      },
    ],
    lunchmoney: [
      {
        name: "Lunchmoney Twitter",
        feed: "https://nitter.zelcore.io/LunchToken/rss",
        site: "https://twitter.com/LunchToken",
        about: "ERC20 utility token used for incentivizing real feedback from restaurant and eatery patrons wordwide.",
        pic: "static/logos/LMY.svg",
      },
    ],
    kadena: [
      {
        name: "Kadena Twitter",
        feed: "https://nitter.zelcore.io/kadena_io/rss",
        site: "https://twitter.com/kadena_io",
        about: "Kadena offers the fastest, safest and most scalable hybrid blockchain technology stack for entrepreneurs. Smarter contracts//Scaling proof of work securely.",
        pic: "static/logos/KDA.svg",
      },
    ],
    netkoin: [
      {
        name: "NetKoin Twitter",
        feed: "https://nitter.zelcore.io/netkoin/rss",
        site: "https://twitter.com/netkoin",
        about: "Earn cryptocurrency and redeem rewards from everday shopping!",
        pic: "static/logos/NTK.svg",
      },
    ],
    gammacoin: [
      {
        name: "GammaCoin Twitter",
        feed: "https://nitter.zelcore.io/gammagmc/rss",
        site: "https://twitter.com/gammagmc",
        about: "GMC are economic tokens and investments made using the Ethereum blockchain.",
        pic: "static/logos/GMC.svg",
      },
    ],
    bazookatoken: [
      {
        name: "Baztoken Twitter",
        feed: "https://nitter.zelcore.io/BazToken/rss",
        site: "https://twitter.com/BazToken",
        about: "Baztoken is an ERC20 with limitless usability which aims to revolutionize the E-Gaming, Sports betting & E-commerce.",
        pic: "static/logos/BAZ.svg",
      },
    ],
    coinsto: [
      {
        name: "Coinsto Twitter",
        feed: "https://nitter.zelcore.io/Coinstoglobal/rss",
        site: "https://twitter.com/Coinstoglobal",
        about: "Coinsto is a Cryptocurrency project helping people to learn by others experience.",
        pic: "static/logos/CSO.svg",
      },
    ],
    unibright: [
      {
        name: "UniBright Twitter",
        feed: "https://nitter.zelcore.io/unibrightio/rss",
        site: "https://twitter.com/unibrightio",
        about: "UniBright is a business integration specialists, now offering Unibright.io - the first unified framework for blockchain based business integration",
        pic: "static/logos/UBT.svg",
      },
    ],
    ilcoin: [
      {
        name: "ILCoin Twitter",
        feed: "https://nitter.zelcore.io/ILC_B_Project/rss",
        site: "https://twitter.com/ILC_B_Project",
        about: "The ILCoin blockchain is a revolutionary on-chain data storage system; developed not only to provide a strong foundation for the ILCoin cryptocurrency, "
          + "but also to open up a wide range of possibilities for exceptionally safe yet transparent data storage, establishment of various smart contract systems and the launch of innovative decentralized applications running on our blockchain systems.",
        pic: "static/logos/ILC.svg",
      },
    ],
    hex: [
      {
        name: "Hex Twitter",
        feed: "https://nitter.zelcore.io/HEXcrypto/rss",
        site: "https://twitter.com/HEXcrypto",
        about: "Hex twitter",
        pic: "static/logos/HEX.svg",
      },
      {
        name: "Hex Reddit",
        feed: "https://www.reddit.com/r/HEXcrypto/.rss",
        site: "https://www.reddit.com/r/HEXcrypto/",
        about: "Hex reddit",
        pic: "static/logos/HEX.svg",
      },
    ],
    comp: [
      {
        name: "Compound Twitter",
        feed: "https://nitter.zelcore.io/compoundfinance/rss",
        site: "https://twitter.com/compoundfinance",
        about: "Compound - an algorithmic, autonomous interest rate protocol for developers.",
        pic: "static/logos/COMP.svg",
      },
      {
        name: "Compound Medium",
        feed: "https://medium.com/feed/compound-finance",
        site: "https://medium.com/compound-finance",
        about: "Compound is an algorithmic, autonomous interest rate protocol built for developers, to unlock a universe of open financial applications.",
        pic: "static/logos/COMP.svg",
      },
    ],
    vidt: [
      {
        name: "V-ID Twitter",
        feed: "https://nitter.zelcore.io/v_id_blockchain/rss",
        site: "https://twitter.com/v_id_blockchain",
        about: "V-ID is a service that detects any unlawful manipulation of any digital file.",
        pic: "static/logos/VIDT.svg",
      },
      {
        name: "V-ID Medium",
        feed: "https://medium.com/feed/@pim_vee",
        site: "https://medium.com/@pim_vee",
        about: "V-ID is a service that detects any unlawful manipulation of any digital file.",
        pic: "static/logos/VIDT.svg",
      },
    ],
    drgn: [
      {
        name: "Dragon Twitter",
        feed: "https://nitter.zelcore.io/dragonchaingang/rss",
        site: "https://twitter.com/dragonchaingang",
        about: "Dragonchain is a public/private hybrid blockchain. A private blockchain leveraging decentralization and interoperability to ensure your data is both verifiable and secure.",
        pic: "static/logos/DRGN.svg",
      },
    ],
    whale: [
      {
        name: "Whale Twitter",
        feed: "https://nitter.zelcore.io/WhaleShark_Pro/rss",
        site: "https://twitter.com/WhaleShark_Pro",
        about: "THE WORLD'S FIRST SOCIAL CURRENCY BACKED BY HIGH-VALUE ASSETS. We have created the world's first social currency with a foundational valuation that is underpinned by some of the world's most valuable non-fungible tokens (NFTs).",
        pic: "static/logos/WHALE.svg",
      },
    ],
    wbtc: [
      {
        name: "WBTC Twitter",
        feed: "https://nitter.zelcore.io/WrappedBTC/rss",
        site: "https://twitter.com/WrappedBTC",
        about: "Wrapped Bitcoin delivers the power of Bitcoin with the flexibility of an ERC20 token. Wrapped Bitcoin(WBTC) is the first ERC20 token backed 1: 1 with Bitcoin. Completely transparent. 100% verifiable.Community led.",
        pic: "static/logos/WBTC.svg",
      },
    ],
    genesistron: [
      {
        name: "Genesis Blog",
        feed: "https://nitter.zelcore.io/genx_network/rss",
        site: "https://twitter.com/genx_network",
        about: "P2P point of sale and payments processing ecosystem for business and e-commerce.",
        pic: "static/logos/GENX_TRC20.svg",
      },
    ],
    om: [
      {
        name: "MANTRA DAO Twitter",
        feed: "https://nitter.zelcore.io/MANTRADAO/rss",
        site: "https://twitter.com/MANTRADAO",
        about: "MANTRA DAO is a community-governed DeFi platform focusing on Staking, Lending, and Governance. MANTRA DAO leverages the wisdom of the crowd to create a community-governed, transparent, and decentralized ecosystem for web 3.0. "
          + "Built on Parity Substrate for the Polkadot ecosystem, MANTRA DAO gives financial control back to the people to grow wealth together.",
        pic: "static/logos/OM.svg",
      },
    ],
    testnetbitcoin: [
      {
        name: "Bitcoin News",
        feed: "https://www.reddit.com/r/bitcoin/.rss",
        site: "https://www.reddit.com/r/bitcoin/",
        about: "Subreddit for the discussion of Bitcoin 'The official source for CryptoCurrency News, Discussion & Analysis.'",
        pic: "static/logos/TESTBTC.svg",
      },
    ],
    coinartisttoken: [
      {
        name: "Coin Artist Token Twitter",
        feed: "https://nitter.zelcore.io/coin_artist/rss",
        site: "https://twitter.com/coin_artist",
        about: "tokenized version of Marguerite deCourcelle as an ongoing social experiment called Coin’s E-Den. You can think of COIN as a collaborative governance token regarding me and the Coin Artist ecosystem.",
        pic: "static/logos/COIN.svg",
      },
    ],
    uni: [
      {
        name: "Uniswap Twitter",
        feed: "https://nitter.zelcore.io/UniswapProtocol/rss",
        site: "https://twitter.com/UniswapProtocol",
        about: "The Uniswap Protocol token.",
        pic: "static/logos/UNI.svg",
      },
    ],
    testnetropstenethereum: [
      {
        name: "Ethereum Reddit",
        feed: "https://www.reddit.com/r/ethereum/.rss",
        site: "https://www.reddit.com/r/ethereum/",
        about: "Ethereum Reddit with the latest news and announcements",
        pic: "static/logos/TESTETH.svg",
      },
    ],
    jst: [
      {
        name: "Just Twitter",
        feed: "https://nitter.zelcore.io/DeFi_JUST/rss",
        site: "https://twitter.com/DeFi_JUST",
        about: "JUST is committed to developing TRON-b  ased DeFi protocols and aims to provide all-in-one financial solutions to its users.",
        pic: "static/logos/JST.svg",
      },
    ],
    beldex: [
      {
        name: "Beldex Twitter",
        feed: "https://nitter.zelcore.io/BeldexCoin/rss",
        site: "https://twitter.com/BeldexCoin",
        about: "BELDEX, a new cryptocurrency ecosystem has emerged with the sole purpose of resolving some of the key issues faced by the crypto world like privacy, liquidity, and usability.",
        pic: "static/logos/BDX.svg",
      },
    ],
    toshi: [
      {
        name: "Toshimon Twitter",
        feed: "https://nitter.zelcore.io/Toshimon_/rss",
        site: "https://twitter.com/Toshimon_",
        about: "Toshimon Governance Token",
        pic: "static/logos/TOSHI.svg",
      },
    ],
    maid: [
      {
        name: "MaidSafeCoin Twitter",
        feed: "https://nitter.zelcore.io/maidsafe/rss",
        site: "https://twitter.com/maidsafe",
        about: "MaidSafeCoin (MAID) is the decentralized currency for the SAFE Network, a autonomous and decentralized data network that boasts extra hard disk space, processing power, and data connectivity for its users.",
        pic: "static/logos/MAID.svg",
      },
    ],
    btcb: [
      {
        name: "Bitcoin News",
        feed: "https://www.reddit.com/r/bitcoin/.rss",
        site: "https://www.reddit.com/r/bitcoin/",
        about: "Subreddit for the discussion of Bitcoin 'The official source for CryptoCurrency News, Discussion & Analysis.'",
        pic: "static/logos/BTCB.svg",
      },
    ],
    rune: [
      {
        name: "THORChain Reddit",
        feed: "https://www.reddit.com/r/thorchain/.rss",
        site: "https://www.reddit.com/r/thorchain/",
        about: "THORChain is a decentralised cross-chain liquidity network with no pegged or wrapped tokens.",
        pic: "static/logos/RUNE.svg",
      },
      {
        name: "THORChain Twitter",
        feed: "https://nitter.zelcore.io/thorchain_org/rss",
        site: "https://twitter.com/thorchain_org",
        about: "THORChain is a decentralised cross-chain liquidity network with no pegged or wrapped tokens.",
        pic: "static/logos/RUNE.svg",
      },
      {
        name: "THORChain Medium",
        feed: "https://medium.com/feed/topic/thorchain",
        site: "https://medium.com/topic/thorchain",
        about: "THORChain is a decentralised cross-chain liquidity network with no pegged or wrapped tokens.",
        pic: "static/logos/RUNE.svg",
      },
    ],
    usdttrc: [
      {
        name: "Tether Blog",
        feed: "https://tether.to/feed/",
        site: "https://tether.to/press/",
        about: "USDT is a cryptocurrency asset issued on the Bitcoin blockchain via the Omni Layer Protocol. It is also issued on the Ethereum blockchain via the ERC20 Token Standard and Tron blockchain via TRC20 Token standard.",
        pic: "static/logos/USDT_TRC.svg",
      },
      {
        name: "Tether Twitter",
        feed: "https://nitter.zelcore.io/tether_to/rss",
        site: "https://twitter.com/tether_to",
        about: "USDT is a stablecoin (stable-value cryptocurrency) that mirrors the price of the U.S. dollar, issued by a Hong Kong-based company Tether.",
        pic: "static/logos/USDT_TRC.svg",
      },
    ],
    trueusdbnb: [
      {
        name: "True USD Blog",
        feed: "https://blog.trusttoken.com/feed/",
        site: "https://blog.trusttoken.com/",
        about: "TrueUSD (TUSD) is a stablecoin that you can redeem 1-for-1 for US dollars. TUSD is the first asset token created on the TrustToken Platform.",
        pic: "static/logos/TUSD_BEP2.svg",
      },
    ],
    busdbnb: [
      {
        name: "Binance Blog",
        feed: "https://medium.com/feed/@binance",
        site: "https://medium.com/@binance",
        about: "Binance Exchange provides cryptocurrency trading for fintech and blockchain enthusiasts globally, with multilingual support over a variety of services.",
        pic: "static/logos/BUSD_BEP2.svg",
      },
    ],
    nexo: [
      {
        name: "Nexo Blog",
        feed: "https://medium.com/feed/@community_83533",
        site: "https://medium.com/@community_83533",
        about: "Nexo is a blockchain-based lending platform that offers users instant cryptocurrency-backed loans. Users deposit an accepted token — such as Bitcoin (BTC), Ether (ETH), Litecoin (LTC) or XRP (XRP) — as collateral to receive a loan in the form of a fiat currency or stablecoin.",
        pic: "static/logos/NEXO_ERC20.svg",
      },
      {
        name: "Nexo Twitter",
        feed: "https://nitter.zelcore.io/NexoFinance/rss",
        site: "https://twitter.com/NexoFinance",
        about: "Nexo is a blockchain-based lending platform that offers users instant cryptocurrency-backed loans. Users deposit an accepted token — such as Bitcoin (BTC), Ether (ETH), Litecoin (LTC) or XRP (XRP) — as collateral to receive a loan in the form of a fiat currency or stablecoin.",
        pic: "static/logos/NEXO_ERC20.svg",
      },
      {
        name: "Nexo Reddit",
        feed: "https://www.reddit.com/r/nexo/.rss",
        site: "https://www.reddit.com/r/nexo/",
        about: "Nexo is a blockchain-based lending platform that offers users instant cryptocurrency-backed loans. Users deposit an accepted token — such as Bitcoin (BTC), Ether (ETH), Litecoin (LTC) or XRP (XRP) — as collateral to receive a loan in the form of a fiat currency or stablecoin.",
        pic: "static/logos/NEXO_ERC20.svg",
      },
    ],
    nexobnb: [
      {
        name: "Nexo Blog",
        feed: "https://medium.com/feed/@community_83533",
        site: "https://medium.com/@community_83533",
        about: "Nexo is a blockchain-based lending platform that offers users instant cryptocurrency-backed loans. Users deposit an accepted token — such as Bitcoin (BTC), Ether (ETH), Litecoin (LTC) or XRP (XRP) — as collateral to receive a loan in the form of a fiat currency or stablecoin.",
        pic: "static/logos/NEXO_BEP2.svg",
      },
      {
        name: "Nexo Twitter",
        feed: "https://nitter.zelcore.io/NexoFinance/rss",
        site: "https://twitter.com/NexoFinance",
        about: "Nexo is a blockchain-based lending platform that offers users instant cryptocurrency-backed loans. Users deposit an accepted token — such as Bitcoin (BTC), Ether (ETH), Litecoin (LTC) or XRP (XRP) — as collateral to receive a loan in the form of a fiat currency or stablecoin.",
        pic: "static/logos/NEXO_BEP2.svg",
      },
      {
        name: "Nexo Reddit",
        feed: "https://www.reddit.com/r/nexo/.rss",
        site: "https://www.reddit.com/r/nexo/",
        about: "Nexo is a blockchain-based lending platform that offers users instant cryptocurrency-backed loans. Users deposit an accepted token — such as Bitcoin (BTC), Ether (ETH), Litecoin (LTC) or XRP (XRP) — as collateral to receive a loan in the form of a fiat currency or stablecoin.",
        pic: "static/logos/NEXO_BEP2.svg",
      },
    ],
    mcdai: [
      {
        name: "Dai Blog",
        feed: "https://medium.com/feed/@MakerDAO",
        site: "https://medium.com/@MakerDAO",
        about: "DAI is an Ethereum-based stablecoin (stable-price cryptocurrency) whose issuance and development is managed by the Maker Protocol and the MakerDAO decentralized autonomous organization.",
        pic: "static/logos/DAI.svg",
      },
      {
        name: "Dai Twitter",
        feed: "https://nitter.zelcore.io/MakerDAO/rss",
        site: "https://twitter.com/MakerDAO",
        about: "DAI is an Ethereum-based stablecoin (stable-price cryptocurrency) whose issuance and development is managed by the Maker Protocol and the MakerDAO decentralized autonomous organization.",
        pic: "static/logos/DAI.svg",
      },
      {
        name: "Dai Reddit",
        feed: "https://www.reddit.com/r/MakerDAO/.rss",
        site: "https://www.reddit.com/r/MakerDAO/",
        about: "DAI is an Ethereum-based stablecoin (stable-price cryptocurrency) whose issuance and development is managed by the Maker Protocol and the MakerDAO decentralized autonomous organization.",
        pic: "static/logos/DAI.svg",
      },
    ],
    xdai: [
      {
        name: "xDai Twitter",
        feed: "https://nitter.zelcore.io/xdaichain/rss",
        site: "https://twitter.com/xdaichain",
        about: "The xDai Chain is a stable payments blockchain designed for fast and inexpensive stable transactions. xDai is used for transactions, payments and fees, and STAKE is used to support Proof-of-Stake consensus.",
        pic: "static/logos/STAKE.svg",
      },
    ],
    rev: [
      {
        name: "Revain Twitter",
        feed: "https://nitter.zelcore.io/revain_org/rss",
        site: "https://twitter.com/revain_org",
        about: "Revain describes itself as the first trustworthy review platform built with blockchain technology. All user reviews are written in the blockchain, providing transparency. "
          + "No one can change or delete them, including the Revain itself. This makes review manipulation by any party nearly impossible.",
        pic: "static/logos/REV_ERC20.svg",
      },
      {
        name: "Revain Reddit",
        feed: "https://www.reddit.com/r/revain_org/.rss",
        site: "https://www.reddit.com/r/revain_org/",
        about: "Revain describes itself as the first trustworthy review platform built with blockchain technology. All user reviews are written in the blockchain, providing transparency. "
          + "No one can change or delete them, including the Revain itself. This makes review manipulation by any party nearly impossible.",
        pic: "static/logos/REV_ERC20.svg",
      },
      {
        name: "Revain Blog",
        feed: "https://medium.com/feed/@revain.org",
        site: "https://medium.com/@revain.org",
        about: "Revain describes itself as the first trustworthy review platform built with blockchain technology. All user reviews are written in the blockchain, providing transparency. "
          + "No one can change or delete them, including the Revain itself. This makes review manipulation by any party nearly impossible.",
        pic: "static/logos/REV_ERC20.svg",
      },
    ],
    revtrc: [
      {
        name: "Revain Twitter",
        feed: "https://nitter.zelcore.io/revain_org/rss",
        site: "https://twitter.com/revain_org",
        about: "Revain describes itself as the first trustworthy review platform built with blockchain technology. All user reviews are written in the blockchain, providing transparency. "
          + "No one can change or delete them, including the Revain itself. This makes review manipulation by any party nearly impossible.",
        pic: "static/logos/REV_TRC20.svg",
      },
      {
        name: "Revain Reddit",
        feed: "https://www.reddit.com/r/revain_org/.rss",
        site: "https://www.reddit.com/r/revain_org/",
        about: "Revain describes itself as the first trustworthy review platform built with blockchain technology. All user reviews are written in the blockchain, providing transparency. "
          + "No one can change or delete them, including the Revain itself. This makes review manipulation by any party nearly impossible.",
        pic: "static/logos/REV_TRC20.svg",
      },
      {
        name: "Revain Blog",
        feed: "https://medium.com/feed/@revain.org",
        site: "https://medium.com/@revain.org",
        about: "Revain describes itself as the first trustworthy review platform built with blockchain technology. All user reviews are written in the blockchain, providing transparency. "
          + "No one can change or delete them, including the Revain itself. This makes review manipulation by any party nearly impossible.",
        pic: "static/logos/REV_TRC20.svg",
      },
    ],
    aave: [
      {
        name: "Aave Twitter",
        feed: "https://nitter.zelcore.io/AaveAave/rss",
        site: "https://twitter.com/AaveAave",
        about: "Aave is a decentralized finance protocol that allows people to lend and borrow crypto.",
        pic: "static/logos/AAVE.svg",
      },
      {
        name: "Aave Reddit",
        feed: "https://www.reddit.com/r/Aave_Official/.rss",
        site: "https://www.reddit.com/r/Aave_Official/",
        about: "Aave is a decentralized finance protocol that allows people to lend and borrow crypto.",
        pic: "static/logos/AAVE.svg",
      },
      {
        name: "Aave Blog",
        feed: "https://medium.com/feed/aave",
        site: "https://medium.com/aave",
        about: "Aave is a decentralized finance protocol that allows people to lend and borrow crypto.",
        pic: "static/logos/AAVE.svg",
      },
    ],
    snx: [
      {
        name: "Synthetix Twitter",
        feed: "https://nitter.zelcore.io/synthetix_io/rss",
        site: "https://twitter.com/synthetix_io",
        about: "Synthetix is a derivatives liquidity protocol on Ethereum that enables the issuance and trading of synthetic assets. Each synthetic asset (or Synth) is an ERC20 token which tracks the price of an external asset.",
        pic: "static/logos/SNX.svg",
      },
      {
        name: "Synthetix Reddit",
        feed: "https://www.reddit.com/r/synthetix_io/.rss",
        site: "https://www.reddit.com/r/synthetix_io/",
        about: "Synthetix is a derivatives liquidity protocol on Ethereum that enables the issuance and trading of synthetic assets. Each synthetic asset (or Synth) is an ERC20 token which tracks the price of an external asset.",
        pic: "static/logos/SNX.svg",
      },
    ],
    yfi: [
      {
        name: "yearn.finance Twitter",
        feed: "https://nitter.zelcore.io/iearnfinance/rss",
        site: "https://twitter.com/iearnfinance",
        about: "Yearn.finance is an aggregator service for decentralized finance (DeFi) investors, using automation to allow them to maximize profits from yield farming.",
        pic: "static/logos/YFI.svg",
      },
      {
        name: "yearn.finance Medium",
        feed: "https://medium.com/feed/iearn",
        site: "https://medium.com/iearn",
        about: "Yearn.finance is an aggregator service for decentralized finance (DeFi) investors, using automation to allow them to maximize profits from yield farming.",
        pic: "static/logos/YFI.svg",
      },
    ],
    ftt: [
      {
        name: "FTX Token Twitter",
        feed: "https://nitter.zelcore.io/FTX_Official/rss",
        site: "https://twitter.com/FTX_Official",
        about: "FTX is owned by FTX Trading LTD, a company incorporated in Antigua and Barbuda. FTX was incubated by Alameda Research, a cryptocurrency liquidity provider. ",
        pic: "static/logos/FTT.svg",
      },
      {
        name: "FTX Token Medium",
        feed: "https://medium.com/feed/@ftx",
        site: "https://medium.com/@ftx",
        about: "FTX is owned by FTX Trading LTD, a company incorporated in Antigua and Barbuda. FTX was incubated by Alameda Research, a cryptocurrency liquidity provider. ",
        pic: "static/logos/FTT.svg",
      },
    ],
    grt: [
      {
        name: "The Graph Twitter",
        feed: "https://nitter.zelcore.io/graphprotocol/rss",
        site: "https://twitter.com/graphprotocol",
        about: "The Graph is an indexing protocol for querying data for networks like Ethereum and IPFS, powering many applications in both DeFi and the broader Web3 ecosystem.",
        pic: "static/logos/GRT.svg",
      },
      {
        name: "The Graph Reddit",
        feed: "https://www.reddit.com/r/thegraph/.rss",
        site: "https://www.reddit.com/r/thegraph/",
        about: "The Graph is an indexing protocol for querying data for networks like Ethereum and IPFS, powering many applications in both DeFi and the broader Web3 ecosystem.",
        pic: "static/logos/GRT.svg",
      },
    ],
    sushi: [
      {
        name: "Sushi Twitter",
        feed: "https://nitter.zelcore.io/sushiswap/rss",
        site: "https://twitter.com/sushiswap",
        about: "SushiSwap (SUSHI) is an example of an automated market maker (AMM). An increasingly popular tool among cryptocurrency users, AMMs are decentralized exchanges which use smart contracts to create markets for any given pair of tokens.",
        pic: "static/logos/SUSHI.svg",
      },
      {
        name: "Sushi Medium",
        feed: "https://medium.com/feed/sushiswap-org",
        site: "https://medium.com/sushiswap-org",
        about: "SushiSwap (SUSHI) is an example of an automated market maker (AMM). An increasingly popular tool among cryptocurrency users, AMMs are decentralized exchanges which use smart contracts to create markets for any given pair of tokens.",
        pic: "static/logos/SUSHI.svg",
      },
    ],
    cel: [
      {
        name: "Celsius Twitter",
        feed: "https://nitter.zelcore.io/graphprotocol/rss",
        site: "https://twitter.com/graphprotocol",
        about: "Celsius (CEL) is an all-in-one banking and financial services platform for cryptocurrency users.",
        pic: "static/logos/CEL.svg",
      },
      {
        name: "Celsius Reddit",
        feed: "https://www.reddit.com/r/thegraph/.rss",
        site: "https://www.reddit.com/r/thegraph/",
        about: "Celsius (CEL) is an all-in-one banking and financial services platform for cryptocurrency users.",
        pic: "static/logos/CEL.svg",
      },
    ],
    cro: [
      {
        name: "Crypto.com Coin Twitter",
        feed: "https://nitter.zelcore.io/cryptocom/rss",
        site: "https://twitter.com/cryptocom",
        about: "Crypto.com Coin (CRO) is the native cryptocurrency token of Crypto.com Chain — a decentralized, open-source blockchain developed by the Crypto.com payment, trading and financial services company.",
        pic: "static/logos/CRO.svg",
      },
      {
        name: "Crypto.com Coin Reddit",
        feed: "https://www.reddit.com/r/Crypto_com/.rss",
        site: "https://www.reddit.com/r/Crypto_com/",
        about: "Crypto.com Coin (CRO) is the native cryptocurrency token of Crypto.com Chain — a decentralized, open-source blockchain developed by the Crypto.com payment, trading and financial services company.",
        pic: "static/logos/CRO.svg",
      },
      {
        name: "Crypto.com Coin Medium",
        feed: "https://medium.com/feed/@crypto.com",
        site: "https://medium.com/@crypto.com",
        about: "Crypto.com Coin (CRO) is the native cryptocurrency token of Crypto.com Chain — a decentralized, open-source blockchain developed by the Crypto.com payment, trading and financial services company.",
        pic: "static/logos/CRO.svg",
      },
    ],
    uma: [
      {
        name: "UMA Twitter",
        feed: "https://nitter.zelcore.io/UMAprotocol/rss",
        site: "https://twitter.com/UMAprotocol",
        about: "UMA, or Universal Market Access, is a protocol for the creation of synthetic assets based on the Ethereum (ETH) blockchain. UMA was launched in December 2018.",
        pic: "static/logos/UMA.svg",
      },
      {
        name: "UMA Medium",
        feed: "https://medium.com/feed/uma-project",
        site: "https://medium.com/uma-project",
        about: "UMA, or Universal Market Access, is a protocol for the creation of synthetic assets based on the Ethereum (ETH) blockchain. UMA was launched in December 2018.",
        pic: "static/logos/UMA.svg",
      },
    ],
    renbtc: [
      {
        name: "renBTC Twitter",
        feed: "https://nitter.zelcore.io/renprotocol/rss",
        site: "https://twitter.com/renprotocol",
        about: "RenBTC is an ERC-20 token built on the Ethereum network, pegged to Bitcoin. This means that each RENBTC can be always redeemed for one Bitcoin, and hence tends to maintain its value at close to the Bitcoin market rate.",
        pic: "static/logos/RENBTC.svg",
      },
      {
        name: "renBTC Reddit",
        feed: "https://www.reddit.com/r/renproject/.rss",
        site: "https://www.reddit.com/r/renproject/",
        about: "RenBTC is an ERC-20 token built on the Ethereum network, pegged to Bitcoin. This means that each RENBTC can be always redeemed for one Bitcoin, and hence tends to maintain its value at close to the Bitcoin market rate.",
        pic: "static/logos/RENBTC.svg",
      },
      {
        name: "renBTC Medium",
        feed: "https://medium.com/feed/renproject",
        site: "https://medium.com/renproject",
        about: "RenBTC is an ERC-20 token built on the Ethereum network, pegged to Bitcoin. This means that each RENBTC can be always redeemed for one Bitcoin, and hence tends to maintain its value at close to the Bitcoin market rate.",
        pic: "static/logos/RENBTC.svg",
      },
    ],
    chsb: [
      {
        name: "SwissBorg Twitter",
        feed: "https://nitter.zelcore.io/swissborg/rss",
        site: "https://twitter.com/swissborg",
        about: "SwissBorg aims to decentralize wealth management by making it fun, fair, and community-centric.",
        pic: "static/logos/CHSB.svg",
      },
      {
        name: "SwissBorg Reddit",
        feed: "https://www.reddit.com/r/swissborg/.rss",
        site: "https://www.reddit.com/r/swissborg/",
        about: "SwissBorg aims to decentralize wealth management by making it fun, fair, and community-centric.",
        pic: "static/logos/CHSB.svg",
      },
    ],
    ampl: [
      {
        name: "Ampleforth Twitter",
        feed: "https://nitter.zelcore.io/ampleforthorg/rss",
        site: "https://twitter.com/ampleforthorg",
        about: "Ampleforth is an Ethereum-based cryptocurrency with an algorithmically adjusted circulating supply.",
        pic: "static/logos/AMPL.svg",
      },
      {
        name: "Ampleforth Reddit",
        feed: "https://www.reddit.com/r/ampleforthcrypto/.rss",
        site: "https://www.reddit.com/r/ampleforthcrypto/",
        about: "Ampleforth is an Ethereum-based cryptocurrency with an algorithmically adjusted circulating supply.",
        pic: "static/logos/AMPL.svg",
      },
    ],
    rsr: [
      {
        name: "Reserve Rights Twitter",
        feed: "https://nitter.zelcore.io/reserveprotocol/rss",
        site: "https://twitter.com/reserveprotocol",
        about: "Reserve Rights is a dual-token stablecoin platform that was launched in May 2019 following a successful initial exchange offering (IEO) on the Huobi Prime platform.",
        pic: "static/logos/RSR.svg",
      },
      {
        name: "Reserve Rights Medium",
        feed: "https://medium.com/feed/reserve-currency",
        site: "https://medium.com/reserve-currency",
        about: "Reserve Rights is a dual-token stablecoin platform that was launched in May 2019 following a successful initial exchange offering (IEO) on the Huobi Prime platform.",
        pic: "static/logos/RSR.svg",
      },
    ],
    ust: [
      {
        name: "TerraUSD Twitter",
        feed: "https://nitter.zelcore.io/terra_money/rss",
        site: "https://twitter.com/terra_money",
        about: "A native Terra stablecoin pegged to the US Dollar.",
        pic: "static/logos/UST.svg",
      },
      {
        name: "TerraUSD Medium",
        feed: "https://medium.com/feed/terra-money",
        site: "https://medium.com/terra-money",
        about: "A native Terra stablecoin pegged to the US Dollar.",
        pic: "static/logos/UST.svg",
      },
    ],
    hedg: [
      {
        name: "HedgeTrade Twitter",
        feed: "https://nitter.zelcore.io/hedgetradehq/rss",
        site: "https://twitter.com/hedgetradehq",
        about: "HedgeTrade aims to become a platform where the world’s best traders share their knowledge. Traders post predictions into a smart contract-powered Blueprint that users can purchase or unlock in order to access.",
        pic: "static/logos/HEDG.svg",
      },
    ],
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
    ocean: [
      {
        name: "Ocean Protocol Twitter",
        feed: "https://nitter.zelcore.io/oceanprotocol/rss",
        site: "https://twitter.com/oceanprotocol",
        about: "Ocean Protocol is a blockchain-based ecosystem that allows individuals and businesses to easily unlock the value of their data and monetize it through the use of ERC-20 based datatokens.",
        pic: "static/logos/OCEAN.svg",
      },
      {
        name: "Ocean Protocol Reddit",
        feed: "https://www.reddit.com/r/oceanprotocol/.rss",
        site: "https://www.reddit.com/r/oceanprotocol/",
        about: "Ocean Protocol is a blockchain-based ecosystem that allows individuals and businesses to easily unlock the value of their data and monetize it through the use of ERC-20 based datatokens.",
        pic: "static/logos/OCEAN.svg",
      },
    ],
    husd: [
      {
        name: "HUSD Twitter",
        feed: "https://nitter.zelcore.io/Stablecoin_HUSD/rss",
        site: "https://twitter.com/Stablecoin_HUSD",
        about: "HUSD is an ERC-20 token that is 1:1 ratio pegged with USD. It was issued by Stable Universal, an entity that claims to follow US regulations.",
        pic: "static/logos/HUSD.svg",
      },
      {
        name: "HUSD Medium",
        feed: "https://medium.com/feed/@Stablecoin_HUSD",
        site: "https://medium.com/@Stablecoin_HUSD",
        about: "HUSD is an ERC-20 token that is 1:1 ratio pegged with USD. It was issued by Stable Universal, an entity that claims to follow US regulations.",
        pic: "static/logos/HUSD.svg",
      },
    ],
    cvt: [
      {
        name: "CyberVein Twitter",
        feed: "https://nitter.zelcore.io/cyberveingroup/rss",
        site: "https://twitter.com/cyberveingroup",
        about: "CyberVein's big-data solution is based on the PISR (private, interlink, secure, robust) distributed database, database operations are stored on CyberVein blockchain network which runs on a Proof-of-Contribution (PoC) consensus mechanism.",
        pic: "static/logos/CVT.svg",
      },
    ],
    nxm: [
      {
        name: "NXM Twitter",
        feed: "https://nitter.zelcore.io/NexusMutual/rss",
        site: "https://twitter.com/NexusMutual",
        about: "Nexus Mutual uses Ethereum so that people can pool risk together without the need for an insurance company.",
        pic: "static/logos/NXM.svg",
      },
      {
        name: "NXM Medium",
        feed: "https://medium.com/feed/nexus-mutual",
        site: "https://medium.com/nexus-mutual",
        about: "Nexus Mutual uses Ethereum so that people can pool risk together without the need for an insurance company.",
        pic: "static/logos/NXM.svg",
      },
    ],
    gno: [
      {
        name: "Gnosis Twitter",
        feed: "https://nitter.zelcore.io/gnosisPM/rss",
        site: "https://twitter.com/gnosisPM",
        about: "Started in 2015, Gnosis is a decentralized prediction market built on the Ethereum protocol. Third-party developers will also be able to introduce their own services.",
        pic: "static/logos/GNO.svg",
      },
      {
        name: "Gnosis Reddit",
        feed: "https://www.reddit.com/r/gnosisPM/.rss",
        site: "https://www.reddit.com/r/gnosisPM/",
        about: "Started in 2015, Gnosis is a decentralized prediction market built on the Ethereum protocol. Third-party developers will also be able to introduce their own services.",
        pic: "static/logos/GNO.svg",
      },
    ],
    chzbnb: [
      {
        name: "Chiliz Twitter",
        feed: "https://nitter.zelcore.io/chiliz/rss",
        site: "https://twitter.com/chiliz",
        about: "Chiliz, powering Socios.com, aims to give sports and esports fans the ability to crowd-manage their favorite teams, games, leagues, and events.",
        pic: "static/logos/CHZ_BEP2.svg",
      },
      {
        name: "Chiliz Medium",
        feed: "https://medium.com/feed/chiliz",
        site: "https://medium.com/chiliz",
        about: "Chiliz, powering Socios.com, aims to give sports and esports fans the ability to crowd-manage their favorite teams, games, leagues, and events.",
        pic: "static/logos/CHZ_BEP2.svg",
      },
    ],
    chz: [
      {
        name: "Chiliz Twitter",
        feed: "https://nitter.zelcore.io/chiliz/rss",
        site: "https://twitter.com/chiliz",
        about: "Chiliz, powering Socios.com, aims to give sports and esports fans the ability to crowd-manage their favorite teams, games, leagues, and events.",
        pic: "static/logos/CHZ_BEP2.svg",
      },
      {
        name: "Chiliz Medium",
        feed: "https://medium.com/feed/chiliz",
        site: "https://medium.com/chiliz",
        about: "Chiliz, powering Socios.com, aims to give sports and esports fans the ability to crowd-manage their favorite teams, games, leagues, and events.",
        pic: "static/logos/CHZ_BEP2.svg",
      },
    ],
    suntrc: [
      {
        name: "SUNOLD Twitter",
        feed: "https://nitter.zelcore.io/defi_sunio/rss",
        site: "https://twitter.com/defi_sunio",
        about: "SUNOLD (SUNOLD) is a cryptocurrency designed to further the development of decentralized finance (DeFi) on blockchain network TRON (TRX).",
        pic: "static/logos/SUN.svg",
      },
    ],
    usdjtrc: [
      {
        name: "USDJ Twitter",
        feed: "https://nitter.zelcore.io/DeFi_JUST/rss",
        site: "https://twitter.com/DeFi_JUST",
        about: "In the whitepaper, USDJ is described as a a USD-pegged cryptocurrency backed by collateral assets, generated through decentralized smart contracts on the TRON network.",
        pic: "static/logos/USDJ.svg",
      },
    ],
    dot: [
      {
        name: "Polkadot Twitter",
        feed: "https://nitter.zelcore.io/Polkadot/rss",
        site: "https://twitter.com/Polkadot",
        about: "Polkadot is an open-source sharding multichain protocol that facilitates the cross-chain transfer of any data or asset types, not just tokens, thereby making a wide range of blockchains interoperable with each other.",
        pic: "static/logos/DOT.svg",
      },
      {
        name: "Polkadot Reddit",
        feed: "https://www.reddit.com/r/dot/.rss",
        site: "https://www.reddit.com/r/dot/",
        about: "Polkadot is an open-source sharding multichain protocol that facilitates the cross-chain transfer of any data or asset types, not just tokens, thereby making a wide range of blockchains interoperable with each other.",
        pic: "static/logos/DOT.svg",
      },
      {
        name: "Polkadot Medium",
        feed: "https://medium.com/feed/polkadot-network",
        site: "https://medium.com/polkadot-network",
        about: "Polkadot is an open-source sharding multichain protocol that facilitates the cross-chain transfer of any data or asset types, not just tokens, thereby making a wide range of blockchains interoperable with each other.",
        pic: "static/logos/DOT.svg",
      },
    ],
    testnetwnd: [
      {
        name: "Polkadot Twitter",
        feed: "https://nitter.zelcore.io/Polkadot/rss",
        site: "https://twitter.com/Polkadot",
        about: "Polkadot is an open-source sharding multichain protocol that facilitates the cross-chain transfer of any data or asset types, not just tokens, thereby making a wide range of blockchains interoperable with each other.",
        pic: "static/logos/TESTWND.svg",
      },
      {
        name: "Polkadot Reddit",
        feed: "https://www.reddit.com/r/dot/.rss",
        site: "https://www.reddit.com/r/dot/",
        about: "Polkadot is an open-source sharding multichain protocol that facilitates the cross-chain transfer of any data or asset types, not just tokens, thereby making a wide range of blockchains interoperable with each other.",
        pic: "static/logos/TESTWND.svg",
      },
      {
        name: "Polkadot Medium",
        feed: "https://medium.com/feed/polkadot-network",
        site: "https://medium.com/polkadot-network",
        about: "Polkadot is an open-source sharding multichain protocol that facilitates the cross-chain transfer of any data or asset types, not just tokens, thereby making a wide range of blockchains interoperable with each other.",
        pic: "static/logos/TESTWND.svg",
      },
    ],
    testnetkadena: [
      {
        name: "Kadena Twitter",
        feed: "https://nitter.zelcore.io/kadena_io/rss",
        site: "https://twitter.com/kadena_io",
        about: "Kadena offers the fastest, safest and most scalable hybrid blockchain technology stack for entrepreneurs. Smarter contracts//Scaling proof of work securely.",
        pic: "static/logos/KDA.svg",
      },
    ],
    ksm: [
      {
        name: "Kusama Twitter",
        feed: "https://nitter.zelcore.io/kusamanetwork/rss",
        site: "https://twitter.com/kusamanetwork",
        about: "Self-described as Polkadot's wild cousin, Kusama is an experimental blockchain platform that is designed to provide a massively interoperable and scalable framework for developers.",
        pic: "static/logos/KSM.svg",
      },
      {
        name: "Kusama Reddit",
        feed: "https://www.reddit.com/r/Kusama/.rss",
        site: "https://www.reddit.com/r/Kusama/",
        about: "Self-described as Polkadot's wild cousin, Kusama is an experimental blockchain platform that is designed to provide a massively interoperable and scalable framework for developers.",
        pic: "static/logos/KSM.svg",
      },
    ],
    inch: [
      {
        name: "1inch Twitter",
        feed: "https://nitter.zelcore.io/1inchExchange/rss",
        site: "https://twitter.com/1inchExchange",
        about: "1inch is a decentralized exchange (DEX) aggregator, connecting several DEXes into one platform to allow its users to find the most efficient swapping routes across all platforms.",
        pic: "static/logos/1INCH.svg",
      },
      {
        name: "1inch Reddit",
        feed: "https://www.reddit.com/r/1inch_exchange/.rss",
        site: "https://www.reddit.com/r/1inch_exchange/",
        about: "1inch is a decentralized exchange (DEX) aggregator, connecting several DEXes into one platform to allow its users to find the most efficient swapping routes across all platforms.",
        pic: "static/logos/1INCH.svg",
      },
      {
        name: "1inch Medium",
        feed: "https://1inch-exchange.medium.com/feed",
        site: "https://1inch-exchange.medium.com",
        about: "1inch is a decentralized exchange (DEX) aggregator, connecting several DEXes into one platform to allow its users to find the most efficient swapping routes across all platforms.",
        pic: "static/logos/1INCH.svg",
      },
    ],
    cardano: [
      {
        name: "Cardano Twitter",
        feed: "https://nitter.net/cardano/rss",
        site: "https://twitter.com/cardano",
        about: "Cardano is a decentralised platform that will allow complex programmable transfers of value in a secure and scalable fashion. It is one of the first blockchains to be built in the highly secure Haskell programming language. Cardano is developing a <a href=\"https://coingecko.com/en?category_id=29\">smart contract platform</a> which seeks to deliver more advanced features than any protocol previously developed. It is the first blockchain platform to evolve out of a scientific philosophy and a research-first driven approach. The development team consists of a large global collective of expert engineers and researchers.\r\n\r\nThe Cardano project is different from other blockchain projects as it openly addresses the need for regulatory oversight whilst maintaining consumer privacy and protections through an innovative software architecture. The protocol features a layered blockchain software stack that is flexible, scalable, and is being developed with the most rigorous academic and commercial software standards in the industry. \r\n\r\nCardano will use a democratic governance system that allows the project to evolve over time, and fund itself sustainably through a visionary treasury system.\r\n\r\n<b>Technological Innovation</b>\r\nCardano is the first protocol to incorporate Ouroboros, the ground breaking <a href=\"https://coingecko.com/en?hashing_algorithm=Proof+of+Stake&view=market\">proof of stake algorithm</a>. The IOHK team employed a “first-principles” approach, driven by peer-reviewed academic research to build Cardano from the ground up.\r\n\r\nThe result of this collaborative effort is the first cryptocurrency to be based in Haskell code, which focuses on industrial strength product that delivers the resilience necessary for mission-critical systems, in this case, securing investment.\r\n\r\nCardano’s multi-layer protocol performs advanced functions, and has a settlement layer that is elegantly linked to a control layer. The settlement layer will have a unit of account, while the control layer will run smart contracts and will be programmed to recognize identity, assisting compliance (and allowing blacklisting, for instance).\r\n\r\nThe protocol is geared towards protecting privacy rights of users, while also taking into account the needs of regulators. In doing so, Cardano is the first protocol to balance these requirements in a nuanced and effective way, pioneering a new approach for cryptocurrencies.\r\n\r\nThe system is also designed to allow upgrade through soft forks, enabling it to adapt to changing needs and evolve quickly, when required. A treasury system is also being installed that will ensure the sustainability of the protocol.\r\n\r\nCardano is built in the spirit of collaboration by being completely open source and patent-free. Engineered for efficiency and scalability, the Cardano ecosystem will develop into the most complete cryptocurrency ever constructed.\r\n\r\n<b>Conceptual Innovation</b>\r\n\r\ni. Privacy and regulation\r\nThe original <a href=\"https://coingecko.com/en/coins/bitcoin\">Bitcoin</a> blockchain was meant to be a way for individuals to transact directly and anonymously with each other outside the control of banks and governments. This guarantees privacy in financial dealings, a fundamental individual right, but full anonymity can be counterproductive. Today most blockchain projects look to further either the aims of privacy or of regulation. To be effective globally, we think our blockchain must ‘square the circle’ by finding the right mix of individual privacy protection and provision for regulatory control.\r\n\r\nii. Governance\r\nPublic, decentralized blockchain projects rely on crowd-based governance models. This allows for democratic control of the network by its participants, which is essential to building truly decentralised economies. However, if they are not carefully designed, such governance can go awry. Both the Bitcoin and <a href=\"https://coingecko.com/en/coins/ethereum\">Ethereum</a> communities have experienced devastating schisms on the question of how to upgrade their networks – in Ethereum's case already causing a split. The Cardano blockchain has an airtight governance model that allow the community to democratically take clear and binding decisions.\r\n\r\niii. Funding\r\nThe Cardano blockchain has sophisticated maintenance and development needs and is able to adequately fund itself, both in terms of running costs and new investment.\r\n\r\nThe Token: ADA Voucher\r\nEvery blockchain project has a token of value commonly referred to as a cryptocurrency. Ada is the cryptocurrency on the Cardano blockchain. With Ada, holders can send value between friends, pay for a good or service, deposit funds on an exchange, or enter an application. To perform a transfer on the settlement layer requires you own Ada, or acquire Ada through an exchange. It will also be the native token to be used in applications built on the computation layer.\r\n\r\nThe Wallet: <a href=\"https://daedaluswallet.io/\">Daedalus</a>\r\nEach cryptocurrency requires a “wallet” to store Ada. Typically this wallet is a software application that can be installed on any computer or smartphone. Daedalus is a highly-engineered wallet with advanced security features that was developed by <a href=\"https://iohk.io/\">IOHK</a> specifically for the Cardano blockchain and protects your assets with the most advanced cryptography. In the future, Daedalus will not only support Ada, but other cryptocurrencies such as Bitcoin, <a href=\"https://coingecko.com/en/coins/ethereum-classic\">Ethereum Classic</a> and many more.\r\n\r\nThe <a href=\"https://cardanofoundation.org/en/\">Cardano Foundation</a>\r\nThe Cardano Foundation’s core mission is to standardise, protect and promote the Cardano Protocol technology. The Cardano Foundation acts as a supervisory and educational body for Cardano. Our mission is to:\r\n\r\n1. Standardise, protect and promote the Cardano Protocol and its applications\r\n2. Be a community hub offering authoritative, timely information about the technology and Cardano’s wide-ranging potential\r\n3. Liaise and influence government and regulatory bodies, form strategic partnerships with businesses, enterprises and other open source projects and aid the creation of formal software standards for Cardano, a crucial feature for its long term success and critical in adoption and government engagement\r\n\r\nAreas of Focus:\r\n1. Cardano Protocol - We function as an objective standards body for the Cardano protocol as it evolves over time.\r\n2. Cardano community - We support, grow and help educate the Cardano blockchain community.\r\n3. Cardano ecosystem - We work to expand and protect the Cardano ecosystem. This includes promoting Cardano as a platform for commercial entities and serving as an objective organization for enterprises interested in joining Cardano.\r\n4. Serving the wider blockchain community - We aim to influence and progress the emerging commercial and legislative landscape for blockchain technology and cryptocurrencies in general. We proactively approach government and regulatory bodies and form strategic partnerships with businesses, enterprises and other open-source projects.\r\n\r\nIOHK\r\nFounded in 2015 by <a href=\"https://iohk.io/team/charles-hoskinson/\">Charles Hoskinson</a> and <a href=\"https://iohk.io/team/jeremy-wood/\">Jeremy Wood</a>, IOHK is a world-class engineering and technology company committed to using peer-to-peer innovations to provide financial services to three billion people that don’t have them. The group is contracted to design, build, and maintain Cardano through to 2020.\r\n\r\nEmurgo\r\n<a href=\"https://emurgo.io/\">Emurgo</a> is the venture building entity in the Cardano ecosystem, its goal is to aid, integrate, and foster Cardano blockchain applications.\r\n\r\nEmurgo captures the transformative power that blockchain technology brings to the developing world. Decentralized applications built on Cardano technology, funded and supported by Emurgo, will have the potential to build groundbreaking applications.\r\n\r\nProject Road Map\r\nIOHK has now released the settlement layer. This means you can transact, trade, and purchase Ada tokens fully independently of the computation layer. The goal for the computation layer is to have a beta released by the first quarter of 2018. Once both settlement and computation layers are live, users will be able to setup a custom environment to build decentralised applications on the Cardano stack.\r\nIn 2019, IOHK intends to work on Cardano’s long-term scalability and augment its capabilities. As developers, IOHK has been contracted through 2020 to make sure Cardano is being adequately maintained. The goal is to create a sustainable ecosystem that is capable of funding and supporting itself.",
        pic: "static/logos/ADA.svg",
      },
      {
        name: "Cardano Reddit",
        feed: "https://www.reddit.com/r/cardano/.rss",
        site: "https://www.reddit.com/r/cardano/",
        about: "Cardano is a decentralised platform that will allow complex programmable transfers of value in a secure and scalable fashion. It is one of the first blockchains to be built in the highly secure Haskell programming language. Cardano is developing a <a href=\"https://coingecko.com/en?category_id=29\">smart contract platform</a> which seeks to deliver more advanced features than any protocol previously developed. It is the first blockchain platform to evolve out of a scientific philosophy and a research-first driven approach. The development team consists of a large global collective of expert engineers and researchers.\r\n\r\nThe Cardano project is different from other blockchain projects as it openly addresses the need for regulatory oversight whilst maintaining consumer privacy and protections through an innovative software architecture. The protocol features a layered blockchain software stack that is flexible, scalable, and is being developed with the most rigorous academic and commercial software standards in the industry. \r\n\r\nCardano will use a democratic governance system that allows the project to evolve over time, and fund itself sustainably through a visionary treasury system.\r\n\r\n<b>Technological Innovation</b>\r\nCardano is the first protocol to incorporate Ouroboros, the ground breaking <a href=\"https://coingecko.com/en?hashing_algorithm=Proof+of+Stake&view=market\">proof of stake algorithm</a>. The IOHK team employed a “first-principles” approach, driven by peer-reviewed academic research to build Cardano from the ground up.\r\n\r\nThe result of this collaborative effort is the first cryptocurrency to be based in Haskell code, which focuses on industrial strength product that delivers the resilience necessary for mission-critical systems, in this case, securing investment.\r\n\r\nCardano’s multi-layer protocol performs advanced functions, and has a settlement layer that is elegantly linked to a control layer. The settlement layer will have a unit of account, while the control layer will run smart contracts and will be programmed to recognize identity, assisting compliance (and allowing blacklisting, for instance).\r\n\r\nThe protocol is geared towards protecting privacy rights of users, while also taking into account the needs of regulators. In doing so, Cardano is the first protocol to balance these requirements in a nuanced and effective way, pioneering a new approach for cryptocurrencies.\r\n\r\nThe system is also designed to allow upgrade through soft forks, enabling it to adapt to changing needs and evolve quickly, when required. A treasury system is also being installed that will ensure the sustainability of the protocol.\r\n\r\nCardano is built in the spirit of collaboration by being completely open source and patent-free. Engineered for efficiency and scalability, the Cardano ecosystem will develop into the most complete cryptocurrency ever constructed.\r\n\r\n<b>Conceptual Innovation</b>\r\n\r\ni. Privacy and regulation\r\nThe original <a href=\"https://coingecko.com/en/coins/bitcoin\">Bitcoin</a> blockchain was meant to be a way for individuals to transact directly and anonymously with each other outside the control of banks and governments. This guarantees privacy in financial dealings, a fundamental individual right, but full anonymity can be counterproductive. Today most blockchain projects look to further either the aims of privacy or of regulation. To be effective globally, we think our blockchain must ‘square the circle’ by finding the right mix of individual privacy protection and provision for regulatory control.\r\n\r\nii. Governance\r\nPublic, decentralized blockchain projects rely on crowd-based governance models. This allows for democratic control of the network by its participants, which is essential to building truly decentralised economies. However, if they are not carefully designed, such governance can go awry. Both the Bitcoin and <a href=\"https://coingecko.com/en/coins/ethereum\">Ethereum</a> communities have experienced devastating schisms on the question of how to upgrade their networks – in Ethereum's case already causing a split. The Cardano blockchain has an airtight governance model that allow the community to democratically take clear and binding decisions.\r\n\r\niii. Funding\r\nThe Cardano blockchain has sophisticated maintenance and development needs and is able to adequately fund itself, both in terms of running costs and new investment.\r\n\r\nThe Token: ADA Voucher\r\nEvery blockchain project has a token of value commonly referred to as a cryptocurrency. Ada is the cryptocurrency on the Cardano blockchain. With Ada, holders can send value between friends, pay for a good or service, deposit funds on an exchange, or enter an application. To perform a transfer on the settlement layer requires you own Ada, or acquire Ada through an exchange. It will also be the native token to be used in applications built on the computation layer.\r\n\r\nThe Wallet: <a href=\"https://daedaluswallet.io/\">Daedalus</a>\r\nEach cryptocurrency requires a “wallet” to store Ada. Typically this wallet is a software application that can be installed on any computer or smartphone. Daedalus is a highly-engineered wallet with advanced security features that was developed by <a href=\"https://iohk.io/\">IOHK</a> specifically for the Cardano blockchain and protects your assets with the most advanced cryptography. In the future, Daedalus will not only support Ada, but other cryptocurrencies such as Bitcoin, <a href=\"https://coingecko.com/en/coins/ethereum-classic\">Ethereum Classic</a> and many more.\r\n\r\nThe <a href=\"https://cardanofoundation.org/en/\">Cardano Foundation</a>\r\nThe Cardano Foundation’s core mission is to standardise, protect and promote the Cardano Protocol technology. The Cardano Foundation acts as a supervisory and educational body for Cardano. Our mission is to:\r\n\r\n1. Standardise, protect and promote the Cardano Protocol and its applications\r\n2. Be a community hub offering authoritative, timely information about the technology and Cardano’s wide-ranging potential\r\n3. Liaise and influence government and regulatory bodies, form strategic partnerships with businesses, enterprises and other open source projects and aid the creation of formal software standards for Cardano, a crucial feature for its long term success and critical in adoption and government engagement\r\n\r\nAreas of Focus:\r\n1. Cardano Protocol - We function as an objective standards body for the Cardano protocol as it evolves over time.\r\n2. Cardano community - We support, grow and help educate the Cardano blockchain community.\r\n3. Cardano ecosystem - We work to expand and protect the Cardano ecosystem. This includes promoting Cardano as a platform for commercial entities and serving as an objective organization for enterprises interested in joining Cardano.\r\n4. Serving the wider blockchain community - We aim to influence and progress the emerging commercial and legislative landscape for blockchain technology and cryptocurrencies in general. We proactively approach government and regulatory bodies and form strategic partnerships with businesses, enterprises and other open-source projects.\r\n\r\nIOHK\r\nFounded in 2015 by <a href=\"https://iohk.io/team/charles-hoskinson/\">Charles Hoskinson</a> and <a href=\"https://iohk.io/team/jeremy-wood/\">Jeremy Wood</a>, IOHK is a world-class engineering and technology company committed to using peer-to-peer innovations to provide financial services to three billion people that don’t have them. The group is contracted to design, build, and maintain Cardano through to 2020.\r\n\r\nEmurgo\r\n<a href=\"https://emurgo.io/\">Emurgo</a> is the venture building entity in the Cardano ecosystem, its goal is to aid, integrate, and foster Cardano blockchain applications.\r\n\r\nEmurgo captures the transformative power that blockchain technology brings to the developing world. Decentralized applications built on Cardano technology, funded and supported by Emurgo, will have the potential to build groundbreaking applications.\r\n\r\nProject Road Map\r\nIOHK has now released the settlement layer. This means you can transact, trade, and purchase Ada tokens fully independently of the computation layer. The goal for the computation layer is to have a beta released by the first quarter of 2018. Once both settlement and computation layers are live, users will be able to setup a custom environment to build decentralised applications on the Cardano stack.\r\nIn 2019, IOHK intends to work on Cardano’s long-term scalability and augment its capabilities. As developers, IOHK has been contracted through 2020 to make sure Cardano is being adequately maintained. The goal is to create a sustainable ecosystem that is capable of funding and supporting itself.",
        pic: "static/logos/ADA.svg",
      },
      {
        name: "Cardano Medium",
        feed: "https://medium.com/feed/cardanorss",
        site: "https://medium.com/cardanorss",
        about: "Cardano is a decentralised platform that will allow complex programmable transfers of value in a secure and scalable fashion. It is one of the first blockchains to be built in the highly secure Haskell programming language. Cardano is developing a <a href=\"https://coingecko.com/en?category_id=29\">smart contract platform</a> which seeks to deliver more advanced features than any protocol previously developed. It is the first blockchain platform to evolve out of a scientific philosophy and a research-first driven approach. The development team consists of a large global collective of expert engineers and researchers.\r\n\r\nThe Cardano project is different from other blockchain projects as it openly addresses the need for regulatory oversight whilst maintaining consumer privacy and protections through an innovative software architecture. The protocol features a layered blockchain software stack that is flexible, scalable, and is being developed with the most rigorous academic and commercial software standards in the industry. \r\n\r\nCardano will use a democratic governance system that allows the project to evolve over time, and fund itself sustainably through a visionary treasury system.\r\n\r\n<b>Technological Innovation</b>\r\nCardano is the first protocol to incorporate Ouroboros, the ground breaking <a href=\"https://coingecko.com/en?hashing_algorithm=Proof+of+Stake&view=market\">proof of stake algorithm</a>. The IOHK team employed a “first-principles” approach, driven by peer-reviewed academic research to build Cardano from the ground up.\r\n\r\nThe result of this collaborative effort is the first cryptocurrency to be based in Haskell code, which focuses on industrial strength product that delivers the resilience necessary for mission-critical systems, in this case, securing investment.\r\n\r\nCardano’s multi-layer protocol performs advanced functions, and has a settlement layer that is elegantly linked to a control layer. The settlement layer will have a unit of account, while the control layer will run smart contracts and will be programmed to recognize identity, assisting compliance (and allowing blacklisting, for instance).\r\n\r\nThe protocol is geared towards protecting privacy rights of users, while also taking into account the needs of regulators. In doing so, Cardano is the first protocol to balance these requirements in a nuanced and effective way, pioneering a new approach for cryptocurrencies.\r\n\r\nThe system is also designed to allow upgrade through soft forks, enabling it to adapt to changing needs and evolve quickly, when required. A treasury system is also being installed that will ensure the sustainability of the protocol.\r\n\r\nCardano is built in the spirit of collaboration by being completely open source and patent-free. Engineered for efficiency and scalability, the Cardano ecosystem will develop into the most complete cryptocurrency ever constructed.\r\n\r\n<b>Conceptual Innovation</b>\r\n\r\ni. Privacy and regulation\r\nThe original <a href=\"https://coingecko.com/en/coins/bitcoin\">Bitcoin</a> blockchain was meant to be a way for individuals to transact directly and anonymously with each other outside the control of banks and governments. This guarantees privacy in financial dealings, a fundamental individual right, but full anonymity can be counterproductive. Today most blockchain projects look to further either the aims of privacy or of regulation. To be effective globally, we think our blockchain must ‘square the circle’ by finding the right mix of individual privacy protection and provision for regulatory control.\r\n\r\nii. Governance\r\nPublic, decentralized blockchain projects rely on crowd-based governance models. This allows for democratic control of the network by its participants, which is essential to building truly decentralised economies. However, if they are not carefully designed, such governance can go awry. Both the Bitcoin and <a href=\"https://coingecko.com/en/coins/ethereum\">Ethereum</a> communities have experienced devastating schisms on the question of how to upgrade their networks – in Ethereum's case already causing a split. The Cardano blockchain has an airtight governance model that allow the community to democratically take clear and binding decisions.\r\n\r\niii. Funding\r\nThe Cardano blockchain has sophisticated maintenance and development needs and is able to adequately fund itself, both in terms of running costs and new investment.\r\n\r\nThe Token: ADA Voucher\r\nEvery blockchain project has a token of value commonly referred to as a cryptocurrency. Ada is the cryptocurrency on the Cardano blockchain. With Ada, holders can send value between friends, pay for a good or service, deposit funds on an exchange, or enter an application. To perform a transfer on the settlement layer requires you own Ada, or acquire Ada through an exchange. It will also be the native token to be used in applications built on the computation layer.\r\n\r\nThe Wallet: <a href=\"https://daedaluswallet.io/\">Daedalus</a>\r\nEach cryptocurrency requires a “wallet” to store Ada. Typically this wallet is a software application that can be installed on any computer or smartphone. Daedalus is a highly-engineered wallet with advanced security features that was developed by <a href=\"https://iohk.io/\">IOHK</a> specifically for the Cardano blockchain and protects your assets with the most advanced cryptography. In the future, Daedalus will not only support Ada, but other cryptocurrencies such as Bitcoin, <a href=\"https://coingecko.com/en/coins/ethereum-classic\">Ethereum Classic</a> and many more.\r\n\r\nThe <a href=\"https://cardanofoundation.org/en/\">Cardano Foundation</a>\r\nThe Cardano Foundation’s core mission is to standardise, protect and promote the Cardano Protocol technology. The Cardano Foundation acts as a supervisory and educational body for Cardano. Our mission is to:\r\n\r\n1. Standardise, protect and promote the Cardano Protocol and its applications\r\n2. Be a community hub offering authoritative, timely information about the technology and Cardano’s wide-ranging potential\r\n3. Liaise and influence government and regulatory bodies, form strategic partnerships with businesses, enterprises and other open source projects and aid the creation of formal software standards for Cardano, a crucial feature for its long term success and critical in adoption and government engagement\r\n\r\nAreas of Focus:\r\n1. Cardano Protocol - We function as an objective standards body for the Cardano protocol as it evolves over time.\r\n2. Cardano community - We support, grow and help educate the Cardano blockchain community.\r\n3. Cardano ecosystem - We work to expand and protect the Cardano ecosystem. This includes promoting Cardano as a platform for commercial entities and serving as an objective organization for enterprises interested in joining Cardano.\r\n4. Serving the wider blockchain community - We aim to influence and progress the emerging commercial and legislative landscape for blockchain technology and cryptocurrencies in general. We proactively approach government and regulatory bodies and form strategic partnerships with businesses, enterprises and other open-source projects.\r\n\r\nIOHK\r\nFounded in 2015 by <a href=\"https://iohk.io/team/charles-hoskinson/\">Charles Hoskinson</a> and <a href=\"https://iohk.io/team/jeremy-wood/\">Jeremy Wood</a>, IOHK is a world-class engineering and technology company committed to using peer-to-peer innovations to provide financial services to three billion people that don’t have them. The group is contracted to design, build, and maintain Cardano through to 2020.\r\n\r\nEmurgo\r\n<a href=\"https://emurgo.io/\">Emurgo</a> is the venture building entity in the Cardano ecosystem, its goal is to aid, integrate, and foster Cardano blockchain applications.\r\n\r\nEmurgo captures the transformative power that blockchain technology brings to the developing world. Decentralized applications built on Cardano technology, funded and supported by Emurgo, will have the potential to build groundbreaking applications.\r\n\r\nProject Road Map\r\nIOHK has now released the settlement layer. This means you can transact, trade, and purchase Ada tokens fully independently of the computation layer. The goal for the computation layer is to have a beta released by the first quarter of 2018. Once both settlement and computation layers are live, users will be able to setup a custom environment to build decentralised applications on the Cardano stack.\r\nIn 2019, IOHK intends to work on Cardano’s long-term scalability and augment its capabilities. As developers, IOHK has been contracted through 2020 to make sure Cardano is being adequately maintained. The goal is to create a sustainable ecosystem that is capable of funding and supporting itself.",
        pic: "static/logos/ADA.svg",
      },
    ],
    pancakeswap: [
      {
        name: "PancakeSwap Twitter",
        feed: "https://nitter.zelcore.io/PancakeSwap/rss",
        site: "https://twitter.com/PancakeSwap",
        about: "PancakeSwap is a Binance Smart Chain-based DEX launched by anonymous devs with a penchant for breakfast foods and rabbits.",
        pic: "static/logos/CAKE.svg",
      },
      {
        name: "PancakeSwap Reddit",
        feed: "https://www.reddit.com/r/pancakeswap/.rss",
        site: "https://www.reddit.com/r/pancakeswap",
        about: "PancakeSwap is a Binance Smart Chain-based DEX launched by anonymous devs with a penchant for breakfast foods and rabbits.",
        pic: "static/logos/CAKE.svg",
      },
      {
        name: "PancakeSwap Medium",
        feed: "https://medium.com/feed/@pancakeswap",
        site: "https://pancakeswap.medium.com",
        about: "PancakeSwap is a Binance Smart Chain-based DEX launched by anonymous devs with a penchant for breakfast foods and rabbits.",
        pic: "static/logos/CAKE.svg",
      },
    ],
    matic: [
      {
        name: "Polygon Twitter",
        feed: "https://nitter.zelcore.io/maticnetwork/rss",
        site: "https://twitter.com/maticnetwork",
        about: "Matic Network provides scalable, secure and instant Ethereum transactions using Plasma side chains and a Proof-of-Stake network.",
        pic: "static/logos/MATIC.svg",
      },
      {
        name: "Polygon Reddit",
        feed: "https://www.reddit.com/r/maticnetwork/.rss",
        site: "https://www.reddit.com/r/maticnetwork/",
        about: "Matic Network provides scalable, secure and instant Ethereum transactions using Plasma side chains and a Proof-of-Stake network.",
        pic: "static/logos/MATIC.svg",
      },
      {
        name: "Polygon Medium",
        feed: "https://medium.com/feed/@matic-network",
        site: "https://medium.com/matic-network",
        about: "Matic Network provides scalable, secure and instant Ethereum transactions using Plasma side chains and a Proof-of-Stake network.",
        pic: "static/logos/MATIC.svg",
      },
    ],
    bscbinance: [
      {
        name: "Binance Blog",
        feed: "https://medium.com/feed/@binance",
        site: "https://medium.com/@binance",
        about: "Binance Exchange provides cryptocurrency trading for fintech and blockchain enthusiasts globally, with multilingual support over a variety of services.",
        pic: "static/logos/BNB_BEP20.svg",
      },
    ],
    arnx: [
      {
        name: "Aeron Blog",
        feed: "https://medium.com/feed/@aeronaero",
        site: "https://medium.com/@aeronaero/",
        about: "Blockchain solutions for Aviation safety ",
        pic: "static/logos/ARN.svg",
      },
    ],
    bsceth: [
      {
        name: "Ethereum Reddit",
        feed: "https://www.reddit.com/r/ethereum/.rss",
        site: "https://www.reddit.com/r/ethereum/",
        about: "Ethereum Reddit with the latest news and announcements",
        pic: "static/logos/ETH_BEP20.svg",
      },
    ],
    bscusdt: [
      {
        name: "Tether Blog",
        feed: "https://tether.to/feed/",
        site: "https://tether.to/press/",
        about: "USDT is a cryptocurrency asset issued on the Bitcoin blockchain via the Omni Layer Protocol. It is also issued on other chain via their token standards.",
        pic: "static/logos/USDT_BEP20.svg",
      },
      {
        name: "Tether Twitter",
        feed: "https://nitter.zelcore.io/tether_to/rss",
        site: "https://twitter.com/tether_to",
        about: "USDT is a stablecoin (stable-value cryptocurrency) that mirrors the price of the U.S. dollar, issued by a Hong Kong-based company Tether.",
        pic: "static/logos/USDT_BEP20.svg",
      },
    ],
    bscwbnb: [
      {
        name: "Binance Blog",
        feed: "https://medium.com/feed/@binance",
        site: "https://medium.com/@binance",
        about: "Binance Exchange provides cryptocurrency trading for fintech and blockchain enthusiasts globally, with multilingual support over a variety of services.",
        pic: "static/logos/BNB_BEP20.svg",
      },
    ],
    xcm: [
      {
        name: "CoinMetro Twitter",
        feed: "https://nitter.zelcore.io/coinmetro/rss",
        site: "https://twitter.com/coinmetro",
        about: "CoinMetro describes itself as a fully-rounded FinTech ecosystem that was designed to simplify access to the digital asset economy. XCM is the native asset of the platform.",
        pic: "static/logos/XCM.svg",
      },
      {
        name: "CoinMetro Reddit",
        feed: "https://www.reddit.com/r/coinmetro/.rss",
        site: "https://www.reddit.com/r/coinmetro/",
        about: "CoinMetro describes itself as a fully-rounded FinTech ecosystem that was designed to simplify access to the digital asset economy. XCM is the native asset of the platform.",
        pic: "static/logos/XCM.svg",
      },
    ],
    fluxkda: [
      {
        name: "Flux Blog",
        feed: "https://fluxofficial.medium.com/feed",
        site: "https://fluxofficial.medium.com",
        about: "Blog source for all things Flux, officially, from the Zelcore Team.",
        pic: "static/logos/FLUX.svg",
      },
      {
        name: "Flux Twitter",
        feed: "https://nitter.zelcore.io/RunOnFlux/rss",
        site: "https://twitter.com/RunOnFlux",
        about: "Official Flux Twitter.",
        pic: "static/logos/FLUX.svg",
      },
      {
        name: "Zelcore Twitter",
        feed: "https://nitter.zelcore.io/Zel_Core/rss",
        site: "https://twitter.com/Zel_Core",
        about: "Official zelcore Twitter.",
        pic: "static/logos/FLUX.svg",
      },
    ],
    gatetoken: [
      {
        name: "GateToken Blog",
        feed: "https://medium.com/feed/@gatechain",
        site: "https://medium.com/@gatechain",
        about: "GateChain is a next-generation public blockchain, focused on onchain asset safety and decentralized trading.",
        pic: "static/logos/GT.svg",
      },
      {
        name: "GateToken Twitter",
        feed: "https://nitter.zelcore.io/gatechain_io/rss",
        site: "https://twitter.com/gatechain_io",
        about: "GateChain is a next-generation public blockchain, focused on onchain asset safety and decentralized trading.",
        pic: "static/logos/GT.svg",
      },
    ],
    knc: [
      {
        name: "Kyber Blog",
        feed: "https://blog.kyber.network/feed",
        site: "https://blog.kyber.network",
        about: "Kyber’s on-chain liquidity protocol allows decentralized token swaps to be integrated into any application, enabling value exchange to be performed seamlessly between all parties in the ecosystem.",
        pic: "static/logos/KNC.svg",
      },
      {
        name: "Kyber Twitter",
        feed: "https://nitter.zelcore.io/kybernetwork/rss",
        site: "https://twitter.com/kybernetwork",
        about: "Kyber’s on-chain liquidity protocol allows decentralized token swaps to be integrated into any application, enabling value exchange to be performed seamlessly between all parties in the ecosystem.",
        pic: "static/logos/KNC.svg",
      },
      {
        name: "Kyber Reddit",
        feed: "https://www.reddit.com/r/kybernetwork/.rss",
        site: "https://www.reddit.com/r/kybernetwork",
        about: "Kyber’s on-chain liquidity protocol allows decentralized token swaps to be integrated into any application, enabling value exchange to be performed seamlessly between all parties in the ecosystem.",
        pic: "static/logos/KNC.svg",
      },
    ],
    pre: [
      {
        name: "Presearch Blog",
        feed: "https://medium.com/feed/presearch",
        site: "https://presearch.medium.com/feed",
        about: "Presearch aims to build a next-generation search engine that is powered by its community.",
        pic: "static/logos/PRE.svg",
      },
      {
        name: "Presearch Twitter",
        feed: "https://nitter.zelcore.io/presearchnews/rss",
        site: "https://twitter.com/presearchnews",
        about: "Presearch aims to build a next-generation search engine that is powered by its community.",
        pic: "static/logos/PRE.svg",
      },
      {
        name: "Presearch Reddit",
        feed: "https://www.reddit.com/r/PresearchCommunity/.rss",
        site: "https://www.reddit.com/r/PresearchCommunity",
        about: "Presearch aims to build a next-generation search engine that is powered by its community.",
        pic: "static/logos/PRE.svg",
      },
    ],
    solana: [
      {
        name: "Solana Blog",
        feed: "https://medium.com/feed/solana-labs",
        site: "https://medium.com/solana-labs",
        about: "Solana is an open source project implementing a new, high-performance, permissionless blockchain. The Solana Foundation is based in Geneva, Switzerland and maintains the open source project.",
        pic: "static/logos/SOL.svg",
      },
      {
        name: "Solana Twitter",
        feed: "https://nitter.zelcore.io/solana/rss",
        site: "https://twitter.com/solana",
        about: "Solana is an open source project implementing a new, high-performance, permissionless blockchain. The Solana Foundation is based in Geneva, Switzerland and maintains the open source project.",
        pic: "static/logos/SOL.svg",
      },
      {
        name: "Solana Reddit",
        feed: "https://www.reddit.com/r/solana/.rss",
        site: "https://www.reddit.com/r/solana",
        about: "Solana is an open source project implementing a new, high-performance, permissionless blockchain. The Solana Foundation is based in Geneva, Switzerland and maintains the open source project.",
        pic: "static/logos/SOL.svg",
      },
    ],
    wrappedsolana: [
      {
        name: "Solana Blog",
        feed: "https://medium.com/feed/solana-labs",
        site: "https://medium.com/solana-labs",
        about: "Solana is an open source project implementing a new, high-performance, permissionless blockchain. The Solana Foundation is based in Geneva, Switzerland and maintains the open source project.",
        pic: "static/logos/WSOL.svg",
      },
      {
        name: "Solana Twitter",
        feed: "https://nitter.zelcore.io/solana/rss",
        site: "https://twitter.com/solana",
        about: "Solana is an open source project implementing a new, high-performance, permissionless blockchain. The Solana Foundation is based in Geneva, Switzerland and maintains the open source project.",
        pic: "static/logos/WSOL.svg",
      },
      {
        name: "Solana Reddit",
        feed: "https://www.reddit.com/r/solana/.rss",
        site: "https://www.reddit.com/r/solana",
        about: "Solana is an open source project implementing a new, high-performance, permissionless blockchain. The Solana Foundation is based in Geneva, Switzerland and maintains the open source project.",
        pic: "static/logos/WSOL.svg",
      },
    ],
    serum: [
      {
        name: "Serum Blog",
        feed: "https://projectserum.medium.com/feed",
        site: "https://projectserum.medium.com",
        about: "Serum is a decentralized exchange (DEX) and an ecosystem that brings high speed and low transaction costs to decentralized finance (DeFi).",
        pic: "static/logos/SRM_SOL.svg",
      },
      {
        name: "Serum Twitter",
        feed: "https://nitter.zelcore.io/projectserum/rss",
        site: "https://twitter.com/projectserum",
        about: "Serum is a decentralized exchange (DEX) and an ecosystem that brings high speed and low transaction costs to decentralized finance (DeFi).",
        pic: "static/logos/SRM_SOL.svg",
      },
    ],
    megaserum: [
      {
        name: "Serum Blog",
        feed: "https://projectserum.medium.com/feed",
        site: "https://projectserum.medium.com",
        about: "Serum is a decentralized exchange (DEX) and an ecosystem that brings high speed and low transaction costs to decentralized finance (DeFi).",
        pic: "static/logos/MSRM_SOL.svg",
      },
      {
        name: "Serum Twitter",
        feed: "https://nitter.zelcore.io/projectserum/rss",
        site: "https://twitter.com/projectserum",
        about: "Serum is a decentralized exchange (DEX) and an ecosystem that brings high speed and low transaction costs to decentralized finance (DeFi).",
        pic: "static/logos/MSRM_SOL.svg",
      },
    ],
    cope: [
      {
        name: "Cope Twitter",
        feed: "https://nitter.zelcore.io/cyrii_mm/rss",
        site: "https://twitter.com/cyrii_mm",
        about: "COPE is a project that has two phases.",
        pic: "static/logos/COPE_SOL.svg",
      },
    ],
    bonfida: [
      {
        name: "Bonfida Twitter",
        feed: "https://nitter.zelcore.io/bonfida/rss",
        site: "https://twitter.com/bonfida",
        about: "Bonfida bridges the gap between Serum, Solana, and the user.",
        pic: "static/logos/FIDA_SOL.svg",
      },
      {
        name: "Bonfida Blog",
        feed: "https://bonfida.medium.com/feed",
        site: "https://bonfida.medium.com",
        about: "Bonfida bridges the gap between Serum, Solana, and the user.",
        pic: "static/logos/FIDA_SOL.svg",
      },
    ],
    fttsol: [
      {
        name: "FTX Token Twitter",
        feed: "https://nitter.zelcore.io/FTX_Official/rss",
        site: "https://twitter.com/FTX_Official",
        about: "FTX is owned by FTX Trading LTD, a company incorporated in Antigua and Barbuda. FTX was incubated by Alameda Research, a cryptocurrency liquidity provider. ",
        pic: "static/logos/FTT_SOL.svg",
      },
      {
        name: "FTX Token Medium",
        feed: "https://medium.com/feed/@ftx",
        site: "https://medium.com/@ftx",
        about: "FTX is owned by FTX Trading LTD, a company incorporated in Antigua and Barbuda. FTX was incubated by Alameda Research, a cryptocurrency liquidity provider. ",
        pic: "static/logos/FTT_SOL.svg",
      },
    ],
    kinsol: [
      {
        name: "Kin Blog",
        feed: "https://medium.com/feed/kinfoundation",
        site: "https://medium.com/kinfoundation",
        about: "The Kin cryptocurrency is used as money within a digital ecosystem of consumer applications and services.",
        pic: "static/logos/KIN_SOL.svg",
      },
      {
        name: "Kin Twitter",
        feed: "https://nitter.zelcore.io/kin_ecosystem/rss",
        site: "https://twitter.com/kin_ecosystem",
        about: "The Kin cryptocurrency is used as money within a digital ecosystem of consumer applications and services.",
        pic: "static/logos/KIN_SOL.svg",
      },
      {
        name: "Kin Reddit",
        feed: "https://www.reddit.com/r/KinFoundation/.rss",
        site: "https://www.reddit.com/r/KinFoundation",
        about: "The Kin cryptocurrency is used as money within a digital ecosystem of consumer applications and services.",
        pic: "static/logos/KIN_SOL.svg",
      },
    ],
    maps: [
      {
        name: "Maps Twitter",
        feed: "https://nitter.zelcore.io/MAPS_ME/rss",
        site: "https://twitter.com/MAPS_ME",
        about: "Maps.me 2.0 has both online and offline maps while offering DeFi functionalities to its 100M+ users.",
        pic: "static/logos/MAPS_SOL.svg",
      },
    ],
    media: [
      {
        name: "Media Network Blog",
        feed: "https://mediafoundation.medium.com/feed",
        site: "https://mediafoundation.medium.com",
        about: "Media Network is a new protocol that bypasses traditional CDN providers’ centralized approach for a self-governed and open source solution where everyone can participate.",
        pic: "static/logos/MEDIA_SOL.svg",
      },
      {
        name: "Media Network Twitter",
        feed: "https://nitter.zelcore.io/Media_FDN/rss",
        site: "https://twitter.com/Media_FDN",
        about: "Media Network is a new protocol that bypasses traditional CDN providers’ centralized approach for a self-governed and open source solution where everyone can participate.",
        pic: "static/logos/MEDIA_SOL.svg",
      },
    ],
    oxy: [
      {
        name: "Oxygen Twitter",
        feed: "https://nitter.zelcore.io/Oxygen_protocol/rss",
        site: "https://twitter.com/Oxygen_protocol",
        about: "Oxygen is a DeFi prime brokerage service built on Solana and powered by Serum's on-chain infrastructure.",
        pic: "static/logos/OXY_SOL.svg",
      },
    ],
    ray: [
      {
        name: "Raydium Blog",
        feed: "https://raydium.medium.com/feed",
        site: "https://raydium.medium.com",
        about: "Raydium is an automated market maker (AMM) and liquidity provider built on the Solana blockchain for the Serum decentralized exchange (DEX).",
        pic: "static/logos/RAY_SOL.svg",
      },
      {
        name: "Raydium Twitter",
        feed: "https://nitter.zelcore.io/raydiumprotocol/rss",
        site: "https://twitter.com/raydiumprotocol",
        about: "Raydium is an automated market maker (AMM) and liquidity provider built on the Solana blockchain for the Serum decentralized exchange (DEX).",
        pic: "static/logos/RAY_SOL.svg",
      },
    ],
    step: [
      {
        name: "Step Finance Blog",
        feed: "https://stepfinance.medium.com/feed",
        site: "https://stepfinance.medium.com",
        about: "Step Finance is the front page of Solana. Visualise, Analyse, Execute and Aggregate transactions across all Solana contracts in one place.",
        pic: "static/logos/STEP_SOL.svg",
      },
      {
        name: "Step Finance Twitter",
        feed: "https://nitter.zelcore.io/stepfinance_/rss",
        site: "https://twitter.com/stepfinance_",
        about: "Step Finance is the front page of Solana. Visualise, Analyse, Execute and Aggregate transactions across all Solana contracts in one place.",
        pic: "static/logos/STEP_SOL.svg",
      },
    ],
    usdcsol: [
      {
        name: "Circle Blog",
        feed: "https://medium.com/feed/circle-blog",
        site: "https://medium.com/circle-blog",
        about: "USD Coin (USDC) is a type of cryptocurrency that is referred to as a stablecoin created by Coinbase.",
        pic: "static/logos/USDC_SOL.svg",
      },
    ],
    usdtsol: [
      {
        name: "Tether Twitter",
        feed: "https://nitter.zelcore.io/tether_to/rss",
        site: "https://twitter.com/tether_to",
        about: "USDT is a stablecoin (stable-value cryptocurrency) that mirrors the price of the U.S. dollar, issued by a Hong Kong-based company Tether.",
        pic: "static/logos/USDT_SOL.svg",
      },
      {
        name: "Tether Blog",
        feed: "https://tether.to/feed/",
        site: "https://tether.to/press/",
        about: "USDT is a stablecoin (stable-value cryptocurrency) that mirrors the price of the U.S. dollar, issued by a Hong Kong-based company Tether.",
        pic: "static/logos/USDT_SOL.svg",
      },
    ],
    ropesol: [
      {
        name: "Rope Twitter",
        feed: "https://nitter.zelcore.io/rope_official/rss",
        site: "https://twitter.com/rope_official",
        about: "ROPE, a full-scale decentralized ecosystem that brings the well known 'market volatility index' to the crypto market.",
        pic: "static/logos/ROPE_SOL.svg",
      },
      {
        name: "Rope Reddit",
        feed: "https://www.reddit.com/r/RopeSolana/.rss",
        site: "https://www.reddit.com/r/RopeSolana",
        about: "ROPE, a full-scale decentralized ecosystem that brings the well known 'market volatility index' to the crypto market.",
        pic: "static/logos/ROPE_SOL.svg",
      },
    ],
    fluxeth: [
      {
        name: "Flux Blog",
        feed: "https://fluxofficial.medium.com/feed",
        site: "https://fluxofficial.medium.com",
        about: "Blog source for all things Flux, officially, from the Zelcore Team.",
        pic: "static/logos/FLUX.svg",
      },
      {
        name: "Flux Twitter",
        feed: "https://nitter.zelcore.io/RunOnFlux/rss",
        site: "https://twitter.com/RunOnFlux",
        about: "Official Flux Twitter.",
        pic: "static/logos/FLUX.svg",
      },
      {
        name: "Zelcore Twitter",
        feed: "https://nitter.zelcore.io/Zel_Core/rss",
        site: "https://twitter.com/Zel_Core",
        about: "Official zelcore Twitter.",
        pic: "static/logos/FLUX.svg",
      },
    ],
    fluxbsc: [
      {
        name: "Flux Blog",
        feed: "https://fluxofficial.medium.com/feed",
        site: "https://fluxofficial.medium.com",
        about: "Blog source for all things Flux, officially, from the Zelcore Team.",
        pic: "static/logos/FLUX.svg",
      },
      {
        name: "Flux Twitter",
        feed: "https://nitter.zelcore.io/RunOnFlux/rss",
        site: "https://twitter.com/RunOnFlux",
        about: "Official Flux Twitter.",
        pic: "static/logos/FLUX.svg",
      },
      {
        name: "Zelcore Twitter",
        feed: "https://nitter.zelcore.io/Zel_Core/rss",
        site: "https://twitter.com/Zel_Core",
        about: "Official zelcore Twitter.",
        pic: "static/logos/FLUX.svg",
      },
    ],
    mersol: [
      {
        name: "Mercurial Blog",
        feed: "https://mercurialfi.medium.com/feed",
        site: "https://mercurialfi.medium.com",
        about: "Mercurial is stableswaps on steroids.",
        pic: "static/logos/MER_SOL.svg",
      },
      {
        name: "Mercurial Twitter",
        feed: "https://nitter.zelcore.io/MercurialFi/rss",
        site: "https://twitter.com/MercurialFi",
        about: "Mercurial is stableswaps on steroids.",
        pic: "static/logos/MER_SOL.svg",
      },
    ],
    tulipsol: [
      {
        name: "SolFarm Blog",
        feed: "https://solfarm.medium.com/feed",
        site: "https://solfarm.medium.com",
        about: "SolFarm (TULIP) is the first yield aggregation platform built on Solana with auto-compounding vault strategies.",
        pic: "static/logos/TULIP_SOL.svg",
      },
      {
        name: "SolFarm Twitter",
        feed: "https://nitter.zelcore.io/Solfarmio/rss",
        site: "https://twitter.com/Solfarmio",
        about: "SolFarm (TULIP) is the first yield aggregation platform built on Solana with auto-compounding vault strategies.",
        pic: "static/logos/TULIP_SOL.svg",
      },
    ],
    alephsol: [
      {
        name: "aleph.im Blog",
        feed: "https://medium.com/feed/aleph-im",
        site: "https://medium.com/aleph-im",
        about: "aleph.im is a decentralized cloud storage, database and computing platform, that is compatible with blockchains and speaks their languages.",
        pic: "static/logos/ALEPH_SOL.svg",
      },
      {
        name: "aleph.im Reddit",
        feed: "https://www.reddit.com/r/Aleph_im/.rss",
        site: "https://www.reddit.com/r/Aleph_im/",
        about: "aleph.im is a decentralized cloud storage, database and computing platform, that is compatible with blockchains and speaks their languages.",
        pic: "static/logos/ALEPH_SOL.svg",
      },
      {
        name: "aleph.im Twitter",
        feed: "https://nitter.zelcore.io/aleph_im/rss",
        site: "https://twitter.com/aleph_im",
        about: "aleph.im is a decentralized cloud storage, database and computing platform, that is compatible with blockchains and speaks their languages.",
        pic: "static/logos/ALEPH_SOL.svg",
      },
    ],
    busdbsc: [
      {
        name: "Binance Blog",
        feed: "https://medium.com/feed/@binance",
        site: "https://medium.com/@binance",
        about: "Binance Exchange provides cryptocurrency trading for fintech and blockchain enthusiasts globally, with multilingual support over a variety of services.",
        pic: "static/logos/BUSD_BEP20.svg",
      },
    ],
    suntrcb: [
      {
        name: "SUN Twitter",
        feed: "https://nitter.zelcore.io/defi_sunio/rss",
        site: "https://twitter.com/defi_sunio",
        about: "SUN (SUN) is a cryptocurrency designed to further the development of decentralized finance (DeFi) on blockchain network TRON (TRX).",
        pic: "static/logos/SUN.svg",
      },
    ],
    safemoonerc: [
      {
        name: "SafeMoon Twitter",
        feed: "https://nitter.zelcore.io/safemoon/rss",
        site: "https://twitter.com/safemoon",
        about: "SafeMoon Protocol is a decentralized finance (DeFi) token. According to the SafeMoon website, SafeMoon has three functions that take place during each trade: Reflection, LP Acquisition and Burn.",
        pic: "static/logos/SAFEMOON_ERC20.svg",
      },
      {
        name: "SafeMoon Reddit",
        feed: "https://www.reddit.com/r/SafeMoon/.rss",
        site: "https://www.reddit.com/r/SafeMoon/",
        about: "SafeMoon Protocol is a decentralized finance (DeFi) token. According to the SafeMoon website, SafeMoon has three functions that take place during each trade: Reflection, LP Acquisition and Burn.",
        pic: "static/logos/SAFEMOON_ERC20.svg",
      },
    ],
    safemoonbep: [
      {
        name: "SafeMoon Twitter",
        feed: "https://nitter.zelcore.io/safemoon/rss",
        site: "https://twitter.com/safemoon",
        about: "SafeMoon Protocol is a decentralized finance (DeFi) token. According to the SafeMoon website, SafeMoon has three functions that take place during each trade: Reflection, LP Acquisition and Burn.",
        pic: "static/logos/SAFEMOON_BEP20.svg",
      },
      {
        name: "SafeMoon Reddit",
        feed: "https://www.reddit.com/r/SafeMoon/.rss",
        site: "https://www.reddit.com/r/SafeMoon/",
        about: "SafeMoon Protocol is a decentralized finance (DeFi) token. According to the SafeMoon website, SafeMoon has three functions that take place during each trade: Reflection, LP Acquisition and Burn.",
        pic: "static/logos/SAFEMOON_BEP20.svg",
      },
    ],
    huplife: [
      {
        name: "HUP.LIFE Twitter",
        feed: "https://nitter.zelcore.io/hupdotlife/rss",
        site: "https://twitter.com/hupdotlife",
        about: "HUP solves the NFT Permanence Problem and hosts metadata and multimedia files through a Decentralized, Resilient File Hosting Protocol - through our partnerships with ETHO Protocol and Flux.",
        pic: "static/logos/HUP.svg",
      },
      {
        name: "HUP.LIFE Reddit",
        feed: "https://www.reddit.com/r/huplife/.rss",
        site: "https://www.reddit.com/r/huplife/",
        about: "HUP solves the NFT Permanence Problem and hosts metadata and multimedia files through a Decentralized, Resilient File Hosting Protocol - through our partnerships with ETHO Protocol and Flux.",
        pic: "static/logos/HUP.svg",
      },
      {
        name: "HUP.LIFE Blog",
        feed: "https://huplife.medium.com/feed",
        site: "https://huplife.medium.com",
        about: "HUP solves the NFT Permanence Problem and hosts metadata and multimedia files through a Decentralized, Resilient File Hosting Protocol - through our partnerships with ETHO Protocol and Flux.",
        pic: "static/logos/HUP.svg",
      },
    ],
    raptoreum: [
      {
        name: "Raptoreum Twitter",
        feed: "https://nitter.zelcore.io/raptoreum/rss",
        site: "https://twitter.com/raptoreum",
        about: "A secure and ASIC/FPGA resistant Proof or Work cryptocurrency that allows for asset creation, futures, and smart contracts, while remaining immune to 51% double spend attacks.",
        pic: "static/logos/RTM.svg",
      },
      {
        name: "Raptoreum Reddit",
        feed: "https://www.reddit.com/r/raptoreum/.rss",
        site: "https://www.reddit.com/r/raptoreum/",
        about: "A secure and ASIC/FPGA resistant Proof or Work cryptocurrency that allows for asset creation, futures, and smart contracts, while remaining immune to 51% double spend attacks.",
        pic: "static/logos/RTM.svg",
      },
    ],
    vertcoin: [
      {
        name: "Vertcoin Twitter",
        feed: "https://nitter.zelcore.io/Vertcoin/rss",
        site: "https://twitter.com/Vertcoin",
        about: "Vertcoin (VTC) is an ASIC-resistant P2P Litecoin fork that uses PoW to reach consensus.",
        pic: "static/logos/VTC.svg",
      },
      {
        name: "Vertcoin Reddit",
        feed: "https://www.reddit.com/r/vertcoin/.rss",
        site: "https://www.reddit.com/r/vertcoin/",
        about: "Vertcoin (VTC) is an ASIC-resistant P2P Litecoin fork that uses PoW to reach consensus.",
        pic: "static/logos/VTC.svg",
      },
      {
        name: "Vertcoin Blog",
        feed: "https://medium.com/feed/vertcoin-blog",
        site: "https://medium.com/vertcoin-blog",
        about: "Vertcoin (VTC) is an ASIC-resistant P2P Litecoin fork that uses PoW to reach consensus.",
        pic: "static/logos/VTC.svg",
      },
    ],
    btcbbsc: [
      {
        name: "Bitcoin News",
        feed: "https://www.reddit.com/r/bitcoin/.rss",
        site: "https://www.reddit.com/r/bitcoin/",
        about: "Subreddit for the discussion of Bitcoin 'The official source for CryptoCurrency News, Discussion & Analysis.'",
        pic: "static/logos/BTCB_BEP20.svg",
      },
    ],
    axserc: [
      {
        name: "Axie Infinity Twitter",
        feed: "https://nitter.zelcore.io/AxieInfinity/rss",
        site: "https://twitter.com/AxieInfinity",
        about: "Axie Infinity is a blockchain-based trading and battling game that is partially owned and operated by its players.",
        pic: "static/logos/AXS.svg",
      },
      {
        name: "Axie Infinity Reddit",
        feed: "https://www.reddit.com/r/AxieInfinity/.rss",
        site: "https://www.reddit.com/r/AxieInfinity/",
        about: "Axie Infinity is a blockchain-based trading and battling game that is partially owned and operated by its players.",
        pic: "static/logos/AXS.svg",
      },
      {
        name: "Axie Infinity Blog",
        feed: "https://axieinfinity.medium.com/feed",
        site: "https://axieinfinity.medium.com",
        about: "Axie Infinity is a blockchain-based trading and battling game that is partially owned and operated by its players.",
        pic: "static/logos/AXS.svg",
      },
    ],
    bttbsc: [
      {
        name: "BitTorrent Twitter",
        feed: "https://nitter.zelcore.io/bittorrent/rss",
        site: "https://twitter.com/bittorrent",
        about: "BitTorrent is a popular peer-to-peer (P2P) file sharing and torrent platform which has become increasingly decentralized in recent years.",
        pic: "static/logos/BTT_BEP20.svg",
      },
      {
        name: "BitTorrent Reddit",
        feed: "https://www.reddit.com/r/bittorrent/.rss",
        site: "https://www.reddit.com/r/bittorrent/",
        about: "BitTorrent is a popular peer-to-peer (P2P) file sharing and torrent platform which has become increasingly decentralized in recent years.",
        pic: "static/logos/BTT_BEP20.svg",
      },
    ],
    steth: [
      {
        name: "stETH Twitter",
        feed: "https://nitter.zelcore.io/lidofinance/rss",
        site: "https://twitter.com/lidofinance",
        about: "stETH is a token that represents staked ether in Lido, combining the value of initial deposit + staking rewards. "
          + "stETH tokens are pegged 1:1 to the ETH staked with Lido and can be used as one would use ether, allowing users to earn Eth2 staking rewards whilst benefiting from Defi yields.",
        pic: "static/logos/STETH.svg",
      },
      {
        name: "stETH Reddit",
        feed: "https://www.reddit.com/r/lidofinance/.rss",
        site: "https://www.reddit.com/r/lidofinance",
        about: "stETH is a token that represents staked ether in Lido, combining the value of initial deposit + staking rewards. "
          + "stETH tokens are pegged 1:1 to the ETH staked with Lido and can be used as one would use ether, allowing users to earn Eth2 staking rewards whilst benefiting from Defi yields.",
        pic: "static/logos/STETH.svg",
      },
    ],
    amp: [
      {
        name: "Amp Twitter",
        feed: "https://nitter.zelcore.io/amptoken/rss",
        site: "https://twitter.com/amptoken",
        about: "Amp is a digital collateral token designed to facilitate fast and efficient value transfer, especially for use cases that prioritize security and irreversibility. "
          + "Using Amp as collateral, individuals and entities benefit from instant, verifiable assurances for any kind of asset exchange.",
        pic: "static/logos/AMP.svg",
      },
      {
        name: "Amp Medium",
        feed: "https://medium.com/feed/amptoken",
        site: "https://medium.com/amptoken",
        about: "Amp is a digital collateral token designed to facilitate fast and efficient value transfer, especially for use cases that prioritize security and irreversibility. "
          + "Using Amp as collateral, individuals and entities benefit from instant, verifiable assurances for any kind of asset exchange.",
        pic: "static/logos/AMP.svg",
      },
    ],
    telcoin: [
      {
        name: "Telcoin Twitter",
        feed: "https://nitter.zelcore.io/telcoin_team/rss",
        site: "https://twitter.com/telcoin_team",
        about: "A cryptocurrency distributed by your mobile operator and accepted everywhere.",
        pic: "static/logos/TELCOIN.svg",
      },
      {
        name: "Telcoin Medium",
        feed: "https://medium.com/feed/@telcoin",
        site: "https://medium.com/@telcoin",
        about: "A cryptocurrency distributed by your mobile operator and accepted everywhere.",
        pic: "static/logos/TELCOIN.svg",
      },
    ],
    harmonyone: [
      {
        name: "HarmonyOne Twitter",
        feed: "https://nitter.zelcore.io/harmonyprotocol/rss",
        site: "https://twitter.com/harmonyprotocol",
        about: "A project to scale trust for billions of people and create a radically fair economy.",
        pic: "static/logos/HARMONYONE.svg",
      },
      {
        name: "HarmonyOne Reddit",
        feed: "https://www.reddit.com/r/harmony_one/.rss",
        site: "https://www.reddit.com/r/harmony_one",
        about: "A project to scale trust for billions of people and create a radically fair economy.",
        pic: "static/logos/HARMONYONE.svg",
      },
      {
        name: "HarmonyOne Medium",
        feed: "https://medium.com/feed/harmony-one",
        site: "https://medium.com/harmony-one",
        about: "A project to scale trust for billions of people and create a radically fair economy.",
        pic: "static/logos/HARMONYONE.svg",
      },
    ],
    bscada: [
      {
        name: "Cardano Twitter",
        feed: "https://nitter.zelcore.io/cardano/rss",
        site: "https://twitter.com/cardano",
        about: "Cardano (ADA) is a decentralized platform that will allow complex programmable transfers of value in a secure and scalable fashion. Cardano is built in the secure Haskell programming language.",
        pic: "static/logos/ADA_BEP20.svg",
      },
      {
        name: "Cardano Reddit",
        feed: "https://reddit.com/r/cardano/.rss",
        site: "https://reddit.com/r/cardano",
        about: "Cardano (ADA) is a decentralized platform that will allow complex programmable transfers of value in a secure and scalable fashion. Cardano is built in the secure Haskell programming language.",
        pic: "static/logos/ADA_BEP20.svg",
      },
      {
        name: "Cardano Medium",
        feed: "https://medium.com/feed/cardanorss",
        site: "https://medium.com/feed/cardanorss",
        about: "Cardano (ADA) is a decentralized platform that will allow complex programmable transfers of value in a secure and scalable fashion. Cardano is built in the secure Haskell programming language.",
        pic: "static/logos/ADA_BEP20.svg",
      },
    ],
    bscxrp: [
      {
        name: "XRP Twitter",
        feed: "https://nitter.zelcore.io/Ripple/rss",
        site: "https://twitter.com/Ripple",
        about: "XRP is a digital asset built for payments. It is the native digital asset on the XRP Ledger an open-source, permissionless and decentralized blockchain technology that can settle transactions in 3-5 seconds.",
        pic: "static/logos/XRP_BEP20.svg",
      },
      {
        name: "XRP Blog",
        feed: "https://ripple.com/insights/feed",
        site: "https://ripple.com",
        about: "XRP is a digital asset built for payments. It is the native digital asset on the XRP Ledger an open-source, permissionless and decentralized blockchain technology that can settle transactions in 3-5 seconds.",
        pic: "static/logos/XRP_BEP20.svg",
      },
      {
        name: "XRP Reddit",
        feed: "https://www.reddit.com/r/Ripple/.rss",
        site: "https://www.reddit.com/r/Ripple",
        about: "XRP is a digital asset built for payments. It is the native digital asset on the XRP Ledger an open-source, permissionless and decentralized blockchain technology that can settle transactions in 3-5 seconds.",
        pic: "static/logos/XRP_BEP20.svg",
      },
    ],
    bscdoge: [
      {
        name: "Dogecoin Twitter",
        feed: "https://nitter.zelcore.io/dogecoin/rss",
        site: "https://twitter.com/dogecoin",
        about: "Dogecoin (DOGE) is based on the popular \"doge\" Internet meme and features a Shiba Inu on its logo. Dogecoin's creators envisaged it as a fun, light-hearted cryptocurrency. that would have greater appeal beyond the core Bitcoin audience, since it was based on a dog meme.",
        pic: "static/logos/DOGE_BEP20.svg",
      },
      {
        name: "Dogecoin Reddit",
        feed: "https://www.reddit.com/r/dogecoin/.rss",
        site: "https://www.reddit.com/r/dogecoin",
        about: "Dogecoin (DOGE) is based on the popular \"doge\" Internet meme and features a Shiba Inu on its logo. Dogecoin's creators envisaged it as a fun, light-hearted cryptocurrency. that would have greater appeal beyond the core Bitcoin audience, since it was based on a dog meme.",
        pic: "static/logos/DOGE_BEP20.svg",
      },
    ],
    bscusdc: [
      {
        name: "USD Coin Medium",
        feed: "https://medium.com/feed/centre-blog",
        site: "https://medium.com/centre-blog",
        about: "USD Coin (known by its ticker USDC) is a stablecoin that is pegged to the U.S. dollar on a 1:1 basis.",
        pic: "static/logos/USDC_BEP20.svg",
      },
    ],
    bscdot: [
      {
        name: "Polkadot Twitter",
        feed: "https://nitter.zelcore.io/polkadotnetwork/rss",
        site: "https://twitter.com/polkadotnetwork",
        about: "Polkadot is an open-source sharding multichain protocol that facilitates the cross-chain transfer of any data or asset types, not just tokens, thereby making a wide range of blockchains interoperable with each other.",
        pic: "static/logos/DOT_BEP20.svg",
      },
      {
        name: "Polkadot Reddit",
        feed: "https://reddit.com/r/dot/.rss",
        site: "https://reddit.com/r/dot",
        about: "Polkadot is an open-source sharding multichain protocol that facilitates the cross-chain transfer of any data or asset types, not just tokens, thereby making a wide range of blockchains interoperable with each other.",
        pic: "static/logos/DOT_BEP20.svg",
      },
      {
        name: "Polkadot Medium",
        feed: "https://medium.com/feed/polkadot-network",
        site: "https://medium.com/polkadot-network",
        about: "Polkadot is an open-source sharding multichain protocol that facilitates the cross-chain transfer of any data or asset types, not just tokens, thereby making a wide range of blockchains interoperable with each other.",
        pic: "static/logos/DOT_BEP20.svg",
      },
    ],
    bscuni: [
      {
        name: "Uniswap Twitter",
        feed: "https://nitter.zelcore.io/Uniswap/rss",
        site: "https://twitter.com/Uniswap",
        about: "Uniswap is an automated liquidity protocol powered by a constant product formula and implemented in a system of non-upgradeable smart contracts on the Ethereum blockchain.",
        pic: "static/logos/UNI_BEP20.svg",
      },
      {
        name: "Uniswap Reddit",
        feed: "https://reddit.com/r/UniSwap/.rss",
        site: "https://reddit.com/r/UniSwap",
        about: "Uniswap is an automated liquidity protocol powered by a constant product formula and implemented in a system of non-upgradeable smart contracts on the Ethereum blockchain.",
        pic: "static/logos/UNI_BEP20.svg",
      },
    ],
    bscbch: [
      {
        name: "Bitcoin Cash Reddit",
        feed: "https://reddit.com/r/Bitcoincash/.rss",
        site: "https://reddit.com/r/Bitcoincash",
        about: "Bitcoin Cash is a fork of Bitcoin. It has bigger blocks.",
        pic: "static/logos/BCH_BEP20.svg",
      },
      {
        name: "Bitcoin Cash Blog",
        feed: "https://news.bitcoin.com/feed/",
        site: "https://news.bitcoin.com",
        about: "Bitcoin Cash is a fork of Bitcoin. It has bigger blocks.",
        pic: "static/logos/BCH_BEP20.svg",
      },
    ],
    bscltc: [
      {
        name: "Litecoin Foundation Blog",
        feed: "https://blog.litecoin.org/rss",
        site: "https://blog.litecoin.org/",
        about: "Litecoin is a peer-to-peer Internet currency that enables instant, near-zero cost payments to anyone in the world. Litecoin is an open source, global payment network that is fully decentralized without any central authorities.",
        pic: "static/logos/LTC_BEP20.svg",
      },
      {
        name: "Litecoin Twitter",
        feed: "https://nitter.zelcore.io/LitecoinProject/rss",
        site: "https://twitter.com/LitecoinProject",
        about: "Litecoin is a peer-to-peer Internet currency that enables instant, near-zero cost payments to anyone in the world. Litecoin is an open source, global payment network that is fully decentralized without any central authorities.",
        pic: "static/logos/LTC_BEP20.svg",
      },
      {
        name: "Litecoin Reddit",
        feed: "https://www.reddit.com/r/litecoin/.rss",
        site: "https://www.reddit.com/r/litecoin",
        about: "Litecoin is a peer-to-peer Internet currency that enables instant, near-zero cost payments to anyone in the world. Litecoin is an open source, global payment network that is fully decentralized without any central authorities.",
        pic: "static/logos/LTC_BEP20.svg",
      },
    ],
    bsclink: [
      {
        name: "Chainlink Blog",
        feed: "https://blog.chain.link/rss/",
        site: "https://blog.chain.link/",
        about: "A blockchain-based middleware, acting as a bridge between cryptocurrency smart contracts, data feeds, APIs and traditional bank account payments.",
        pic: "static/logos/LINK_BEP20.svg",
      },
      {
        name: "ChainLink Twitter",
        feed: "https://nitter.zelcore.io/chainlink/rss",
        site: "https://twitter.com/chainlink",
        about: "A blockchain-based middleware, acting as a bridge between cryptocurrency smart contracts, data feeds, APIs and traditional bank account payments.",
        pic: "static/logos/LINK_BEP20.svg",
      },
      {
        name: "ChainLink Reddit",
        feed: "https://reddit.com/r/chainlink/.rss",
        site: "https://reddit.com/r/chainlink",
        about: "A blockchain-based middleware, acting as a bridge between cryptocurrency smart contracts, data feeds, APIs and traditional bank account payments.",
        pic: "static/logos/LINK_BEP20.svg",
      },
    ],
    bscetc: [
      {
        name: "Ethereum Classic Twitter",
        feed: "https://nitter.zelcore.io/eth_classic/rss",
        site: "https://twitter.com/eth_classic",
        about: "Ethereum Classic (ETC) is a hard fork of Ethereum (ETH) that launched in July 2016. Its main function is as a smart contract network, with the ability to host and support decentralized applications (DApps). Its native is ETC.",
        pic: "static/logos/ETC_BEP20.svg",
      },
      {
        name: "Ethereum Classic Reddit",
        feed: "https://www.reddit.com/r/EthereumClassic/.rss",
        site: "https://www.reddit.com/r/EthereumClassic",
        about: "Ethereum Classic (ETC) is a hard fork of Ethereum (ETH) that launched in July 2016. Its main function is as a smart contract network, with the ability to host and support decentralized applications (DApps). Its native is ETC.",
        pic: "static/logos/ETC_BEP20.svg",
      },
    ],
    bscavax: [
      {
        name: "Avalanche Medium",
        feed: "https://medium.com/feed/avalancheavax",
        site: "https://medium.com/avalancheavax",
        about: "Avalanche is an umbrella platform for launching decentralized finance (DeFi) applications, financial assets, trading and other services.",
        pic: "static/logos/AVAX_BEP20.svg",
      },
      {
        name: "Avalanche Twitter",
        feed: "https://nitter.zelcore.io/avalancheavax/rss",
        site: "https://twitter.com/avalancheavax",
        about: "Avalanche is an umbrella platform for launching decentralized finance (DeFi) applications, financial assets, trading and other services.",
        pic: "static/logos/AVAX_BEP20.svg",
      },
      {
        name: "Avalanche Reddit",
        feed: "https://reddit.com/r/Avax/.rss",
        site: "https://reddit.com/r/Avax",
        about: "Avalanche is an umbrella platform for launching decentralized finance (DeFi) applications, financial assets, trading and other services.",
        pic: "static/logos/AVAX_BEP20.svg",
      },
    ],
    bscdai: [
      {
        name: "Dai Twitter",
        feed: "https://nitter.zelcore.io/MakerDAO/rss",
        site: "https://twitter.com/MakerDAO",
        about: "Dai is a stable cryptocurrency supported by Maker (MKR). To ensure price stability, Dai minimizes the price volatility against the US dollar, through an incentive structure for its participants.",
        pic: "static/logos/DAI_BEP20.svg",
      },
      {
        name: "Dai Reddit",
        feed: "https://www.reddit.com/r/MakerDAO/.rss",
        site: "https://www.reddit.com/r/MakerDAO",
        about: "Dai is a stable cryptocurrency supported by Maker (MKR). To ensure price stability, Dai minimizes the price volatility against the US dollar, through an incentive structure for its participants.",
        pic: "static/logos/DAI_BEP20.svg",
      },
      {
        name: "Dai Blog",
        feed: "https://blog.makerdao.com/feed/",
        site: "https://blog.makerdao.com/",
        about: "Dai is a stable cryptocurrency supported by Maker (MKR). To ensure price stability, Dai minimizes the price volatility against the US dollar, through an incentive structure for its participants.",
        pic: "static/logos/DAI_BEP20.svg",
      },
    ],
    bsctrx: [
      {
        name: "TRON Twitter",
        feed: "https://nitter.zelcore.io/Tronfoundation/rss",
        site: "https://twitter.com/Tronfoundation",
        about: "TRON (TRX) strives to build the future of a truly decentralized internet and global free content entertainment system that utilizes blockchain technology.",
        pic: "static/logos/TRX_BEP20.svg",
      },
      {
        name: "TRON Reddit",
        feed: "https://reddit.com/r/Tronix/.rss",
        site: "https://reddit.com/r/Tronix",
        about: "TRON (TRX) strives to build the future of a truly decentralized internet and global free content entertainment system that utilizes blockchain technology.",
        pic: "static/logos/TRX_BEP20.svg",
      },
      {
        name: "TRON Medium",
        feed: "https://medium.com/feed/tron-foundation",
        site: "https://medium.com/tron-foundation",
        about: "TRON (TRX) strives to build the future of a truly decentralized internet and global free content entertainment system that utilizes blockchain technology.",
        pic: "static/logos/TRX_BEP20.svg",
      },
    ],
    bsceos: [
      {
        name: "EOS Twitter",
        feed: "https://nitter.zelcore.io/eosio/rss",
        site: "https://twitter.com/eosio",
        about: "EOS is a cryptocurrency and blockchain that operates as a smart contract platform for the deployment of decentralized applications and decentralized autonomous corporations.",
        pic: "static/logos/EOS_BEP20.svg",
      },
      {
        name: "EOS Reddit",
        feed: "https://reddit.com/r/EOS/.rss",
        site: "https://reddit.com/r/EOS",
        about: "EOS is a cryptocurrency and blockchain that operates as a smart contract platform for the deployment of decentralized applications and decentralized autonomous corporations.",
        pic: "static/logos/EOS_BEP20.svg",
      },
    ],
    bscatom: [
      {
        name: "Cosmos Twitter",
        feed: "https://nitter.zelcore.io/tezos/rss",
        site: "https://twitter.com/tezos",
        about: "Cosmos is a decentralized network of independent parallel blockchains, each powered by BFT consensus algorithms like Tendermint consensus.",
        pic: "static/logos/ATOM_BEP20.svg",
      },
      {
        name: "Cosmos Reddit",
        feed: "https://reddit.com/r/tezos/.rss",
        site: "https://reddit.com/r/tezos",
        about: "Cosmos is a decentralized network of independent parallel blockchains, each powered by BFT consensus algorithms like Tendermint consensus.",
        pic: "static/logos/ATOM_BEP20.svg",
      },
    ],
    bscaxs: [
      {
        name: "Axie Infinity Shard Twitter",
        feed: "https://nitter.zelcore.io/AxieInfinity/rss",
        site: "https://twitter.com/AxieInfinity",
        about: "Axie Infinity is a Pokemon-inspired digital pet universe where anyone can earns through skilled gameplay and contributions to the ecosystem. Players can battle, collect, raise, and build a land-based kingdom for their pets (known as Axies).",
        pic: "static/logos/AXS_BEP20.svg",
      },
      {
        name: "Axie Infinity Shard Reddit",
        feed: "https://www.reddit.com/r/AxieInfinity/.rss",
        site: "https://www.reddit.com/r/AxieInfinity",
        about: "Axie Infinity is a Pokemon-inspired digital pet universe where anyone can earns through skilled gameplay and contributions to the ecosystem. Players can battle, collect, raise, and build a land-based kingdom for their pets (known as Axies).",
        pic: "static/logos/AXS_BEP20.svg",
      },
      {
        name: "Axie Infinity Shard Medium",
        feed: "https://axieinfinity.medium.com/feed",
        site: "https://axieinfinity.medium.com",
        about: "Axie Infinity is a Pokemon-inspired digital pet universe where anyone can earns through skilled gameplay and contributions to the ecosystem. Players can battle, collect, raise, and build a land-based kingdom for their pets (known as Axies).",
        pic: "static/logos/AXS_BEP20.svg",
      },
    ],
    bscxtz: [
      {
        name: "Tezos Twitter",
        feed: "https://nitter.zelcore.io/tezos/rss",
        site: "https://twitter.com/tezos",
        about: "Tezos is a smart contract platform that uses blockchain voting to be self-governing by its holders. Also, the platform aims to boost the security of smart contracts.",
        pic: "static/logos/XTZ_BEP20.svg",
      },
      {
        name: "Tezos Reddit",
        feed: "https://reddit.com/r/tezos/.rss",
        site: "https://reddit.com/r/tezos",
        about: "Tezos is a smart contract platform that uses blockchain voting to be self-governing by its holders. Also, the platform aims to boost the security of smart contracts.",
        pic: "static/logos/XTZ_BEP20.svg",
      },
    ],
    bscmkr: [
      {
        name: "Maker Twitter",
        feed: "https://nitter.zelcore.io/MakerDAO/rss",
        site: "https://twitter.com/MakerDAO",
        about: "Maker is a Decentralized Autonomous Organization that creates and insures the dai stablecoin on the Ethereum blockchain",
        pic: "static/logos/MKR_BEP20.svg",
      },
      {
        name: "Maker Reddit",
        feed: "https://www.reddit.com/r/MakerDAO/.rss",
        site: "https://www.reddit.com/r/MakerDAO",
        about: "Maker is a Decentralized Autonomous Organization that creates and insures the dai stablecoin on the Ethereum blockchain",
        pic: "static/logos/MKR_BEP20.svg",
      },
      {
        name: "Maker Blog",
        feed: "https://blog.makerdao.com/feed/",
        site: "https://blog.makerdao.com/",
        about: "Maker is a Decentralized Autonomous Organization that creates and insures the dai stablecoin on the Ethereum blockchain",
        pic: "static/logos/MKR_BEP20.svg",
      },
    ],
    bscshib: [
      {
        name: "SHIBA INU Medium",
        feed: "https://allhailtheshiba.medium.com/feed",
        site: "https://allhailtheshiba.medium.com",
        about: "SHIBA INU is an experiment in decentralized spontaneous community building.",
        pic: "static/logos/SHIB_BEP20.svg",
      },
      {
        name: "SHIBA INU Twitter",
        feed: "https://nitter.zelcore.io/shibtoken/rss",
        site: "https://twitter.com/shibtoken",
        about: "SHIBA INU is an experiment in decentralized spontaneous community building.",
        pic: "static/logos/SHIB_BEP20.svg",
      },
      {
        name: "SHIBA INU Reddit",
        feed: "https://www.reddit.com/r/SHIBArmy/.rss",
        site: "https://www.reddit.com/r/SHIBArmy",
        about: "SHIBA INU is an experiment in decentralized spontaneous community building.",
        pic: "static/logos/SHIB_BEP20.svg",
      },
    ],
    bsciota: [
      {
        name: "IOTA Twitter",
        feed: "https://nitter.zelcore.io/iota/rss",
        site: "https://twitter.com/iota",
        about: "IOTA is a distributed ledger with its proprietary technology known as Tangle, a system of nodes that confirm transactions. It aims to offer greater speeds than conventional blockchains and an ideal footprint for the ever-expanding Internet of Things ecosystem.",
        pic: "static/logos/IOTA_BEP20.svg",
      },
      {
        name: "IOTA Reddit",
        feed: "https://reddit.com/r/Iota/.rss",
        site: "https://reddit.com/r/Iota",
        about: "IOTA is a distributed ledger with its proprietary technology known as Tangle, a system of nodes that confirm transactions. It aims to offer greater speeds than conventional blockchains and an ideal footprint for the ever-expanding Internet of Things ecosystem.",
        pic: "static/logos/IOTA_BEP20.svg",
      },
      {
        name: "IOTA Blog",
        feed: "https://blog.iota.org/rss/",
        site: "https://blog.iota.org",
        about: "IOTA is a distributed ledger with its proprietary technology known as Tangle, a system of nodes that confirm transactions. It aims to offer greater speeds than conventional blockchains and an ideal footprint for the ever-expanding Internet of Things ecosystem.",
        pic: "static/logos/IOTA_BEP20.svg",
      },
    ],
    bsccomp: [
      {
        name: "Compound Coin Twitter",
        feed: "https://nitter.zelcore.io/compoundfinance/rss",
        site: "https://twitter.com/compoundfinance",
        about: "Compound (COMP) is an ERC-20 asset that powers the community governance of the Compound protocol; COMP-holders and their delegates debate, propose, and vote on changes to the protocol.",
        pic: "static/logos/COMP_BEP20.svg",
      },
      {
        name: "Compound Coin Medium",
        feed: "https://medium.com/feed/compound-finance",
        site: "https://medium.com/compound-finance",
        about: "Compound (COMP) is an ERC-20 asset that powers the community governance of the Compound protocol; COMP-holders and their delegates debate, propose, and vote on changes to the protocol.",
        pic: "static/logos/COMP_BEP20.svg",
      },
    ],
    bsczec: [
      {
        name: "Zcash Twitter",
        feed: "https://nitter.zelcore.io/zcashfoundation/rss",
        site: "https://twitter.com/zcashfoundation",
        about: "Zcash (ZEC) is a decentralized and open-source privacy-focused cryptocurrency that enables selective transparency of transactions. Zcash transactions can either be transparent or shielded through a zero-knowledge proof called zk-SNARKs.",
        pic: "static/logos/ZEC_BEP20.svg",
      },
      {
        name: "Zcash Reddit",
        feed: "https://www.reddit.com/r/zec/.rss",
        site: "https://www.reddit.com/r/zec",
        about: "Zcash (ZEC) is a decentralized and open-source privacy-focused cryptocurrency that enables selective transparency of transactions. Zcash transactions can either be transparent or shielded through a zero-knowledge proof called zk-SNARKs.",
        pic: "static/logos/ZEC_BEP20.svg",
      },
    ],
    bsctusd: [
      {
        name: "TrueUSD Twitter",
        feed: "https://nitter.zelcore.io/tusd_official/rss",
        site: "https://twitter.com/tusd_official",
        about: "TUSD is a regulated, exchange-independent stablecoin backed 1-for-1 with US Dollars.",
        pic: "static/logos/TUSD_BEP20.svg",
      },
      {
        name: "TrueUSD Medium",
        feed: "https://trueusd.medium.com/feed",
        site: "https://trueusd.medium.com",
        about: "TUSD is a regulated, exchange-independent stablecoin backed 1-for-1 with US Dollars.",
        pic: "static/logos/TUSD_BEP20.svg",
      },
    ],
    bsczil: [
      {
        name: "Zilliqa Twitter",
        feed: "https://nitter.zelcore.io/zilliqa/rss",
        site: "https://twitter.com/zilliqa",
        about: "Zilliqa (ZIL) is a public blockchain built on a sharded architecture. It has solved blockchain scalability and speed by implementing sharding.",
        pic: "static/logos/ZIL_BEP20.svg",
      },
      {
        name: "Zilliqa Reddit",
        feed: "https://reddit.com/r/zilliqa/.rss",
        site: "https://reddit.com/r/zilliqa",
        about: "Zilliqa (ZIL) is a public blockchain built on a sharded architecture. It has solved blockchain scalability and speed by implementing sharding.",
        pic: "static/logos/ZIL_BEP20.svg",
      },
      {
        name: "Zilliqa Blog",
        feed: "https://blog.zilliqa.com/feed/",
        site: "https://blog.zilliqa.com/",
        about: "Zilliqa (ZIL) is a public blockchain built on a sharded architecture. It has solved blockchain scalability and speed by implementing sharding.",
        pic: "static/logos/ZIL_BEP20.svg",
      },
    ],
    bscsnx: [
      {
        name: "Synthetix Network Twitter",
        feed: "https://nitter.zelcore.io/synthetix_io/rss",
        site: "https://twitter.com/synthetix_io",
        about: "Synthetix is a derivatives liquidity protocol on Ethereum that enables the issuance and trading of synthetic assets.",
        pic: "static/logos/SNX_BEP20.svg",
      },
      {
        name: "Synthetix Network Reddit",
        feed: "https://www.reddit.com/r/synthetix_io/.rss",
        site: "https://www.reddit.com/r/synthetix_io",
        about: "Synthetix is a derivatives liquidity protocol on Ethereum that enables the issuance and trading of synthetic assets.",
        pic: "static/logos/SNX_BEP20.svg",
      },
    ],
    bscyfi: [
      {
        name: "yearn.finance Twitter",
        feed: "https://nitter.zelcore.io/iearnfinance/rss",
        site: "https://twitter.com/iearnfinance",
        about: "Yearn.finance is an aggregator service for decentralized finance (DeFi) investors, using automation to allow them to maximize profits from yield farming.",
        pic: "static/logos/YFI_BEP20.svg",
      },
      {
        name: "yearn.finance Medium",
        feed: "https://medium.com/feed/iearn",
        site: "https://medium.com/iearn",
        about: "Yearn.finance is an aggregator service for decentralized finance (DeFi) investors, using automation to allow them to maximize profits from yield farming.",
        pic: "static/logos/YFI_BEP20.svg",
      },
    ],
    bscnear: [
      {
        name: "NEAR Protocol Twitter",
        feed: "https://nitter.zelcore.io/nearprotocol/rss",
        site: "https://twitter.com/nearprotocol",
        about: "NEAR Protocol is a decentralized application platform designed to make apps usable on the web. The network runs on a Proof-of-Stake (PoS) consensus mechanism called Nightshade, which aims to offer scalability and stable fees.",
        pic: "static/logos/NEAR_BEP20.svg",
      },
      {
        name: "NEAR Protocol Reddit",
        feed: "https://www.reddit.com/r/nearprotocol/.rss",
        site: "https://www.reddit.com/r/nearprotocol",
        about: "NEAR Protocol is a decentralized application platform designed to make apps usable on the web. The network runs on a Proof-of-Stake (PoS) consensus mechanism called Nightshade, which aims to offer scalability and stable fees.",
        pic: "static/logos/NEAR_BEP20.svg",
      },
    ],
    bscbat: [
      {
        name: "Basic Attention Twitter",
        feed: "https://nitter.zelcore.io/@attentiontoken/rss",
        site: "https://twitter.com/@attentiontoken",
        about: "The Basic Attention is the new for the digital advertising industry.",
        pic: "static/logos/BAT_BEP20.svg",
      },
      {
        name: "Basic Attention Reddit",
        feed: "https://www.reddit.com/r/BATProject/.rss",
        site: "https://www.reddit.com/r/BATProject",
        about: "The Basic Attention is the new for the digital advertising industry.",
        pic: "static/logos/BAT_BEP20.svg",
      },
      {
        name: "Basic Attention Medium",
        feed: "https://medium.com/feed/@attentiontoken",
        site: "https://medium.com/@attentiontoken",
        about: "The Basic Attention is the new for the digital advertising industry.",
        pic: "static/logos/BAT_BEP20.svg",
      },
    ],
    bscftm: [
      {
        name: "Fantom Twitter",
        feed: "https://nitter.zelcore.io/FantomFDN/rss",
        site: "https://twitter.com/FantomFDN",
        about: "Fantom is a directed acyclic graph (DAG) smart contract platform providing decentralized finance (DeFi) services to developers using its own bespoke consensus algorithm.",
        pic: "static/logos/FTM_BEP20.svg",
      },
      {
        name: "Fantom Reddit",
        feed: "https://reddit.com/r/FantomFoundation/.rss",
        site: "https://reddit.com/r/FantomFoundation",
        about: "Fantom is a directed acyclic graph (DAG) smart contract platform providing decentralized finance (DeFi) services to developers using its own bespoke consensus algorithm.",
        pic: "static/logos/FTM_BEP20.svg",
      },
      {
        name: "Fantom Medium",
        feed: "https://medium.com/feed/fantomfoundation",
        site: "https://medium.com/fantomfoundation",
        about: "Fantom is a directed acyclic graph (DAG) smart contract platform providing decentralized finance (DeFi) services to developers using its own bespoke consensus algorithm.",
        pic: "static/logos/FTM_BEP20.svg",
      },
    ],
    bscbnt: [
      {
        name: "Bancor Network Twitter",
        feed: "https://nitter.zelcore.io/bancornetwork/rss",
        site: "https://twitter.com/bancornetwork",
        about: "Bancor is an on-chain liquidity protocol that enables constant convertibility betweens. Conversions using Bancor are executed against on-chain liquidity pools using automated market makers to price and process transactions without order books or counterparties.",
        pic: "static/logos/BNT_BEP20.svg",
      },
      {
        name: "Bancor Network Reddit",
        feed: "https://www.reddit.com/r/Bancor/.rss",
        site: "https://www.reddit.com/r/Bancor",
        about: "Bancor is an on-chain liquidity protocol that enables constant convertibility betweens. Conversions using Bancor are executed against on-chain liquidity pools using automated market makers to price and process transactions without order books or counterparties.",
        pic: "static/logos/BNT_BEP20.svg",
      },
      {
        name: "Bancor Network Medium",
        feed: "https://medium.com/feed/@bancor",
        site: "https://medium.com/@bancor",
        about: "Bancor is an on-chain liquidity protocol that enables constant convertibility betweens. Conversions using Bancor are executed against on-chain liquidity pools using automated market makers to price and process transactions without order books or counterparties.",
        pic: "static/logos/BNT_BEP20.svg",
      },
    ],
    bscpax: [
      {
        name: "Paxos Standard Twitter",
        feed: "https://nitter.zelcore.io/PaxosStandard/rss",
        site: "https://twitter.com/PaxosStandard",
        about: "Paxos Standard (PAX) is a stablecoin that allows users to exchange US dollars for Paxos Standards to 'transact at the speed of the internet'.",
        pic: "static/logos/PAX_BEP20.svg",
      },
      {
        name: "Paxos Standard Blog",
        feed: "https://www.paxos.com/feed",
        site: "https://www.paxos.com",
        about: "Paxos Standard (PAX) is a stablecoin that allows users to exchange US dollars for Paxos Standards to 'transact at the speed of the internet'.",
        pic: "static/logos/PAX_BEP20.svg",
      },
      {
        name: "Paxos Standard Medium",
        feed: "https://medium.com/feed/@PaxosStandard",
        site: "https://medium.com/@PaxosStandard",
        about: "Paxos Standard (PAX) is a stablecoin that allows users to exchange US dollars for Paxos Standards to 'transact at the speed of the internet'.",
        pic: "static/logos/PAX_BEP20.svg",
      },
    ],
    bscont: [
      {
        name: "Ontology Medium",
        feed: "https://medium.com/feed/ontologynetwork",
        site: "https://medium.com/ontologynetwork",
        about: "Ontology is a new high-performance public blockchain project & a distributed trust collaboration platform that include a series of complete distributed ledgers and smart contract systems.",
        pic: "static/logos/ONT_BEP20.svg",
      },
      {
        name: "Ontology Twitter",
        feed: "https://nitter.zelcore.io/OntologyNetwork/rss",
        site: "https://twitter.com/OntologyNetwork",
        about: "Ontology is a new high-performance public blockchain project & a distributed trust collaboration platform that include a series of complete distributed ledgers and smart contract systems.",
        pic: "static/logos/ONT_BEP20.svg",
      },
      {
        name: "Ontology Reddit",
        feed: "https://reddit.com/r/OntologyNetwork/.rss",
        site: "https://reddit.com/r/OntologyNetwork",
        about: "Ontology is a new high-performance public blockchain project & a distributed trust collaboration platform that include a series of complete distributed ledgers and smart contract systems.",
        pic: "static/logos/ONT_BEP20.svg",
      },
    ],
    bsccnineeight: [
      {
        name: "Coin98 Medium",
        feed: "https://blog.coin98.com/rss",
        site: "https://blog.coin98.com",
        about: "Coin98 enables value transfer as easily as using the Internet by the innovation of Multi-chain Engine, Fully Automatic Liquidity and Space Gate, all in one Super Liquidity Aggregator.",
        pic: "static/logos/C98_BEP20.svg",
      },
      {
        name: "Coin98 Twitter",
        feed: "https://nitter.zelcore.io/coin98_finance/rss",
        site: "https://twitter.com/coin98_finance",
        about: "Coin98 enables value transfer as easily as using the Internet by the innovation of Multi-chain Engine, Fully Automatic Liquidity and Space Gate, all in one Super Liquidity Aggregator.",
        pic: "static/logos/C98_BEP20.svg",
      },
    ],
    bscankr: [
      {
        name: "Ankr Twitter",
        feed: "https://nitter.zelcore.io/ankr/rss",
        site: "https://twitter.com/ankr",
        about: "Web3 Infrastructure for All",
        pic: "static/logos/ANKR_BEP20.svg",
      },
      {
        name: "Ankr Medium",
        feed: "https://medium.com/feed/ankr-network",
        site: "https://medium.com/ankr-network",
        about: "Web3 Infrastructure for All",
        pic: "static/logos/ANKR_BEP20.svg",
      },
    ],
    bscsxp: [
      {
        name: "Swipe Medium",
        feed: "https://medium.com/feed/swipe",
        site: "https://medium.com/swipe",
        about: "Swipe is a cryptocurrency wallet and debit card that enables users to spend their cryptocurrencies over the world.",
        pic: "static/logos/SXP_BEP20.svg",
      },
    ],
    bsciotx: [
      {
        name: "IoTeX Network Twitter",
        feed: "https://nitter.zelcore.io/iotex_io/rss",
        site: "https://twitter.com/iotex_io",
        about: "Building the Internet of Trusted Things -- Blockchain, IoT, & Privacy.",
        pic: "static/logos/IOTX_BEP20.svg",
      },
      {
        name: "IoTeX Network Reddit",
        feed: "https://www.reddit.com/r/IoTeX/.rss",
        site: "https://www.reddit.com/r/IoTeX",
        about: "Building the Internet of Trusted Things -- Blockchain, IoT, & Privacy.",
        pic: "static/logos/IOTX_BEP20.svg",
      },
      {
        name: "IoTeX Network Medium",
        feed: "https://medium.com/feed/iotex",
        site: "https://medium.com/iotex",
        about: "Building the Internet of Trusted Things -- Blockchain, IoT, & Privacy.",
        pic: "static/logos/IOTX_BEP20.svg",
      },
    ],
    bscwrx: [
      {
        name: "wazirx Blog",
        feed: "https://wazirx.com/blog/rss",
        site: "https://wazirx.com/blog",
        about: "WazirX is a India's cryptocurrency exchange with trading interface and features to buy, sell and trade cryptocurrencies.",
        pic: "static/logos/WRX_BEP20.svg",
      },
      {
        name: "wazirx Twitter",
        feed: "https://nitter.zelcore.io/wazirxindia/rss",
        site: "https://twitter.com/wazirxindia",
        about: "WazirX is a India's cryptocurrency exchange with trading interface and features to buy, sell and trade cryptocurrencies.",
        pic: "static/logos/WRX_BEP20.svg",
      },
      {
        name: "wazirx Medium",
        feed: "https://medium.com/feed/@wazirx",
        site: "https://medium.com/@wazirx",
        about: "WazirX is a India's cryptocurrency exchange with trading interface and features to buy, sell and trade cryptocurrencies.",
        pic: "static/logos/WRX_BEP20.svg",
      },
    ],
    bscinch: [
      {
        name: "1INCH Twitter",
        feed: "https://nitter.zelcore.io/@1inch/rss",
        site: "https://twitter.com/@1inch",
        about: "1inch is a decentralized exchange aggregator that sources liquidity from various exchanges and is capable of splitting a single trade transaction across multiple DEXs. Smart contract technology empowers this aggregator enabling users to optimize and customize their trades.",
        pic: "static/logos/1INCH_BEP20.svg",
      },
      {
        name: "1INCH Reddit",
        feed: "https://reddit.com/r/1inch_exchange/.rss",
        site: "https://reddit.com/r/1inch_exchange",
        about: "1inch is a decentralized exchange aggregator that sources liquidity from various exchanges and is capable of splitting a single trade transaction across multiple DEXs. Smart contract technology empowers this aggregator enabling users to optimize and customize their trades.",
        pic: "static/logos/1INCH_BEP20.svg",
      },
      {
        name: "1INCH Medium",
        feed: "https://medium.com/feed/1inch-exchange.medium.com",
        site: "https://1inch-exchange.medium.com",
        about: "1inch is a decentralized exchange aggregator that sources liquidity from various exchanges and is capable of splitting a single trade transaction across multiple DEXs. Smart contract technology empowers this aggregator enabling users to optimize and customize their trades.",
        pic: "static/logos/1INCH_BEP20.svg",
      },
    ],
    bscbake: [
      {
        name: "BakeryToken Twitter",
        feed: "https://nitter.zelcore.io/bakery_swap/rss",
        site: "https://twitter.com/bakery_swap",
        about: "An AMM Dex on Binance Smart Chain.",
        pic: "static/logos/BAKE_BEP20.svg",
      },
      {
        name: "BakeryToken Medium",
        feed: "https://medium.com/feed/@BakerySwap",
        site: "https://medium.com/@BakerySwap",
        about: "An AMM Dex on Binance Smart Chain.",
        pic: "static/logos/BAKE_BEP20.svg",
      },
    ],
    bscalpha: [
      {
        name: "AlphaToken Blog",
        feed: "https://blog.alphafinance.io/rss",
        site: "https://blog.alphafinance.io",
        about: "Alpha Finance Lab is an ecosystem of DeFi products and focused on building an ecosystem of automated yield-maximizing Alpha products that interoperate to bring optimal alpha to users on a cross-chain level.",
        pic: "static/logos/ALPHA_BEP20.svg",
      },
      {
        name: "AlphaToken Twitter",
        feed: "https://nitter.zelcore.io/AlphaFinanceLab/rss",
        site: "https://twitter.com/AlphaFinanceLab",
        about: "Alpha Finance Lab is an ecosystem of DeFi products and focused on building an ecosystem of automated yield-maximizing Alpha products that interoperate to bring optimal alpha to users on a cross-chain level.",
        pic: "static/logos/ALPHA_BEP20.svg",
      },
    ],
  },
};

export default {
  newssources,
};
