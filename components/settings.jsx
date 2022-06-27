const { React } = require('powercord/webpack');
const { TextInput } = require('powercord/components/settings');

// This is the component that user will see
module.exports = class Settings extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <TextInput
                    onChange={val => this.props.updateSettings('settingToSave', val)}
                    defaultValue={this.props.getSetting('settingToSave', 'defaultValue')}
                    required={false}
                    disabled={false}
                    note={'This is a note'}
                >
                    Settings Field
                </TextInput>
            </div>
        )
    }
}
