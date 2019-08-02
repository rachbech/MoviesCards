import React from 'react';
import { connect } from 'react-redux';
import { fetchAllMovies, removeMovie, fetchAllCategorys, fetchMoviesByCategorys } from '../../actions/movies';
import RecipeReviewCard from './Card';
import Paper from '@material-ui/core/Paper';
import { TablePagination } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';

class Movies extends React.Component {
    constructor(props) {
    super(props);

    this.state = {
      data: [],
      categorys: [],
      page: 0,
      rowsPerPage: 4,
      selectedCategory: [],
    };
  }

  async componentDidMount() {
  await this.props.fetchAllMovies();
  await this.props.fetchAllCategorys();
  this.setState({ data: this.props.movies, categorys: this.props.categorys });
  }

  refreshMovies = async(id)=>{
    await this.props.removeMovie(id);
    await this.props.fetchAllMovies();
  }

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = (event) => {
    this.setState({ rowsPerPage: event.target.value });
  };

  handleChangeCategory = async (event) => {
    await this.setState({ selectedCategory: event.target.value });
    await this.props.fetchMoviesByCategorys(this.state.selectedCategory);
    (
      this.props.moviesByCategorys === undefined 
      || this.props.moviesByCategorys.length === 0
    )?
      this.setState({ data: this.props.movies })
      :
      this.setState({ data: this.props.moviesByCategorys })

    
  };
  

  render() {
    if (this.state.data.length > 0) {
    return (
      <Paper style={
        {
        display: 'flex',
        flexDirection: 'row',
        flexWrap:'wrap',
      }
      }>
      <FormControl style={{       
        margin: '30px',
        minWidth: 120,
        maxWidth: 300,}}
        >
          <InputLabel htmlFor="select-multiple-chip">Categories</InputLabel>
            <Select
              multiple
              value={this.state.selectedCategory}
              onChange={this.handleChangeCategory}
              input={<Input id="select-multiple-chip" />}
              renderValue={selected => (
                <div style={{   display: 'flex', flexWrap: 'wrap',}}>
                  {selected.map(value => (
                    <Chip key={value} label={value} style={{margin: 2,}} />
                  ))}
                </div>
              )}
            >
            {this.state.categorys.map((item, index) => (
              <MenuItem 
              key={index} 
              value={item} 
              >
                {item}
              </MenuItem>
            ))}
          </Select>
      </FormControl>
    
    <div style={
        {
        display: 'flex',
        flexDirection: 'row',
        flexWrap:'wrap',
        flexFlow: 'row wrap',
        paddingTop: '29px',
        paddingLeft: '30px',
        paddingRight: '30px',
      }
      }>
      {
        this.state.data
        .slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage)
        .map((item, index)=>{
          return(<RecipeReviewCard film={item} refreshData={this.refreshMovies} key={item.id}/>);     
        })
      }

   </div>
        <TablePagination
          rowsPerPageOptions={[4, 8, 12]}
          component="div"
          count={this.state.data.length}
          rowsPerPage={this.state.rowsPerPage}
          page={this.state.page}
          backIconButtonProps={{
            'aria-label': 'previous page',
          }}
          nextIconButtonProps={{
            'aria-label': 'next page',
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
        );

    }
    return (
      <Paper style={
        {
        display: 'flex',
        flexDirection: 'row',
        flexWrap:'wrap',
      }
      }>
      There Are No Movies
      </Paper>
    );
      
      

  }
}

const mapStateToProps = store => ({
  movies: store.movies.movies,
  categorys: store.movies.categorys,
  moviesByCategorys: store.movies.moviesByCategorys,
});

const mapDispatchToProps = {
  fetchAllMovies,
  removeMovie,
  fetchAllCategorys,
  fetchMoviesByCategorys,
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
