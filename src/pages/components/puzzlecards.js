import React, { Component } from 'react';
import { Card, Button } from 'antd';
export default class PuzzleCardsPage extends Component {
    constructor(props) {
        super(props);
        this.addNewCard = () => {
            this.setState((prevState) => {
                const prevCardList = prevState.cardList;
                this.counter += 1;
                const card = {
                    id: this.counter,
                    setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
                    punchline: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                };
                return {
                    cardList: prevCardList.concat(card),
                };
            });
        };
        this.counter = 100;
        this.state = {
            cardList: [
                {
                    id: 1,
                    setup: 'Did you hear about the two silk worms in a race?',
                    punchline: 'It ended in a tie',
                },
                {
                    id: 2,
                    setup: "What happens to a frog's car when it breaks down?",
                    punchline: 'It gets toad away',
                },
            ],
        };
    }
    render() {
        return (React.createElement("div", null,
            this.state.cardList.map((card) => {
                return (React.createElement(Card, { key: card.id },
                    React.createElement("div", null,
                        "Q: ",
                        card.setup),
                    React.createElement("div", null,
                        React.createElement("strong", null,
                            "A: ",
                            card.punchline))));
            }),
            React.createElement("div", null,
                React.createElement(Button, { onClick: this.addNewCard }, " \u6DFB\u52A0\u5361\u7247 "))));
    }
}
//# sourceMappingURL=puzzlecards.js.map