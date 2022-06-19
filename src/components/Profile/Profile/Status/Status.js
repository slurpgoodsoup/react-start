import React from "react";
import style from './Status.module.css'

class Status extends React.Component {
  state = {
    statusText: this.props.status,
    editMode: false,
  }
  onStatusChange = (e) => {
    this.setState({statusText:e.target.value})
  }
  editModeToggle = () => {
    this.setState ({
        editMode: !this.state.editMode
    })
    if (this.state.editMode){
      this.props.updateStatus(this.state.statusText)}
  }

  componentDidUpdate (prevProps, prevState) {
    debugger
    if(prevProps.status !== this.props.status){
    this.setState({status: this.props.status})} // в this.props.status почему-то пустая строка((( но если обновить, но в prevProps пустая, а в пропс есть все
  }

  render() {
    return (
      <div>
          {!this.state.editMode &&
        <div onDoubleClick={this.editModeToggle}>
          <p className={style.statusHolder}>{this.props.status}</p>
        </div>}
        {this.state.editMode &&
        <div>
          <input
          onChange={this.onStatusChange}
            onBlur = {this.editModeToggle}
            value={this.state.statusText}
          ></input>
        </div>}
      </div>
    );
  }
}

export default Status;
