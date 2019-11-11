import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios'
import clsx from 'clsx';
import { loadCSS } from 'fg-loadcss';
import { makeStyles } from '@material-ui/core/styles';
import {green} from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';



const useStyles = makeStyles(theme => ({
    icon: {
        margin: theme.spacing(2),
      },
      iconHover: {
        margin: theme.spacing(2),
        '&:hover': {
          color: green[800],
        },
      },
    }));

export default function AddFormModule(props) {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState();
  const [image_url, setImage] = React.useState();
  const [price, setPrice] = React.useState();
  const [description, setDescription] = React.useState();



  function handleClickOpen() {
    setOpen(true);
  }

  function handleCancel() {
    setOpen(false);
  }

  function handleSubmit(){
  // let { name, image_url, description, price} = ;
    axios
        .post('/api/products', { name:name, image_url:image_url, description:description, price:price})
        .then (response => {
            props.getProducts()
        })
        .then(response => {
            setOpen(false)
        })
        .catch(error => console.log(`Form-axiosPost: ${error}`))

  }

  const classes = useStyles();
  React.useEffect(() => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );
  }, [])

//   function handleSubmit() {
//     // let { name, image_url, description, price, } = useState;
//     axios
//         .post('/api/products', { name:name, image_url:image_url, description:description, price:price})
//         .then(this.setState({ redirect:true }))
//         .catch(error => console.log(`Form-axiosPost: ${error}`))
// }




  return (
    <div>

{/* plus button */}
      <Icon className={clsx(classes.iconHover, 'fa fa-plus-circle')} 
        color="disabled" 
        style={{ fontSize: 75}}
        onClick={handleClickOpen}
        />


      <Dialog open={open} onClose={handleCancel} aria-labelledby="form-dialog-title" >
          
        <DialogTitle id="form-dialog-title">Add a product</DialogTitle>

        <DialogContent style={{ paddingLeft: "4vw", paddingRight: "4vw"}}>
          <DialogContentText>
            Please enter the following information about the product:
          </DialogContentText>

{/* name */}
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name - 200 character limit"
            type="name"
            fullWidth
            onChange = {(e) => setName(e.target.value)}
          />
{/* image url */}
        <TextField
            autoFocus
            margin="dense"
            id="image_url"
            label="Image URL - links to pictures only"
            type="image_url"
            fullWidth
            onChange = {(e) => setImage(e.target.value)}
          />

{/* description */}
        <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Brief Description"
            type="description"
            fullWidth
            onChange = {(e) => setDescription(e.target.value)}
          />
{/* price */}
        <TextField
            autoFocus
            margin="dense"
            id="price"
            label="Price - (number with 2 decimal places)"
            type="price"
            fullWidth
            onChange = {(e) => setPrice(e.target.value)}
          />         

        </DialogContent>

        <DialogContent>
        </DialogContent>


        <DialogActions>
          <Button onClick={handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}