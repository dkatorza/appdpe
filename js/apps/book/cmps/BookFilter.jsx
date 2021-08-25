export class BookFilter extends React.Component {
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
    const { title, minPrice, maxPrice } = this.state.filterBy;
    return (
      <form className='book-filter' onSubmit={this.onFilter}>
        <label htmlFor='by-title'>By vendor</label>
        <input
          name='title'
          id='by-vendor'
          type='text'
          placeholder='Title'
          value={title}
          onChange={this.handleChange}
        />
        <label htmlFor='min-price'>Min Price</label>
        <input
          name='minPrice'
          id='min-price'
          type='number'
          placeholder='Min Price'
          value={minPrice}
          onChange={this.handleChange}
        />
        <label htmlFor='max-price'>Max Price</label>
        <input
          name='maxPrice'
          id='max-price'
          type='number'
          placeholder='Max Price'
          value={maxPrice}
          onChange={this.handleChange}
        />
        <button>Filter</button>
      </form>
    );
  }
}
