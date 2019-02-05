import React from 'react';
import PropTypes from 'prop-types';
//Material Components
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';

import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';

const style = theme => ({
    actionbtn:{
        margin:8
    },
    editBtn:{
        position: "absolute",
        right: "20px"
    },
    heading:{
        position: "relative",
    },
    personalDtls:{
        padding:"0px",
        listStyle: "none",
        textAlign: "left",
        paddingLeft: "50px",
        paddingRight: "50px"
    }
});
class PersonalDtl extends React.Component {
    constructor(props){
        super(props);
        this.state={
            edit:false,
            personal:{
                "name":"Gaurav Rana",
                "pic":"asset/images/pic.png",
                "profile_title":"Front end Developer",
                "address":{
                    "line1":"DLF IT Park",
                    "line2":"Ramapuram",
                    "landmark":"",
                    "city":"Chennai",
                    "state":"Tamilnadu",
                    "country":"India",
                    "pin":"600125"
                },
                "phoneno":"8939725561",
                "email":"gaurav.rana@gartner.com"
            },
            error:{
                "person_name":false,
                "person_address_line1":false,
                "person_address_line2":false,
                "person_address_pin":false,
                "person_address_phoneno":false,
                "person_address_email":false
            }
        };
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleBtnClick(event){
        switch(event.currentTarget.value){
            case "Save" || "save":
                    this.setState({
                        edit:false
                    });
                  break;

            case "Cancle" || "cancle":
                    this.setState({
                        edit:false
                    });
                  break;
            case "Edit" || "edit":
                    this.setState({
                        edit:true
                    });
                break;      

            default:
        }
    }
    handleChange(event){
        let _id = event.currentTarget.id;
        let _value = event.currentTarget.value.trim();
        switch(_id){
            case "person_name":
                    this.setState({
                        personal:{...this.state.personal,name:_value},
                        error:(_value !="" && _value.length > 3) ? {...this.state.error,person_name:false} : {...this.state.error,person_name:true}
                    });
                  break;

            case "person_address_line1":
                  this.setState({
                      personal:{...this.state.personal,address:{...this.state.personal.address,"line1":_value}},
                      error:(_value !="" && _value.length > 3) ? {...this.state.error,person_address_line1:false} : {...this.state.error,person_address_line1:true}
                  });
                break;

            case "person_address_line2":
                this.setState({
                    personal:{...this.state.personal,address:{...this.state.personal.address,"line2":_value}},
                    error:(_value !="" && _value.length > 3) ? {...this.state.error,person_address_line2:false} : {...this.state.error,person_address_line2:true}
                });
              break;

            case "person_address_landmark":
                    this.setState({
                        personal:{...this.state.personal,address:{...this.state.personal.address,"landmark":_value}}
                    });
                  break;

            case "person_address_city":
                  this.setState({
                    personal:{...this.state.personal,address:{...this.state.personal.address,"city":_value}}
                  });
                break;
                
            case "person_address_state":
                this.setState({
                    personal:{...this.state.personal,address:{...this.state.personal.address,"state":_value}}
                });
              break;

            case "person_address_country":
                this.setState({
                    personal:{...this.state.personal,address:{...this.state.personal.address,"country":_value}}
                });
            break;
            case "person_address_pin":
                this.setState({
                    personal:{...this.state.personal,address:{...this.state.personal.address,"pin":_value}},
                    error:(_value !="" && _value.length == 6) ? {...this.state.error,person_address_pin:false} : {...this.state.error,person_address_pin:true}
                });
            break;
            case "person_address_phoneno":
                this.setState({
                    personal:{...this.state.personal,phoneno:_value},
                    error:(_value !="" && _value.length == 10) ? {...this.state.error,person_address_phoneno:false} : {...this.state.error,person_address_phoneno:true}
                });
            break;
            case "person_address_email":
                this.setState({
                    personal:{...this.state.personal,email:_value},
                    error:(_value !="" && _value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) ? {...this.state.error,person_address_email:false} : {...this.state.error,person_address_email:true}
                });
            break;

            default:
        }
        
    }
    render(){
        const {classes, settings} = this.props;
        const personaltls = this.state.personal;
        const bodySettings = settings.website_body;
        const btns = bodySettings.action_btns;
        return(
            <div className={classes.root}>
                <h3 className={classes.heading}>Your personal details {this.state.edit?null:<Button variant="outlined" onClick={this.handleBtnClick} value="Edit" className={classes.editBtn + " editebtn"}>Edit</Button>}</h3>
                <ul className={classes.personalDtls + " person_details"}>
                
                    <li className="person_name">
                        {this.state.edit?
                        <FormControl error={this.state.error.person_name} aria-describedby="Name" required={true} fullWidth margin="normal">
                            <InputLabel htmlFor="person_name">Name</InputLabel>
                            <Input id="person_name" value={personaltls.name} onChange={this.handleChange} />
                            {this.state.error.person_name?<FormHelperText dataerror="person_name">Please provide your name</FormHelperText>:null}
                        </FormControl>:<InputLabel><b>Name: </b>{personaltls.name}</InputLabel>}
                    </li>
                    {personaltls.address ? 
                    <li className="person_address">
                        <ul>
                            <li><InputLabel><b>Address</b></InputLabel></li>
                            <li className="line1">
                                {this.state.edit?
                                <FormControl error={this.state.error.person_address_line1} aria-describedby="Line 1" required={true} fullWidth margin="normal">
                                    <InputLabel htmlFor="person_address_line1">Line 1</InputLabel>
                                    <Input id="person_address_line1" value={personaltls.address.line1} onChange={this.handleChange} />
                                    {this.state.error.person_address_line1?<FormHelperText dataerror="person_address_line1">Please provide valid address</FormHelperText>:null}
                                </FormControl>:<InputLabel><b>Line 1: </b>{personaltls.address.line1}</InputLabel>}
                            </li>
                            <li className="line2">
                                {this.state.edit?
                                <FormControl error={this.state.error.person_address_line2} aria-describedby="Line 2" required={true} fullWidth margin="normal">
                                    <InputLabel htmlFor="person_address_line2">Line 2</InputLabel>
                                    <Input id="person_address_line2" value={personaltls.address.line2} onChange={this.handleChange} />
                                    {this.state.error.person_address_line2?<FormHelperText dataerror="person_address_line2">Please provide valid address</FormHelperText>:null}
                                </FormControl>:<InputLabel><b>Line 2: </b>{personaltls.address.line2}</InputLabel>}
                            </li>
                            <li className="landmark">
                                {this.state.edit?<TextField label="Landmark" fullWidth value={personaltls.address.landmark} id="person_address_landmark" margin="normal" onChange={this.handleChange}/>:personaltls.address.landmark?<InputLabel><b>landmark: </b>{personaltls.address.landmark}</InputLabel>:null}
                            </li>
                            <li className="city">
                                {this.state.edit?<TextField label="City" fullWidth value={personaltls.address.city} id="person_address_city" margin="normal" onChange={this.handleChange}/>:<InputLabel><b>City: </b>{personaltls.address.city}</InputLabel>}
                            </li>
                            <li className="state">
                                {this.state.edit?<TextField label="State" fullWidth value={personaltls.address.state} id="person_address_state" margin="normal" onChange={this.handleChange}/>:<InputLabel><b>State: </b>{personaltls.address.state}</InputLabel>}
                            </li>
                            <li className="country">
                                {this.state.edit?<TextField label="Country" fullWidth value={personaltls.address.country} id="person_address_country" margin="normal" onChange={this.handleChange}/>:<InputLabel><b>Country: </b>{personaltls.address.country}</InputLabel>}
                            </li>
                            <li className="pin">
                                {this.state.edit?
                                <FormControl error={this.state.error.person_address_pin} aria-describedby="Pin Code" required={true} fullWidth margin="normal">
                                    <InputLabel htmlFor="person_address_pin">Pin Code</InputLabel>
                                    <Input id="person_address_pin" value={personaltls.address.pin} onChange={this.handleChange} />
                                    {this.state.error.person_address_pin?<FormHelperText dataerror="person_address_pin">Please provide valid pin code</FormHelperText>:null}
                                </FormControl>:<InputLabel><b>Pincode: </b>{personaltls.address.pin}</InputLabel>}
                            </li>
                        </ul>
                    </li> : null }
                    <li className="person_phone">
                        {this.state.edit?
                        <FormControl error={this.state.error.person_address_phoneno} aria-describedby="Contact Number" required={true} fullWidth margin="normal">
                            <InputLabel htmlFor="person_address_phoneno">Phone</InputLabel>
                            <Input type="number" id="person_address_phoneno" value={personaltls.phoneno} onChange={this.handleChange} />
                            {this.state.error.person_address_phoneno?<FormHelperText dataerror="person_address_phoneno">Please provide your valid phone Number</FormHelperText>:null}
                        </FormControl>:<InputLabel><b>Phone: </b>{personaltls.phoneno}</InputLabel>}
                    </li>
                    <li className="person_email">
                        {this.state.edit?
                        <FormControl error={this.state.error.person_address_email} aria-describedby="Email" required={true} fullWidth margin="normal">
                            <InputLabel htmlFor="person_address_email">Email</InputLabel>
                            <Input id="person_address_email" value={personaltls.email} onChange={this.handleChange} />
                            {this.state.error.person_address_email?<FormHelperText dataerror="person_address_email">Please provide your valid email</FormHelperText>:null}
                        </FormControl>:<InputLabel><b>Email: </b>{personaltls.email}</InputLabel>}
                    </li>
                </ul>
                {this.state.edit ? btns.map((btn,key)=>(btn.status?<Button key={key} variant={btn.variant} color={btn.type} className={classes.actionbtn} onClick={this.handleBtnClick} value={btn.name}>{btn.name}</Button>:null)):null}
            </div>
        )
    }
}
PersonalDtl.propTypes = {
    classes: PropTypes.object,
    settings: PropTypes.object.isRequired
};
export default withStyles(style)(PersonalDtl);