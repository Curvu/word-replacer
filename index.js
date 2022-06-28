const { messages } = require('powercord/webpack');
const { Plugin } = require('powercord/entities');
const { inject, uninject } = require('powercord/injector');

const Settings = require('./components/settings');
module.exports = class WordChanger extends Plugin {
    startPlugin() {
        powercord.api.settings.registerSettings(this.entityID, {
            category: this.entityID,
            label: 'Word Changer',
            render: Settings
        })

        powercord.api.commands.registerCommand({
            command: 'currentChannelId',
            description: 'Replace words like "ping" with "pong"',
            usage: '{c} [...message]',
            executor: (args) => ({
                send: false,
                result: `Pong!`
            })
        })

        inject('injectionID', messages, 'sendMessage', (args) => {
            console.log(args[1].content);
            if (args[1].content.includes('ping')) {
                args[1].content = args[1].content.replace('ping', 'pong');
            }
            return args;
        }, true);
    }


    pluginWillUnload() {
        uninject('injectionID');
        powercord.api.settings.unregisterSettings(this.entityID);
        powercord.api.commands.unregisterCommand('ping');
    }
}