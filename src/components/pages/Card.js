import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUpAlt from '@material-ui/icons/ThumbUpAlt';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteIcon from '@material-ui/icons/Delete';
import Switch from '@material-ui/core/Switch';

export default class RecipeReviewCard extends React.Component {
    constructor(props) {
    super(props);

    this.state = {
        data: [],
        toggle: true,
    };
    }
     componentDidMount() {
  }

  handleChange = () => {
    this.setState((prevState)=>{
      return {toggle: !prevState.toggle}
   });
  };

  handelDelete = ()=>{
      this.props.refreshData(this.props.film.id);      
  }


    render(){
        return (
        <Card 
        style={{maxWidth: 345, minWidth: 300, margin: 'auto', pading: 'auto'}}
        >
        <CardHeader
            avatar={
            <Avatar aria-label="recipe" style={{backgroundColor: red[500]}}>
                {this.props.film.id
                    
                }
            </Avatar>
            }
            action={
            <IconButton aria-label="settings">
                <MoreVertIcon />
            </IconButton>
            }
            title={this.props.film.title}
            subheader={this.props.film.category}
        />
        <CardMedia
            style={{height: 0,paddingTop: '56.25%',}}
            image="/static/images/cards/paella.jpg"
            title={this.props.film.title}
        />
        <CardActions disableSpacing>
         { this.state.toggle && (
              <div>
            <IconButton aria-label="add to favorites">
            <ThumbUpAlt />   
            </IconButton>
            <i>{this.props.film.likes}</i>
            <IconButton aria-label="share">
            <ThumbDown />
            </IconButton>
            <i>{this.props.film.dislikes}</i>
            </div>
          )
    }
        <Switch
        checked={this.state.toggle}
        onChange={this.handleChange}
        value="toggle"
        color="primary"
        inputProps={{ 'aria-label': 'primary checkbox' }}
        />

        <IconButton aria-label="delete" onClick={this.handelDelete}>
        <DeleteIcon fontSize="small"/>
        </IconButton>
        </CardActions>
        </Card>
    );
}
 
}