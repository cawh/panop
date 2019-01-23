// functions to be imported, seperating for legibility

export function selectTag(id) {
  this.setState({ ...this.state, selectedTag: id, mobileMenuOpen: false })
}

export function deselectTag() {
  this.setState({ ...this.state, selectedTag: 10, mobileMenuOpen: false })
}

export function toggleMobileMenu() {
  this.setState({ ...this.state, mobileMenuOpen: !this.state.mobileMenuOpen })
}