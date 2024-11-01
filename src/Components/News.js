import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

//Reference: https://newsapi.org/docs/endpoints/sources
export class News extends Component {
    //articles is a array
    // articles = [
    //     {
    //         "source": {
    //             "id": "news24",
    //             "name": "News24"
    //         },
    //         "author": "Tashreeq Vardien",
    //         "title": "Remarkable Ronwen: The boy who left Gelvandale at 12 and lit up the football world",
    //         "description": "\"As I'm getting ready to leave for the ceremony, it's just hit me,\" an emotional Ronwen Williams told South Africans via a shared voice note hours before Monday's 2024 Ballon d'Or awards in Paris, France.",
    //         "url": "https://www.news24.com/sport/soccer/psl/remarkable-ronwen-the-boy-who-left-gelvandale-at-12-and-lit-up-the-football-world-20241030",
    //         "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/12352/efdd7b6132d2401c9ae7956a37f22218.jpg",
    //         "publishedAt": "2024-10-30T05:00:24",
    //         "content": "\"As I'm getting ready to leave for the ceremony, it's just hit me,\" an emotional Ronwen Williams told South Africans via a shared voice note hours before Monday's 2024 Ballon d'Or awards in Paris, Fr… [+4 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "fox-sports",
    //             "name": "Fox Sports"
    //         },
    //         "author": "Joel Klatt",
    //         "title": "2024 college football rankings: Joel Klatt's top 10 teams after Week 9",
    //         "description": "Ohio State didn't look overly impressive in its win against Nebraska, while Penn State picked up a gritty win at Wisconsin. Which team is better heading into their big tilt? Here's Joel Klatt's latest top 10.",
    //         "url": "https://www.foxsports.com/stories/college-football/2024-college-football-rankings-joel-klatts-top-10-teams-after-week-9",
    //         "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2024/10/1408/814/2024-10-21_joel-klatt-preseason-top-10_16x9-1.jpg?ve=1&tl=1",
    //         "publishedAt": "2024-10-29T23:18:33Z",
    //         "content": "We might not have had a top-five matchup or a major upset take place on Saturday, but it was another exciting week of college football.\r\nAs we plunge toward November, we're starting to see things unf… [+11284 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "fox-sports",
    //             "name": "Fox Sports"
    //         },
    //         "author": null,
    //         "title": "2024 College Football odds Week 10: Lines, spreads for best games of the week",
    //         "description": "College football Week 10 is here. Check out the lines for some of the biggest games on this weekend's slate.",
    //         "url": "https://www.foxsports.com/stories/college-football/2024-college-football-odds-week-10-lines-spreads-best-games-week",
    //         "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2024/09/1408/814/jeremiah-smith2.jpg?ve=1&tl=1",
    //         "publishedAt": "2024-10-29T22:11:00Z",
    //         "content": "It's time to dive into college football\r\n Week 10.\r\nLet's check out the lines for some of the marquee matchups at DraftKings Sportsbook as of Oct 29.\r\n(All times ET)\r\nFRIDAY, NOV. 1\r\nSan Diego State … [+4322 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "bbc-news",
    //             "name": "BBC News"
    //         },
    //         "author": "BBC News",
    //         "title": "Muslim footballer stopped from playing in tracksuit bottoms",
    //         "description": "Ismail Iqra was told by a London grassroots football team she could not play unless she wore shorts.",
    //         "url": "https://www.bbc.co.uk/news/articles/c3e83qlx058o",
    //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/77eb/live/543bb450-9625-11ef-a965-49eefc19faba.jpg",
    //         "publishedAt": "2024-10-29T20:52:20.9532186Z",
    //         "content": "\"For example, we hosted a women-only alcohol-free viewing of the FA cup final, for Muslim women to feel comfortable and included.\r\n\"It's been difficult to see the hard work that a lot of us have put … [+593 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "[Removed]"
    //         },
    //         "author": null,
    //         "title": "[Removed]",
    //         "description": "[Removed]",
    //         "url": "https://removed.com",
    //         "urlToImage": null,
    //         "publishedAt": "2024-10-29T20:22:39Z",
    //         "content": "[Removed]"
    //     },
    //     {
    //         "source": {
    //             "id": "espn",
    //             "name": "ESPN"
    //         },
    //         "author": "Mel Kiper Jr., Matt Miller, Steve Muench, Jordan Reid, Field Yates",
    //         "title": "2025 NFL draft: Team fits for 10 college football prospects - ESPN",
    //         "description": "Which NFL team would be perfect for Ashton Jeanty? Cam Ward? Travis Hunter? We picked the best landing places for 10 prospects.",
    //         "url": "https://www.espn.com/nfl/draft2025/insider/story/_/id/42033530/2025-nfl-draft-top-prospects-best-team-fits-buzz-notes-college-football",
    //         "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F1027%2Fr1406720_1296x729_16%2D9.jpg",
    //         "publishedAt": "2024-10-28T12:55:00Z",
    //         "content": "Oct 28, 2024, 08:55 AM ET\r\nThe first nine weeks of the 2024 college football season have seen some big performances from the 2025 NFL draft'stop prospects. But where could those players land in April… [+648 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "talksport",
    //             "name": "TalkSport"
    //         },
    //         "author": "Liam Hoofe",
    //         "title": "Best betting sites UK | Top betting site offers for October 2024...",
    //         "description": "Sports bettors in the UK are spoiled for choice among the best betting sites: If you want in-depth football betting markets, there is a bookmaker for you; if you want to bet on esports or TV events…",
    //         "url": "https://talksport.com/betting/1760032/best-betting-sites-uk/",
    //         "urlToImage": "https://talksport.com/wp-content/uploads/sites/5/2024/08/talksport-best-betting-sites-uk-op.jpg?strip=all&quality=100&w=1920&h=1080&crop=1",
    //         "publishedAt": "2024-10-04T08:45:00Z",
    //         "content": "Sports bettors in the UK are spoiled for choice among the best betting sites: If you want in-depth football betting markets, there is a bookmaker for you; if you want to bet on esports or TV events, … [+17381 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "bleacher-report",
    //             "name": "Bleacher Report"
    //         },
    //         "author": "David Kenyon",
    //         "title": "Unique Stats from the 2023 College Football Regular Season",
    //         "description": "Numbers are an integral part of college football. Whether you're previewing games, ranking teams or picking an award winner, statistics help shape the story.…",
    //         "url": "https://bleacherreport.com/articles/10100739-unique-stats-from-the-2023-college-football-regular-season",
    //         "urlToImage": "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1702319871/sdx1wjlqkcqz3anqfabp.jpg",
    //         "publishedAt": "2023-12-12T12:00:00Z",
    //         "content": "Zach Bolinger/Icon Sportswire via Getty Images\r\nSpeaking of Iowa...\r\nWhat makes the Hawkeyes' stellar defensive season even more impressive is how much the team desperately needed it.\r\nAmong the many… [+711 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "espn-cric-info",
    //             "name": "ESPN Cric Info"
    //         },
    //         "author": null,
    //         "title": "Five famous people (and one cat) you didn't know have ESPNcricinfo profiles | ESPNcricinfo.com",
    //         "description": "Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the ESPNcricinfo player database? | ESPNcricinfo.com",
    //         "url": "http://www.espncricinfo.com/story/_/id/29102695/five-famous-people-one-cat-know-espncricinfo-profiles",
    //         "urlToImage": "https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif",
    //         "publishedAt": "2020-04-27T07:20:43Z",
    //         "content": "Why do a cat, a footballer, a Nobel laureate and a prime minister find themselves in the ESPNcricinfo database? Here are six player profiles you wouldn't have expected we had.\r\nPeter the catThe only … [+5504 chars]"
    //     }
    // ]

    static defaultProps = {
        country: "us",
        pageSize: 8,
        category: "general"
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor(props) {
        super(props);
        console.log("I'm a constructor from News component");
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
        document.title = "EchoDailyNews - " + `${this.props.category}`;
    }

    async componentDidMount() {
        console.log("I'm componentDidMount");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=09e0f144cc12426a938ec33068a3528a&page=1&pagesize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ 
            articles: parsedData.articles, 
            totalResults: parsedData.totalResults,
            loading: false 
        });
    }

    handlePrevClick = async () => {
        console.log("Previous");

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=09e0f144cc12426a938ec33068a3528a&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);

        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })
    }

    handleNextClick = async () => {
        console.log("Next");

        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {

            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=09e0f144cc12426a938ec33068a3528a&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
            this.setState({ loading: true });
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);

            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            })
        }
    }

    render() {
        console.log("I'm a render method from News component");
        return (

            <div className='container my-3'>
                <h1 className='text-center' style={{margin: "35px 0px"}}>EchoDailyNews - Top Headlines</h1>
                {this.state.loading && <Spinner />}

                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                        </div>
                    })}

                    {/* <div className="col-md-4">
                        <NewsItem title="title1" description="desc1" />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="title1" description="desc1" />
                    </div> */}
                </div>

                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>



            </div>
        )
    }
}

export default News
