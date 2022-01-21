const Buttons = require('../modules/buttons');
const Embeds = require('../modules/embeds');

const id = 'checkBalanceBtn';

module.exports = {
  customId: id,
  button: Buttons.Templates.primaryButton(`${id}`, 'Account Balance'),
  privateResults: true,
  async onClick(interaction) {
    // Q: Do we need to know user right now?
    // const guild = interaction.guildId;
    // const user = interaction.user.id;

    const message = Embeds.Templates.infoEmbed('HELLO AGAIN');

    return interaction.editReply({ embeds: [message] });
  },
};
