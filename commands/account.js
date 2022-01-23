const { SlashCommandBuilder, SlashCommandSubcommandBuilder, SlashCommandMentionableOption } = require('@discordjs/builders');
const Embeds = require('../modules/embeds');

// const mentionableContact = new SlashCommandMentionableOption()
//   .setName('contact')
//   .setDescription('transfer contact')
//   .setRequired(true);

const subcommands = [];

module.exports = {
  data: new SlashCommandBuilder()
    .setName('account')
    .setDescription('BANK'),
  privateResults: true,
  async execute(interaction) {
    const subcommand = subcommands.find(
      (command) => command.data.name === interaction.options.getSubcommand(),
    );
    if (subcommand) subcommand.execute(interaction);
  },
};
