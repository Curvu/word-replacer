const { React } = require('powercord/webpack');
const { TextInput } = require('powercord/components/settings');
const { Button, Text } = require('powercord/components');

// This is the component that user will see
module.exports = class Settings extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <TextInput
                    required={true}
                    note={'Example: "rofl","lmao"|"ping","pong"'}
                    defaultValue={this.props.getSetting('save', '')}
                    onChange={str => this.props.updateSetting('save', str)}
                >
                    Replace
                </TextInput>
            </div>
        )
    }
}
