module.exports = {
  name: 'guildMemberAdd',
  once: true,
  execute: (member) => {
    console.info(`New user joined the server.\n
      USER: ${member.tag}\n
      SERVER: ${member.guild.name} (${member.guild.id})`);
  },
};
