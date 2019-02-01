import React, { Component } from 'react'
import {
    Toolbar,
    ToolbarRow,
    ToolbarSection,
    ToolbarMenuIcon,
    ToolbarTitle,
    ToolbarIcon
  } from '@rmwc/toolbar';

class Header extends Component {
  render () {
    return (
      <Toolbar>
        <ToolbarRow>
          <ToolbarSection alignStart>
            <ToolbarMenuIcon icon="menu"/>
            <ToolbarTitle>Weather App</ToolbarTitle>
          </ToolbarSection>
          <ToolbarSection alignEnd>
            <ToolbarIcon icon="search" onClick={this.props.toggleSearchBar}/>
          </ToolbarSection>
        </ToolbarRow>
      </Toolbar>
    )
  }
}

export default Header
