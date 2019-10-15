import React from 'react';

class SearchBar extends React.Component{
   state = {term: ''};

   onFormSubmit= (event) => {
       event.preventDefault();

       this.props.onSubmit(this.state.term);

   };

    render(){
        return(
          <div className="ui segment"> 
              <form onSubmit= {this.onFormSubmit} className="ui form" autocomplete="off">
              <div className="field">
              <label><h2>{this.props.searchName}</h2></label>
                  <input id="input" type="text"  value={this.state.term} onChange={(e) => this.setState({term:e.target.value})} />
                  </div>
              </form>
          </div>
        );
    }
}

export default SearchBar;