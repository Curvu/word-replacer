const { React } = require('powercord/webpack');
const { TextInput } = require('powercord/components/settings');
const { Button, Text } = require('powercord/components');

// This is the component that user will see
module.exports = class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toSave: '',
            saved: [],
        }
    }

    render() {
        return (
            <div>
                <TextInput
                    note={'Type words that you want to be replaced here'}
                    placeholder={'Example: "pc"'}   
                    required={false}
                    onChange={str => this.setState({ toSave: str })}
                >
                    Add word
                </TextInput>
                <Button onClick={this.onPressingSave()} >
                    Save
                </Button>
                <Text>
                    List: {this.state.saved.join(', ')}
                </Text>
            </div>
        )
    }

    onPressingSave() {
        // console.log('Nop')
        if (this.state.toSave.length > 0) {
            this.setState({ toSave: this.state.saved.push(this.state.toSave) });
            // console.log('Yep');
        }
    }

}
