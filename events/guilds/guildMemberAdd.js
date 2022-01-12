module.exports = {
  name: 'guildMemberAdd',
  once: true,
  execute: (member) => {
    console.info(`${member.tag} joined the server.\n`
        + `SERVER: ${member.guild.name} (${member.guild.id})`);
  },
};
