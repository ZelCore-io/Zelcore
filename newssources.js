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
    // {
    //   name: "CCN",
    //   feed: "https://ccn.com/feed/",
    //   site: "https://ccn.com/",
    //   about: "CCN is a part of Hawkfish AS. All journalists and editors follow the Code of Ethics of the Norwegian Press. CCN is an unbiased financial news site with a special focus on cryptocurrencies and US Markets. Journalists on CCN are free to write stories they want to cover.",
    //   pic: "static/news/ccn.svg",
    // },
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
    //   name: "Crypto Insider",
    //   feed: "https://cryptoinsider.com/feed/",
    //   site: "https://cryptoinsider.com/",
    //   about: "Crypto Insider provides news about the crypto-space from journalists truly interested in upholding the sense of journalistic integrity.",
    //   pic: "static/news/cryptoinsider.svg",
    // },
    {
      name: "/r/CryptoCurrency",
      feed: "https://www.reddit.com/r/CryptoCurrency/.rss",
      site: "https://www.reddit.com/r/CryptoCurrency/",
      about: "Subreddit for the discussion of CryptoCurrency 'The official source for CryptoCurrency News, Discussion & Analysis.'",
      pic: "static/news/reddit.svg",
    },
    {
      name: "/r/gpumining",
      feed: "https://www.reddit.com/r/gpumining/.rss",
      site: "https://www.reddit.com/r/gpumining/",
      about: "Subreddit for the discussion of GPU mining 'The community of GPU mining enthusiasts, both professionals and hobbyists.'",
      pic: "static/news/reddit.svg",
    },
    {
      name: "/r/bitcoin",
      feed: "https://www.reddit.com/r/bitcoin/.rss",
      site: "https://www.reddit.com/r/bitcoin/",
      about: "Subreddit for the discussion of Bitcoin 'The official source for CryptoCurrency News, Discussion & Analysis.'",
      pic: "static/news/reddit.svg",
    },
    {
      name: "/r/btc",
      feed: "https://www.reddit.com/r/btc/.rss",
      site: "https://www.reddit.com/r/btc/",
      about: "Subreddit for the discussion of Bitcoin '/r/btc was created to foster and support free and open Bitcoin discussion, Bitcoin news, and exclusive AMA (Ask Me Anything) interviews from top Bitcoin industry leaders!'",
      pic: "static/news/reddit.svg",
    },
    {
      name: "/r/BitCoinMining",
      feed: "https://www.reddit.com/r/BitCoinMining/.rss",
      site: "https://www.reddit.com/r/BitCoinMining/",
      about: "Subreddit for the discussion of BitCoinMining 'The official bitcoin mining forum / subreddit / chat room / place to be!'",
      pic: "static/news/reddit.svg",
    },
    {
      name: "Medium Topic Cryptocurrency",
      feed: "https://medium.com/feed/topic/cryptocurrency",
      site: "https://medium.com/topic/cryptocurrency",
      about: "Cryptocurrency on Medium: An ode to the anti-banks.",
      pic: "static/news/medium.svg",
    },
  ],
  // asset specific
  assets: {
    zelcash: [
      {
        name: "Zel Blog",
        feed: "https://medium.com/feed/@ZelOfficial",
        site: "https://medium.com/@ZelOfficial",
        about: "Blog source for all things Zel, officially, from the Zel Team.",
        pic: "static/logos/ZEL.svg",
      },
      {
        name: "Zel Blog2",
        feed: "https://medium.com/feed/zelofficial",
        site: "https://medium.com/zelofficial",
        about: "Blog source for all things Zel, officially, from the Zel Team.",
        pic: "static/logos/ZEL.svg",
      },
      {
        name: "Zel Twitter",
        feed: "https://twitrss.me/twitter_user_to_rss/?user=zelcash",
        site: "https://twitter.com/zelcash",
        about: "Official Zel Twitter.",
        pic: "static/logos/ZEL.svg",
      },
      {
        name: "Zel Twitter2",
        feed: "https://twitrss.me/twitter_user_to_rss/?user=ZelCash",
        site: "https://twitter.com/ZelCash",
        about: "Official Zel Twitter.",
        pic: "static/logos/ZEL.svg",
      },
    ],
    testnet: [
      {
        name: "Zel Blog",
        feed: "https://medium.com/feed/@ZelOfficial",
        site: "https://medium.com/@ZelOfficial",
        about: "Blog source for all things Zel, officially, from the Zel Team.",
        pic: "static/logos/ZEL.svg",
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
        feed: "https://twitrss.me/twitter_user_to_rss/?user=zcashco",
        site: "https://twitter.com/zcashco",
        about: "Zcash is a privacy-protectig, digital currency built on strong science.",
        pic: "static/logos/ZEC.svg",
      },
    ],
    bitcoinz: [
      {
        name: "BitcoinZ Twitter",
        feed: "https://twitrss.me/twitter_user_to_rss/?user=BitcoinZTeam",
        site: "https://twitter.com/bitcoinzteam",
        about: "BitcoinZ - 100% community focused and ran Zcash fork.",
        pic: "static/logos/BTCZ.svg",
      },
    ],
    ravencoin: [
      {
        name: "Tron Black's Medium",
        feed: "https://medium.com/feed/@tronblack",
        site: "https://medium.com/@tronblack",
        about: "Ravencoin is a peer-to-peer blockchain, handling the efficient creation and transfer of assets from one party to another.",
        pic: "static/logos/RVN.svg",
      },
    ],
    bitcore: [
      {
        name: "Bitcore Twitter",
        feed: "https://twitrss.me/twitter_user_to_rss/?user=Bitcore_BTX",
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
        feed: "https://twitrss.me/twitter_user_to_rss/?user=kucoincom",
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
        pic: "static/logos/KNC.svg",
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
        feed: "https://twitrss.me/twitter_user_to_rss/?user=safecoins",
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
        name: "Zcoin Blog",
        feed: "https://medium.com/feed/@zcoin",
        site: "https://medium.com/@zcoin",
        about: "Zcoin, a decentralized and open source currency that provides financial privacy enabled by the Zerocoin protocol.",
        pic: "static/logos/XZC.svg",
      },
    ],
    usdt: [
      {
        name: "Tether Blog",
        feed: "https://tether.to/feed/",
        site: "https://tether.to/press/",
        about: "USDT is a cryptocurrency asset issued on the Bitcoin blockchain via the Omni Layer Protocol. It is also issued on the Ethereum blockchain via the ERC20 Token Standard.",
        pic: "static/logos/USDT.svg",
      },
    ],
    usdterc: [
      {
        name: "Tether Blog",
        feed: "https://tether.to/feed/",
        site: "https://tether.to/press/",
        about: "USDT is a cryptocurrency asset issued on the Ethereum blockchain via the ERC20 Token Standard. It is also issued on the Bitcoin blockchain via the Omni Layer Protocol.",
        pic: "static/logos/USDT.svg",
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
        pic: "static/logos/TUSD.svg",
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
        feed: "https://twitrss.me/twitter_user_to_rss/?user=genx_network",
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
        feed: "https://twitrss.me/twitter_user_to_rss/?user=brdhq",
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
        feed: "https://twitrss.me/twitter_user_to_rss/?user=gunthyio",
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
        feed: "https://twitrss.me/twitter_user_to_rss/?user=Blox_Official",
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
        feed: "https://twitrss.me/twitter_user_to_rss/?user=dibicoin",
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
        feed: "https://twitrss.me/twitter_user_to_rss/?user=NukeToken",
        site: "https://twitter.com/NukeToken",
        about: "NUKE is a currency that grows by shrinking.",
        pic: "static/logos/NUKE.svg",
      },
    ],
    dogecoin: [
      {
        name: "Dogeocin Twitter",
        feed: "https://twitrss.me/twitter_user_to_rss/?user=dogecoin",
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
        feed: "https://twitrss.me/twitter_user_to_rss/?user=bittorrent",
        site: "https://twitter.com/bittorrent",
        about: "BitTorrent aims to tokenize the decentralized file-sharing protocol with their cryptocurrency asset launched early in 2019. \n"
          + "BTT represents a TRC-10 utility token based on the TRON blockchain that could allow content creators to connect with their audience, earn and spend digital currency without a middleman.",
        pic: "static/logos/BTT.svg",
      },
    ],
    digibyte: [
      {
        name: "DigiByte Twitter",
        feed: "https://twitrss.me/twitter_user_to_rss/?user=DigiByteCoin",
        site: "https://twitter.com/DigiByteCoin",
        about: "DigiByte (DGB) is a rapidly growing global blockchain with a focus on cybersecurity for digital payments & decentralized applications. Over 5 years, DigiByte has become the world's fastest, longest and most decentralized UTXO blockchain today.",
        pic: "static/logos/DGB.svg",
      },
    ],
    sinovate: [
      {
        name: "Sinovate Twitter",
        feed: "https://twitrss.me/twitter_user_to_rss/?user=SinovateChain",
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
        feed: "https://twitrss.me/twitter_user_to_rss/?user=VeriBlock",
        site: "https://twitter.com/VeriBlock",
        about: "Using VeriBlock, every blockchain can benefit from Bitcoin’s computational power and unrivaled security.",
        pic: "static/logos/VBK.svg",
      },
    ],
    huobitoken: [
      {
        name: "Huobi Twitter",
        feed: "https://twitrss.me/twitter_user_to_rss/?user=HuobiGlobal",
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
        pic: "static/logos/BUSD.svg",
      },
    ],
    okb: [
      {
        name: "OKEx Twitter",
        feed: "https://twitrss.me/twitter_user_to_rss/?user=OKEx",
        site: "https://twitter.com/OKEx",
        about: "OKEx is a world-leading digital asset exchange, providing advanced financial services to traders globally by using blockchain technology.",
        pic: "static/logos/OKB.svg",
      },
    ],
    bitforextoken: [
      {
        name: "BitForex Twitter",
        feed: "https://twitrss.me/twitter_user_to_rss/?user=bitforexcom",
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
        feed: "https://twitrss.me/twitter_user_to_rss/?user=EOS_huobipool",
        site: "https://twitter.com/EOS_huobipool",
        about: "HPT-HuobiPool Token is the global ecological certificate of HuobiPool.",
        pic: "static/logos/HPT.svg",
      },
    ],
    golfcoin: [
      {
        name: "Golfcoin Twitter",
        feed: "https://twitrss.me/twitter_user_to_rss/?user=golfcoin",
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
        feed: "https://twitrss.me/twitter_user_to_rss/?user=0xbitcoin_erc20",
        site: "https://twitter.com/0xbitcoin_erc20",
        about: "The first truly decentralized PoW mineable ERC20 token contract on the Ethereum blockchain.",
        pic: "static/logos/0xBTC.svg",
      },
    ],
    vayla: [
      {
        name: "Vayla Twitter",
        feed: "https://twitrss.me/twitter_user_to_rss/?user=VAYLAtoken",
        site: "https://twitter.com/VAYLAtoken",
        about: "A token valued by the people.",
        pic: "static/logos/VYA.svg",
      },
    ],
    aergo: [
      {
        name: "Aergo Twitter",
        feed: "https://twitrss.me/twitter_user_to_rss/?user=AERGO_IO",
        site: "https://twitter.com/AERGO_IO",
        about: "It's not blockchain. It's blockchain for business.",
        pic: "static/logos/AERGO.svg",
      },
    ],
    lunchmoney: [
      {
        name: "Lunchmoney Twitter",
        feed: "https://twitrss.me/twitter_user_to_rss/?user=LunchToken",
        site: "https://twitter.com/LunchToken",
        about: "ERC20 utility token used for incentivizing real feedback from restaurant and eatery patrons wordwide.",
        pic: "static/logos/LMY.svg",
      },
    ],
    kadena: [
      {
        name: "Kadena Twitter",
        feed: "https://twitrss.me/twitter_user_to_rss/?user=kadena_io",
        site: "https://twitter.com/kadena_io",
        about: "Kadena offers the fastest, safest and most scalable hybrid blockchain technology stack for entrepreneurs. Smarter contracts//Scaling proof of work securely.",
        pic: "static/logos/KDA.svg",
      },
    ],
    netkoin: [
      {
        name: "NetKoin Twitter",
        feed: "https://twitrss.me/twitter_user_to_rss/?user=netkoin",
        site: "https://twitter.com/netkoin",
        about: "Earn cryptocurrency and redeem rewards from everday shopping!",
        pic: "static/logos/NTK.svg",
      },
    ],
    gammacoin: [
      {
        name: "GammaCoin Twitter",
        feed: "https://twitrss.me/twitter_user_to_rss/?user=gammagmc",
        site: "https://twitter.com/gammagmc",
        about: "GMC are economic tokens and investments made using the Ethereum blockchain.",
        pic: "static/logos/GMC.svg",
      },
    ],
    bazookatoken: [
      {
        name: "Baztoken Twitter",
        feed: "https://twitrss.me/twitter_user_to_rss/?user=BazToken",
        site: "https://twitter.com/BazToken",
        about: "Baztoken is an ERC20 with limitless usability which aims to revolutionize the E-Gaming, Sports betting & E-commerce.",
        pic: "static/logos/BAZ.svg",
      },
    ],
    coinsto: [
      {
        name: "Coinsto Twitter",
        feed: "https://twitrss.me/twitter_user_to_rss/?user=Coinstoglobal",
        site: "https://twitter.com/Coinstoglobal",
        about: "Coinsto is a Cryptocurrency project helping people to learn by others experience.",
        pic: "static/logos/CSO.svg",
      },
    ],
    unibright: [
      {
        name: "UniBright Twitter",
        feed: "https://twitrss.me/twitter_user_to_rss/?user=unibrightio",
        site: "https://twitter.com/unibrightio",
        about: "UniBright is a business integration specialists, now offering Unibright.io - the first unified framework for blockchain based business integration",
        pic: "static/logos/UBT.svg",
      },
    ],
    ilcoin: [
      {
        name: "ILCoin Twitter",
        feed: "https://twitrss.me/twitter_user_to_rss/?user=ILC_B_Project",
        site: "https://twitter.com/ILC_B_Project",
        about: "The ILCoin blockchain is a revolutionary on-chain data storage system; developed not only to provide a strong foundation for the ILCoin cryptocurrency, "
          + "but also to open up a wide range of possibilities for exceptionally safe yet transparent data storage, establishment of various smart contract systems and the launch of innovative decentralized applications running on our blockchain systems.",
        pic: "static/logos/ILC.svg",
      },
    ],
	hex: [
      {
        name: "Hex Twitter",
        feed: "https://twitrss.me/twitter_user_to_rss/?user=HEXcrypto",
        site: "https://twitter.com/HEXcrypto",
        name: "Hex Reddit",
        feed: "https://www.reddit.com/r/HEXcrypto/",
        site: "https://www.reddit.com/r/HEXcrypto/",
        about: "HEX is an ERC20 token launched on the Ethereum network. HEX is designed to be a store of value to replace the Certificate of Deposit as the blockchain counterpart of that financial product used in traditional financial markets. HEX is also designed to leverage off the emerging DeFi (Decentralised Finance) ecosystem in cryptocurrencies within the Ethereum network.",
        pic: "static/logos/HEX.svg",
      },
    ],
  },
};

export default {
  newssources,
};
