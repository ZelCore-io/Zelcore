
# Changelog

## **[8.21.0] – Kasplex Mainnet & FluxONE**

Version 8.21.0 brings Kasplex **mainnet** online, introduces **FluxONE**—our AI image studio inside FluxAI—and adds quality‑of‑life upgrades across swaps, widgets, and FluxDrive.

### **Added**

- **Kasplex Mainnet (EVM)**
  - New **Kasplex** network available in Networks (EVM‑compatible).
  - **WKAS (Wrapped Kaspa)** token support on Kasplex mainnet.
  - You can now **import Kasplex tokens**; dedicated sections added for Kasplex Testnet as well.
  - Note: **KAS on Kasplex mainnet is required for gas** when interacting with Kasplex contracts.

- **IgraLabs Testnet (EVM)**
  - Token import flow and chain indicator support included.
  - Note: **KAS on IgraLabs Testnet is required for gas** on IgraLabs Testnet contracts.

- **FluxONE (inside FluxAI) – AI Image Studio**
  - Create images with adjustable **aspect ratios**, **formats (JPG/PNG/WEBP)**, and **quality** controls.
  - **Big preview**, **one‑click download**, and **mobile share** support.
  - **Session management**: see interaction history, resume, and manage sessions.
  - **Login‑less access**: FluxONE can be launched without signing in (see EasyLogin screen).
  - **Model selection via Zelcore API** provider (e.g., *Llama 3.1, DeepSeek 8B, DeepSeek 32B*).
  - New **App Selector** inside FluxAI lets you switch between **FluxGPT** (chat) and **FluxONE** (images).

- **Quick‑access widgets**
  - New **FluxAI Shortcut** and **FluxDrive Shortcut** widgets on Portfolio, for faster access to chat, image generation, and file storage.

### **Updated**

- **Swap History:** Each swap now displays the **fiat value at the time of execution** with a helpful tooltip in history and details.
- **FluxDrive:** Clearer **max file size** display (now shown in MB) and minor upload UX polish.
- **Dependency freeze** for reproducible builds
- **Linux (.deb) installer improvements**: Sets up the `zelcore` alternative and configures Chromium sandbox permissions for improved stability on Debian‑based systems.
- Minor hardware‑wallet library alignment and build‑script refinements.

### **Fixed**
- Corrected naming/placement for testnet coins and minor visual issues (panel routing, colors, focus states).
- FluxDrive: fixed an issue with **max file size** formatting.
- General package and copy cleanups.

**[8.20.0] – FluxDrive Integration & Kasplex Support**

Version 8.20.0 introduces groundbreaking file management capabilities through FluxDrive integration and expands blockchain support with Kasplex Testnet, delivering enhanced functionality and user experience improvements.

### **Added**
  - **FluxDrive File Management System:** Revolutionary decentralized file storage and management capabilities:
    - Complete file upload and download functionality with drag-and-drop support
    - Advanced file type validation and size restrictions for security
    - Progress tracking for upload operations with parallel processing support
    - Secure file encryption before upload to protect user data
    - Integration with Flux ecosystem for decentralized storage solutions
    - File organization with folder management and navigation
    - Cross-platform file system access

  - **Kasplex Testnet Blockchain Support:** New testnet integration expanding Kaspa ecosystem support:
    - Native KAS coin support for testnet transactions
    - WKAS token support on the Kasplex testnet network
    - Full WalletConnect integration for dApp connectivity

### **Updated**
  - **Seed Phrase Security:** Enhanced seed phrase handling with improved validation:
    - Automatic trimming and lowercase conversion for consistency
    - Better paste handling with multi-word support

### **Fixed**
  - **User Interface Improvements:** Various enhancements for better user experience

**[8.19.2] – Sui Blockchain Integration & AI Enhancement**

### **Fixed**
  - **WalletConnect:** Updated WalletConnect to latest version.

**[8.19.1] – Sui Blockchain Integration & AI Enhancement**
Version 8.19.0 introduces major new blockchain support and AI capabilities, expanding ZelCore's functionality with cutting-edge features.

### **Updated**
  - **Etherscan Backends:** Updated to use v2 endpoints for enhanced performance and reliability.
  - **Daemon Update:** Updated Flux Mac daemon to latest version for improved performance and stability.
  - **Horizen Decommission:** Horizen is being decommissioned and will be removed in the future version.

**[8.19.0] – Sui Blockchain Integration & AI Enhancement**

Version 8.19.0 introduces major new blockchain support and AI capabilities, expanding ZelCore's functionality with cutting-edge features.

### **Added**
  - **FluxAI GPT Integration:** Revolutionary AI assistant feature powered by Flux infrastructure:
    - Interactive AI chat interface with session management
    - Persistent conversation history across sessions
    - Multi-language AI support
    - Secure data handling with encryption

  - **Sui Blockchain Support:** Complete integration of the Sui blockchain, enabling users to manage Sui assets directly within ZelCore. Features include:
    - Native SUI coin support with full send/receive functionality
    - USDC token support on the Sui network
    - Added swap support for SUI blockchain
    - WalletConnect integration for Sui dApps and services
    - Advanced blockchain framework implementation

### **Updated**
  - **Flux Daemon:** Updated to latest version for improved performance and stability
  - **Backend Infrastructure:** Enhanced middleware integration for better API performance
  - **Blockchain Framework:** Expanded framework to support new chain types and WalletConnect protocols

### **Fixed**
  - **FluxNodes Dashboard:** Resolved issues with node management and status display
  - **Transaction Processing:** Improved reliability for various blockchain transactions
  - **Out of Commission Handling:** Added proper handling for temporarily unavailable coins (Fantom, EOS)

**[8.18.1] – Powered by Flux**

### **Fixed**
  - **FluxNodes dashboard:** Fixed bug of FluxNode names disappearing in case a service is unreachable.
  - **Seed Phrase showing:** Fixes a bug of inability to show seed phrase for accounts using biometrics authentication only.

**[8.18.0] – Traditional Finance Integration & Multi-Language Support**

Version 8.18.0 brings a groundbreaking new feature that bridges traditional finance with crypto, plus comprehensive language support upgrades across the platform.

### **Added**
  - **Stocks Portfolio Integration:** Revolutionary new feature allowing users to connect and manage traditional brokerage accounts (stocks, ETFs, mutual funds) directly within ZelCore. Features include:
    - Connect multiple brokerage accounts through secure OAuth integration
    - View consolidated portfolio across all connected brokerages
    - Real-time portfolio values with allocation visualization
    - Privacy mode support for sensitive financial data
    - Available under ZelCore+ features
  - **Multi-Language Expansion:** Comprehensive AI-powered translations added for 17 languages:
    - Czech, Danish, Finnish, French, Greek, Indonesian, Italian, Norwegian, Polish, Portuguese, Russian, Serbian, Spanish, Swedish, Turkish, Ukrainian, and Chinese
  - **User Interface & Experience:** Added variant link styling with proper hover effect exclusions

### **Fixed**
  - **Extension Compatibility:** Fixed conditional checks for browser extension support
  - **Production Build:** Resolved production build issues

**[8.17.2] – Powered by Flux**

### **Fixed**
  - **FluxNodes dashboard:** Fixed bugs and undefined rewards display issues resolved.
  - **Swaps:** Hardcoded exchange limitations fixed - all exchanges and their limits are now properly available.


**[8.17.0] – EVM v2 API, Substrate Node Mode & Maintenance Updates**

Version 8.17.0 modernises Zelcore’s back-end plumbing, brings a smoother experience to Bittensor (TAO) holders, and rolls out the latest core-node binaries.

### **Added**
  - **Bittensor / TAO:** Balances are now fetched directly from a user-selectable WebSocket **nodeService** instead of the rate-limited Taostats API.
  - **Bittensor / TAO:** New helper to translate Substrate chain IDs and decimals.

### **Updated**
  - **Optimism, Sepolia & all other EVM explorers:** Migrated from legacy Etherscan URLs to **Zelcore-hosted v2** endpoints.
  - **Electrum proxy hardening:** **Bitcore (BTX)** and **Raptoreum (RTM)** proxies now tunnel through `127.0.0.1` for better isolation.
  - **Installer binaries:** (Linux / macOS / Windows hashes refreshed):

    | Coin           | Old                        | New |
    | -------------- | -------------------------- | --- |
    | Zcash          | 6.0.0 ➜ **6.2.0**         |     |
    | Horizen (zend) | 5.0.5 ➜ **5.0.6**         |     |
    | Firo (zcoind)  | 0.14.1.40 ➜ **0.14.1.41** |     |
    | Dash           | 22.0.0 ➜ **22.1.2**       |     |
    | Groestlcoin    | 28.0.0 ➜ **29.0.0**       |     |
    | DigiByte       | 7.17.3 ➜ **8.22.2**       |     |

  - **TAO workflow tweaks:** Auto-refresh for TAO balances is skipped to avoid node rate limits.
  - **TAO workflow tweaks:** Transaction fetch limit raised from 50 → 60.
  - **User Interface & Experience:** Offramp (Sell) and Purchase (Buy) history screens completely rebuilt to match the new UI.
  - **Swap dialog:** Zero-balance assets are now shown by default; search is null-safe and sorts non-zero balances first.
  - **Portfolio warnings:** Unsupported-coin notice expanded to include **Sinovate** and **VeriBlock** types.

### **Fixed**
  - **Kaspa KRC-20 import:**: corrected variable mix-up that blocked token saves.
  - **Substrate bonded balance:**: now returned as a fixed-precision string.

**[8.16.0] - New Chain Support and Expanded Features**

We're pleased to announce Version 8.16.0 of Zelcore! This update introduces support for a new blockchain, expands our token listings significantly, updates key Flux integration requirements, and adds enhanced portfolio management features.

**Added**

* **Blockchain Support:**
    * Introduced support for the **Ink Chain** (powered by Kraken), including native ETH, USDC.E token, and WalletConnect capabilities.
* **User Interface & Experience:**
    * Integrated direct links to **FluxOs, FluxDrive, FluxAI, FluxEdge, and FuxionX** within the APPs section for easier access to the Flux ecosystem.
    * Added new dialogs directly on the **Portfolio Overview** screen for Add/Hide Asset, Wallet Edit, and Smartify actions, streamlining asset management.
    * Added support link for swap, purchase and off-ramp transactions through affiliated providers.

**Updated**

* **Flux Integration:**
    * Enhanced Flux storage validation: A **Flux node alias is now required** before uploading configuration data to Flux storage.
* **User Interface & Experience:**
    * Improved portfolio management dialogs: Added a **wallet selector** to the new Add/Hide Asset, Wallet Edit, and Smartify dialogs for better control when managing multiple wallets.
* **Token Lists:**
    * Significantly expanded token support across multiple networks:
        * **Ethereum (ERC20):** Added LDO, DEXE, MOVE, JASMY, SPX, Gala, STRK, AIOZ, MORPHO, MOG, XAUt, EIGEN, PENDLE, SUPER, PYUSD, ROSE, ZRO, BLUR, PRIME, CTC, ETHFI, ATH, CVX, XCN, ID, SFP, BIO, MEME, VANA, AUTOS.
        * **BNB Chain (BEP20):** Added LDO, DEXE, AIOZ, PENDLE, ROSE, ZRO, ID, SFP, XCN.
        * **Solana (SPL):** Added LDO, PENGU, JUP, AI16Z, SPX, JTO, GIG, aixbt, GRASS, POPCAT, ROSE, MEW, ATH, PNUT, CVX, BIO, BOME.
        * **Base:** Added SPX, ZERO, MORPHO, MOG, aixbt, PENDLE, ROSE, ZRO, PRIME, XCN.
        * **Arbitrum:** Added LDO, PENDLE, ROSE, ZRO, ETHFI, ATH.
        * **Optimism:** Added PENDLE, ROSE, ZRO.
        * **Polygon (POLY):** Added SUPER, ROSE, ZRO.
        * **Avalanche C-Chain (AVAX-C):** Added ROSE, ZRO.

## [8.15.4] - Powered by Flux

### Fixed
- **UI Fixes and Adjustments:** Various Purchase and Swap UI Treatments. Other UI improvements.
- **Monero Sending Fix:** Fixed a bug related to monero cryptoasset sending.

## [8.15.3] - Powered by Flux

### Fixed
- **UI Fixes and Adjustments:** Various Fluxnodes App UI Treatments. Other UI improvements.

## [8.15.1] - Powered by Flux

### Fixed
- **Mobile GCM decryption incompatibility:** Resolved an issue where mobile GCM decryption was incompatible with the latest version of the desktop.

## [8.15.0] - Enhanced Security & Fluxnode Revamp

We are proud to release Version 8.15.0, delivering crucial updates in security, major improvements in encryption, and an entirely revamped Fluxnode Dashboard. See what's improved:

### Added
- **Advanced Encryption Standard (AES-GCM):** Updated encryption methods to AES-GCM, leveraging the latest cryptographic standards for robust protection.
- **Enhanced Key Derivation:** Significantly improved AES key derivation techniques to bolster security against brute force attacks.

### Updated
- **Fluxnode Dashboard Redesign:** Completely refactored the Fluxnode Dashboard, enhancing both backend logic and frontend user interface for improved clarity, usability, and functionality.
- **CS and ID Language Support:** Refreshed translations for Czech (CS) and Indonesian (ID) languages to enhance user experience.
- **Biometric Security Integration:** Upgraded biometric security measures by combining keystore and biometric secrets for superior authentication protection.

### Recommendations
- **Reset EasyLogin & D2FA:** Strongly encouraged to reset EasyLogin and Decentralized Two-Factor Authentication (D2FA) to fully benefit from the improved encryption and security updates.

## [8.14.0] - Powered by Flux

We are excited to introduce Version 8.14.0 of our wallet. This release delivers enhanced user interface improvements, updated blockchain token support, and strengthened security and login features.

### Added
- **Core Enhancements:**  
  - Implemented a Vuex hot update mechanism that refreshes the store seamlessly after application load.
  - Integrated automatic currency detection in the purchase module using ipapi, so that the default fiat currency is set based on the user’s location.
  - Introduced throttling constants and system time accuracy checks within the login flows to better protect against brute-force attempts.

### Updated
- **Token Lists:**  
  - **Arbitrum:** Added the **USDe** token.  
  - **Base ETH:** Expanded token list with **FDUSD**.  
  - **BNB (BSC) BEP20:** Now includes **USDe** and **FDUSD**.  
  - **Ethereum:** Token list updated to include **USDe** and **FDUSD**.  
  - **Optimism:** Added the **USDe** token.  
  - **Solana:** Expanded token list to include **VIRTUAL** and **FDUSD**.

- **User Interface & Experience:**  
  - Modernized layout components: several grid-based layouts have been converted to flex layouts with adjusted margins and spacing for enhanced responsiveness.
  - Updated error messaging and visual cues within the purchase module for better clarity when providers are unavailable.

- **Login & Security:**  
  - Revised login process in both standard and easy sign-in components:
    - Now checks for system time accuracy during blocked account scenarios.
    - Now D2FA pin is required to disable D2FA protection.

### Fixed
- **Styling & Layout Issues:**  
  - Corrected various styling inconsistencies in the Purchase and login components, ensuring a smoother and more consistent user experience.
  
- **Error Handling:**  
  - Improved handling of provider errors in the purchase flow.
  - Fixed login throttling behavior by enforcing proper lockout conditions and updating error notifications for time discrepancies.

## [8.13.0] - Powered by Flux

We are thrilled to announce Version 8.13.0 of our wallet, packed with new token additions, blockchain updates, and backend improvements. Here's what's new:

### Added
- **Solana Blockchain Tokens:** Added support for the following tokens on the Solana blockchain:
  - OFFICIAL TRUMP
  - Melania Meme
  - Dogelon Mars
  - JellfFishCoin
- **Kaspa KRC20 Token:** Introduced support for the **Baby Konan** token on the Kaspa blockchain.

### Updated
- **Avalanche Blockchain Implementation:** Enhanced the Avalanche blockchain integration for improved performance and compatibility.
- **Backend Updates:** Upgraded multiple backend packages and systems to ensure greater reliability, performance, and security.

We continue to focus on expanding functionality and delivering a seamless user experience. Stay tuned for more updates!

## [8.12.0] - Powered by Flux

We’re proud to introduce Version 8.12.0 of our wallet, focusing on extending blockchain support and enhancing user experience. Here's what’s new:

### Added
- **Telestai Blockchain and TLS Asset Support:** Full integration of the Telestai UTXO blockchain, including support for managing, sending, and receiving Telestai (TLS) assets.
- **Updated Translations:** Thanks to our community support we have updated translations for Italian and Indonesian languages

## [8.11.0] - Powered by Flux

We are excited to present Version 8.11.0 of our wallet, featuring new functionalities, critical fixes, and usability improvements. Here's what's new:

### Added
- **18-Word and 24-Word Seed Phrase Support:** Expanded seed phrase options to include 18-word and 24-word phrases for enhanced wallet security and flexibility.
- **Multiple Seed Account Support:** Removed the one seed account limit, enabling the management of multiple accounts within the wallet.
- **Legacy Account Option:** Introduced legacy account support with username/password options and BIP44 recommended accounts for streamlined account management.

### Updated
- **Account Synchronization:** Adjusted the sync account order for better organization and usability.
- **RVN Token List:** Updated the Ravencoin token list to include the latest assets.

### Fixed
- **Kadena Send Chain ID Visualization:** Resolved issues with visualizing chain IDs when sending transactions on the Kadena blockchain.
- **Kadena WalletConnect:** Fixed signing-related issues for a smoother WalletConnect experience.
- **XRP Minimum Balance:** Adjusted the minimum required XRP balance to 1.2 for compliance and functionality.
- **RVN Asset Sending:** Addressed bugs related to sending Ravencoin assets.
- **RVN Backend Improvements:** Implemented backend optimizations for improved performance and reliability.
- **Add Asset Dialog:** Fixed issues in the add asset dialog to ensure seamless asset management.

## [8.10.1] - Powered by Flux
We are excited to unveil Version 8.10.1 of our wallet, packed with exciting new features to broaden your crypto journey. Here's what's new:

### Fixed
- **Various Fixes:** Fixed kaspa sending issue on windows.

## [8.10.0] - Powered by Flux

We are excited to unveil Version 8.10.0 of our wallet, packed with exciting new features to broaden your crypto journey. Here's what's new:

### Added
- **Kaspa Blockchain Support (KRC20 Tokens):** We've expanded our support for the Kaspa blockchain, enabling management of KRC20 tokens. To kick things off, we've added two community favorites:
  - Kasper the Ghost of Kaspa
  - Nacho the 𐤊at

## [8.9.0] - Powered by Flux

We’re excited to unveil Version 8.9.0 of our wallet, packed with enhancements and new features to continue revolutionizing your crypto journey. Here's what’s new:

### Added
- **ZkSync Era Blockchain Support:** We’ve introduced support for the ZkSync Era blockchain, bringing cutting-edge scalability to your wallet. Supported tokens include:
  - ZkSync
  - USDT
  - USDC

### Fixed
- **Security Update:** Updated security configurations and packages.

## [8.8.5] - Powered by Flux

### Fixed
- **Various Fixes:** Fixed solana sending issue.

## [8.8.4] - Powered by Flux

### Fixed
- **Various Fixes:** Fixed swap sending issue for XRP and TON blockchains.

## [8.8.3] - Powered by Flux

### Fixed
- **Various Fixes:** Fixed swap native coin fee calculations and DAI price display for some networks.

## [8.8.2] - Powered by Flux

### Added
- **Three Protocol (THREE):** Introduced full support for the THREE Protocol ERC20 token.

## [8.8.1] - Powered by Flux

### Added
- **Offramp:** Improving moonpay support for selling assets for fiat.

### Fixed
- **UI:** Fixed some UI related issues that will stop automatic refresh of wallet.

## [8.8.0] - Powered by Flux

We are thrilled to announce Version 8.8.0 of our wallet, introducing groundbreaking features and enhancements that elevate your crypto experience. Here's what's new:

### Added
- **Crypto-to-Fiat Offramp:** Introducing off-ramp functionality, allowing you to seamlessly convert cryptocurrencies to fiat. This marks a new era in our wallet's capabilities. Only for supported countries.
- **NEAR Blockchain Support:** You can now manage assets on the NEAR blockchain, including:
  - USDC
  - USDT
- **WalletConnect Revamp:** We've completely overhauled WalletConnect integration to ensure a smoother experience and access to advanced features.
- **Hamster Kombat Token on TON Blockchain:** We've added support for the Hamster Kombat (HMSTR) token on the TON blockchain.

### Updated
- **UI/UX Enhancements in Purchase Section:** We've made significant improvements to the user interface and experience in the purchase section for more intuitive navigation and ease of use.

### Fixed
- **Security Update:** Updated security configurations and packages.

## [8.7.0] - Powered by Flux

Version 8.7.0 brings exciting new integrations, updates, and improvements designed to enhance your wallet’s functionality and user experience. Here’s what’s new:

### Added
- **Blast Blockchain Support:** We’ve introduced support for the Blast blockchain, allowing users to manage the following tokens:
  - Blast
  - WBTC (Wrapped Bitcoin)
  - WETH (Wrapped Ethereum)
  - USDB (USD Blast)
  
### Updated
- **Token Updates:** Ethos, Cronos, and FET Token specifications have been updated.
- **FullNode UI:** The FullNode interface has been revamped for a smoother and more intuitive user experience.
- **FullNode Binaries:** We’ve updated the binaries for several supported blockchains to enhance performance and compatibility, including:
  - Zcash
  - BitcoinZ
  - Groestlcoin

### Fixed
- **WalletConnect Enhancements:** Various improvements have been made to WalletConnect, including the ability to automatically disconnect sessions upon logging out for improved security and convenience.

## [8.6.2] - Powered by Flux (Windows Only)

### Fixed
- **Update Cert:** Updated windows signing certificate and process.

## [8.6.1] - Powered by Flux

### Fixed
- **Bug Fix:** Fixed a bug that was preventing sending transactions on polkadot and kusama networks.

## [8.6.0] - Powered by Flux

We are excited to introduce Version 8.6.0 of our wallet, packed with new features and critical fixes to further elevate your asset management experience. Here’s what’s new:

### Added
- **TON Blockchain Support:** We’ve added support for the TON blockchain, allowing users to manage the following tokens:
  - USDT
  - NOT
  - DOGS
- **WIF Token on Solana Blockchain:** Users can now manage the WIF token on the Solana blockchain directly through the wallet.
- **CSV Export Functionality (Mobile):** You can now export transaction history as CSV files in the mobile version of the app, simplifying record-keeping.
- **Extended Price Display Options:** We’ve expanded the ability to display asset prices in crypto, with the addition of SATS (Satoshis) and ETH as price display options.
- **Bittensor (TAO) Blockchain Support:** Added support for the Bittensor (TAO) blockchain, allowing users to manage TAO assets.
- **Optimism (OP) Network Support:** Optimism network is now supported, with the following tokens available:
  - OP
  - USDC.E
  - DAI
  - USDT
- **Revamped Monero Support:** We’ve introduced improved support for Monero by leveraging self-hosted infrastructure, providing more reliable transactions.

### Updated
- **CSV Output Location:** CSV files generated through the export function will now be saved directly to the user's Downloads folder for easier access.
- **Preparation for FLUX-BASE Snapshot:** We’ve laid the groundwork for the upcoming FLUX-BASE snapshot. Full functionality will become available in a future release, as announced.
- **Packages:** Various packages have been updated to improve security and performance.
- **Matic Renamed to POL:** The Matic network has been rebranded to POL, and the wallet reflects this update across all features.

### Fixed
- **Security Update:** Updated security configurations and packages.
- **WalletConnect QR Scanning (Mobile):** Fixed an issue that was preventing proper QR scanning of WalletConnect on mobile devices.

## [8.5.0] - Powered by Flux

We are thrilled to announce Version 8.5 of our wallet, bringing you new features and important fixes to enhance your experience and broaden your asset management capabilities. Here’s what’s new:

### Added
- **Alephium Blockchain Support:** We have added native support for the Alephium blockchain, allowing users to manage and transact with Alephium coin directly within the wallet.
- **Fantom Blockchain Support:** Users can now manage assets on the Fantom blockchain, with support for the following tokens:
  - USDC
  - USDC.E
  - DAI
- **New Tokens:** We've expanded our token support with the addition of the following tokens:
  - Bonk ERC20
  - Render ERC20
  - Brett BASE
- **UI Chain Indicator:** A new chain indicator icon has been added to the user interface to enhance the user experience by clearly displaying the blockchain a token belongs to.

### Fixed
- **BitPay Implementation Bug:** A bug in the BitPay integration that was preventing proper propagation has been resolved, ensuring smoother transactions.
- **Ripple (XRP) Transaction Fetching Issue:** We’ve fixed an issue that was causing problems in fetching Ripple (XRP) transactions, improving reliability.

### Updated
- **Node Binaries (Desktop):** The node binaries for the desktop version have been updated to the latest versions, ensuring compatibility and performance improvements.
- **Packages:** Various packages have been updated to improve security and performance.
- **Ravencoin Asset List:** The asset list for Ravencoin has been updated, providing the latest information for asset management.

## [8.4.2] - Powered by Flux
We are thrilled to announce Version 8.4 of our wallet, bringing you new features and important fixes to enhance your experience and broaden your asset management capabilities. Here’s what’s new:
### Fixed
- **Swap Token Inconsistency:** Resolved an issue that caused swaps to result in a smaller amount than requested.

### Added
- **Alephium ERC20 Support**: We are pleased to announce support for the Alephium ERC20 token.
- **Extended Swap UI**: We have added a feature that allows you to view and select zero-balance assets to preview swap rates.

## [8.4.1] - Powered by Flux
We are thrilled to announce Version 8.4 of our wallet, bringing you new features and important fixes to enhance your experience and broaden your asset management capabilities. Here’s what’s new:
### Fixed
- **Security Update**: Updated security configurations and packages.

## [8.4.0] - Powered by Flux
We are thrilled to announce Version 8.4.0 of our wallet, bringing you new features and important fixes to enhance your experience and broaden your asset management capabilities. Here’s what’s new:

### Added
- **Replace by Fee Functionality for Bitcoin and Litecoin:** Users can now take advantage of the replace by fee (RBF) feature for Bitcoin and Litecoin transactions, allowing for increased flexibility in managing transaction fees and confirmation times.
- **Arbitrum Chain Support:** We have added support for the Arbitrum chain, enabling users to manage assets on this layer-2 scaling solution for Ethereum. The supported tokens include:
  - ARB
  - USDC.E
  - DAI
  - USDT
- **New Tokens:** We've expanded our token support with the addition of the following tokens:
  - Pepe ERC20
  - Floki ERC20
  - Floki BEP20
  - Turbo ERC20

### Fixed
- **Broadcasting Cardano Transaction Issue:** A issue with Cardano that prevented sending from some accounts has been resolved, ensuring seamless transactions.
- **Improved Cardano Private Key Export:** The functionality for exporting private keys for Cardano has been improved, providing a more reliable and user-friendly experience.

## [8.3.1] - Powered by Flux

### Added
- **Added Spam Filter on NFTs:** We have introduced a spam filter on NFTs to prevent unwanted or malicious content from being displayed in your wallet.
### Changed
- **Rework of SignMessaage:** We have reworked the SignMessage feature to provide a more intuitive and user-friendly experience, making it easier to sign messages and verify ownership of your addresses.
- **Updated LUNAC backends:** We have updated the LUNAC backends ensuring a more reliable connection to the network.",

## [8.3.0] - Powered by Flux
We're excited to announce Version 8.3.0 of our wallet, featuring a range of significant updates and improvements aimed at enhancing your user experience and security. Here’s what’s new:

### Added
- **Bitcoin and Litecoin Taproot Accounts:** Users can now create and manage Taproot accounts for both Bitcoin and Litecoin, enhancing the privacy and efficiency of your transactions.
- **Bitcoin, Litecoin, and Digibyte Native Segwit Accounts:** We've added support for native Segwit accounts for Bitcoin, Litecoin, and Digibyte, offering lower transaction fees and improved processing times.
- **Karate Combat Token (ERC20):** The Karate Combat token has been added as an ERC20 token, expanding the range of assets you can manage within our wallet.

### Changed
- **Renaming of Bitcoin, Litecoin, and Digibyte P2PKH Accounts to Legacy:** To reflect industry standards and improve clarity, Bitcoin, Litecoin, and Digibyte P2PKH accounts have been renamed to legacy accounts.
- **Major Refactor on UTXO Coin Support:** We have undertaken a significant refactor of our UTXO coin support. This involves updating the underlying libraries, implementing additional security measures, and enhancing error reporting to provide a more robust and secure user experience.
- **Beldex Coin**: Beldex coin has been added with an updated implementation and upgraded infrastructure, providing improved performance and stability.

### Fixed
- **Various Minor Bug Fixes:** A range of minor bugs have been fixed to improve the overall user experience and ensure smoother operation of the wallet.

## [8.2.0] - Powered by Flux
We're excited to announce Version 8.2.0 of our wallet, featuring a range of significant updates and improvements aimed at enhancing your user experience and security. Here’s what’s new:

### Changed
- **Full Rework of UI/UX on the Security Section**: The security section has been completely redesigned, resulting in a more intuitive and user-friendly interface. This overhaul includes performance boosts and enhanced security measures, ensuring a safer and smoother experience for all users.
- **Introduction of FluxID**: We are pleased to introduce FluxID, an update from the previous ZelID system. FluxID brings improvements to our identity management capabilities, offering a better user experience.

### Added
- **Multiple EasyLogin Accounts**: Users now have the ability to enable and manage multiple EasyLogin accounts. This feature provides greater flexibility and control over your login credentials, making account management more convenient than ever.
- **New EasyLogin System with Strong Biometrics**: The new EasyLogin system now leverages strong biometrics wherever supported, providing an additional layer of security for your account. This system ensures that your login process is both secure and effortless.
- **BigNumber Support for UTXO Transactions**: We've implemented BigNumber support for UTXO transactions, ensuring higher accuracy and reliability in your transaction processes. This update enhances the precision of your transactions, making your digital asset management more dependable.
- **Backend Change for BitcoinCash to Blockbook**: To improve availability and stability, we have switched the backend for BitcoinCash transactions to Blockbook. This change ensures a more reliable and robust service for managing your BitcoinCash assets.
- **Buy Crypto Button**: A new 'Buy Crypto' button has been added to various sections within the wallet, aimed at increasing user ease and improving the overall experience. This feature simplifies the process of purchasing cryptocurrencies, making it more accessible for all users.
- **New Binance Smart Chain Contract for TrueUSD BEP20**: We have integrated the new Binance Smart Chain contract for TrueUSD BEP20. The previous contract will now be labeled as TrueUSD OLD BEP20, ensuring clear differentiation and easier management of your TrueUSD assets.

### Fixed
- **White Screen Bug Fix for FIO Naming Schema**: A bug that caused a white screen when interacting with the FIO naming schema has been fixed, ensuring a smoother and uninterrupted user experience.

## [8.1.1] - Powered by Flux
- Version 8.1.1 represents a major update to Zelcore, incorporating a range of enhancements, bug fixes, and performance improvements. Key updates include a enhanced swaps user interface, enhanced Wallet Connect integration, and various optimizations to boost overall efficiency and user experience.

### Changed
- Monero Support: Added new dynamic monero endpoint. Additionally added monero support sunsetting notice.
- Sending Support: Reworked Kaspa, Stellar, Onotlogy and Terra sending to support BigNumbers.

### Fixed
- User Interface Enhancements: Corrected some UI/UX issues.


## [8.1.0] - Powered by Flux
- Version 8.1.0 represents a major update to Zelcore, incorporating a range of enhancements, bug fixes, and performance improvements. Key updates include a enhanced swaps user interface, enhanced Wallet Connect integration, and various optimizations to boost overall efficiency and user experience.

### Changed
- User Interface Enhancements: Comprehensive enhancement of the swaps UI/UX to improve user interaction and visual appeal.
- Wallet Connect Integration: Enhanced integration features a more seamless connection process and improved handling of transactions, fostering a smoother user experience.
- Testnet Support: Zelcore now supports Sepolia Base Testnet. Support for Goerli Testnet has been removed.
- Full Node: Full Node binaries updated to latest versions.
- RVN Assets: RVN asset list updated.
- Fees: Base chain fees adjusted.
- Performance Optimizations: Significant under-the-hood enhancements have been implemented, resulting in quicker load times and more fluid transactions.

### Added
- Improved Cardano Support: Updates to the Cardano wallet include better transaction processing and enhanced send functionality.
- General Improvements: Across-the-board refinements have been made to sharpen feature performance and ensure a secure, seamless wallet experience.

### Fixed
- XRP Swaps: Resolved an issue causing XRP swaps to fail.
- Algorand Transactions: Fixed a bug that was hindering the receipt of Algorand coins during swaps.
- Wallet Connect Security: Corrected a security rule that was erroneously rejecting certain Wallet Connect transactions.

## [8.0.0] - Powered by Flux
- We're thrilled to introduce Version 8.0.0 of our wallet, marking a significant milestone with a complete rebranding and the introduction of new features designed to enhance your digital asset management experience. Version 8.0.0 embodies our commitment to innovation, security, and user satisfaction. Here's what's new:

### Changed
- Brand New Look: Version 8.0.0 unveils a fresh, modern rebranding with new logos and color schemes, aligning with our vision for the future of digital wallets. Our user interface has been revitalized, offering a more intuitive and engaging experience.

### Added
- BIP39 Mnemonic Seed Phrases: Enhancing the security and recovery options, we've integrated support for BIP39 mnemonic seed phrases. This feature allows for the generation of a human-readable seed phrase, offering an additional layer of security and an easier way to restore your wallet.
- BIP44 Address Support: Adapting to the growing needs of our users, Version 8.0.0 introduces support for BIP44 addresses, enabling a more organized and hierarchical structure for managing multiple coins and accounts from a single seed.
- Enhanced User Support: With the launch of our revamped platform, we're introducing new support channels and resources, making it easier for you to get the help you need, when you need it.
- It is now possible to claim all parallel asset mining rewards directly to Flux main chain in one action
- Performance Optimizations: Our team has made significant under-the-hood improvements, resulting in faster load times and smoother transactions.
- General Improvements: Across the board, we've fine-tuned our software, refining features to offer you a seamless and secure wallet experience.

### Fixed
- Transaction Fee Adjustments: We've refined our fee calculation algorithms to ensure more accurate and fair transaction fees, preventing dropped transactions and overcharges.
- Stability and Reliability Enhancements: Fixed critical issues that affected wallet performance and transaction success rates. Expect a more stable and dependable service.
- UI and Functional Fixes: Addressing your feedback, we've made various minor styling and functional fixes to improve usability and aesthetics.
- Updated Polkadot endpoints to v2

## [7.13.0] - Apis dorsata breviligula

### Changed
- Version 7.13 comes with new load balanced rates endpoints and other backend improvements.

### Fixed
- Change in solana fee calculation to avoid droping transactions
- Fixed issue with fees being too high when sending Clore.AI
- Various minor updates of other packages
- Various minor styling & functional fixes

### Added
- Added more robust error messages for failed transactions
- Performance optimizations
- General improvements

## [7.12.0] - Apis dorsata breviligula

### Changed
- Version 7.12 comes with new load balanced endpoints. Reworked zelcore+ subscription system. Revamped X (former twitter) news source.

### Fixed
- Fixed Ripple XRP CSV export
- Added minimoum send amount check for Clore.AI
- Added checks for sending amount decimal places
- Various minor updates of other packages
- Various minor styling & functional fixes

### Added
- New load balanced endpoints
- Reworked zelcore+ subscription system
- Revamped X (former twitter) news source
- Added Indonesian language (Bahasa Indonesia) support
- EOS is now marked as deprecated. Support for EOS might be removed in the future.
- Full Node binaries updated to latest versions
- RVN asset list updated
- Performance optimizations
- General improvements

## [7.11.0] - Apis dorsata binghami

### Fixed
- Now Order ID in swap history is displayed correctly
- Dashboard is now showing the correct amount of PA's earned
- Flux full node wallet bin for Mac OS have been fixed
- Temporary removed X (former twitter) from news sources. Our team is working fixing the issue with the source
- Various minor updates of other packages
- Various minor styling & functional fixes

### Added
- Updated proxy server implementation. Now it's more stable and reliable.
- Bumped fees on Fio protocol to match the network requirements
- Updated Neo Legacy implementation. Neo Legacy is now deprecated and support might be dropped in the future version.
- Firo Full Node Wallet bins Updated to v0.14.13.2
- Ripple and Ethereum implementation updated to the latest version.
- Added a new weak password warning dialog when syncing a new account
- Performance optimizations
- General improvements

## [7.10.0] - Apis dorsata dorsata

### Fixed
- Updated Cardano package and its implementation including backends
- Various minor updates of other packages
- Various minor styling & functional fixes

### Added
- Flux Full Node Wallet bins Updated to v7.1.0
- Firo Full Node Wallet bins Updated to v0.14.13.1
- Komodo Full Node Wallet bins Updated to v0.8.1
- Digibyte Full Node Wallet bins Updated to v7.17.3
- Removing Portfolio Tracker from the app. We are looking for a new solution to integrate with the app. We are sorry for the inconvenience.
- Performance optimizations
- General improvements

## [7.9.0] - Apis cerana skorikovi

### Fixed
- Updated Solana package and its implementation
- Updated SPL package and its implementation
- Updated Ergo implementation
- Updated Monero implementation
- Updated Ethereum common implementation
- Updated Stellar implementation
- Updated Substrate implementation
- Updated Tron implementation
- Various minor updates of other packages
- Various minor styling & functional fixes

### Added
- Performance optimizations
- General improvements

## [7.8.0] - Apis cerana nuluensis
### Fixed
- Fixed sinovate transactions and balance not showing up in the wallet
- Fixed issue with kadena transactions missing on some tokens
- Various minor styling & functional fixes

### Added
- Kadena coin and tokens' detailed view now displays balances on account and chain selection dropdowns
- Tokens and coins will now be automatically added to the wallet after swap, fusion swap, parallel claiming, or snapshot claiming
- Rework of Kadena transactions with new custom endpoint and flux hosted decentralized API
- Removed EVE and Legacy Swap from the Apps page.
- Performance optimizations
- General improvements

## [7.7.6] - Apis cerana javana
### Fixed
- Fixed bug that caused Zelcore to not start on Linux distros

## [7.7.5] - Apis cerana javana
### Fixed
- Fixed imported wallet delete process not working
- Fixed solana phantom private key import issue

### Added
- Updating bitcoinz daemon to latest version in full node
- Rebranding KADDEX to EckoDEX

## [7.7.4] - Apis cerana javana
### Fixed
- Reversed Hardware Wallet lib updates because of lack of binaries for windows.

## [7.7.3] - Apis cerana javana
### Fixed
- Updating to latest Electron version. Zelcore will no longer support macOS 10.13 (High Sierra) and macOS 10.14 (Mojave)

### Added
- Updating Flux Full Node Wallet Binnaries to version 7.0.1

## [7.7.2] - Apis cerana javana
### Fixed
- Updated XRP implementation to fix issue with balance and transactions not showing
- Fixed issue with ERC20 token transactions appearing as ETH transactions
- Fixed issue of FLUXID browser button not openning FLUXID signing dialog in UBUNTU 22

## [7.7.1] - Apis cerana javana
### Added
- Added suppport for Clore.AI blockchain

## [7.7.0] - Apis cerana javana
### Added
- Added support for BASE L2 Ethereum blockchain mainnet
- Added support for BASE L2 Ethereum blockchain on walletconnect integration
- Added support for FLUX's newest PA (FLUX-BASE)
- Added support for BASE L2 Ethereum blockchain goerli testnet
- Performance optimizations
- General improvements

### Changed
- Version 7.7 comes full support for BASE L2 Ethereum blockchain further more support for FLUX's newest PA (FLUX-BASE)!

### Fixed
- Improved wallet connect integration
- Various minor styling & functional fixes

## [7.6.0] - Apis cerana indica
### Added
- Added fusion stable bridge. The first pair is available. USDC ERC20 <-> zUSD KDA
- Added Kadena support in Wallet Connect
- Expanded Ethereum testnets support in Wallet Connect and tokens
- Performance optimizations
- General improvements

### Changed
- Version 7.6 comes with fusion stable bridge, wallet connect for kadena and ethereum testnets support!

### Fixed
- Various minor styling & functional fixes

## [7.5.0] - Apis cerana cerana
### Added
- Added wallet connect support for Solana
- Added search option to swap token list
- Reworked Kadena transaction fetching to improve performance
- Reworked solana nft sending to use latest metaplex standard
- Performance optimizations
- General improvements

### Changed
- Version 7.5 comes with wallet connect for solana and rework of kadena transactions!

### Fixed
- Fixed issue with swap
- Various minor styling & functional fixes

## [7.4.1] - Apis cerana
### Fixed
-- Fixed issue with some utxo swap transactions being stuck in pending state,
## [7.4.0] - Apis cerana
### Added
- Added support for Binance Smart Chain, Polygon, Avalanche C in walletconnect V2 protocol.
- Applied UI refresh to dialog buttons.
- Updated Flux and Dash binaries to latest version..
- Supporting infrastructure improvements.
- Updates to backend services.
- RVN asset list updated.
- Performance optimizations.
- General improvements.

### Changed
- Version 7.4 comes with updated wallet connect V2 chain additions and dialog buttons UI refresh!

### Fixed
- Improvements to walletconnect V2 protocol.
- Fixed issue with Avalanche transaction history.
- Various minor styling & functional fixes

## [7.3.3] - Apis andreniformis
### Fixed
-- Improvements to walletconnect V2 protocol,
-- Improvements to swap UI and functionality

---
## [7.3.2] - Apis andreniformis
### Fixed
-- Fixes transaction amount not displayed

---
## [7.3.1] - Apis andreniformis
### Fixed
-- Fixes swap and fusion fee calculation issue

---

## [7.3.0] - Apis andreniformis

### Added
- Added support for walletconnect V2 protocol. This allows Zelcore to connect to various DEXes and other services that support walletconnect V2 protocol. This is a major step forward in Zelcore's DeFi integration.
- Complete rework of swap feature (Old exchange). This allows for more flexibility and better user experience. This is a major step forward in Zelcore's UX.
- Updated ethereum transaction library to latest version.
- Updated Groestlecoin and Komodo binaries to latest version.
- General improvements in Hardware Wallets implementation.
- Supporting infrastructure improvements.
- Updates to backend services.
- RVN asset list updated.
- Performance optimizations.
- General improvements.

### Changed
- Version 7.3 comes with updated swap UI and wallet connect V2!

### Fixed
- Fixes Kaspa sending.
- Various minor fixes.

---

## [7.2.0] - Hardware Wallet - 2023-06-19

### Added

- Added support for NFTs on the polygon blockchain.
- Added Ledger Hardware Wallet View support for: Avalanche C-chain, Algorand, Cardano, Ontology, Kusmama, Groestlecoin, EOS, Neo.
- Added Trezor Hardware Wallet View support for: Cardano, Firo, Ripple, BNB (BEP2), EOS, Komodo, Stellar Lumens, and Tezos.
- General improvements in Hardware Wallets implementation.
- Supporting infrastructure improvements.
- Updates to backend services.
- RVN asset list updated.
- Performance optimizations.
- General improvements.

### Fixed

- Fixes hovering coloring issue.
- Various minor fixes.

### Info

- Version 7 marks a new era as Zelcore onboards major hardware wallets. Enjoy Ledger and Trezor implementation!

---
# Changelog

This file contains all the major changes and updates in each version of the project.

## [7.1.3] - 2023-06-03 - "Hardware Wallet"
### Added
- Hardware Wallet support for: BTX, DOGE, DGB, ZEC, RVN, VTC, BNB-BEP2
- General improvements in Hardware Wallets implementation
- Supporting infrastructure improvements
- Updates to backend services
- Showing zero balances is now turned on by default
- Showing zero balances now remembers the state
- Updates default assets
- RVN asset list updated
- Performance optimizations
- General improvements

### Fixed
- Hovering coloring issue
- Ledger confirmation inputs
- XRP sending issue
- Transaction history on a few assets
- Various minor fixes

### Info
- Version 7 marks the a new era as Zelcore onboards major hardware wallets. Enjoy Ledger and Trezor implementation!

---
