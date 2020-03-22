import React from 'react';
import { Panel, PanelHeader, View, Epic, Tabbar, TabbarItem, PanelHeaderSimple } from '@vkontakte/vkui';
import Icon28MoneyRequestOutline from '@vkontakte/icons/dist/28/money_request_outline';
import Icon28Notifications from '@vkontakte/icons/dist/28/notifications';
import Icon28More from '@vkontakte/icons/dist/28/more';
import Icon28GlobeOutline from '@vkontakte/icons/dist/28/globe_outline';
import '@vkontakte/vkui/dist/vkui.css'


class Paneles extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeStory: 'myAccount'
        };
        this.onStoryChange = this.onStoryChange.bind(this);
    }

    onStoryChange(e) {
        this.setState({ activeStory: e.currentTarget.dataset.story })
    }

    render() {

        return (

            <Epic activeStory={this.state.activeStory} tabbar={
                <Tabbar>
                    <TabbarItem
                        onClick={this.onStoryChange}
                        selected={this.state.activeStory === 'myAccount'}
                        data-story="myAccount"
                        text="Мои счета"
                    ><Icon28MoneyRequestOutline /></TabbarItem>
                    <TabbarItem
                        onClick={this.onStoryChange}
                        selected={this.state.activeStory === 'market'}
                        data-story="market"
                        text="Рынок"
                    ><Icon28GlobeOutline /></TabbarItem>
                    <TabbarItem
                        onClick={this.onStoryChange}
                        selected={this.state.activeStory === 'notifications'}
                        data-story="notifications"
                        text="Уведомлен."
                    ><Icon28Notifications /></TabbarItem>
                    <TabbarItem
                        onClick={this.onStoryChange}
                        selected={this.state.activeStory === 'more'}
                        data-story="more"
                        text="Ещё"
                    ><Icon28More /></TabbarItem>
                </Tabbar>
            }>
                <View id="myAccount" activePanel="myAccount">
                    <Panel id="myAccount">
                        <PanelHeader>Мои счета</PanelHeader>
                    </Panel>
                </View>
                <View id="market" activePanel="market" >
                    <Panel id="market">
                        <PanelHeader>Рынок</PanelHeader>
                    </Panel>
                </View>
                <View id="notifications" activePanel="notifications">
                    <Panel id="notifications">
                        <PanelHeader>Уведомления</PanelHeader>
                    </Panel>
                </View>
                <View id="more" activePanel="more">
                    <Panel id="more">
                        <PanelHeader>Ещё</PanelHeader>
                    </Panel>
                </View>
                </Epic>
                
        )
    }
}
export default Paneles;