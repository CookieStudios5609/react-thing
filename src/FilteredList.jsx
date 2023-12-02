import React, { Component } from 'react';
import { Dropdown, DropdownButton, DropdownItem } from 'react-bootstrap';
import List from './List';


// Recent versions of react replace MenuItem with DropdownItem, and onSelect with onClick
// documentation here: https://react-bootstrap.github.io/docs/components/dropdowns#dropdown-items

class FilteredList extends Component {
  constructor(props) {
    super(props);

    //The state is just a list of key/value pairs (like a hashmap)
    //TODO (FilteredList): Add an additional state variable within this.state called "type" and set it to a default value
    this.state = {
      search: "",
      type: "All"
    };
  }

  //Sets the state whenever the user types on the search bar
  onSearch = (event) => {
    this.setState({search: event.target.value.trim().toLowerCase()});
  }

  //TODO (FilteredList): Set the state of the "type" state variable depending on what is passed in
  onFilter = (event) => {
    this.setState({type: event})
  }

  //TODO (FilteredList): Change filterItem to take into account the "type" state variable when filtering
  filterItem = (item) => {
    if (this.state.type === "All") {
      return (item.name.toLowerCase().search(this.state.search) !== -1)
    }
    else {
      return (item.name.toLowerCase().search(this.state.search) !== -1) && !item.type.search(this.state.type);
    }
  }

  render(){
    return (
        <div className = "filter-list">
         
          {/*TODO (FilteredList): Create a Dropdown Menu with three different menu options: Fruit, Vegetables, and All*/}
          <Dropdown onSelect={this.onFilter}>
            <DropdownButton id="typeDropDown" title={"Type"}>
              <DropdownItem eventKey="All">All</DropdownItem>
              <DropdownItem eventKey="Fruit">Fruit</DropdownItem>
              <DropdownItem eventKey="Vegetable">Vegetable</DropdownItem>
            </DropdownButton>
          </Dropdown>
          
          <input type = "text" placeholder = "Search" onChange = {this.onSearch} />
          <List items = {this.props.items.filter(this.filterItem)} />
        </div>
    );
  }
}

export default FilteredList;
