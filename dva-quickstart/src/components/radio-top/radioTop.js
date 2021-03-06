import React from "react";
import {Radio,Button,message} from "antd";
import {connect} from "dva"

const RadioGroup = Radio.Group;

class Radiotop extends React.Component {
  state = {
    value:"审核通过"
  }
  handleBtnClick = () => {
    console.log(this.props)
    // this.props.dispatch(routerRedux.push('/router'))
    this.props.history.push('/mytable/detail')
  }
  onChange = (e) => {
    console.log("radio checked",e.target.value);
    message.info(e.target.value);
    this.setState({
      value:e.target.value
    });
  }
  render(){
    return (
      <div style = {{marginBottom:"15px"}}>
        <RadioGroup  onChange={this.onChange} value={this.state.value}>
         {
           ["审核通过","已驳回","待审核","草稿"].map((item)=>(
             <Radio value={item} key={item}>{item}</Radio>

           ))
         }
        </RadioGroup>
        <Button onClick={this.handleBtnClick} style={{float:"right"}} type="primary" icon="plus">添加</Button>
    </div>
    );
  }
}

export default connect()(Radiotop)
