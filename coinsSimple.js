const coins = {
  zelcash: {
    coin: "zelcash",
    name: "ZelCash",
    pubKeyHash: "1cb8",
    wif: "80",
    normalAddress: "t1",
    normalAddressB: "t1",
    scriptAddress: "t3",
    scriptAddressB: "t3",
    addresses: [],
    fiatRates: [],
    fiatRate: 0,
    api: "https://explorer.zel.zelcore.io/api/",
    pathunix: "zelcash",
    path: "Zelcash",
    unit: "ZEL",
    config: "zelcash",
    rpcport: 16124,
    testnetrpcport: 26124,
    type: "zcash",
    explorer: "https://explorer.zel.zelcore.io/tx/",
    logolink: "static/logos/Zelcash.svg",
    node: "explorer.zel.zelcore.io",
    fee: 0.00001,
    feepolicy: {
      economy: 1,
      normal: 5,
      fast: 10,
    },
    color: "#183c87",
    border: "#e6e6e6",
  },
  testnet: {
    coin: "testnet",
    name: "Test Coin",
    pubKeyHash: "1d25",
    wif: "ef",
    normalAddress: "tm",
    normalAddressB: "tm",
    scriptAddress: "t2",
    scriptAddressB: "t2",
    addresses: [],
    fiatRates: [],
    fiatRate: 0,
    api: "https://testnet.zel.cash/api/",
    pathunix: "zelcash",
    path: "Zelcash",
    unit: "TESTZEL",
    config: "zelcash",
    rpcport: 26124,
    testnetrpcport: 26124,
    type: "zcash",
    explorer: "https://testnetnodes.zel.cash/tx/",
    logolink: "static/logos/Testnet.svg",
    node: "testnet.zel.cash",
    fee: 0.00001,
    feepolicy: {
      economy: 1,
      normal: 5,
      fast: 10,
    },
    color: "#abcabc",
    border: "#e6e6e6",
  },
  bitcoin: {
    coin: "bitcoin",
    name: "Bitcoin",
    pubKeyHash: "00", // livenet is 00, testnet is 6F
    normalAddress: "1",
    scriptAddress: "3",
    normalAddressB: "1",
    scriptAddressB: "3",
    wif: "80", // livenet is 80, testnet is EF
    addresses: [],
    fiatRates: [],
    fiatRate: 0,
    api: "https://explorer.btc.zelcore.io/api/", // "https://testnet.blockexplorer.com/api/",
    pathunix: "bitcoin",
    path: "Bitcoin", // check
    unit: "BTC",
    config: "bitcoin", // check
    rpcport: 8332,
    testnetrpcport: 18332,
    type: "btc",
    explorer: "https://explorer.btc.zelcore.io/tx/", // "https://testnet.blockexplorer.com/tx/",
    logolink: "static/logos/Bitcoin.svg",
    node: "explorer.btc.zelcore.io", // "testnet.blockexplorer.com",
    fee: 0.0000226,
    feepolicy: {
      economy: 7,
      normal: 15,
      fast: 30,
    },
    color: "#f7931a",
    border: "#e6e6e6",
  },
  ethereum: {
    coin: "ethereum",
    name: "Ethereum",
    pubKeyHash: "30", // not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRates: [],
    fiatRate: 0,
    api: "https://api.etherscan.io/api?module=account&action=txlist&address=",
    pathunix: "ethereum",
    path: "Ethereum", // check
    unit: "ETH",
    config: "ethereum", // check
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Ethereum.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee_url: "https://www.etherchain.org/api/gasPriceOracle",
    fee: 35000, // gas limit
    feepolicy: {
      economy: 4,
      normal: 8,
      fast: 14,
    },
    color: "#b0b0b0",
    border: "#e6e6e6",
    contractAddress: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    decimals: 18,
  },
  litecoin: {
    coin: "litecoin",
    name: "Litecoin",
    pubKeyHash: "30", // testnet is 6F
    normalAddress: "L",
    scriptAddress: "3",
    normalAddressB: "L",
    scriptAddressB: "M",
    wif: "b0",
    addresses: [],
    fiatRates: [],
    fiatRate: 0,
    api: "https://explorer.ltc.zelcore.io/api/",
    pathunix: "litecoin",
    path: "Litecoin", // check
    unit: "LTC",
    config: "litecoin", // check
    rpcport: 9332, // testen is 19332
    testnetrpcport: 19332,
    type: "btc",
    explorer: "https://explorer.ltc.zelcore.io/tx/",
    logolink: "static/logos/Litecoin.svg",
    node: "explorer.ltc.zelcore.io",
    /* min fee is 1 input 2 outputs with compressed pubkey
    -> 1*148 + 2*34 + 10 (fixed bytes) = 226 bytes.
    Using economy of 10 sats per byte = 2260sats
    */
    fee: 0.000400,
    feepolicy: {
      economy: 200,
      normal: 500,
      fast: 1000,
    },
    color: "#385d9a",
    border: "#e6e6e6",
  },
  zcash: {
    coin: "zcash",
    name: "Zcash",
    pubKeyHash: "1cb8", // 1d25
    normalAddress: "t1", // tm
    scriptAddress: "t3",
    normalAddressB: "t1",
    scriptAddressB: "t3",
    wif: "80", // ef
    addresses: [],
    fiatRates: [],
    fiatRate: 0,
    api: "https://explorer2.zec.zelcore.io/api/", // https://explorer.testnet.z.cash/api/
    pathunix: "zcash",
    path: "Zcash",
    unit: "ZEC",
    config: "zcash",
    rpcport: 8232,
    testnetrpcport: 18232,
    type: "zcash",
    explorer: "https://explorer2.zec.zelcore.io/tx/",
    logolink: "static/logos/Zcash.svg",
    node: "explorer2.zec.zelcore.io",
    fee: 0.00002260,
    feepolicy: {
      economy: 1,
      normal: 5,
      fast: 10,
    },
    color: "#f4b728",
    border: "#e6e6e6",
  },
  bitcoinz: {
    coin: "bitcoinz",
    name: "BitcoinZ",
    pubKeyHash: "1cb8",
    normalAddress: "t1",
    scriptAddress: "t3",
    normalAddressB: "t1",
    scriptAddressB: "t3",
    wif: "80",
    addresses: [],
    fiatRates: [],
    fiatRate: 0,
    api: "https://explorer.btcz.zelcore.io/api/",
    pathunix: "bitcoinz",
    path: "BitcoinZ", // check
    unit: "BTCZ",
    config: "bitcoinz", // check
    rpcport: 1979,
    testnetrpcport: 11979,
    type: "zcash",
    explorer: "https://explorer.btcz.zelcore.io/tx/",
    logolink: "static/logos/BitcoinZ.svg",
    node: "explorer.btcz.zelcore.io",
    fee: 0.00001,
    feepolicy: {
      economy: 1,
      normal: 5,
      fast: 10,
    },
    color: "#42abcc",
    border: "#e6e6e6",
  },
  ravencoin: {
    coin: "ravencoin",
    name: "Ravencoin",
    pubKeyHash: "3c",
    normalAddress: "R",
    normalAddressB: "R",
    scriptAddress: "r",
    scriptAddressB: "r",
    wif: "80",
    addresses: [],
    fiatRates: [],
    fiatRate: 0,
    api: "https://explorer.rvn.zelcore.io/api/",
    pathunix: "raven",
    path: "Raven", // check
    unit: "RVN",
    config: "raven",
    rpcport: 8766, // testnet probably 18766
    testnetrpcport: 18766,
    type: "btc",
    explorer: "https://explorer.rvn.zelcore.io/tx/",
    logolink: "static/logos/Ravencoin.svg",
    node: "explorer.rvn.zelcore.io",
    fee: 0.00001,
    feepolicy: {
      economy: 1,
      normal: 5,
      fast: 10,
    },
    color: "#f05239",
    border: "#e6e6e6",
  },
  bitcore: {
    coin: "bitcore",
    name: "Bitcore",
    pubKeyHash: "03",
    normalAddress: "2",
    scriptAddress: "s",
    normalAddressB: "2",
    scriptAddressB: "s",
    wif: "80",
    addresses: [],
    fiatRates: [],
    fiatRate: 0,
    api: "https://explorer.btx.zelcore.io/api/",
    pathunix: "bitcore",
    path: "Bitcore", // check
    unit: "BTX",
    config: "bitcore",
    rpcport: 8556, // testnet probably 50332
    testnetrpcport: 50332,
    type: "btc",
    explorer: "https://explorer.btx.zelcore.io/tx/",
    logolink: "static/logos/Bitcore.svg",
    node: "explorer.btx.zelcore.io",
    fee: 0.00001,
    feepolicy: {
      economy: 1,
      normal: 5,
      fast: 10,
    },
    color: "#ed3483",
    border: "#e6e6e6",
  },
  hush: {
    coin: "hush",
    name: "Hush",
    pubKeyHash: "1cb8",
    normalAddress: "t1",
    scriptAddress: "t3",
    normalAddressB: "t1",
    scriptAddressB: "t3",
    wif: "80",
    addresses: [],
    fiatRates: [],
    fiatRate: 0,
    api: "https://explorer.hush.zelcore.io/api/",
    pathunix: "hush",
    path: "Hush",
    unit: "HUSH",
    config: "hush",
    rpcport: 8822,
    testnetrpcport: 18822,
    type: "zcash",
    explorer: "https://explorer.hush.zelcore.io/tx/",
    logolink: "static/logos/Hush.svg",
    node: "explorer.hush.zelcore.io",
    fee: 0.00001,
    feepolicy: {
      economy: 1,
      normal: 5,
      fast: 10,
    },
    color: "#2d2d2d",
    border: "#e6e6e6",
  },
  binance: {
    coin: "binance",
    name: "Binance",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRates: [],
    fiatRate: 0,
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xb8c77482e45f1f44de1745f52c74426c631bdd52&address=",
    pathunix: "binance",
    path: "Binance", // check
    unit: "BNB",
    config: "binance", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Binance.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0xB8c77482e45F1F44dE1745F52C74426C631bDD52",
    color: "#f3ba2f",
    border: "#e6e6e6",
    decimals: 18,
  },
  sonm: {
    coin: "sonm",
    name: "Sonm",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRates: [],
    fiatRate: 0,
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x983f6d60db79ea8ca4eb9968c6aff8cfa04b3c63&address=",
    pathunix: "sonm",
    path: "Sonm", // check
    unit: "SONM",
    config: "sonm", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Sonm.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x983f6d60db79ea8ca4eb9968c6aff8cfa04b3c63",
    color: "#6522ff",
    border: "#e6e6e6",
    decimals: 18,
  },
  omisego: {
    coin: "omisego",
    name: "OmiseGO",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRates: [],
    fiatRate: 0,
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xd26114cd6EE289AccF82350c8d8487fedB8A0C07&address=",
    pathunix: "omisego",
    path: "OmiseGO", // check
    unit: "OMG",
    config: "omisego", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Omisego.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee_url: "https://explorer.ltc.zelcore.io/api/utils/estimatefee?nbBlocks=5", // not used
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0xd26114cd6EE289AccF82350c8d8487fedB8A0C07",
    color: "#1a53f0",
    border: "#e6e6e6",
    decimals: 18,
  },
  zilliqa: {
    coin: "zilliqa",
    name: "Zilliqa",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRates: [],
    fiatRate: 0,
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x05f4a42e251f2d52b8ed15e9fedaacfcef1fad27&address=",
    pathunis: "zeilliqa",
    path: "Zilliqa", // check
    unit: "ZIL",
    config: "zilliqa", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Zilliqa.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee_url: "https://explorer.ltc.zelcore.io/api/utils/estimatefee?nbBlocks=5", // not used
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x05f4a42e251f2d52b8ed15e9fedaacfcef1fad27",
    color: "#49c1bf",
    border: "#e6e6e6",
    decimals: 12,
  },
  zrx: {
    coin: "zrx",
    name: "0x",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRates: [],
    fiatRate: 0,
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xe41d2489571d322189246dafa5ebde1f4699f498&address=",
    pathunix: "0x",
    path: "0x", // check
    unit: "ZRX",
    config: "zrx", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Zrx.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee_url: "https://explorer.ltc.zelcore.io/api/utils/estimatefee?nbBlocks=5", // not used
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0xe41d2489571d322189246dafa5ebde1f4699f498",
    color: "#404040",
    border: "#e6e6e6",
    decimals: 18,
  },
  golem: {
    coin: "golem",
    name: "Golem",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRates: [],
    fiatRate: 0,
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xa74476443119A942dE498590Fe1f2454d7D4aC0d&address=",
    pathunix: "golem",
    path: "Golem", // check
    unit: "GNT",
    config: "golem", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Golem.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0xa74476443119A942dE498590Fe1f2454d7D4aC0d",
    color: "#002d64",
    border: "#e6e6e6",
    decimals: 18,
  },
  kucoin: {
    coin: "kucoin",
    name: "KuCoin",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRates: [],
    fiatRate: 0,
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x039b5649a59967e3e936d7471f9c3700100ee1ab&address=",
    pathunix: "kucoin",
    path: "KuCoin", // check
    unit: "KCS",
    config: "kucoin", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Kucoin.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x039b5649a59967e3e936d7471f9c3700100ee1ab",
    color: "#0093dd",
    border: "#e6e6e6",
    decimals: 6,
  },
  /*  sophiatx: {
          coin: "sophiatx",
          name: "SophiaTX",
          pubKeyHash: "30", //todo not in eth
          wif: "80", //not in eth
    addresses: [],
          fiatRates: [],
          fiatRate: 0,
          api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x3833dda0aeb6947b98ce454d89366cba8cc55528&address=",
          pathunix: "sophiatx",
          path: "SophiaTX", //check
          unit: "SPHTX",
          config: "sophiatx", //not in eth
          rpcport: 8766, // 8545 imo, not used
          type: "eth",
          explorer: "https://etherscan.io/tx/",
          logolink: "static/logos/SophiaTX.svg",
          node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
          fee: 63000, //gas limit TODO
          feepolicy: {
            economy: 10,
            normal: 15,
            fast: 20
          },
          contractAddress: "0x3833dda0aeb6947b98ce454d89366cba8cc55528",
          color: "#00b098",
          border: "#e6e6e6",
          decimals: 18
        }, */
  bat: {
    coin: "bat",
    name: "BAT",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x0d8775f648430679a709e98d2b0cb6250d2887ef&address=",
    pathunix: "bat",
    path: "BAT", // check
    unit: "BAT",
    config: "bat", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Bat.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x0d8775f648430679a709e98d2b0cb6250d2887ef",
    color: "#ff5000",
    border: "#e6e6e6",
    decimals: 18,
  },
  maker: {
    coin: "maker",
    name: "Maker",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2&address=",
    pathunix: "maker",
    path: "Maker", // check
    unit: "MKR",
    config: "maker", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Maker.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
    color: "#1abc9c",
    border: "#e6e6e6",
    decimals: 18,
  },
  kyber: {
    coin: "kyber",
    name: "Kyber",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xdd974d5c2e2928dea5f71b9825b8b646686bd200&address=",
    pathunix: "kyber",
    path: "Kyber", // check
    unit: "KNC",
    config: "kyber", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Kyber.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0xdd974d5c2e2928dea5f71b9825b8b646686bd200",
    color: "#31cb9e",
    border: "#e6e6e6",
    decimals: 18,
  },
  enigma: {
    coin: "enigma",
    name: "Enigma",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRates: [],
    fiatRate: 0,
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xf0ee6b27b759c9893ce4f094b49ad28fd15a23e4&address=",
    pathunix: "enigma",
    path: "Enigma", // check
    unit: "ENG",
    config: "enigma", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Enigma.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0xf0ee6b27b759c9893ce4f094b49ad28fd15a23e4",
    color: "#cd2667",
    border: "#e6e6e6",
    decimals: 8,
  },
  tenx: {
    coin: "tenx",
    name: "TenX",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xB97048628DB6B661D4C2aA833e95Dbe1A905B280&address=",
    pathunix: "tenx",
    path: "TenX", // check
    unit: "PAY",
    config: "tenx", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/TenX.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0xB97048628DB6B661D4C2aA833e95Dbe1A905B280",
    color: "#48d0e0",
    border: "#e6e6e6",
    decimals: 18,
  },
  substratum: {
    coin: "substratum",
    name: "Substratum",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x8d75959f1e61ec2571aa72798237101f084de63a&address=",
    pathunix: "substratum",
    path: "Substratum", // check
    unit: "SUB",
    config: "substratum", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Substratum.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x8d75959f1e61ec2571aa72798237101f084de63a",
    color: "#ef4138",
    border: "#e6e6e6",
    decimals: 18,
  },
  civic: {
    coin: "civic",
    name: "Civic",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x41e5560054824ea6b0732e656e3ad64e20e94e45&address=",
    pathunix: "civic",
    path: "Civic", // check
    unit: "CVC",
    config: "civic", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Civic.svg", // todo
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x41e5560054824ea6b0732e656e3ad64e20e94e45",
    color: "#3ab03e",
    border: "#e6e6e6",
    decimals: 8,
  },
  stox: {
    coin: "stox",
    name: "Stox",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x006BeA43Baa3f7A6f765F14f10A1a1b08334EF45&address=",
    pathunix: "stox",
    path: "Stox", // check
    unit: "STX",
    config: "stox", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Stox.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x006BeA43Baa3f7A6f765F14f10A1a1b08334EF45",
    color: "#710afc",
    border: "#e6e6e6",
    decimals: 18,
  },
  bitcoingold: {
    coin: "bitcoingold",
    name: "Bitcoin Gold",
    pubKeyHash: "26",
    normalAddress: "G",
    scriptAddress: "A",
    normalAddressB: "G",
    scriptAddressB: "A",
    wif: "80",
    addresses: [],
    fiatRates: [],
    fiatRate: 0,
    api: "https://explorer.bitcoingold.org/insight-api/",
    pathunix: "bitcoingold",
    path: "BitcoinGold", // todo big TODO we should create variable name as well, and path for mac.
    unit: "BTG",
    config: "bitcoingold",
    rpcport: 8332,
    testnetrpcport: 18332,
    type: "btc",
    explorer: "https://explorer.bitcoingold.org/insight/tx/",
    logolink: "static/logos/BitcoinGold.svg",
    node: "explorer.bitcoingold.org",
    fee: 0.00002260,
    feepolicy: {
      economy: 3,
      normal: 5,
      fast: 10,
    },
    color: "#eba809",
    border: "#e6e6e6",
  },
  snowgem: {
    coin: "snowgem",
    name: "Snowgem",
    pubKeyHash: "1c28",
    normalAddress: "s1",
    scriptAddress: "s3",
    normalAddressB: "s1",
    scriptAddressB: "s3",
    wif: "80",
    addresses: [],
    fiatRates: [],
    fiatRate: 0,
    api: "https://explorer.xsg.zelcore.io/api/",
    pathunix: "snowgem",
    path: "Snowgem",
    unit: "XSG",
    config: "snowgem",
    rpcport: 16112,
    testnetrpcport: 26112,
    type: "zcash",
    explorer: "https://explorer.xsg.zelcore.io/tx/",
    logolink: "static/logos/Snowgem.svg",
    node: "explorer.xsg.zelcore.io",
    fee: 0.00001,
    feepolicy: {
      economy: 3,
      normal: 5,
      fast: 10,
    },
    color: "#d21e2b",
    border: "#e6e6e6",
  },
  btcp: {
    coin: "btcp",
    name: "Bitcoin Private",
    pubKeyHash: "1325",
    normalAddress: "b1",
    scriptAddress: "bx",
    normalAddressB: "b1",
    scriptAddressB: "bx",
    wif: "80",
    addresses: [],
    fiatRates: [],
    fiatRate: 0,
    api: "https://explorer.btcprivate.org/api/",
    pathunix: "btcprivate",
    path: "BTCPrivate",
    unit: "BTCP",
    config: "btcprivate",
    rpcport: 7932,
    testnetrpcport: 17932,
    type: "zcash",
    explorer: "https://explorer.btcprivate.org/tx/",
    logolink: "static/logos/BTCP.svg",
    node: "explorer.btcprivate.org",
    fee: 0.00001,
    feepolicy: {
      economy: 1,
      normal: 5,
      fast: 10,
    },
    color: "#272e64",
    border: "#e6e6e6",
  },
  anon: {
    coin: "anon",
    name: "Anon",
    pubKeyHash: "0582",
    normalAddress: "An",
    scriptAddress: "3Z",
    normalAddressB: "An",
    scriptAddressB: "3Z",
    wif: "80",
    addresses: [],
    fiatRates: [],
    fiatRate: 0,
    api: "https://explorer.anon.zelcore.io/api/",
    pathunix: "anon",
    path: "Anon",
    unit: "ANON",
    config: "anon",
    rpcport: 3130,
    testnetrpcport: 3127,
    type: "zcash",
    explorer: "https://explorer.anon.zelcore.io/tx/",
    logolink: "static/logos/ANON.svg",
    node: "explorer.anon.zelcore.io",
    fee: 0.00001,
    feepolicy: {
      economy: 1,
      normal: 5,
      fast: 10,
    },
    color: "#ba252b",
    border: "#e6e6e6",
  },
  zen: {
    coin: "zen",
    name: "Horizen",
    pubKeyHash: "2089",
    normalAddress: "zn",
    scriptAddress: "zs",
    normalAddressB: "zn",
    scriptAddressB: "zs",
    wif: "80",
    addresses: [],
    fiatRates: [],
    fiatRate: 0,
    api: "https://explorer.zensystem.io/api/",
    pathunix: "zen",
    path: "ZEN",
    unit: "ZEN",
    config: "zen",
    rpcport: 8231,
    testnetrpcport: 18231,
    type: "zcash",
    explorer: "https://explorer.zensystem.io/tx/",
    logolink: "static/logos/Zen.svg",
    node: "explorer.zensystem.io",
    fee: 0.00001,
    feepolicy: {
      economy: 1,
      normal: 5,
      fast: 10,
    },
    color: "#61b884",
    border: "#e6e6e6",
  },
  safecoin: {
    coin: "safecoin",
    name: "Safecoin",
    pubKeyHash: "3d",
    normalAddress: "R",
    scriptAddress: "b",
    normalAddressB: "R",
    scriptAddressB: "c",
    wif: "bd",
    addresses: [],
    fiatRates: [],
    fiatRate: 0,
    api: "https://explorer.safe.zelcore.io/api/",
    pathunix: "safecoin",
    path: "Safecoin",
    unit: "SAFE",
    config: "safecoin",
    rpcport: 8771,
    testnetrpcport: 18771,
    type: "zcash",
    explorer: "https://explorer.safe.zelcore.io/tx/",
    logolink: "static/logos/Safecoin.svg",
    node: "explorer.safe.zelcore.io",
    fee: 0.00001,
    feepolicy: {
      economy: 1,
      normal: 5,
      fast: 10,
    },
    color: "#00688b",
    border: "#e6e6e6",
  },
  komodo: {
    coin: "komodo",
    name: "Komodo",
    pubKeyHash: "3c",
    normalAddress: "R",
    scriptAddress: "b",
    normalAddressB: "R",
    scriptAddressB: "b",
    wif: "bc",
    addresses: [],
    fiatRates: [],
    fiatRate: 0,
    api: "https://explorer.kmd.zelcore.io/api/",
    pathunix: "komodo",
    path: "Komodo",
    unit: "KMD",
    config: "komodo",
    rpcport: 7771,
    testnetrpcport: 17771,
    type: "zcash",
    explorer: "https://explorer.kmd.zelcore.io/tx/",
    logolink: "static/logos/Komodo.svg",
    node: "explorer.kmd.zelcore.io",
    fee: 0.00001,
    feepolicy: {
      economy: 1,
      normal: 5,
      fast: 10,
    },
    color: "#316565",
    border: "#e6e6e6",
  },
  zcoin: {
    coin: "zcoin",
    name: "Zcoin",
    pubKeyHash: "52",
    normalAddress: "a",
    scriptAddress: "3",
    normalAddressB: "Z",
    scriptAddressB: "4",
    wif: "d2",
    addresses: [],
    fiatRates: [],
    fiatRate: 0,
    api: "https://explorer.zcoin.zelcore.io/api/",
    pathunix: "zcoin",
    path: "Zcoin", // should be zcoin as thats the path in win and mac. but case insensitivte. TODO name: Zcoin
    unit: "XZC",
    config: "zcoin",
    rpcport: 8888,
    testnetrpcport: 18888,
    type: "btc", // TODO new category 1.0.11
    explorer: "https://explorer.zcoin.zelcore.io/tx/",
    logolink: "static/logos/Zcoin.svg",
    node: "explorer.zcoin.zelcore.io",
    fee: 0.00001,
    feepolicy: {
      economy: 1,
      normal: 5,
      fast: 10,
    },
    color: "#3fad54",
    border: "#e6e6e6",
  },
  usdt: {
    coin: "usdt",
    name: "Tether",
    pubKeyHash: "00", // livenet is 00, testnet is 6F
    normalAddress: "1",
    scriptAddress: "3",
    normalAddressB: "1",
    scriptAddressB: "3",
    wif: "80", // livenet is 80, testnet is EF
    addresses: [],
    fiatRates: [],
    fiatRate: 0,
    api: "https://api.omniexplorer.info",
    pathunix: "usdt",
    path: "Tether",
    unit: "USDT",
    config: "usdt", // not needed
    rpcport: 8332, // not needed
    type: "omni",
    explorer: "https://omniexplorer.info/tx/",
    logolink: "static/logos/Tether.svg",
    node: "omniexplorer.info", // not needed
    fee: 0.0000226,
    feepolicy: {
      economy: 7,
      normal: 15,
      fast: 30,
    },
    color: "#26a17a",
    border: "#e6e6e6",
  },
  zero: {
    coin: "zero",
    name: "Zero",
    pubKeyHash: "1cb8",
    normalAddress: "t1",
    scriptAddress: "t3",
    normalAddressB: "t1",
    scriptAddressB: "t3",
    wif: "80",
    addresses: [],
    fiatRates: [],
    fiatRate: 0,
    api: "https://explorer.zer.zelcore.io/api/",
    pathunix: "zero",
    path: "Zero",
    unit: "ZER",
    config: "zero",
    rpcport: 23811,
    testnetrpcport: 23812,
    type: "zcash",
    explorer: "https://explorer.zer.zelcore.io/tx/",
    logolink: "static/logos/Zero.svg",
    node: "explorer.zer.zelcore.io",
    fee: 0.00002260,
    feepolicy: {
      economy: 1,
      normal: 5,
      fast: 10,
    },
    color: "#000000",
    border: "#e6e6e6",
  },
  bitcoincash: {
    coin: "bitcoincash",
    name: "Bitcoin Cash",
    pubKeyHash: "00", // livenet is 00, testnet is 6F
    normalAddress: "1",
    scriptAddress: "3",
    normalAddressB: "q", // translate bitcoincash:q...
    scriptAddressB: "p", // translate bitcoincash:p...
    wif: "80", // livenet is 80, testnet is EF
    addresses: [],
    fiatRates: [],
    fiatRate: 0,
    api: "https://blockdozer.com/api/",
    pathunix: "bitcoincash",
    path: "Bitcoin Cash", // this is name, no support for bitcoincash fullnode, path is bitcoin
    unit: "BCH",
    config: "bitcoin",
    rpcport: 8332,
    testnetrpcport: 18332,
    type: "btc",
    explorer: "https://blockdozer.com/tx/", // "https://testnet.blockexplorer.com/tx/",
    logolink: "static/logos/BitcoinCash.svg",
    node: "blockdozer.com", // "testnet.blockexplorer.com",
    fee: 0.0000226,
    feepolicy: {
      economy: 7,
      normal: 15,
      fast: 30,
    },
    color: "#4cca47",
    border: "#e6e6e6",
  },
  arcblock: {
    coin: "arcblock",
    name: "ArcBlock",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xb98d4c97425d9908e66e53a6fdf673acca0be986&address=",
    pathunix: "arcblock",
    path: "ArcBlock", // check
    unit: "ABT",
    config: "arcblock", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Arcblock.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0xb98d4c97425d9908e66e53a6fdf673acca0be986",
    color: "#54f5f4",
    border: "#e6e6e6",
    decimals: 18,
  },
  adex: {
    coin: "adex",
    name: "AdEx",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x4470bb87d77b963a013db939be332f927f2b992e&address=",
    pathunix: "adex",
    path: "AdEx", // check
    unit: "ADX",
    config: "adex", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Adex.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x4470bb87d77b963a013db939be332f927f2b992e",
    color: "#1b75bc",
    border: "#e6e6e6",
    decimals: 4,
  },
  aeternity: {
    coin: "aeternity",
    name: "Aeternity",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x5ca9a71b1d01849c0a95490cc00559717fcf0d1d&address=",
    pathunix: "aeternity",
    path: "Aeternity", // check
    unit: "AE",
    config: "aeternity", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Aeternity.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x5ca9a71b1d01849c0a95490cc00559717fcf0d1d",
    color: "#de3f6b",
    border: "#e6e6e6",
    decimals: 18,
  },
  /* aion: {
    coin: "aion",
    name: "Aion",
    pubKeyHash: "30", //todo not in eth
    wif: "80", //not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x4CEdA7906a5Ed2179785Cd3A40A69ee8bc99C466&address=",
    pathunix: "aion",
    path: "Aion", //check
    unit: "AION",
    config: "aion", //not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Aion.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, //gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x4CEdA7906a5Ed2179785Cd3A40A69ee8bc99C466",
    color: "#4221cc",
    border: "#e6e6e6",
    decimals: 8
  }, */
  airswap: {
    coin: "airswap",
    name: "AirSwap",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x27054b13b1b798b345b591a4d22e6562d47ea75a&address=",
    pathunix: "airswap",
    path: "AirSwap", // check
    unit: "AST",
    config: "airswap", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Airswap.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x27054b13b1b798b345b591a4d22e6562d47ea75a",
    color: "#00a3ff",
    border: "#e6e6e6",
    decimals: 4,
  },
  bigbom: {
    coin: "bigbom",
    name: "Bigbom",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x84f7c44b6fed1080f647e354d552595be2cc602f&address=",
    bigbom: "bigbom",
    path: "Bigbom", // check
    unit: "BBO",
    config: "bigbom", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Bigbom.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x84f7c44b6fed1080f647e354d552595be2cc602f",
    color: "#4dae4a",
    border: "#e6e6e6",
    decimals: 18,
  },
  appcoins: {
    coin: "appcoins",
    name: "AppCoins",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x1a7a8bd9106f2b8d977e08582dc7d24c723ab0db&address=",
    pathunix: "appcoins",
    path: "AppCoins", // check
    unit: "APPC",
    config: "appcoins", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Appcoins.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x1a7a8bd9106f2b8d977e08582dc7d24c723ab0db",
    color: "#fe6b79",
    border: "#e6e6e6",
    decimals: 18,
  },
  bluzelle: {
    coin: "bluzelle",
    name: "Bluzelle",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x5732046a883704404f284ce41ffadd5b007fd668&address=",
    pathunix: "bluzelle",
    path: "Bluzelle", // check
    unit: "BLZ",
    config: "bluzelle", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Bluzelle.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x5732046a883704404f284ce41ffadd5b007fd668",
    color: "#18578c",
    border: "#e6e6e6",
    decimals: 18,
  },
  bancor: {
    coin: "bancor",
    name: "Bancor",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c&address=",
    pathunix: "bancor",
    path: "Bancor", // check
    unit: "BNT",
    config: "bancor", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Bancor.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c",
    color: "#000d2b",
    border: "#e6e6e6",
    decimals: 18,
  },
  coinfi: {
    coin: "coinfi",
    name: "CoinFi",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x3136ef851592acf49ca4c825131e364170fa32b3&address=",
    pathunix: "coinfi",
    path: "CoinFi", // check
    unit: "COFI",
    config: "coinfi", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Coinfi.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x3136ef851592acf49ca4c825131e364170fa32b3",
    color: "#23adf0",
    border: "#e6e6e6",
    decimals: 18,
  },
  dai: {
    coin: "dai",
    name: "Dai",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359&address=",
    pathunix: "dai",
    path: "Dai", // check
    unit: "DAI",
    config: "dai", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Dai.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359",
    color: "#ffce45",
    border: "#e6e6e6",
    decimals: 18,
  },
  digixgoldtoken: {
    coin: "digixgoldtoken",
    name: "Digix Gold",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x4f3afec4e5a3f2a6a1a411def7d7dfe50ee057bf&address=",
    pathunix: "digixgoldtoken",
    path: "Digix Gold", // check
    unit: "DGX",
    config: "digixgoldtoken", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/DGX.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x4f3afec4e5a3f2a6a1a411def7d7dfe50ee057bf",
    color: "#c09f57", // needs logo
    border: "#e6e6e6",
    decimals: 9,
  },
  electrify: {
    coin: "electrify",
    name: "Electrify",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xd49ff13661451313ca1553fd6954bd1d9b6e02b9&address=",
    pathunix: "electrify",
    path: "Electrify", // check
    unit: "ELEC",
    config: "electrify", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Electrify.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0xd49ff13661451313ca1553fd6954bd1d9b6e02b9",
    color: "#f90", // needs logo
    border: "#e6e6e6",
    decimals: 18,
  },
  aelf: {
    coin: "aelf",
    name: "Aelf",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xbf2179859fc6D5BEE9Bf9158632Dc51678a4100e&address=",
    pathunix: "aelf",
    path: "Aelf", // check
    unit: "ELF",
    config: "aelf", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Aelf.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0xbf2179859fc6D5BEE9Bf9158632Dc51678a4100e",
    color: "#2b60bf",
    border: "#e6e6e6",
    decimals: 18,
  },
  enjincoin: {
    coin: "enjincoin",
    name: "EnjinCoin",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c&address=",
    pathunix: "enjincoin",
    path: "EnjinCoin", // check
    unit: "ENJ",
    config: "enjincoin", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Enjincoin.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c",
    color: "#63c0e3", // needs logo
    border: "#e6e6e6",
    decimals: 18,
  },
  storj: {
    coin: "storj",
    name: "Storj",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xb64ef51c888972c908cfacf59b47c1afbc0ab8ac&address=",
    pathunix: "storj",
    path: "Storj", // check
    unit: "STORJ",
    config: "storj", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Storj.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0xb64ef51c888972c908cfacf59b47c1afbc0ab8ac",
    color: "#2683ff",
    border: "#e6e6e6",
    decimals: 8,
  },
  iost: {
    coin: "iost",
    name: "IOST",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xfa1a856cfa3409cfa145fa4e20eb270df3eb21ab&address=",
    pathunix: "iost",
    path: "IOST", // check
    unit: "IOST",
    config: "iost", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Iost.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0xfa1a856cfa3409cfa145fa4e20eb270df3eb21ab",
    color: "#000000",
    border: "#e6e6e6",
    decimals: 18,
  },
  dent: {
    coin: "dent",
    name: "DENT",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x3597bfd533a99c9aa083587b074434e61eb0a258&address=",
    pathunix: "dent",
    path: "DENT", // check
    unit: "DENT",
    config: "dent", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Dent.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x3597bfd533a99c9aa083587b074434e61eb0a258",
    color: "#fa2922",
    border: "#e6e6e6",
    decimals: 8,
  },
  ethlend: {
    coin: "ethlend",
    name: "ETHLend",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x80fB784B7eD66730e8b1DBd9820aFD29931aab03&address=",
    pathunix: "ethlend",
    path: "ETHLend", // check
    unit: "LEND",
    config: "ethlend", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Ethlend.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x80fB784B7eD66730e8b1DBd9820aFD29931aab03",
    color: "#00acc7",
    border: "#e6e6e6",
    decimals: 18,
  },
  chainlink: {
    coin: "chainlink",
    name: "ChainLink",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x514910771af9ca656af840dff83e8264ecf986ca&address=",
    pathunix: "chainlink",
    path: "ChainLink", // check
    unit: "LINK",
    config: "chainlink", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Chainlink.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x514910771af9ca656af840dff83e8264ecf986ca",
    color: "#3effff", // needs logo
    border: "#e6e6e6",
    decimals: 18,
  },
  decentraland: {
    coin: "decentraland",
    name: "Decentraland",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x0f5d2fb29fb7d3cfee444a200298f468908cc942&address=",
    pathunix: "decentraland",
    path: "Decentraland", // check
    unit: "MANA",
    config: "decentraland", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Decentraland.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x0f5d2fb29fb7d3cfee444a200298f468908cc942",
    color: "#bfb5af",
    border: "#e6e6e6",
    decimals: 18,
  },
  loopring: {
    coin: "loopring",
    name: "Loopring",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xEF68e7C694F40c8202821eDF525dE3782458639f&address=",
    pathunix: "loopring",
    path: "Loopring", // check
    unit: "LRC",
    config: "loopring", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Loopring.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0xEF68e7C694F40c8202821eDF525dE3782458639f",
    color: "#1c60ff", // needs logo
    border: "#e6e6e6",
    decimals: 18,
  },
  qash: {
    coin: "qash",
    name: "QASH",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x618e75ac90b12c6049ba3b27f5d5f8651b0037f6&address=",
    pathunix: "qash",
    path: "QASH", // check
    unit: "QASH",
    config: "qash", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/QASH.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x618e75ac90b12c6049ba3b27f5d5f8651b0037f6",
    color: "#1348e8", // needs logo
    border: "#e6e6e6",
    decimals: 6,
  },
  iconomi: {
    coin: "iconomi",
    name: "Iconomi",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x888666CA69E0f178DED6D75b5726Cee99A87D698&address=",
    pathunix: "iconomi",
    path: "Iconomi", // check
    unit: "ICN",
    config: "iconomi", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Iconomi.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x888666CA69E0f178DED6D75b5726Cee99A87D698",
    color: "#466496", // needs logo
    border: "#e6e6e6",
    decimals: 18,
  },
  mco: {
    coin: "mco",
    name: "MCO",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xb63b606ac810a52cca15e44bb630fd42d8d1d83d&address=",
    pathunix: "mco",
    path: "MCO", // check
    unit: "MCO",
    config: "mco", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Monaco.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0xb63b606ac810a52cca15e44bb630fd42d8d1d83d",
    color: "#002d72",
    border: "#e6e6e6",
    decimals: 8,
  },
  poet: {
    coin: "poet",
    name: "po.et",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x0e0989b1f9b8a38983c2ba8053269ca62ec9b195&address=",
    pathunix: "poe",
    path: "po.et", // check
    unit: "POE",
    config: "poet", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Poet.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x0e0989b1f9b8a38983c2ba8053269ca62ec9b195",
    color: "#43b880",
    border: "#e6e6e6",
    decimals: 8,
  },
  polymath: {
    coin: "polymath",
    name: "Polymath",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x9992ec3cf6a55b00978cddf2b27bc6882d88d1ec&address=",
    pathunix: "polymath",
    path: "Polymath", // check
    unit: "POLY",
    config: "polymath", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Polymath.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x9992ec3cf6a55b00978cddf2b27bc6882d88d1ec",
    color: "#252e6a",
    border: "#e6e6e6",
    decimals: 18,
  },
  powerledger: {
    coin: "powerledger",
    name: "Power Ledger",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x595832f8fc6bf59c85c527fec3740a1b7a361269&address=",
    pathunix: "powerledger",
    path: "Power Ledger", // check
    unit: "POWR",
    config: "powerledger", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Powerledger.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x595832f8fc6bf59c85c527fec3740a1b7a361269",
    color: "#00cdd7",
    border: "#e6e6e6",
    decimals: 6,
  },
  ripiocredit: {
    coin: "ripiocredit",
    name: "Ripio Credit",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xf970b8e36e23f7fc3fd752eea86f8be8d83375a6&address=",
    pathunix: "ripiocredit",
    path: "Ripio Credit", // check
    unit: "RCN",
    config: "ripiocredit", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Ripio.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0xf970b8e36e23f7fc3fd752eea86f8be8d83375a6",
    color: "#4155ff", // needs logo
    border: "#e6e6e6",
    decimals: 18,
  },
  raidentoken: {
    coin: "raidentoken",
    name: "Raiden Token",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x255aa6df07540cb5d3d297f0d0d4d84cb52bc8e6&address=",
    pathunix: "raidentoken",
    path: "Raiden Token", // check
    unit: "RDN",
    config: "raidentoken", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Raiden.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x255aa6df07540cb5d3d297f0d0d4d84cb52bc8e6",
    color: "#000000",
    border: "#e6e6e6",
    decimals: 18,
  },
  requestnetwork: {
    coin: "requestnetwork",
    name: "Request Network",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x8f8221afbb33998d8584a2b05749ba73c37a938a&address=",
    pathunix: "requestnetwork",
    path: "Request Network", // check
    unit: "REQ",
    config: "requestnetwork", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Request.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x8f8221afbb33998d8584a2b05749ba73c37a938a",
    color: "#6cfdcc",
    border: "#e6e6e6",
    decimals: 18,
  },
  status: {
    coin: "status",
    name: "Status",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x744d70fdbe2ba4cf95131626614a1763df805b9e&address=",
    pathunix: "status",
    path: "Status", // check
    unit: "SNT",
    config: "status", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Status.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 240000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x744d70fdbe2ba4cf95131626614a1763df805b9e",
    color: "#505db7",
    border: "#e6e6e6",
    decimals: 18,
  },
  salt: {
    coin: "salt",
    name: "SALT",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x4156D3342D5c385a87D264F90653733592000581&address=",
    pathunix: "salt",
    path: "SALT", // check
    unit: "SALT",
    config: "salt", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Salt.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x4156D3342D5c385a87D264F90653733592000581",
    color: "#40b2b5",
    border: "#e6e6e6",
    decimals: 8,
  },
  storm: {
    coin: "storm",
    name: "STORM",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xd0a4b8946cb52f0661273bfbc6fd0e0c75fc6433&address=",
    pathunix: "storm",
    path: "STORM", // check
    unit: "STORM",
    config: "storm", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Storm.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0xd0a4b8946cb52f0661273bfbc6fd0e0c75fc6433",
    color: "#6b38df",
    border: "#e6e6e6",
    decimals: 18,
  },
  eidoo: {
    coin: "eidoo",
    name: "Eidoo",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xced4e93198734ddaff8492d525bd258d49eb388e&address=",
    pathunix: "eidoo",
    path: "Eidoo", // check
    unit: "EDO",
    config: "eidoo", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Eidoo.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0xced4e93198734ddaff8492d525bd258d49eb388e",
    color: "#234858", // needs logo
    border: "#e6e6e6",
    decimals: 18,
  },
  trueusd: {
    coin: "trueusd",
    name: "TrueUSD",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x0000000000085d4780B73119b644AE5ecd22b376&address=",
    pathunix: "trueusd",
    path: "TrueUSD", // check
    unit: "TUSD",
    config: "trueusd", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Trueusd.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x0000000000085d4780B73119b644AE5ecd22b376",
    color: "#56cabd",
    border: "#e6e6e6",
    decimals: 18,
  },
  dentacoin: {
    coin: "dentacoin",
    name: "Dentacoin",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x08d32b0da63e2C3bcF8019c9c5d849d7a9d791e6&address=",
    pathunix: "dentacoin",
    path: "Dentacoin", // check
    unit: "DCN",
    config: "dentacoin", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Dentacoin.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x08d32b0da63e2C3bcF8019c9c5d849d7a9d791e6",
    color: "#041e42", // needs logo
    border: "#e6e6e6",
    decimals: 0,
  },
  wax: {
    coin: "wax",
    name: "WAX",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x39Bb259F66E1C59d5ABEF88375979b4D20D98022&address=",
    pathunix: "wax",
    path: "WAX", // check
    unit: "WAX",
    config: "wax", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/WAX.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x39Bb259F66E1C59d5ABEF88375979b4D20D98022",
    color: "#f78e1e", // needs logo
    border: "#e6e6e6",
    decimals: 8,
  },
  wings: {
    coin: "wings",
    name: "Wings",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x667088b212ce3d06a1b553a7221E1fD19000d9aF&address=",
    pathunix: "wings",
    path: "Wings", // check
    unit: "WINGS",
    config: "wings", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Wings.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x667088b212ce3d06a1b553a7221E1fD19000d9aF",
    color: "#46f1ff",
    border: "#e6e6e6",
    decimals: 18,
  },
  data: {
    coin: "data",
    name: "Data",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x69b148395ce0015c13e36bffbad63f49ef874e03&address=",
    pathunix: "data",
    path: "Data", // check
    unit: "DTA",
    config: "data", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/DTA.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x69b148395ce0015c13e36bffbad63f49ef874e03",
    color: "#70d463", // needs logo
    border: "#e6e6e6",
    decimals: 18,
  },
  funfair: {
    coin: "funfair",
    name: "FunFair",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x419d0d8bdd9af5e606ae2232ed285aff190e711b&address=",
    pathunix: "funfair",
    path: "FunFair", // check
    unit: "FUN",
    config: "funfair", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Funfair.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x419d0d8bdd9af5e606ae2232ed285aff190e711b",
    color: "#e42c84",
    border: "#e6e6e6",
    decimals: 8,
  },
  kin: {
    coin: "kin",
    name: "KIN",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x818fc6c2ec5986bc6e2cbf00939d90556ab12ce5&address=",
    pathunix: "kin",
    path: "KIN", // check
    unit: "KIN",
    config: "kin", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Kin.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x818fc6c2ec5986bc6e2cbf00939d90556ab12ce5",
    color: "#003ec5",
    border: "#e6e6e6",
    decimals: 18,
  },
  zclassic: {
    coin: "zclassic",
    name: "Zclassic",
    pubKeyHash: "1cb8",
    normalAddress: "t1",
    scriptAddress: "t3",
    normalAddressB: "t1",
    scriptAddressB: "t3",
    wif: "80",
    addresses: [],
    fiatRates: [],
    fiatRate: 0,
    api: "https://explorer.zcl.zelcore.io/api/",
    pathunix: "zclassic",
    path: "Zclassic", // check
    unit: "ZCL",
    config: "zclassic", // check
    rpcport: 8023,
    testnetrpcport: 18023,
    type: "zcash",
    explorer: "https://explorer.zcl.zelcore.io/tx/",
    logolink: "static/logos/Zclassic.svg",
    node: "explorer.zcl.zelcore.io",
    fee: 0.00001,
    feepolicy: {
      economy: 1,
      normal: 5,
      fast: 10,
    },
    color: "#c86f35",
    border: "#e6e6e6",
  },
  sirin: {
    coin: "sirin",
    name: "Sirin",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x68d57c9a1c35f63e2c83ee8e49a64e9d70528d25&address=",
    pathunix: "sirin",
    path: "Sirin", // check
    unit: "SRN",
    config: "sirin", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Sirin.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x68d57c9a1c35f63e2c83ee8e49a64e9d70528d25",
    color: "#070f12",
    border: "#e6e6e6",
    decimals: 18,
  },
  /*  huobi: {
      coin: "huobi",
      name: "Huobi",
      pubKeyHash: "30", //todo not in eth
      wif: "80", //not in eth
    addresses: [],
      fiatRate: 0,
      fiatRates: [],
      api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x6f259637dcd74c767781e37bc6133cd6a68aa161&address=",
      pathunix: "huobi",
      path: "Huobi Token", //check
      unit: "HT",
      config: "huobi", //not in eth
      rpcport: 8766, // 8545 imo, not used
      type: "eth",
      explorer: "https://etherscan.io/tx/",
      logolink: "static/logos/Huobi.svg", //lol
      node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
      fee: 63000, //gas limit TODO
      feepolicy: {
        economy: 10,
        normal: 15,
        fast: 20
      },
      contractAddress: "0x6f259637dcd74c767781e37bc6133cd6a68aa161",
      color: "#070f12", //lol
      border: "#e6e6e6",
      decimals: 18
    }, */
  aurora: {
    coin: "aurora",
    name: "Aurora",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x9ab165d795019b6d8b3e971dda91071421305e5a&address=",
    pathunix: "aurora",
    path: "Aurora", // check
    unit: "AOA",
    config: "aurora", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Aurora.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x9ab165d795019b6d8b3e971dda91071421305e5a",
    color: "#6ee4e5", // needs logo
    border: "#e6e6e6",
    decimals: 18,
  },
  theta: {
    coin: "theta",
    name: "Theta",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x3883f5e181fccaF8410FA61e12b59BAd963fb645&address=",
    pathunix: "theta",
    path: "Theta", // check
    unit: "THETA",
    config: "theta", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Theta.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x3883f5e181fccaF8410FA61e12b59BAd963fb645",
    color: "#29b3eb", // needs logo
    border: "#e6e6e6",
    decimals: 18,
  },
  dash: { // TODO we should move to coins -> type -> coin scheme?
    coin: "dash",
    name: "Dash",
    pubKeyHash: "4C",
    wif: "CC",
    normalAddress: "X",
    normalAddressB: "X",
    scriptAddress: "7",
    scriptAddressB: "7",
    addresses: [],
    fiatRates: [],
    fiatRate: 0,
    api: "https://explorer.dash.zelcore.io/api/",
    pathunix: "dashcore",
    path: "DashCore",
    unit: "DASH",
    config: "dash",
    rpcport: 9998,
    testnetrpcport: 19998,
    type: "btc",
    explorer: "https://explorer.dash.zelcore.io/tx/",
    logolink: "static/logos/Dash.svg",
    node: "explorer.dash.zelcore.io",
    fee: 0.00001,
    feepolicy: {
      economy: 3,
      normal: 5,
      fast: 10,
    },
    color: "#008de4",
    border: "#e6e6e6",
  },
  monero: {
    coin: "monero",
    name: "Monero",
    pubKeyHash: "4C", // not used
    wif: "CC", // not used
    normalAddress: "4",
    normalAddressB: "X", // not used
    scriptAddress: "7", // not used
    scriptAddressB: "7", // not used
    moneroConfig: {
      coinUnitPlaces: 12,
      coinSymbol: "XMR",
      coinName: "Monero",
      coinUriPrefix: "monero:",
      addressPrefix: 18,
    },
    addresses: [],
    fiatRates: [],
    fiatRate: 0,
    start_height: 0, // block height since the address is in our database
    api: "https://backend.xmr.zelcore.io",
    pathunix: "monero",
    path: "Monero",
    unit: "XMR",
    config: "monero",
    rpcport: 9998, // not used
    testnetrpcport: 19998, // not used
    type: "cryptonight",
    explorer: "https://explorer.xmr.zelcore.io/tx/",
    logolink: "static/logos/Monero.svg",
    node: "explorer.xmr.zelcore.io",
    fee: 0.00001, // nope fee is not known
    feepolicy: {
      economy: 1,
      normal: 2,
      fast: 3,
    },
    color: "#ff6600",
    border: "#e6e6e6",
  },
  usdc: {
    coin: "usdc",
    name: "USD Coin",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&address=",
    pathunix: "usdc",
    path: "usdc", // check
    unit: "USDC",
    config: "usdc", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Usdc.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    color: "#2775CA",
    border: "#e6e6e6",
    decimals: 6,
  },
  gusd: {
    coin: "gusd",
    name: "Gemini Dollar",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd&address=",
    pathunix: "gusd",
    path: "gusd", // check
    unit: "GUSD",
    config: "gusd", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Gusd.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd",
    color: "#20bcd4",
    border: "#e6e6e6",
    decimals: 2,
  },
  pax: {
    coin: "pax",
    name: "Paxos Standard",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x8e870d67f660d95d5be530380d0ec0bd388289e1&address=",
    pathunix: "pax",
    path: "pax", // check
    unit: "PAX",
    config: "pax", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Pax.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x8e870d67f660d95d5be530380d0ec0bd388289e1",
    color: "#00522C",
    border: "#e6e6e6",
    decimals: 18,
  },
  etc: {
    coin: "etc",
    name: "Ethereum Classic",
    pubKeyHash: "30", // not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRates: [],
    fiatRate: 0,
    api: "https://blockscout.com/etc/mainnet/api/?module=account&action=", // + addr + /transactions
    pathunix: "ethereumclassic",
    path: "Ethereum Classic", // check
    unit: "ETC",
    config: "ethereumclassic", // check
    rpcport: 8766, // 8545 imo, not used
    type: "etc",
    explorer: "https://etherhub.io/tx/",
    logolink: "static/logos/ETC.svg",
    node: "https://etc.guarda.co",
    fee_url: "https://www.etherchain.org/api/gasPriceOracle",
    fee: 35000, // gas limit
    feepolicy: {
      economy: 0.1,
      normal: 0.3,
      fast: 1,
    },
    color: "#34fa99",
    border: "#e6e6e6",
    contractAddress: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    decimals: 18,
  },
  /* suqa: { //TODO we should move to coins -> type -> coin scheme?
    coin: "suqa",
    name: "Suqa",
    pubKeyHash: "3f",
    wif: "bf",
    electrum: {
      bech32: "bc", //not in suqa
      bip32: {
        private: 76066276,
        public: 76067358
      },
      messagePrefix: "Suqa Signed Message: \n", // not defined in suqa
      pubKeyHash: 63,
      scriptHash: 5,
      wif: 191
    },
    normalAddress: "S",
    normalAddressB: "S",
    scriptAddress: "3",
    scriptAddressB: "3",
    addresses: [],
    fiatRates: [],
    fiatRate: 0,
    api: "explorer.suqa.zelcore.io", //68.183.116.94
    proxy: "https://proxy.genx.zelcore.io/?server=127.0.0.1?call=",
    pathunix: "SUQA",
    path: "SUQA",
    unit: "SUQA",
    config: "SUQA",
    rpcport: 20971,
    testnetrpcport: 20981,
    type: "electrum",
    explorer: "https://explorer.suqa.zelcore.io/tx/",
    logolink: "static/logos/SUQA.svg",
    node: "explorer.suqa.zelcore.io",
    fee: 0.00001,
    feepolicy: {
      economy: 5,
      normal: 10,
      fast: 20
    },
    color: "#e76b38",
    border: "#e6e6e6"
  }, */
  coni: {
    coin: "coni",
    name: "Coni",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x2c949199cff14aeaf1b33d64db01f48fb57f592f&address=",
    pathunix: "coni",
    path: "coni", // check
    unit: "CONI",
    config: "coni", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/CoinBene.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x2c949199cff14aeaf1b33d64db01f48fb57f592f",
    color: "#465FF0",
    border: "#e6e6e6",
    decimals: 8,
  },
  tok: {
    coin: "tok",
    name: "Tokok",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x9a49f02e128a8e989b443a8f94843c0918bf45e7&address=",
    pathunix: "tok",
    path: "tok", // check
    unit: "TOK",
    config: "tok", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/TOKOK.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x9a49f02e128a8e989b443a8f94843c0918bf45e7",
    color: "#f5692c",
    border: "#e6e6e6",
    decimals: 8,
  },
  genesis: { // TODO we should move to coins -> type -> coin scheme?
    coin: "genesis",
    name: "Genesis",
    pubKeyHash: "1C",
    wif: "30",
    electrum: "genesis",
    normalAddress: "C",
    normalAddressB: "C",
    scriptAddress: "S",
    scriptAddressB: "S",
    addresses: [],
    fiatRates: [],
    fiatRate: 0,
    api: "explorer.genx.zelcore.io", // 68.183.116.94
    proxy: "https://proxy.genx.zelcore.io/?server=127.0.0.1?call=",
    pathunix: "genesis",
    path: "Genesis",
    unit: "GENX",
    config: "genesis",
    rpcport: 7234,
    testnetrpcport: 17234,
    type: "electrum",
    explorer: "https://explorer.genx.zelcore.io/tx/",
    logolink: "static/logos/Genesis.svg",
    node: "explorer.genx.zelcore.io",
    fee: 0.00001,
    feepolicy: {
      economy: 5,
      normal: 10,
      fast: 20,
    },
    color: "#1ea1ef",
    border: "#e6e6e6",
  },
  por: {
    coin: "por",
    name: "Proof Of Review",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x08c507046e12cd1538741d067d28411f2b922062&address=",
    pathunix: "por",
    path: "por", // check
    unit: "POR",
    config: "por", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/POR.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x08c507046e12cd1538741d067d28411f2b922062",
    color: "#101010",
    border: "#e6e6e6",
    decimals: 18,
  },
  bzedge: {
    coin: "bzedge",
    name: "BZEdge",
    pubKeyHash: "1cb8",
    normalAddress: "t1",
    scriptAddress: "t3",
    normalAddressB: "t1",
    scriptAddressB: "t3",
    wif: "80",
    addresses: [],
    fiatRates: [],
    fiatRate: 0,
    api: "https://explorer.bze.zelcore.io/api/",
    pathunix: "bzedge",
    path: "BZEdge", // check
    unit: "BZE",
    config: "bzedge", // check
    rpcport: 1980,
    testnetrpcport: 11980,
    type: "zcash",
    explorer: "https://explorer.bze.zelcore.io/tx/",
    logolink: "static/logos/BZEdge.svg",
    node: "explorer.bze.zelcore.io",
    fee: 0.00001,
    feepolicy: {
      economy: 1,
      normal: 5,
      fast: 10,
    },
    color: "#00c3e2",
    border: "#e6e6e6",
  },
  bithereum: {
    coin: "bithereum",
    name: "Bithereum",
    pubKeyHash: "19", // hex
    wif: "80", // hex
    electrum: "bithereum",
    normalAddress: "B",
    normalAddressB: "B",
    scriptAddress: "H",
    scriptAddressB: "H",
    addresses: [],
    fiatRates: [],
    fiatRate: 0,
    port: 50002,
    contype: "tls",
    api: "explorer.bth.zelcore.io", // 68.183.116.94
    proxy: "https://proxy.bth.zelcore.io/?server=127.0.0.1?call=",
    pathunix: "bithereum",
    path: "Bithereum",
    unit: "BTH",
    config: "bithereum",
    rpcport: 18554,
    testnetrpcport: 19554,
    type: "electrum",
    explorer: "https://explorer.bth.zelcore.io/tx/",
    logolink: "static/logos/Bithereum.svg",
    node: "explorer.bth.zelcore.io",
    fee: 0.00001,
    feepolicy: {
      economy: 5,
      normal: 10,
      fast: 20,
    },
    color: "#fafb48",
    border: "#e6e6e6",
  },
  /* bitcoinsv: {
    coin: "bitcoinsv",
    name: "Bitcoin SV",
    pubKeyHash: "00", //livenet is 00, testnet is 6F
    normalAddress: "1",
    scriptAddress: "3",
    normalAddressB: "q", //translate bitcoincash:q...
    scriptAddressB: "p", //translate bitcoincash:p...
    wif: "80", //livenet is 80, testnet is EF
    electrum: {
      bech32: "bitcoincash",
      bip32: {
          private: '0488ADE4',
          public: '0488B21E'
      },
      messagePrefix: "Bitcoin SV Signed Message: \n",
      pubKeyHash: 0,
      scriptHash: 5,
      wif: 128
    },
    addresses: [],
    fiatRates: [],
    fiatRate: 0,
    api: "https://bchsvexplorer.com/api/",
    proxy: "https://proxy.genx.zelcore.io/?server=sv.electrumx.cash?call=",
    pathunix: "bitcoinsv",
    path: "Bitcoin SV", //this is name, no support for bitcoinsv fullnode, path is bitcoin
    unit: "BSV",
    config: "bitcoin",
    rpcport: 8332,
    testnetrpcport: 18332,
    type: "electrum",
    explorer: "https://bchsvexplorer.com/tx/", //"https://testnet.blockexplorer.com/tx/",
    logolink: "static/logos/BitcoinSV.svg",
    node: "bchsvexplorer.com", //"testnet.blockexplorer.com",
    fee: 0.0000226,
    feepolicy: {
      economy: 7,
      normal: 15,
      fast: 30
    },
    color: "#EAB300",
    border: "#e6e6e6"
  }, */
  adt: {
    coin: "adt",
    name: "AdToken",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xd0d6d6c5fe4a677d343cc433536bb717bae167dd&address=",
    pathunix: "adt",
    path: "adt", // check
    unit: "ADT",
    config: "adt", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/adToken.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0xd0d6d6c5fe4a677d343cc433536bb717bae167dd",
    color: "#2350a4", // needs logo
    border: "#e6e6e6",
    decimals: 9,
  },
  mft: {
    coin: "mft",
    name: "Mainframe Token",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xdf2c7238198ad8b389666574f2d8bc411a4b7428&address=",
    pathunix: "mft",
    path: "mft", // check
    unit: "MFT",
    config: "mft", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Mainframe.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0xdf2c7238198ad8b389666574f2d8bc411a4b7428",
    color: "#da1157", // needs logo
    border: "#e6e6e6",
    decimals: 18,
  },
  atl: {
    coin: "atl",
    name: "ATLANT",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x78b7fada55a64dd895d8c8c35779dd8b67fa8a05&address=",
    pathunix: "atl",
    path: "atl", // check
    unit: "ATL",
    config: "atl", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Atlant.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x78b7fada55a64dd895d8c8c35779dd8b67fa8a05",
    color: "#004dff", // needs logo
    border: "#e6e6e6",
    decimals: 18,
  },
  ant: {
    coin: "ant",
    name: "Aragon",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x960b236A07cf122663c4303350609A66A7B288C0&address=",
    pathunix: "ant",
    path: "ant", // check
    unit: "ANT",
    config: "ant", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Aragon.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x960b236A07cf122663c4303350609A66A7B288C0",
    color: "#01c0e3", // needs logo
    border: "#e6e6e6",
    decimals: 18,
  },
  arn: {
    coin: "arn",
    name: "Aeron",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xBA5F11b16B155792Cf3B2E6880E8706859A8AEB6&address=",
    pathunix: "arn",
    path: "arn", // check
    unit: "ARN",
    config: "arn", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Aeron.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0xBA5F11b16B155792Cf3B2E6880E8706859A8AEB6",
    color: "#033152", // needs logo
    border: "#e6e6e6",
    decimals: 8,
  },
  brd: {
    coin: "brd",
    name: "Bread",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x558ec3152e2eb2174905cd19aea4e34a23de9ad6&address=",
    pathunix: "brd",
    path: "brd", // check
    unit: "BRD",
    config: "brd", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/BRD.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x558ec3152e2eb2174905cd19aea4e34a23de9ad6",
    color: "#302442", // needs logo
    border: "#e6e6e6",
    decimals: 18,
  },
  rep: {
    coin: "rep",
    name: "Augur",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x1985365e9f78359a9B6AD760e32412f4a445E862&address=",
    pathunix: "rep",
    path: "rep", // check
    unit: "REP",
    config: "rep", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Augur.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x1985365e9f78359a9B6AD760e32412f4a445E862",
    color: "#553580", // needs logo
    border: "#e6e6e6",
    decimals: 18,
  },
  qkc: {
    coin: "qkc",
    name: "QuarkChain Token",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xea26c4ac16d4a5a106820bc8aee85fd0b7b2b664&address=",
    pathunix: "qkc",
    path: "qkc", // check
    unit: "QKC",
    config: "qkc", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/QKC.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0xea26c4ac16d4a5a106820bc8aee85fd0b7b2b664",
    color: "#00cbff", // needs logo
    border: "#e6e6e6",
    decimals: 18,
  },
  loom: {
    coin: "loom",
    name: "LOOM",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xa4e8c3ec456107ea67d3075bf9e3df3a75823db0&address=",
    pathunix: "loom",
    path: "loom", // check
    unit: "LOOM",
    config: "loom", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/LOOM.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0xa4e8c3ec456107ea67d3075bf9e3df3a75823db0",
    color: "#5756e6", // needs logo
    border: "#e6e6e6",
    decimals: 18,
  },
  eurs: {
    coin: "eurs",
    name: "STASIS EURS",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xdb25f211ab05b1c97d595516f45794528a807ad8&address=",
    pathunix: "eurs",
    path: "eurs", // check
    unit: "EURS",
    config: "eurs", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/EURS.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0xdb25f211ab05b1c97d595516f45794528a807ad8",
    color: "#2468e4", // needs logo
    border: "#e6e6e6",
    decimals: 2,
  },
  commercium: {
    coin: "commercium",
    name: "Commercium",
    pubKeyHash: "1c",
    normalAddress: "C",
    scriptAddress: "M",
    normalAddressB: "C",
    scriptAddressB: "M",
    wif: "8c",
    addresses: [],
    fiatRates: [],
    fiatRate: 0,
    api: "https://explorer.cmm.zelcore.io/api/",
    pathunix: "commercium",
    path: "Commercium",
    unit: "CMM",
    config: "commercium",
    rpcport: 12020,
    testnetrpcport: 22020,
    type: "zcash",
    explorer: "https://explorer.cmm.zelcore.io/tx/",
    logolink: "static/logos/CMM.svg",
    node: "explorer.cmm.zelcore.io",
    fee: 0.00001,
    feepolicy: {
      economy: 3,
      normal: 5,
      fast: 10,
    },
    color: "#0097ff",
    border: "#e6e6e6",
  },
  groestlcoin: {
    coin: "groestlcoin",
    name: "Groestlcoin",
    pubKeyHash: "24",
    wif: "80",
    electrum: "groestlcoin",
    normalAddress: "F",
    normalAddressB: "g", // grs bech32 support
    scriptAddress: "3",
    scriptAddressB: "3",
    addresses: [],
    fiatRates: [],
    fiatRate: 0,
    api: "explorer.grs.zelcore.io",
    proxy: "https://proxy.grs.zelcore.io/?server=127.0.0.1?call=",
    pathunix: "groestlcoin",
    path: "Groestlcoin",
    unit: "GRS",
    config: "groestlcoin",
    rpcport: 1441,
    testnetrpcport: 17766,
    type: "electrum",
    explorer: "https://explorer.grs.zelcore.io/tx/",
    logolink: "static/logos/Groestlcoin.svg",
    node: "explorer.grs.zelcore.io",
    fee: 0.00001,
    feepolicy: {
      economy: 5,
      normal: 10,
      fast: 20,
    },
    color: "#0e98be",
    border: "#e6e6e6",
  },
  gunthy: {
    coin: "gunthy",
    name: "GUNTHY",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x3684b581db1f94b721ee0022624329feb16ab653&address=",
    pathunix: "gunthy",
    path: "gunthy", // check
    unit: "GUNTHY",
    config: "gunthy", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Gunthy.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", //"http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x3684b581db1f94b721ee0022624329feb16ab653",
    color: "#0081ab", // needs logo
    border: "#e6e6e6",
    decimals: 18,
  },
  metal: {
    coin: "metal",
    name: "Metal",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xF433089366899D83a9f26A773D59ec7eCF30355e&address=",
    pathunix: "metal",
    path: "metal", // check
    unit: "MTL",
    config: "metal", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/MTL.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0xF433089366899D83a9f26A773D59ec7eCF30355e",
    color: "#ff3667", // lumi colour
    border: "#e6e6e6",
    decimals: 8,
  },
  ethos: {
    coin: "ethos",
    name: "EthOS",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x5af2be193a6abca9c8817001f45744777db30756&address=",
    pathunix: "ethos",
    path: "ethos", // check
    unit: "ETHOS",
    config: "ethos", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/ETHOS.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x5af2be193a6abca9c8817001f45744777db30756",
    color: "#0fc", // lumi colour
    border: "#e6e6e6",
    decimals: 8,
  },
  singularitynet: {
    coin: "singularitynet",
    name: "SingularityNET",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x8eb24319393716668d768dcec29356ae9cffe285&address=",
    pathunix: "singularitynet",
    path: "singularitynet", // check
    unit: "AGI",
    config: "singularitynet", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/AGI.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x8eb24319393716668d768dcec29356ae9cffe285",
    color: "#5a2ff1", // lumi colour
    border: "#e6e6e6",
    decimals: 8,
  },
  ambrosus: {
    coin: "ambrosus",
    name: "Ambrosus",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x4dc3643dbc642b72c158e7f3d2ff232df61cb6ce&address=",
    pathunix: "ambrosus",
    path: "ambrosus", // check
    unit: "AMB",
    config: "ambrosus", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/AMB.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x4dc3643dbc642b72c158e7f3d2ff232df61cb6ce",
    color: "#8ae3ff", // lumi colour
    border: "#e6e6e6",
    decimals: 18,
  },
  blockmasoncreditprotocol: {
    coin: "blockmasoncreditprotocol",
    name: "BlockMason Credit Protocol",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x1c4481750daa5ff521a2a7490d9981ed46465dbd&address=",
    pathunix: "blockmasoncreditprotocol",
    path: "blockmasoncreditprotocol", // check
    unit: "BCPT",
    config: "blockmasoncreditprotocol", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/BCPT.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x1c4481750daa5ff521a2a7490d9981ed46465dbd",
    color: "#f90", // lumi colour
    border: "#e6e6e6",
    decimals: 18,
  },
  blox: {
    coin: "blox",
    name: "Blox",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x177d39ac676ed1c67a2b268ad7f1e58826e5b0af&address=",
    pathunix: "blox",
    path: "blox", // check
    unit: "CDT",
    config: "blox", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/CDT.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x177d39ac676ed1c67a2b268ad7f1e58826e5b0af",
    color: "#047fff", // lumi colour
    border: "#e6e6e6",
    decimals: 18,
  },
  celertoken: {
    coin: "celertoken",
    name: "CelerToken",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x4f9254c83eb525f9fcf346490bbb3ed28a81c667&address=",
    pathunix: "celertoken",
    path: "celertoken", // check
    unit: "CELR",
    config: "celertoken", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/CELR.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x4f9254c83eb525f9fcf346490bbb3ed28a81c667",
    color: "#000", // lumi colour
    border: "#e6e6e6",
    decimals: 18,
  },
  cindicator: {
    coin: "cindicator",
    name: "Cindicator",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xd4c435f5b09f855c3317c8524cb1f586e42795fa&address=",
    pathunix: "cindicator",
    path: "cindicator", // check
    unit: "CND",
    config: "cindicator", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/CND.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0xd4c435f5b09f855c3317c8524cb1f586e42795fa",
    color: "#0d0520", // lumi colour
    border: "#e6e6e6",
    decimals: 18,
  },
  streamrdatacoin: {
    coin: "streamrdatacoin",
    name: "Streamr DATAcoin",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x0cf0ee63788a0849fe5297f3407f701e122cc023&address=",
    pathunix: "streamrdatacoin",
    path: "streamrdatacoin", // check
    unit: "DATA",
    config: "streamrdatacoin", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/DATA.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x0cf0ee63788a0849fe5297f3407f701e122cc023",
    color: "#ff5c00", // lumi colour
    border: "#e6e6e6",
    decimals: 18,
  },
  /* digixdao: {
    coin: "digixdao",
    name: "Digix DAO",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xe0b7927c4af23765cb51314a0e0521a9645f0e2a&address=",
    pathunix: "digixdao",
    path: "digixdao", // check
    unit: "DGD",
    config: "digixdao", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/DGD.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0xe0b7927c4af23765cb51314a0e0521a9645f0e2a",
    color: "#c09f57", // lumi colour
    border: "#e6e6e6",
    decimals: 9,
  }, */
  agrello: {
    coin: "agrello",
    name: "Agrello",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x07e3c70653548B04f0A75970C1F81B4CBbFB606f&address=",
    pathunix: "agrello",
    path: "agrello", // check
    unit: "DLT",
    config: "agrello", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/DLT.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x07e3c70653548B04f0A75970C1F81B4CBbFB606f",
    color: "#4c82ed", // lumi colour
    border: "#e6e6e6",
    decimals: 18,
  },
  dock: {
    coin: "dock",
    name: "Dock",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xe5dada80aa6477e85d09747f2842f7993d0df71c&address=",
    pathunix: "dock",
    path: "dock", // check
    unit: "DOCK",
    config: "dock", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/DOCK.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0xe5dada80aa6477e85d09747f2842f7993d0df71c",
    color: "#2c2b3f", // lumi colour
    border: "#e6e6e6",
    decimals: 18,
  },
  everex: {
    coin: "everex",
    name: "Everex",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xf3db5fa2c66b7af3eb0c0b782510816cbe4813b8&address=",
    pathunix: "everex",
    path: "everex", // check
    unit: "EVX",
    config: "everex", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/EVX.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0xf3db5fa2c66b7af3eb0c0b782510816cbe4813b8",
    color: "#3f54b7", // lumi colour
    border: "#e6e6e6",
    decimals: 4,
  },
  /* fetch: {
    coin: "fetch",
    name: "Fetch",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x1d287cc25dad7ccaf76a26bc660c5f7c8e2a05bd&address=",
    pathunix: "fetch",
    path: "fetch", // check
    unit: "FET",
    config: "fetch", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/FET.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x1d287cc25dad7ccaf76a26bc660c5f7c8e2a05bd",
    color: "#025098", // lumi colour
    border: "#e6e6e6",
    decimals: 18,
  }, */
  gifto: {
    coin: "gifto",
    name: "Gifto",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xc5bbae50781be1669306b9e001eff57a2957b09d&address=",
    pathunix: "gifto",
    path: "gifto", // check
    unit: "GTO",
    config: "gifto", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/GTO.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0xc5bbae50781be1669306b9e001eff57a2957b09d",
    color: "#5f318f", // lumi colour
    border: "#e6e6e6",
    decimals: 5,
  },
  genesisvision: {
    coin: "genesisvision",
    name: "Genesis Vision",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x103c3a209da59d3e7c4a89307e66521e081cfdf0&address=",
    pathunix: "genesisvision",
    path: "genesisvision", // check
    unit: "GVT",
    config: "genesisvision", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/GVT.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x103c3a209da59d3e7c4a89307e66521e081cfdf0",
    color: "#16b9ad", // lumi colour
    border: "#e6e6e6",
    decimals: 18,
  },
  holotoken: {
    coin: "holotoken",
    name: "HoloToken",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x6c6ee5e31d828de241282b9606c8e98ea48526e2&address=",
    pathunix: "holotoken",
    path: "holotoken", // check
    unit: "HOT",
    config: "holotoken", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/HOT.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x6c6ee5e31d828de241282b9606c8e98ea48526e2",
    color: "#00a6ae", // lumi colour
    border: "#e6e6e6",
    decimals: 18,
  },
  insolar: {
    coin: "insolar",
    name: "Insolar",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x5b2e4a700dfbc560061e957edec8f6eeeb74a320&address=",
    pathunix: "insolar",
    path: "insolar", // check
    unit: "INS",
    config: "insolar", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/INS.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x5b2e4a700dfbc560061e957edec8f6eeeb74a320",
    color: "#263238", // lumi colour
    border: "#e6e6e6",
    decimals: 10,
  },
  iotex: {
    coin: "iotex",
    name: "IoTeX",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x6fb3e0a217407efff7ca062d46c26e5d60a14d69&address=",
    pathunix: "iotex",
    path: "iotex", // check
    unit: "IOTX",
    config: "iotex", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/IOTX.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x6fb3e0a217407efff7ca062d46c26e5d60a14d69",
    color: "#00b4a0", // lumi colour
    border: "#e6e6e6",
    decimals: 18,
  },
  selfkey: {
    coin: "selfkey",
    name: "SelfKey",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x4cc19356f2d37338b9802aa8e8fc58b0373296e7&address=",
    pathunix: "selfkey",
    path: "selfkey", // check
    unit: "KEY",
    config: "selfkey", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/KEY.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x4cc19356f2d37338b9802aa8e8fc58b0373296e7",
    color: "#23e6fe", // lumi colour
    border: "#e6e6e6",
    decimals: 18,
  },
  lunyr: {
    coin: "lunyr",
    name: "Lunyr",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xfa05A73FfE78ef8f1a739473e462c54bae6567D9&address=",
    pathunix: "lunyr",
    path: "lunyr", // check
    unit: "LUN",
    config: "lunyr", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/LUN.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0xfa05A73FfE78ef8f1a739473e462c54bae6567D9",
    color: "#f14e10", // lumi colour
    border: "#e6e6e6",
    decimals: 18,
  },
  /* moedaloyaltypoints: {
    coin: "moedaloyaltypoints",
    name: "Moeda Loyalty Points",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x51db5ad35c671a87207d88fc11d593ac0c8415bd&address=",
    pathunix: "moedaloyaltypoints",
    path: "moedaloyaltypoints", // check
    unit: "MDA",
    config: "moedaloyaltypoints", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/MDA.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x51db5ad35c671a87207d88fc11d593ac0c8415bd",
    color: "#00a147", // lumi colour
    border: "#e6e6e6",
    decimals: 18,
  }, */
  /* mithriltoken: {
    coin: "mithriltoken",
    name: "Mithril Token",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x3893b9422cd5d70a81edeffe3d5a1c6a978310bb&address=",
    pathunix: "mithriltoken",
    path: "mithriltoken", // check
    unit: "MITH",
    config: "mithriltoken", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/MITH.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x3893b9422cd5d70a81edeffe3d5a1c6a978310bb",
    color: "#4ee5cf", // lumi colour
    border: "#e6e6e6",
    decimals: 18,
  }, */
  monetha: {
    coin: "monetha",
    name: "Monetha",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xaf4dce16da2877f8c9e00544c93b62ac40631f16&address=",
    pathunix: "monetha",
    path: "monetha", // check
    unit: "MTH",
    config: "monetha", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/MTH.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0xaf4dce16da2877f8c9e00544c93b62ac40631f16",
    color: "#001c3e", // lumi colour
    border: "#e6e6e6",
    decimals: 5,
  },
  oax: {
    coin: "oax",
    name: "oax",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x701c244b988a513c945973defa05de933b23fe1d&address=",
    pathunix: "oax",
    path: "oax", // check
    unit: "OAX",
    config: "oax", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/OAX.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x701c244b988a513c945973defa05de933b23fe1d",
    color: "#161c32", // lumi colour
    border: "#e6e6e6",
    decimals: 18,
  },
  ost: {
    coin: "ost",
    name: "OST",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x8eb24319393716668d768dcec29356ae9cffe285&address=",
    pathunix: "ost",
    path: "ost", // check
    unit: "OST",
    config: "ost", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/OST.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x8eb24319393716668d768dcec29356ae9cffe285",
    color: "#34445b", // lumi colour
    border: "#e6e6e6",
    decimals: 18,
  },
  populous: {
    coin: "populous",
    name: "Populous",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xd4fa1460f537bb9085d22c7bccb5dd450ef28e3a&address=",
    pathunix: "populous",
    path: "populous", // check
    unit: "PPT",
    config: "populous", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/PPT.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0xd4fa1460f537bb9085d22c7bccb5dd450ef28e3a",
    color: "#5ca0f6", // lumi colour
    border: "#e6e6e6",
    decimals: 8,
  },
  quantstamp: {
    coin: "quantstamp",
    name: "Quantstamp",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x99ea4db9ee77acd40b119bd1dc4e33e1c070b80d&address=",
    pathunix: "quantstamp",
    path: "quantstamp", // check
    unit: "QSP",
    config: "quantstamp", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/QSP.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x99ea4db9ee77acd40b119bd1dc4e33e1c070b80d",
    color: "#4cbbfd", // lumi colour
    border: "#e6e6e6",
    decimals: 18,
  },
  ren: {
    coin: "ren",
    name: "Ren",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x408e41876cccdc0f92210600ef50372656052a38&address=",
    pathunix: "ren",
    path: "ren", // check
    unit: "REN",
    config: "ren", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/REN.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x408e41876cccdc0f92210600ef50372656052a38",
    color: "#001b3a", // lumi colour
    border: "#e6e6e6",
    decimals: 18,
  },
  iexecrlc: {
    coin: "iexecrlc",
    name: "iExec RLC",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x607F4C5BB672230e8672085532f7e901544a7375&address=",
    pathunix: "iexecrlc",
    path: "iexecrlc", // check
    unit: "RLC",
    config: "iexecrlc", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/RLC.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x607F4C5BB672230e8672085532f7e901544a7375",
    color: "#fbd503", // lumi colour
    border: "#e6e6e6",
    decimals: 9,
  },
  singulardtv: {
    coin: "singulardtv",
    name: "SingularDTV",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xaec2e87e0a235266d9c5adc9deb4b2e29b54d009&address=",
    pathunix: "singulardtv",
    path: "singulardtv", // check
    unit: "SNGLS",
    config: "singulardtv", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/SNGLS.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0xaec2e87e0a235266d9c5adc9deb4b2e29b54d009",
    color: "#b30d23", // lumi colour
    border: "#e6e6e6",
    decimals: 0,
  },
  /* timenewbank: {
    coin: "timenewbank",
    name: "Time New Bank",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xf7920b0768ecb20a123fac32311d07d193381d6f&address=",
    pathunix: "timenewbank",
    path: "timenewbank", // check
    unit: "TNB",
    config: "timenewbank", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/TNB.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0xf7920b0768ecb20a123fac32311d07d193381d6f",
    color: "#fcb31b", // lumi colour
    border: "#e6e6e6",
    decimals: 18,
  }, */
  tierion: {
    coin: "tierion",
    name: "Tierion",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x08f5a9235b08173b7569f83645d2c7fb55e8ccd8&address=",
    pathunix: "tierion",
    path: "tierion", // check
    unit: "TNT",
    config: "tierion", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/TNT.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x08f5a9235b08173b7569f83645d2c7fb55e8ccd8",
    color: "#ff4081", // lumi colour
    border: "#e6e6e6",
    decimals: 8,
  },
  viberate: {
    coin: "viberate",
    name: "Viberate",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x2c974b2d0ba1716e644c1fc59982a89ddd2ff724&address=",
    pathunix: "viberate",
    path: "viberate", // check
    unit: "VIB",
    config: "viberate", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/VIB.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x2c974b2d0ba1716e644c1fc59982a89ddd2ff724",
    color: "#ff1e43", // lumi colour
    border: "#e6e6e6",
    decimals: 18,
  },
  vibe: {
    coin: "vibe",
    name: "VIBE",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xe8ff5c9c75deb346acac493c463c8950be03dfba&address=",
    pathunix: "vibe",
    path: "vibe", // check
    unit: "VIBE",
    config: "vibe", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/VIBE.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0xe8ff5c9c75deb346acac493c463c8950be03dfba",
    color: "#00bfff", // lumi colour
    border: "#e6e6e6",
    decimals: 18,
  },
  tael: {
    coin: "tael",
    name: "Tael",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x286bda1413a2df81731d4930ce2f862a35a609fe&address=",
    pathunix: "tael",
    path: "tael", // check
    unit: "WABI",
    config: "tael", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/WABI.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x286bda1413a2df81731d4930ce2f862a35a609fe",
    color: "#ff5847", // lumi colour
    border: "#e6e6e6",
    decimals: 18,
  },
  wepower: {
    coin: "wepower",
    name: "WePower",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x4CF488387F035FF08c371515562CBa712f9015d4&address=",
    pathunix: "wepower",
    path: "wepower", // check
    unit: "WPR",
    config: "wepower", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/WPR.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0x4CF488387F035FF08c371515562CBa712f9015d4",
    color: "#f5e74b", // lumi colour
    border: "#e6e6e6",
    decimals: 18,
  },
  /* yoyow: {
    coin: "yoyow",
    name: "YOYOW",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xcbeaec699431857fdb4d37addbbdc20e132d4903&address=",
    pathunix: "yoyow",
    path: "yoyow", // check
    unit: "YOYOW",
    config: "yoyow", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/YOYOW.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0xcbeaec699431857fdb4d37addbbdc20e132d4903",
    color: "#428bca", // lumi colour
    border: "#e6e6e6",
    decimals: 18,
  }, */
  dibicoin: {
    coin: "dibicoin",
    name: "Dibicoin",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xf39e4b22050334aaf04259d30d73e78bfee8ab58&address=",
    pathunix: "dibicoin",
    path: "dibicoin", // check
    unit: "DIBI",
    config: "dibicoin", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/Ethereum.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0xf39e4b22050334aaf04259d30d73e78bfee8ab58",
    color: "#e67e22", // lumi colour
    border: "#e6e6e6",
    decimals: 3,
  },
  bitcoinzero: { // TODO we should move to coins -> type -> coin scheme?
    coin: "bitcoinzero",
    name: "Bitcoin Zero",
    pubKeyHash: "4b",
    wif: "d2",
    electrum: "bitcoinzero",
    normalAddress: "X",
    normalAddressB: "X",
    scriptAddress: "E",
    scriptAddressB: "F",
    addresses: [],
    fiatRates: [],
    fiatRate: 0,
    api: "explorer.bzx.zelcore.io", // 68.183.116.94
    proxy: "https://proxy.bzx.zelcore.io/?server=127.0.0.1?call=",
    pathunix: "bitcoinzero",
    path: "Bitcoinzero",
    unit: "BZX",
    config: "bitcoinzero",
    rpcport: 29201,
    testnetrpcport: 29201, // yes the same as mainnet
    type: "electrum",
    explorer: "https://explorer.bzx.zelcore.io/tx/",
    logolink: "static/logos/BZX.svg",
    node: "explorer.bzx.zelcore.io",
    fee: 0.00001,
    feepolicy: {
      economy: 5,
      normal: 10,
      fast: 20,
    },
    color: "#ffffff",
    border: "#e6e6e6",
  },
  etherparty: {
    coin: "etherparty",
    name: "Fuel Token",
    pubKeyHash: "30", // todo not in eth
    wif: "80", // not in eth
    addresses: [],
    fiatRate: 0,
    fiatRates: [],
    api: "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xea38eaa3c86c8f9b751533ba2e562deb9acded40&address=",
    pathunix: "etherparty",
    path: "etherparty", // check
    unit: "FUEL",
    config: "etherparty", // not in eth
    rpcport: 8766, // 8545 imo, not used
    type: "eth",
    explorer: "https://etherscan.io/tx/",
    logolink: "static/logos/FUEL.svg",
    node: "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3", // "http://206.189.126.50:8545",
    fee: 63000, // gas limit TODO
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20,
    },
    contractAddress: "0xea38eaa3c86c8f9b751533ba2e562deb9acded40",
    color: "#e67e22", // lumi colour
    border: "#e6e6e6",
    decimals: 18,
  },
};
export default {
  coins,
};
