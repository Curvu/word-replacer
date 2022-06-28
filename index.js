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

        inject('injectionID', messages, 'sendMessage', (args) => {
            var saved = this.settings.get('save', '');
            while (saved.includes('"')) saved = saved.replace('"', '');
            while (saved.includes('|')) saved = saved.replace('|', ',');
            var words = saved.split(',');
            if (words.length % 2 != 0) return args; // Prevent to do like "old","new","old"|"new","old"
            for (var i = 0; i < words.length; i += 2) { // format: "old","new"|"old","new"|"old","new"
                while (args[1].content.includes(words[i])) {
                    args[1].content = args[1].content.replace(words[i], words[i+1]);
                }
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