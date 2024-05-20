
# Changelog

## [8.1.2] - Powered by Flux
- Version 8.1.2 represents a major update to Zelcore, incorporating a range of enhancements, bug fixes, and performance improvements. Key updates include a enhanced swaps user interface, enhanced Wallet Connect integration, and various optimizations to boost overall efficiency and user experience.

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
