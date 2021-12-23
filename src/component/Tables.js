import React, { Component } from "react";
import Base from "./Base";
import { Link } from "react-router-dom";


class Tables extends Component {
  constructor() {
    super();
    this.state = {
      count: "",
      table: [],
    };
  }

  onChangeInput = (event) => {
    this.setState({ count: event.target.value });
  };

  onCalculate = () => {
    let finalres = [];
    for (let i = 1; i <= 10; i++) {
      let result = i * this.state.count;
      let output = `${this.state.count}*${i}=${result}`;
      finalres.push(output);
    }
    this.onTableChange(finalres);
  };

  onTableChange = (finalres) => {
    this.setState({
      table: finalres,
    });
  };

  backButton = () => {
    window.history.back();
  };

  refreshPage = () => {
    window.location.reload();
  };
  render() {
    return (
      <div>
        <Base
          title="Interesting innit!?"
          description="Calculate Few more!"
          className="container p-4"
        >
          <input
            type="text"
            className="form-control px-3 d-inline-flex p-2"
            onChange={this.onChangeInput}
            value={this.state.count}
            placeholder="enter the table number "
          ></input>
          <button
            className="btn btn-outline-success"
            onClick={() => this.onCalculate()}
          >
            ☑️calculate
          </button>

          {this.state.table.map((val) => (
            <p className="text-secondary">{val}</p>
          ))}
          <button className="btn btn-outline-danger button5" onClick={this.backButton}>
          🔙
          </button>
          <button
            className="btn btn-outline-primary"
            onClick={this.refreshPage}
          >
            ✔️
          </button>
          <Link to='/geometry'>
          <button className="btn btn-outline-dark">NEXT▶</button>
          </Link>
        </Base>
      </div>
    );
  }
}

export default Tables;
