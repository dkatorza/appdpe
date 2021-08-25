import { keepService } from '../services/keep.service.js';
import { KeepList } from '../cmps/KeepList.jsx';
import { KeepFilter } from '../cmps/KeepFilter.jsx';
import { KeepDetails } from './KeepDetails.jsx';
export class KeepApp extends React.Component {
  state = {
    keeps: [],
    filterBy: null,
    selectedKeep: null,
  };

  componentDidMount() {
    this.loadKeeps();
  }

  loadKeeps = () => {
    keepService.query(this.state.filterBy).then((keeps) => {
      this.setState({ keeps });
    });
  };

  onSetFilter = (filterBy) => {
    this.setState({ filterBy }, this.loadKeeps);
  };

  onSelectKeep = (keep) => {
    this.setState({ selectedKeep: keep });
  };

  unSelectKeep = () => {
    this.setState({selectedKeep:null})
}


  render() {
    const { keeps, selectedKeep } = this.state;
    if (!keeps) return <div>Loading...</div>
    return (
      <section className='keep-app'>
        <h2>Miss Keep</h2>
        {!selectedKeep && (
          <React.Fragment>
            <KeepFilter onSetFilter={this.onSetFilter} />
            {!keeps.length ? <div>No keeps match search criteria</div> :
              <KeepList keeps={keeps} onSelectKeep={this.onSelectKeep} />}
          </React.Fragment>
        )}
        {selectedKeep && <KeepDetails keep={selectedKeep} onBack={() => this.unSelectKeep(null)} />}
      </section>
    );
  }
}
