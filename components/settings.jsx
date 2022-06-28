const { React } = require('powercord/webpack');
const { TextInput } = require('powercord/components/settings');
const { Button, Text } = require('powercord/components');

// This is the component that user will see
module.exports = class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            settingToSave: '',
            settingsSaved: [],
        }
    }

    render() {
        const onPressingSave = () => {
            if (length(this.state.settingsSaved) > 0) {
                this.setState({ settingsSaved: settingsSaved.push(this.state.settingToSave) });
            }
        }

        return (
            <div>
                <TextInput
                    note={'Type words that you want to be replaced here'}
                    placeholder={'Example: "pc"'}   
                    required={false}
                    onChange={val => this.setState({ settingToSave: val })}
                >
                    Add word
                </TextInput>
                <Button onPress={onPressingSave}>
                    Save
                </Button>
                <Text>
                    {this.state.settingsSaved.join(', ')}
                </Text>
            </div>
        )
    }
}
