This creates an NFT drop using the metaplex sdk

The reason the private_converter.ts exists is to help convert the private key of my phantom wallet to a bs58
string so I can create a file system wallet to use in the CLI of my local machine

I chose to do the heavy lifting rather than use an online converter because I just didn't want to risk exposing my private key on the internet