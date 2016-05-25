/* global io:false */
'use strict';
import React from 'react';
import Tweets from './Tweets';
import Loader from './Loader';
import NotificationBar from './NotificationBar';

class TweetsApp extends React.Component {

    static get propTypes() {
        return {
            tweets: React.PropTypes.array.isRequired,
        };
    }

    constructor(props) {
        super(props);
        this.state = {
            tweets: props.tweets,
            count: 0,
            page: 0,
            paging: false,
            skip: 0,
            done: false,
        }; 
    }

    componentDidMount() {
        const self = this;
        // Initialize socket.io, loaded via script on page
        const socket = io.connect();

        socket.on('tweet', function(data) {
            self.addTweet(data);
        });

        // Attach scroll event to the window for infinite scroll
        window.addEventListener('scroll', this.checkWindowScroll.bind(self));
    }

    // componentWillReceiveProps(newProps, oldProps) {
    //     this.setState(this.getInitialState(newProps));
    // }

    getPage(page) {
        const request = new XMLHttpRequest();
        const self = this;
        request.open('GET', 'page/' + page + "/" + this.state.skip, true);
        request.onload = function() {
            const SUCCESS = 200;
            const FAILURE = 400;

            if (request.status >= SUCCESS && request.status < FAILURE) {
                self.loadPagedTweets(JSON.parse(request.responseText));
            } else {
                // Not paging, paging complete
                self.setState({
                    paging: false,
                    done: true,
                });
            }
        };

        // Fire!
        request.send();
    }

    addTweet(tweet) {
        const updated = this.state.tweets;
        const count = this.state.count + 1;
        const skip = this.state.skip + 1;

        // Add tweet to the beginning of the tweets array
        updated.unshift(tweet);

        this.setState({
            tweets: updated,
            count: count,
            skip: skip,
        });
    }

    showNewTweets() {
        const updated = this.state.tweets;

        updated.forEach(function(tweet) {
            tweet.active = true;
        });

        // Set application state (active tweets + reset unread count)
        this.setState({
            tweets: updated,
            count: 0,
        });
    }

    loadPagedTweets(tweets) {
        const self = this;
        const LATENCY = 500;

        if (tweets.length > 0) {
            const updated = this.state.tweets;

            tweets.forEach(function(tweet) {
                updated.push(tweet);
            });

            // simulate network latency
            setTimeout(function() {
                self.setState({
                    tweets: updated,
                    paging: false,
                });
            }, LATENCY);

        } else {
            this.setState({
                done: true,
                paging: false,
            });
        }
    }

    // Method to check if more tweets should be loaded, by scroll position
    checkWindowScroll() {
        const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        const s = (document.body.scrollTop || document.documentElement.scrollTop || 0);
        const scrolled = (h + s) > document.body.offsetHeight;

        // If scrolled enough, not currently paging and not complete...
        if (scrolled && !this.state.paging && !this.state.done) {

            this.setState({
                paging: true,
                page: this.state.page + 1,
            });

            this.getPage(this.state.page);
        }
    }

    email() {
        console.log(this);
    }

    render() {
        const self = this;
        return (
            <div className="tweets-app">
                <Tweets tweets={this.state.tweets} /> 
                <Loader paging={this.state.paging} />
                <NotificationBar 
                    count={this.state.count}
                    onShowNewTweets={this.showNewTweets.bind(self)}
                />
            </div>
        );
    }
}

export default TweetsApp;

