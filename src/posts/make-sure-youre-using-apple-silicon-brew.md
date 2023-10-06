---
title: Steps to make sure you're using Apple Silicon brew instead of Rosetta
description: 
date: '2023-01-31'
created: 2023-01-31
categories: [macos, apple-silicon]
published: true
---

I recently figured out I had been using the Rosetta version of VS Code. I am not sure how much better the performance is now with the Apple Silicon version, but I started looking around for ways to eliminate Rosetta from my system. I still had a bunch of things installed through [Homebrew](https://brew.sh/). Here are the steps to make sure you're using the Apple Silicon version of both brew and everything you had installed before.

## Check if you're using Rosetta

```zsh
which brew 
```

That should return:

```zsh 
/opt/homebrew/bin/brew 
```

if you're using the Apple Silicon version. If it returns:

```zsh
/usr/local/bin/brew
``` 

then you're using the Rosetta version. If you're using the Rosetta version, you can check if you have the Apple Silicon version installed by running 
```zsh
arch -x86_64 brew --version
``` 

If you get a version number, you have the Apple Silicon version installed. Then make sure to update your path, as described in this [Github issue](https://github.com/Homebrew/discussions/discussions/938):

Put `eval "$(/opt/homebrew/bin/brew shellenv)" ` in your ~/.zprofile.

## Have brew output everything installed with Rosetta

For CLI tools:
```zsh
/usr/local/bin/brew brew list 
```

and for GUI apps:
 
 ```zsh
/usr/local/bin/brew list --cask 
```

## Output those to a Brewfile

```zsh
/usr/local/bin/brew bundle dump
```

## Install those items with Apple Silicon brew

```zsh
brew bundle --file Brewfile
```

## Uninstall the Rosetta brew
From the [official instructions](https://github.com/Homebrew/install#uninstall-homebrew), but modified to ensure you're running the script with Rosetta:

```zsh
arch -x86_64 /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/uninstall.sh)"
```

Done.