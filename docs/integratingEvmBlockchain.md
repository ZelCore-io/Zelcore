# Adding a New EVM Blockchain to the Project

This document outlines the process for adding a new EVM blockchain to the project, using the Fantom (FTM) blockchain as a reference. The steps are structured as a checklist, ensuring that all necessary files are updated correctly.

## **Step 1:** Update Backend Configuration

### Files Affected:
- `packages/backends/src/backends.ts`
- `packages/backends/src/types.ts`

### Steps:
1. **Add Blockchain Details in `backends.ts`:**
    - Add the configuration for the new blockchain (e.g., Fantom) under the `backends` constant.
    - Include nodes, explorers, API endpoints, and API keys.

    ```typescript
    const backends: Backends = {
      ...
      ftm: {
        node: [
          "https://fantom-rpc.publicnode.com",
          // other RPC nodes
        ],
        explorer: [
          "https://ftmscan.com/tx/",
          "https://explorer.fantom.network/transactions/",
        ],
        api: [
          "https://api.ftmscan.com/api",
        ],
        apiKeys: [
          "ZKE15W2UIRGYIG299DUZ6GKXPRB4W5JYNK",
        ],
      },
      ...
    };
    ```

2. **Add Type in `types.ts`:**
    - Update the `Backends` interface to include the new blockchain.

    ```typescript
    export interface Backends {
      ...
      ftm: BackendDetails;
    }
    ```

## **Step 2:** Update Blockchain Framework

### Files Affected:
- `packages/blockchain-framework/src/evm/eth-like-commons.ts`
- `packages/blockchain-framework/src/evm/eth-like-consts.ts`
- `packages/blockchain-framework/src/evm/eth-like-transactions.ts`

### Steps:
1. **Add Blockchain in `eth-like-commons.ts`:**
    - Define the blockchain configuration within the `ethLike` constant.

    ```typescript
    export const ethLike = {
      ...
      ftm: Common.custom(
        {
          name: "Fantom",
          chainId: 250,
          networkId: 250,
          defaultHardfork: Hardfork.London,
        },
      ),
    }
    ```

2. **Add Blockchain Constants in `eth-like-consts.ts`:**
    - Add specific constants related to the new blockchain, such as fee policies, token names, and other metadata.

    ```typescript
    export const extras = {
      ...
      ftm: {
        endpointPostfix: "",
        balanceContract: "0xbf8a45e9c7f052159c083812292206b420371690",
        tokenNamePostfix: "FTM",
        tokenKeyPrefix: "ftm",
        fee: 120000,
        feepolicy: {
          economy: 24,
          normal: 25,
          fast: 26,
        },
      },
    }
    ```

    ```typescript
    export const EthLikeUi = {
      ...
      ftm: {
        hasImportToken: true,
        importLogo: "@/assets/icons/ImportFTM.svg",
        name: "Fantom",
        importDialogTitle: "message.import_fantom_token",
        hasFullNode: false,
        fullNodeMessage: "message.no_ethereum_fullnode",
      },
    }
    ```

3. **Update `eth-like-transactions.ts`:**
    - Ensure that the transaction API endpoints for the new blockchain are included.

    ```typescript
    const ethScanLike = [
      ...
      "api.ftmscan.com/api",
    ]
    ```

4. **Build the blockchain framework package:**
    - via the terminal, run `yarn build:pkg:bfw`

## **Step 3:** Update Wallet Connect Integration

### Files Affected:
- `packages/blockchain-framework/src/reown/constants.ts`

### Steps:
1. **Add Blockchain Configuration:**
    - Add the new blockchain to the `EIP155_CHAINS` constant.

    ```typescript
    export const EIP155_CHAINS: { [k: string]: ReOwnChain<ReOwnEthChainType> } = {
      ...
      "eip155:250": {
        chainId: 250,
        name: "Fantom",
        type: "ftm",
        rpc: "https://rpc.ftm.tools",
      },
    };
    ```

## **Step 4:** Update Renderer Components

### Files Affected:
- `src/renderer/components/Apps/FioCryptoHandle.vue`
- `src/renderer/components/WalletConnect/WalletConnect.vue`
- `src/renderer/components/WalletConnect/index.js`

### Steps:
1. **Update FioCryptoHandle Component:**
    - Ensure that the new blockchain is recognized in the FioCryptoHandle component.

    ```javascript
    const fantomExists = this.currenciesMapping.find((coin) => coin.coin === "ftm");
    if (fantomExists) {
      const chain = this.mapChain("ftm");
      const tokenAdd = {
        chain_code: chain,
        token_code: "*",
        public_address: fantomExists.address,
      };
      generatedPublicAddresses.push(tokenAdd);
    }
    ```

    - Ensure that you add the new evm blockchain conditional to the createDefaultAddressMap method

    ```javascript
    createDefaultAddressMap(wallet) {
      const mappedAddresses = [];
      console.log(wallet);
      if (wallet) {
        const allcoins = Object.keys(this.coins);
        allcoins.forEach((coin) => { // prohibit rvnasset, avalanchex, avalanchep - not supported
          if (
            ...
            this.coins[coin].type !== "ftm" || coin === "ftm"
            ...
            )
        })
      }
    },
    
    ```

2. **Update WalletConnect Components:**
    - Add the new blockchain to the WalletConnect component’s supported chains.

    ```javascript
    const isEip155 = ["ethereum", ..., "ftm"];
    ```

    ```javascript
    const { accounts, coins } = useNamespaces([
      "ethereum",
      "testnetsepoliaethereum",
      "solana",
      "maticpolygon",
      "avaxavalanchec",
      "bscbinance",
      "kadena",
      "testnetkadena",
      "developmentkadena",
      "base",
      "basesepolia",
      "arbitrum",
      "ftm",
    ]);
    ```
    

## **Step 5:** Update Language Files

### Files Affected:
- `src/renderer/languages/en.js`

### Steps:
1. **Add New Blockchain Strings:**
    - Update the language file with labels for the new blockchain.

    ```javascript
    export default {
      ...
      ftm_network: "Fantom Network",
      import_fantom_token: "Import Fantom Token",
    }
    ```

## **Step 6:** Update Utility Functions

### Files Affected:
- `src/renderer/utils/addHideCoinHelpers.js`
- `src/renderer/utils/chainIndicator.js`
- `src/renderer/utils/eth-like-coin-maper.js`
- `src/renderer/utils/fio-chain-mapper.js`
- `src/renderer/utils/sendingHelpers/constants.js`
- `src/renderer/utils/sendingHelpers/unit-fee.js`

### Steps:
1. **Update `addHideCoinHelpers.js`:**
    - Ensure the new blockchain is handled correctly in the utility functions.

    ```javascript
    export const addCoinBlockchains = {
      ...
      ftm: {
        name: "Fantom",
        type: "ftm",
        addExclude: [],
        isCoinImported: (coin) => coin.coin === `ftm${coin.contractAddress}`,
        addCoinListName: "filteredListFantomAdd",
        addCoinListTitle: "message.fantom_network",
        addImportedCoinListName: "filteredListImportedFantomAdd",
        addImportedCoinListTitle: "message.fantom_imported_tokens",
        deleteTokenCommitName: "deleteEthLikeToken",
      },
    };
    ```

    - Add the new blockchain to the `badTypes` array in `addHideCoinHelpers.js`.

    ```javascript
    export const badTypes = ["eth", ... , "ftm"];
    ```

    - Add the new blockchain to the `okCoins` array in `addHideCoinHelpers.js`.

    ```javascript
    export const okCoins = ["ethereum", ... , "ftm"];
    ```

2. **Update `chainIndicator.js`:**
    - Map the new blockchain type to its native coin.

    ```javascript
    import ftmLogo from "../assets/logos/FTM.svg";
    ...
    const iconMap = {
      ...
      ftm: ftmLogo,
    };
    ```

3. **Update `eth-like-coin-maper.js`:**
    - Map the new blockchain type to its native coin.

    ```javascript
    const ethLikeType2Native = new Map([
      ...
      ["ftm", "ftm"],
    ]);
    ```

4. **Update `fio-chain-mapper.js`:**
    - Ensure the FIO chain mapper recognizes the new blockchain.

    ```javascript
    const coinTypeToFioHandle = new Map([
      ...
      ["ftm", "FTM"],
    ]);
    ```

5. **Update `sendingHelpers/constants.js`:**
    - Add the new blockchain to the list of EVM-like chains.

    ```javascript
    export const ethLike = ["eth", ..., "ftm"];
    ```

6. **Update `sendingHelpers/unit-fee.js`:**
    - Map the coin type to its fee coin.

    ```javascript
    const coinTypeToFeeCoin = new Map([
      ...
      ["ftm", coins.ftm.coin],
    ]);
    ```

## **Step 7:** Add Icons and Assets

### Files Affected:
- `src/renderer/assets/icons/ImportFTM.svg`

### Steps:
1. **Add Blockchain Icon:**
    - Ensure that the new blockchain has an associated icon in the assets folder.
    - For Fantom, the icon `ImportFTM.svg` was added.

## **Step 8:** Update Storage Files

### Files Affected:
- `src/renderer/storage/coins.json`
- `src/renderer/storage/coinsSimple.js`
- `src/renderer/storage/coininfo.json`
- `src/renderer/storage/newssources.json`

### Steps:
1. **Define the New Blockchain Coin:**
   Add the coin details in `coinsSimple.js`, and `coininfo.json`.
   Then run `yarn build:pkg` and `yarn createCoinsFile` to generate `coins.json`
   **Example:**
   ```javascript
   {
     ...,
     ftm: {
      coin: "ftm",
      name: "Fantom",
      uri: [
        "fantom",
        "ftm",
      ],
      chainID: 250,
      slip: 60,
      addresses: [],
      unit: "FTM",
      type: "ftm",
      family: "ethlike",
      coinType: "native",
      logolink: "@/assets/logos/FTM.svg",
      fee: 100000,
      feepolicy: {
        economy: 30,
        normal: 35,
        fast: 40,
      },
      contractAddress: "0x0000000000000000000000000000000000000000",
      color: "#1969FF",
      decimals: 18,
      explorer: backends.ftm.explorer,
      node: backends.ftm.node,
      api: backends.ftm.api,
    },
   };
   ```

2. **Add New Blockchain News Sources:**
   If applicable, include news sources in `newssources.json`.

   **Example:**
   ```javascript
   const newssources = {
     ...,
     ftm: [
      {
        name: "Fantom Medium",
        feed: "https://medium.com/feed/fantomfoundation",
        site: "https://medium.com/fantomfoundation",
        about: "The core of the new internet. The most advanced, fast and secure consensus for distributed networks.",
        pic: "@/assets/logos/FTM.svg",
      },
      {
        name: "Fantom Twitter",
        feed: "https://rss.app/feeds/hBKytyrbT9qn09C2.xml",
        site: "https://twitter.com/FantomFDN",
        about: "Official Fantom Twitter",
        pic: "@/assets/logos/FTM.svg",
      },
    ],
   };
   ```

## Step 9: **Verify and Test**

### Steps:
1. **Run Tests:**
    - Ensure that all unit tests pass, and add new tests if necessary for the new blockchain.
    - Manual tests:
      - Test Address generation, balance fetching, transaction fetching, sending. (native and tokens)
      - Test walletconnect integration using an defi dapp. (Connect, swap, etc.)
      - Test import custom tokens (Idealy swap to get some of it).

2. **Manual Testing:**
    - Perform manual testing to verify that the new blockchain is fully integrated and functional within the application.
