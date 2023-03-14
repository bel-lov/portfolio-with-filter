import React, { Component } from 'react'
import projects from '../Data'
import ProjectList from './ProjectList'
import Toolbar from './Toolbar'

const filters = ['All', 'Websites', 'Flayers', 'Business Cards'];
const selected = 'All';

export default class Portfolio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: selected,
            filters: filters
        }
        this.projects = projects
        this.onSelectFilter = this.onSelectFilter.bind(this);
    }

    onSelectFilter(filter) {
        this.setState((prevState) => ({
            filters: filters,
            selected: filter,
        }));
    }

    render() {
        return (
            <div className="Portfolio">
                <Toolbar
                    filters={this.state.filters}
                    selected={this.state.selected}
                    onSelectFilter={this.onSelectFilter}
                />
                <ProjectList
                    projects={
                        this.state.selected === 'All' ? this.projects : this.projects.filter(
                            (project) => project.category === this.state.selected
                        )
                    }
                />
            </div>
        );
    }
}
