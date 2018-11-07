import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
//Material Components
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

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
    },
    ulList:{
        padding:"0 50px"
    }
});
class CreditCardDtls extends React.Component {
    constructor(props){
        super(props);
        this.state={
            edit:false,
            cc_details:[
                {"bank_name":"HDFC","card_holder_name":"Gaurav Rana","card_no":"4567879963214785","exp_year":2025,"exp_month":12,"ccv":"****","card_type":"visa"},
                {"bank_name":"HDFC","card_holder_name":"Gaurav Rana","card_no":"1234567879963214785","exp_year":2025,"exp_month":12,"ccv":"****","card_type":"visa"}
            ],
            editecard:{},
            error:{
                "person_bank_name":false,
                "person_card_holder_name":false,
                "person_card_no":false,
                "person_exp_year":false,
                "person_exp_month":false
            }
        };
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.formatCardNumber = this.formatCardNumber.bind(this);
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
                    let _cc = event.currentTarget.attributes.datavalue.value;
                    this.setState({
                        edit:true,
                        editecard:_cc
                    });
                break;      

            default:
                break;
        }
    }

    handleChange(event){
        let _id = event.currentTarget.id;
        let _value = event.currentTarget.value.trim();
        let _temdata = [];
        switch(_id){
            case "person_bank_name":
                    _temdata = [...this.state.cc_details];
                    _temdata[this.state.editecard].bank_name = _value;
                    this.setState({
                        cc_details:[..._temdata],
                        error:(_value && _value.length > 3)?{...this.error,person_bank_name:false}:{...this.error,person_bank_name:true}
                    });
                  break;

            case "person_card_holder_name":
                    _temdata = [...this.state.cc_details];
                     _temdata[this.state.editecard].card_holder_name = _value;
                    this.setState({
                        cc_details:[..._temdata],
                        error:(_value && _value.length > 3)?{...this.error,person_card_holder_name:false}:{...this.error,person_card_holder_name:true}
                    });
                break;

            case "person_card_no":
                    _temdata = [...this.state.cc_details];
                    _value = _value.split('-').join('');
                    _temdata[this.state.editecard].card_no = _value;
                    if(Number(_value)){
                        this.setState({
                            cc_details:[..._temdata],
                            error:(_value && _value.length > 11 && _value.length < 19)?{...this.error,person_card_no:false}:{...this.error,person_card_no:true}
                        });
                    }
              break;

            case "person_exp_year":
            debugger;
                    _temdata = [...this.state.cc_details];
                    _temdata[this.state.editecard].exp_year = _value;
                    if(eval(_value)<=eval(event.currentTarget.max) && eval(_value)>=eval(event.currentTarget.min)){
                        this.setState({
                            cc_details:[..._temdata],
                            error:(_value && _value.length == 4)?{...this.error,person_exp_year:false}:{...this.error,person_exp_year:true}
                        });
                    }

                  break;

            case "person_exp_month":
                    _temdata = [...this.state.cc_details];
                    _temdata[this.state.editecard].exp_month = _value;
                    debugger;
                    if(eval(_value)<=eval(event.currentTarget.max) && eval(_value)>=eval(event.currentTarget.min)){
                        this.setState({
                            cc_details:[..._temdata],
                            error:(_value && _value.length <= 2)?{...this.error,person_exp_month:false}:{...this.error,person_exp_month:true}
                        });
                    }
                break;
                
            case "person_ccv":
                    _temdata = [...this.state.cc_details];
                    _temdata[this.state.editecard].ccv = _value;
                    this.setState({
                        cc_details:[..._temdata]
                    });
              break;

            case "person_address_country":
                this.setState({
                    personal:{...this.state.personal,address:{...this.state.personal.address,"country":_value}}
                });
            break;

            default:
        }
        
    }

    formatCardNumber(cardnumber){
        let _temp_cardno = cardnumber.trim().split('');
        let _new_cardno = '';
        let checklastchar = [];
        for(let i= 0;i<_temp_cardno.length;i++){
            _new_cardno = _new_cardno + ((i+1)%4==0?_temp_cardno[i]+"-":_temp_cardno[i]);
        }
        checklastchar = _new_cardno.split('');
        if(checklastchar[checklastchar.length-1] == "-"){
            checklastchar.length = checklastchar.length - 1;
            _new_cardno =  checklastchar.join('');
        }
        return _new_cardno;
    }

    render(){
        const {classes, settings} = this.props;
        const cc_details = this.state.cc_details;
        const bodySettings = settings.website_body;
        const btns = bodySettings.action_btns;
        return(
            <Fragment>
                {
                    this.state.edit ?
                    <div className={classes.root}>
                        <h3 className={classes.heading}>Edit Credit Card</h3>
                        <ul className={classes.ulList}>
                            <li>
                                <FormControl error={this.state.error.person_bank_name} aria-describedby="Bank Name" required={true} fullWidth margin="normal">
                                    <InputLabel htmlFor="person_bank_name">Bank Name</InputLabel>
                                    <Input id="person_bank_name" value={this.state.cc_details[this.state.editecard].bank_name} onChange={this.handleChange} />
                                    {this.state.error.person_bank_name?<FormHelperText dataerror="person_bank_name">Please provide bank name (Min 4 character.)</FormHelperText>:null}
                                </FormControl>
                            </li>
                            <li>
                                <FormControl error={this.state.error.person_card_holder_name} aria-describedby="Card Holder Name" required={true} fullWidth margin="normal">
                                    <InputLabel htmlFor="person_card_holder_name">Card Holder Name</InputLabel>
                                    <Input id="person_card_holder_name" value={this.state.cc_details[this.state.editecard].card_holder_name} onChange={this.handleChange} />
                                    {this.state.error.person_bank_name?<FormHelperText dataerror="person_card_holder_name">Please provide card holder name (Min 4 character.)</FormHelperText>:null}
                                </FormControl>
                            </li>
                            <li>
                                <FormControl error={this.state.error.person_card_no} aria-describedby="Crad Number" required={true} fullWidth margin="normal">
                                    <InputLabel htmlFor="person_card_no">Card Number</InputLabel>
                                    <Input type="text"  id="person_card_no" value={this.formatCardNumber(this.state.cc_details[this.state.editecard].card_no)} onChange={this.handleChange} />
                                    {this.state.error.person_card_no?<FormHelperText dataerror="person_card_no">Please provide valid card number</FormHelperText>:null}
                                </FormControl>
                            </li>
                            <li>
                                <FormControl error={this.state.error.person_exp_year} aria-describedby="Expiry Year" required={true} fullWidth margin="normal">
                                    <InputLabel htmlFor="person_exp_year">Exp Year</InputLabel>
                                    <Input type="number" inputProps={{min:2018,max:2050}}  id="person_exp_year" value={this.state.cc_details[this.state.editecard].exp_year} onChange={this.handleChange} />
                                    {this.state.error.person_exp_year?<FormHelperText dataerror="person_exp_year">Please valid expiry year</FormHelperText>:null}
                                </FormControl>
                            </li>
                            <li>
                                <FormControl error={this.state.error.person_exp_month} aria-describedby="Expiry Month" required={true} fullWidth margin="normal">
                                    <InputLabel htmlFor="person_exp_month">Exp Month</InputLabel>
                                    <Input type="number" inputProps={{min:1,max:12}}   id="person_exp_month" value={this.state.cc_details[this.state.editecard].exp_month} onChange={this.handleChange} />
                                    {this.state.error.person_exp_month?<FormHelperText dataerror="person_exp_month">Please provide valid expiry month</FormHelperText>:null}
                                </FormControl>
                            </li>
                            <li>
                                {
                                    <TextField label="CCV" value={this.state.cc_details[this.state.editecard].ccv} required={true} fullWidth id="person_ccv" margin="normal" onChange={this.handleChange}/>
                                }
                            </li>
                        </ul>
                        {this.state.edit ? btns.map((btn,key)=>(btn.status?<Button key={key} variant={btn.variant} color={btn.type} className={classes.actionbtn} onClick={this.handleBtnClick} value={btn.name}>{btn.name}</Button>:null)):null}
                    </div>
                    :
                    <div className={classes.root}>
                    <h3 className={classes.heading}>Your Credit Card details</h3>
                    {cc_details.map((card,key)=>(
                        <div className="credit-card-container" key={key}>
                            <div className="credit-card" key={key}>
                                <div className="card-bank">{card.bank_name}</div>
                                <div className="card-number">{card.card_no}</div>
                                <div className="card-validity">
                                    <span>Valid Thru</span>
                                    <span className="card-validity-month">{card.exp_month}</span>
                                    <span>/</span>
                                    <span className="card-validity-year">{card.exp_year}</span>
                                </div>
                                <div className="card-holder-name">{card.card_holder_name}</div>
                                <div className="card-chip-img"></div>
                            </div>
                            <Button variant="outlined" onClick={this.handleBtnClick} datavalue={key} value="Edit">Edit</Button>
                        </div>
                    ))}
                    </div> 
            }
            </Fragment>
        )
    }
}
CreditCardDtls.propTypes = {
    classes: PropTypes.object,
    settings: PropTypes.object.isRequired
};
export default withStyles(style)(CreditCardDtls);