import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios'
// import clsx from 'clsx';


// import { loadCSS } from 'fg-loadcss';
// import { makeStyles } from '@material-ui/core/styles';
// import {green} from '@material-ui/core/colors';


// import Icon from '@material-ui/core/Icon';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';


export default function EditFormModule(props) {
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

  function handleEditSave(){
    axios
        .put('/api/products', { product_id:props.products.product_id, name:name, image_url:image_url, description:description, price:price})
        .then (response => {
            // console.log(response)
            props.getProducts()
        })
        .then(response => {
            setOpen(false)
        })
        .catch(error => console.log(`Form-axiosPost: ${error}`))

  }


  return (
    <div>

{/* EDIT button      */}
          <IconButton aria-label="Info"
          onClick={() => props.edit_product(props.product_id)}
          onClick={handleClickOpen}
          >
            <MoreVertIcon />
          </IconButton>
  
{/* Pop up EDIT modal */}

      <Dialog open={open} onClose={handleCancel} aria-labelledby="form-dialog-title" >
          
        <DialogTitle id="form-dialog-title">EDIT Product</DialogTitle>

        <DialogContent style={{ paddingLeft: "4vw", paddingRight: "4vw"}}>
          <DialogContentText>
            Please edit all info about your product:
          </DialogContentText>


{/* name */}
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name of Product"
            type="name"
            fullWidth
            onChange = {(e) => setName(e.target.value)}
            defaultValue = {props.products.name}
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
            defaultValue = {props.products.image_url}
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
            defaultValue = {props.products.description}
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
            defaultValue = {props.products.price}
          />         
        </DialogContent>

        <DialogContent>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleEditSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}