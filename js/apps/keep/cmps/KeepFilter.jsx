export class KeepFilter extends React.Component {
  state = {
    filterBy: {
      title: '',
      minPrice: '',
      maxPrice: '',
    },
  };

  handleChange = (ev) => {
    const  field = ev.target.name;
    const value =
      ev.target.type === 'number' ? +ev.target.value : ev.target.value;
    this.setState({ filterBy: { ...this.state.filterBy, [field]: value } }, () => {
        this.props.onSetFilter(this.state.filterBy)
    } );
  };

  onFilter = (ev) => {
    ev.preventDefault();
    this.props.onSetFilter(this.state.filterBy)
  };

  render() {
    const { title } = this.state.filterBy;
    return (
      <form className='keep-filter' onSubmit={this.onFilter}>
        <label htmlFor='by-title'>Search</label>
        <input
          name='title'
          id='by-vendor'
          type='text'
          placeholder='Title'
          value={title}
          onChange={this.handleChange}
        />
       
        <button>Filter</button>
      </form>
    );
  }
}
