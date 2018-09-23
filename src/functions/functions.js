// functions to be imported, seperating for legibility

export function handleScroll() {
    if (document.documentElement.scrollTop > 171) { 
        let newState = {...this.state}
        newState =  {...this.state, headerExpanded: false};
        this.setState(newState)
    } 
    else { 
        let newState = {...this.state}
        newState =  {...this.state, headerExpanded: true};
        this.setState(newState)
    }
}

export function selectTag(id) {
    this.setState({...this.state, selectedTag: id})
}

export function deselectTag() {
    this.setState({...this.state, selectedTag: 10})
}