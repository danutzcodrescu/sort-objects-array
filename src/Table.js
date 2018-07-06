import React, { Component } from "react";
import "./Table.css";
import { sort } from "./helpers/sort";

class Table extends Component {
  state = {
    sortColumn: null,
    sortOrder: "none",
    rows: [
      { title: "The Best Thing", composer: "Charlotte", duration: 250 },
      { title: "How Long", composer: "The Shitz", duration: 258 },
      { title: "Caoutchouc", composer: "Rubber Band", duration: 273 },
      {
        title: "Turn Off The Lights",
        composer: "White Virgins",
        duration: 197
      },
      { title: "Hot December", composer: "Light Bulb Matrix", duration: 224 },
      { title: "Çölde Kutup Ayisi", composer: "Kursat 9000", duration: 149 },
      { title: "Ti Ricordi Di Me", composer: "Erasmus", duration: 248 },
      { title: "Nothing", composer: "Burning Phlegm", duration: 164 },
      { title: "Slippy Fingers", composer: "Aquazul", duration: 261 },
      {
        title: "Don’t Wait Up For Me",
        composer: "Roland McBeth",
        duration: 326
      },
      { title: "Got Any Chris Rea?", composer: "Diploma", duration: 183 },
      { title: "The Cookie Crumbles", composer: "They Live", duration: 182 },
      {
        title: "Cybernetic Permutations In The Key Of A",
        composer: "Danyel Galaxy",
        duration: 203
      },
      { title: "Sell It With Your Face", composer: "The Shitz", duration: 126 },
      {
        title: "Nine Thousand Eyes",
        composer: "Robert Vanderwiel",
        duration: 132
      },
      { title: "Inward", composer: "Noah's Dark", duration: 411 },
      { title: "Şıkıdım", composer: "Tarkan Tevetoğlu", duration: 196 },
      { title: "orinocco flow", composer: "enya", duration: 201 }
    ]
  };

  sort(column) {
    let sortOrder = "asc";
    if (this.state.sortColumn === column) {
      sortOrder =
        this.state.sortOrder === "asc"
          ? "desc"
          : this.state.sortOrder === "desc"
            ? "none"
            : "asc";
    }
    let rows = [...this.state.rows];
    if (sortOrder !== "none") rows = sort(this.state.rows, sortOrder, column);
    this.setState({
      sortColumn: column,
      sortOrder,
      rows
    });
  }

  render() {
    return (
      <table class="table">
        <thead>
          <tr>
            <th scope="col" onClick={() => this.sort("title")} className="w-50">
              <div className="cell">
                Title
                {this.state.sortColumn === "title" ? (
                  this.state.sortOrder === "asc" ? (
                    <i class="fas fa-arrow-up" />
                  ) : this.state.sortOrder === "desc" ? (
                    <i class="fas fa-arrow-down" />
                  ) : null
                ) : null}
              </div>
            </th>
            <th
              scope="col"
              onClick={() => this.sort("composer")}
              className="w-25"
            >
              <div className="cell">
                Composer
                {this.state.sortColumn === "composer" ? (
                  this.state.sortOrder === "asc" ? (
                    <i class="fas fa-arrow-up" />
                  ) : this.state.sortOrder === "desc" ? (
                    <i class="fas fa-arrow-down" />
                  ) : null
                ) : null}
              </div>
            </th>
            <th
              scope="col"
              onClick={() => this.sort("duration")}
              className="w-25"
            >
              <div className="cell">
                Duration
                {this.state.sortColumn === "duration" ? (
                  this.state.sortOrder === "asc" ? (
                    <i class="fas fa-arrow-up" />
                  ) : this.state.sortOrder === "desc" ? (
                    <i class="fas fa-arrow-down" />
                  ) : null
                ) : null}
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {this.state.rows.map(row => (
            <tr>
              <td>{row.title}</td>
              <td>{row.composer}</td>
              <td>{row.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;
