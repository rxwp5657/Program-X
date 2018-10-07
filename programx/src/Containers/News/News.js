import React, {Component} from 'react';
import NavigationBar from "../../Components/NavigationBar/NavigationBar.js";
import NewsEntryList from "../../Components/NewsEntryList/NewsEntryList.js";
import './News.css'
import {goToNews, goToExercises, requestNews} from '../../actions.js'
import {connect} from 'react-redux'


const mapStateToProps = (state) => {
  return {
    news: state.requestNews.news,
  }
}

// get the actions that will change the state of the page into exercises and news.

const mapDispatchToProps = (dispatch) =>{
  return{
    goToExercises: (event) => dispatch(goToExercises()),
    goToNews: (event) => dispatch(goToNews()),
    onRequestNews: () => dispatch(requestNews()),
  }
}

// get the news list and render it.

class News extends Component {
  //get news
  componentDidMount(){
    this.props.onRequestNews();
  }

  render(){
    const navigation = [{text: "Ejercicios", f: this.props.goToExercises},
                        {text: "Noticias", f: this.props.goToNews}];
    let news = this.props.news;
    return(
      <div class = "news">
        <NavigationBar elements = {navigation}/>
        <NewsEntryList news = {news}/>
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(News);
