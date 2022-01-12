# **Disconomy** - a roleplay economy bot for Discord

[![invitation](https://img.shields.io/badge/Invite%20me-to%20your%20server-738ADB?logo=discord&logoColor=white)](https://discord.com/api/oauth2/authorize?client_id=925136385290153984&permissions=274877908992&scope=applications.commands%20bot) ![GitHub tag main](https://img.shields.io/github/v/tag/stettdev/disconomy?label=main) ![GitHub last commit](https://img.shields.io/github/last-commit/stettdev/disconomy) [![CodeFactor](https://www.codefactor.io/repository/github/stettdev/disconomy/badge)](https://www.codefactor.io/repository/github/stettdev/disconomy)

A Discord bot created for administrators of RP servers to provide them with a playable economy with bank accounts, shops and payments. It's focused on the role-playing aspect of the server rather than mechanical gaming and grind - it's flexible and easy to use for less knowledgeable players.

**!!! DISCLAIMER:** Current version of Disconomy is not feature-complete, there will be bugs, issues, etc.

## **Table of contents**

---

* [Technologies](#technologies)
* [Setup](#setup)
* [How to use it?](#how-to-use-it)
  * [Setup commands](#setup-commands)
  * [Player-related commands](#player-related-commands)
  * [Bank account & money transfers](#bank-account--money-transfers)
  * [Purchases & payments](#purchases--payments)
* [Bot permissions](#bot-permissions)
* [Contact the developer](#contact-the-developer)

---

## **Technologies**

[![JavaScript](https://img.shields.io/badge/javascript-ES2021-f7df1e?logo=javascript&logoColor=fff)](https://en.wikipedia.org/wiki/ECMAScript) [![Node.js](https://img.shields.io/badge/node.js-16.13.1-3C873A?logo=node.js&logoColor=fff)](https://www.nodejs.org/) [![Discord.js](https://img.shields.io/badge/discord.js-v13-738ADB?logo=discord&logoColor=fff)](https://discord.js.org)

JavaScript and Node.js seemed to be the best choice due to previous experience developing in these technologies. Discord.js is a well-written module with vast and clear documentation which allowed understanding it and writing suitable code.

[![Sequelize](https://img.shields.io/badge/Sequelize-v6-03AFEF?logo=Sequelize&logoColor=fff)](https://www.sequelize.org/) [![MySQL](https://img.shields.io/badge/MySQL-8.0-F29111?logo=mySQL&logoColor=fff)](https://www.mysql.com/)

This was the first-time use of Sequelize in a project. It's a surprisingly complex ORM for SQL database solutions but the documentation explains everything well and the project was developed rather quickly using it.

## **Setup**

* [Invite](https://discord.com/api/oauth2/authorize?client_id=925136385290153984&permissions=274877908992&scope=applications.commands%20bot) the bot to your server. It will display which permissions are required for it to work.
* Once it arrives, you can configure initial settings via [commands](#setup-commands). User is required to have Administrator permissions to set up the bot.

## **How to use it?**

Disconomy operates using slash ("/") commands. It allows players to quickly find commands without knowledge about specific prefix character for the bot or searching through "help" command as all the commands are easily scrollable in Discord input field.

**!!! DISCLAIMER:** If you use any of the commands from this bot - a player account will be created to assist in this and further commands regarding your character. Player account is identified by user id and guild id in combination to allow players to join different guilds/servers and have accounts on them separated from each other.

### **Setup commands**

[ IN PROGRESS ]

### **Player-related commands**

[ IN PROGRESS ]

### **Bank account & money transfers**

Use `/account open` to **create a new bank account (only one per player).
If you need to check how much money your account has, use `/account balance` command.
The `/account close` command will close the account. All funds in the account will be gone as well.

To transfer money between bank account and player's "wallet" you can use `/account deposit` and `/account withdraw` to put money in and take money from the bank account accordingly.

For transfers between players you can use `/account transfer <@player> <amount>` command. Specify the recipient with mention `@player` and the `amount` of money you'd like to transfer to them. You cannot request a money transfer from other players.

Checks are in place to ensure player cannot transfer more money than they have (neither to other player nor between account and wallet).

### **Purchases & payments**

[ IN PROGRESS ]

## **Bot permissions**

* Send messages
* Send messages in Threads

## **Contact the developer**

The preferred way of contact is an email or through the community on Discord server linked below.

[![Email](https://img.shields.io/badge/email-contact@stett.dev-731C7F?logo=minutemailer&logoColor=fff)](mailto:contact@stett.dev) [![Discord](https://img.shields.io/discord/883358379869896784?color=%237289da&label=join&logo=discord&logoColor=%23ffffff)](https://discord.gg/kfTHe77twD)

---

Copyright 2021 &copy; **Christopher Gocek**
