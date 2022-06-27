const { getModule } = require('powercord/webpack');
const { Plugin } = require('powercord/entities');

const Settings = require('./components/settings');

getModule.exports = class WordChanger extends Plugin {
    startPlugin() {
        powercord.api.settings.registerSettings(this.entityID, {
            category: this.entityID,
            label: 'Word Changer',
            render: Settings
        })

        powercord.api.commands.registerCommand({
            command: 'currentChannelId',
            description: 'Replace words like "ping" with "pong"',
            usage: 'wordchanger',
            executor: (args) => ({
                send: false,
                result: `Pong!`
            })
        })

        inject('injectionID', messages, 'sendMessage', (args) => {
            if (args[0].content.includes('ping')) args[0].content = args[0].content.replace('ping', 'pong');
            return args;
        }, true);
    }


    pluginWillUnload() {
        uninject('injectionID');
        powercord.api.settings.unregisterSettings('ping-pong');
        powercord.api.commands.unregisterCommand('ping');
    }
}