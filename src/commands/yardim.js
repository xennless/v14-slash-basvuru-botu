const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, PermissionFlagsBits } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders')
const db = require('croxydb')
module.exports = {
    data: new SlashCommandBuilder()
        .setName("yardim")
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles)
        .setDescription("[ONLY AUTHORITIES] Başvuru sisteminin ile bilgi verir"),
        run: async (client, intreaction) => {
            const embed = new EmbedBuilder()
                .setTitle('Başvuru Sistemi | Yardım Menüsü')
                .setDescription('*Değerli yetkili aşağıdaki komutları kullanarak yardım alabilirsiniz?*')
                .setColor(0x0300bf)
                .setFields(
                    { name: "Başvuru sistemini kurmak için", value: "```/basvuru-kur```" },
                    { name: "Başvuru duyuru kanalını ayarlamak için", value: "```/duyuru-kanal```" },
                    { name: "Başvuru onay kanalını ayarlamak için", value: "```/onay-kanal```"},
                    { name: "Başvuru ayarlarını sıfırlamak için", value: "```/ayarları-sıfırla```"}
                )
                .setFooter({ text: "Coder 🧡 XennLess#2712" })

            intreaction.reply({embeds: [embed], ephemeral: true})
        }
}
