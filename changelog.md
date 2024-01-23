
# Changelog

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
- Fixed issue of ZELID browser button not openning ZELID signing dialog in UBUNTU 22

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
-- Improvements to swap UI and functionality",

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
