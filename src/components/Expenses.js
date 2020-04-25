import React, { Component } from "react"
import { Row, Col, Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

class Expenses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expenses: [], 
        }

        this.changeHandler =  this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.deleteRow = this.deleteRow.bind(this);

    }

    addRow(id, name, cost, category) { 
        this.setState(previousState => ({
            expenses: [...previousState.expenses, { id, name, cost, category }]
        }))
    }

    deleteRow(id) {
        return() => {
            this.setState(previousState => ({
                expenses: previousState.expenses.filter(expense => expense.id !== id)
            }))
        }
        
    }

    changeHandler(event) {
        this.setState({category: event.target.value})
    }

    submitHandler(event) {
        event.preventDefault();
        const elm = event.target;
        const id = this.state.expenses.length + 1;
        this.addRow(id, elm.elements["name"].value,
        elm.elements["cost"].value,
        elm.elements["category"].value
        );
        elm.reset();
    }


    calculateCosts() {
        let sum = 0;
        this.state.expenses.forEach((expense) => {
            sum = sum + parseFloat(expense.cost);
        })
        return sum;
    }

    render() {
        return (
            <div className="container">
                
                <form className="needs-validation" onSubmit={this.submitHandler}>
                    <Row>
                        <Col className="col-12 col-sm-6 mt-3">
                            <div className="form-check">
                                <input className="form-control" id="name" type="text" name="name" placeholder="Name of Product" required/>
                            </div>
                        </Col>
                        <Col className="col-12 col-sm-6 mt-3">
                            <div className="form-check">
                                <input className="form-control" id="cost" type="text" name="cost" placeholder="Cost of Product" required/>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col className="col-12 col-sm-6">
                            <div className="form-check">
                                <select className="form-control" value={this.state.expenses.category} id="category" onChange={this.changeHandler}>
                                    <option value="Daily Needs">Daily Needs</option>
                                    <option value="Entertainment">Entertainment</option>
                                    <option value="Grocery">Grocery</option>
                                    <option value="Clothes">Clothes</option>
                                    <option value="Online Shopping">Online Shopping</option>
                                    <option value="Other">Other</option>
                                </select>
                                
                            </div>
                        </Col>
                        <Col className="mt-3">
                            <button type="submit" className="btn btn-success rounded-circle float-right" id="add-button">
                                <i className="fa fa-plus fa-lg"></i>
                            </button>
                        </Col>
                    </Row>
                </form>
               
                <Row>
                    <div className="table-responsive">
                        <table className="table table-striped mt-5" id="tb">
                            <thead className="thead-dark text-center">
                                <tr>   
                                    <th scope="col">ID</th>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Cost</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                {this.state.expenses.map((expense, i) => {
                                    return (
                                        <tr key={i + 1} > 
                                            <th scope="row">{i + 1}</th>
                                            <td>{expense.name}</td>
                                            <td>{expense.category}</td>
                                            <td>{"$"}{expense.cost}</td>
                                            <td>
                                                <button className="btn btn-danger text-white" onClick={this.deleteRow(expense.id)}>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    );     
                                })}
                            </tbody>
                            <tfoot className="text-center">
                                <tr>
                                    <td colSpan="2" className="align-self-center"><strong>Total:</strong></td>
                                    <td colSpan="3">{"$"}{this.calculateCosts()}</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </Row>
            </div>
        );
    }
}

export default Expenses;