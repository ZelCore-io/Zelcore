# Centralized CCXT certified exchange Integration

When integrating centralized exchange check the following

- Uncomment the exchange in scripts\ccxt.js
- Add Zelcore Compatible Exchange svg logo to static\logos\Exchanges
- In src\renderer\languages\en.js add message.{Exchange} and message.ex_{Exchange}_text. Where {Exchange} the Exchange name.
- In src\renderer\storage\exchangeinfo.js add the exchange specifications e.g.

  coinbasepro: { // Object name always lowercase
    name: "CoinbasePro", // Exchange name can use various case but remember to use this for exchange specific functions in code
    isZelcorePlus: true, // If the exchange is only available in zelcore plus
    apiKeyHelpURL: "https://help.coinbase.com/en/pro/other-topics/api/how-do-i-create-an-api-key-for-coinbase-pro", // api key documentation
    msgName: "coinbasePro", // Exchange key in language message object
    msgDesc: "ex_coinbasePro_text", // Exchange description key in language message object
    logolink: "static/logos/Exchanges/CoinbasePro.svg", // Link to exchange logo
    hasFlux: false, // If exchange has flux
    ccxtName: "coinbasepro", // The key of the exchange in the ccxt library object
    ccxtOptions: {
      // various options for the ccxt object specific to the exchange
      // verbose: true,
      options: {
        // adjustForTimeDifference: false,
      },
    },
    apiData: { // Here it is defined what creds are nessesary for the exchange so appropriate fields appear
      key: true,
      secret: true,
      password: true,
      token: false,
    },
    // web socket urls
    klineUri: null, // "wss://ws-feed.exchange.coinbase.com";
    aggregatedOrdersUrl: "wss://ws-feed.exchange.coinbase.com",
    tickerUrl: "wss://ws-feed.exchange.coinbase.com",
    // Bars available resolutions 
    barsRes: ["1", "5", "15", "60", "360", "1D"],
    // OHVL CCXT interval resolutions
    intervalArray: {
      1: "1m",
      5: "5m",
      15: "15m",
      60: "1h",
      360: "6h",
      D: "1d",
      "1D": "1d",
    },
    klineLimit: 2500, // limit with which OHVL data are requested from ccxt library
    aggregatedOrdersLimit: 20, // Limit for orderbook fetching from ccxt library
    // OHVL websocket interval resolutions
    interval: {
      1: "1m",
      5: "5m",
      15: "15m",
      60: "1h",
      360: "6h",
      D: "1d",
      "1D": "1d",
    },
  },

- Configuring websockets (OHVL, ticker, aggregatedOrders) in src\renderer\components\Exchange\centralisedExchanges\ExchangeLayout.vue